"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Rocket, TrendingUp, Mic } from "lucide-react";
import type { StatItem } from "@/data/fallback";

function CountUp({ value, className }: { value: string; className: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}

const cardStyles = [
  {
    icon: Rocket,
    gradient: "from-electric-blue to-cyan-accent",
    textGradient:
      "bg-gradient-to-br from-electric-blue to-cyan-accent bg-clip-text text-transparent",
    glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]",
    border: "hover:border-electric-blue/30",
    iconBg: "bg-gradient-to-br from-electric-blue/20 to-cyan-accent/10",
    iconRing: "ring-1 ring-electric-blue/20",
    iconColor: "text-electric-blue",
  },
  {
    icon: TrendingUp,
    gradient: "from-cyber-purple to-purple-accent",
    textGradient:
      "bg-gradient-to-br from-cyber-purple to-purple-accent bg-clip-text text-transparent",
    glow: "hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]",
    border: "hover:border-cyber-purple/30",
    iconBg: "bg-gradient-to-br from-cyber-purple/20 to-purple-accent/10",
    iconRing: "ring-1 ring-cyber-purple/20",
    iconColor: "text-cyber-purple",
  },
  {
    icon: Mic,
    gradient: "from-cyan-accent to-electric-blue",
    textGradient:
      "bg-gradient-to-br from-cyan-accent to-electric-blue bg-clip-text text-transparent",
    glow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]",
    border: "hover:border-cyan-accent/30",
    iconBg: "bg-gradient-to-br from-cyan-accent/20 to-electric-blue/10",
    iconRing: "ring-1 ring-cyan-accent/20",
    iconColor: "text-cyan-accent",
  },
];

export default function ImpactSection({ stats }: { stats: StatItem[] }) {
  return (
    <section className="pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const style = cardStyles[index % cardStyles.length];
            const Icon = style.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="h-full"
              >
                <div
                  className={`glass rounded-2xl p-8 h-full min-h-[220px] flex flex-col items-center justify-center text-center transition-all duration-500 cursor-default border border-transparent ${style.glow} ${style.border}`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${style.iconBg} ${style.iconRing} flex items-center justify-center mb-5`}
                  >
                    <Icon className={`w-7 h-7 ${style.iconColor}`} />
                  </div>

                  {/* Value — animated count-up */}
                  <CountUp
                    value={stat.value}
                    className={`text-5xl md:text-6xl font-bold font-mono ${style.textGradient}`}
                  />

                  {/* Label */}
                  <p className="text-text-secondary text-sm mt-4 font-mono">
                    {stat.label}
                  </p>

                  {/* Gradient line */}
                  <div
                    className={`mt-4 h-0.5 w-0 group-hover:w-12 bg-gradient-to-r ${style.gradient} rounded-full transition-all duration-500`}
                  />
                  <div
                    className={`mt-0 h-0.5 w-12 bg-gradient-to-r ${style.gradient} rounded-full opacity-40`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
