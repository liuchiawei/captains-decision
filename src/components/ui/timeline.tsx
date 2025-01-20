"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 flex flex-col items-center md:items-start gap-8">
        <h2 className="text-6xl font-bold md:text-8xl mb-4 text-black dark:text-white max-w-4xl select-none drop-shadow-lg">
          船長の決断
        </h2>
        <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base max-w-sm md:max-w-lg text-justify">
          あなたは旅客船「サンシャイン号」の船長です。
          <br />
          大阪南港を出発し、土佐湾を過ぎ、まもなく日が暮れようとしています。
          海は波がなく、穏やかに航海しています。
          ところが濃霧が発生し、どんどん視界が悪化してきました。
          レーダーに船の影が映ったとき…
          すでに回避する適切な時機を逸し、衝突をしてしまいました。
          <br />
          あなたは、直ちに船長として適切な処置をとる必要があります。
          <br />
          船長として素早く決断して下さい。
        </p>
        <div className="flex flex-col md:flex-row items-center text-slate-700 dark:text-slate-300 md:text-lg max-w-sm md:max-w-lg text-justify md:gap-4 gap-2">
          <h3>リュウ チャーウェイ</h3>
          <h3>リー ホイトウ</h3>
          <h3>郁靖ウェン</h3>
          <h3>藍方</h3>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-slate-700 dark:text-slate-300">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-slate-700 dark:text-slate-300">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-200 dark:via-slate-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
