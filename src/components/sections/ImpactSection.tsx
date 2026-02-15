"use client";

import { motion } from "motion/react";
import type { StatItem } from "@/data/fallback";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ImpactSection({ stats }: { stats: StatItem[] }) {
  return (
    <section className="pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="h-full"
            >
              <div className="glass rounded-2xl p-8 h-full min-h-[200px] flex flex-col items-center justify-center text-center glass-hover hover:glow-blue transition-all duration-300">
                <span className="text-5xl md:text-6xl font-bold font-mono gradient-text-blue">
                  {stat.value}
                </span>
                <p className="text-text-secondary text-sm mt-4 font-mono">
                  {stat.label}
                </p>
                <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-electric-blue to-cyan-accent rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
