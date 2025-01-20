import { Timeline } from "@/components/ui/timeline";
import EmojiCard from "@/components/emoji-card";
export default function Main() {
  const data = [
    {
      title: "状況把握",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
            まず状況を把握することが大切です。危機の状況を把握します。
          </p>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center w-full">
              <EmojiCard emoji="🔍" hueA={340} hueB={10} index="F" />
              <h1 className="text-3xl font-bold">状況把握</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <EmojiCard emoji="🪫" hueA={340} hueB={10} index="C" />
              <h1 className="text-3xl font-bold">発電機</h1>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "非常通知",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-8">
            危機の状況を把握した次に、部下に通知して召集し、指示を出すとともに、外部(会社、消防、海上保安庁など)へも事態の状況を通報する。
          </p>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center w-full">
              <EmojiCard emoji="📢" hueA={20} hueB={40} index="G" />
              <h1 className="text-3xl font-bold">非常通知</h1>
            </div>
            <EmojiCard emoji="☎️" hueA={20} hueB={40} index="J" />
            <h1 className="text-3xl font-bold">SOS</h1>
          </div>
        </div>
      ),
    },
    {
      title: "応急処置",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-4">
            被害が拡大しないように、医薬品や水密戸などの応急処置を行います。
          </p>

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center w-full">
              <EmojiCard emoji="🔧" hueA={60} hueB={90} index="H" />
              <h1 className="text-3xl font-bold">水密戸</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <EmojiCard emoji="💊" hueA={60} hueB={90} index="E" />
              <h1 className="text-3xl font-bold">医薬品</h1>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "避難準備",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-4">
            救命艇で避難準備を行います。
          </p>

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center w-full">
              <EmojiCard emoji="🦺" hueA={80} hueB={120} index="I" />
              <h1 className="text-3xl font-bold">相手救助</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <EmojiCard emoji="🪝" hueA={80} hueB={120} index="D" />
              <h1 className="text-3xl font-bold">つり道具</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <EmojiCard emoji="🚤" hueA={80} hueB={120} index="B" />
              <h1 className="text-3xl font-bold">救命艇</h1>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "その他",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-xl font-normal mb-4">
            その他の対応を行います。
          </p>

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center w-full">
              <EmojiCard emoji="🎺" hueA={205} hueB={245} index="A" />
              <h1 className="text-3xl font-bold">音楽</h1>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return <Timeline data={data} />;
}
