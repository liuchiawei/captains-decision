import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

export default function EmojiCard( data: CardProps) {
  return (
    <div style={container}>
        <Card emoji={data.emoji} hueA={data.hueA} hueB={data.hueB} key={data.emoji} index={data.index} />
    </div>
  );
}

interface CardProps {
  emoji: string;
  hueA: number;
  hueB: number;
  index: string;
}

function Card({ emoji, hueA, hueB, index }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        <div className="relative z-10 drop-shadow-md">
          {emoji}
        </div>
        <h1 className="text-[260px] text-slate-200 font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none">{index}</h1>
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  margin: "100px auto",
  maxWidth: 500,
  paddingBottom: 50,
  width: "100%",
};

const cardContainer: React.CSSProperties = {
  overflowY: "hidden",
  overflowX: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  marginBottom: -120,
  height: 450,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  fontSize: 144,
  width: 240,
  height: 320,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#f7f7f7",
  boxShadow:
    "0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 10px hsl(0deg 0% 0% / 0.075), 0 0 18px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
  userSelect: "none",
  position: "absolute",
};

