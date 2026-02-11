"use client";

interface MarqueeTextProps {
  text: string;
  className?: string;
  speed?: "slow" | "normal" | "fast";
}

export default function MarqueeText({
  text,
  className = "",
  speed = "normal",
}: MarqueeTextProps) {
  const speedMap = {
    slow: "30s",
    normal: "20s",
    fast: "12s",
  };

  const repeated = `${text} \u00A0\u00A0\u00A0 `.repeat(10);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-block animate-marquee"
        style={{ animationDuration: speedMap[speed] }}
      >
        <span className="text-6xl md:text-8xl font-bold font-mono text-white/5 select-none">
          {repeated}
        </span>
      </div>
    </div>
  );
}
