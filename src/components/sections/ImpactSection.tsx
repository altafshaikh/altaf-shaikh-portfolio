"use client";

import { motion } from "motion/react";
import { TrendingUp, Users, Mic } from "lucide-react";
import type { StatItem } from "@/data/fallback";

const cardStyles = [
  {
    icon: TrendingUp,
    gradient: "from-electric-blue to-cyan-accent",
    textGradient:
      "bg-gradient-to-br from-electric-blue to-cyan-accent bg-clip-text text-transparent",
    glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]",
    border: "hover:border-electric-blue/30",
    iconBg: "bg-electric-blue/10",
    iconColor: "text-electric-blue",
  },
  {
    icon: Users,
    gradient: "from-cyber-purple to-purple-accent",
    textGradient:
      "bg-gradient-to-br from-cyber-purple to-purple-accent bg-clip-text text-transparent",
    glow: "hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]",
    border: "hover:border-cyber-purple/30",
    iconBg: "bg-cyber-purple/10",
    iconColor: "text-cyber-purple",
  },
  {
    icon: Mic,
    gradient: "from-cyan-accent to-electric-blue",
    textGradient:
      "bg-gradient-to-br from-cyan-accent to-electric-blue bg-clip-text text-transparent",
    glow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]",
    border: "hover:border-cyan-accent/30",
    iconBg: "bg-cyan-accent/10",
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
                    className={`w-12 h-12 rounded-xl ${style.iconBg} flex items-center justify-center mb-5`}
                  >
                    <Icon className={`w-6 h-6 ${style.iconColor}`} />
                  </div>

                  {/* Value */}
                  <span
                    className={`text-5xl md:text-6xl font-bold font-mono ${style.textGradient}`}
                  >
                    {stat.value}
                  </span>

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
