"use client";

import { motion } from "motion/react";
import GradientButton from "@/components/ui/GradientButton";
import CoinFlip from "@/components/ui/CoinFlip";
import type { HeroData } from "@/data/fallback";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HeroSection({ data }: { data: HeroData }) {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Coin-flip Profile */}
        <motion.div
          className="flex justify-center md:justify-start order-1 md:order-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="aura-glow">
              <CoinFlip />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="order-2 md:order-2 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-text-secondary text-sm font-mono mb-4 tracking-wider uppercase"
            variants={itemVariants}
          >
            SDE &bull; Speaker &bull; Educator
          </motion.p>

          <motion.h1
            className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-6"
            variants={itemVariants}
          >
            <span className="gradient-text">{data.headline}</span>
          </motion.h1>

          <motion.p
            className="text-text-secondary text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto md:mx-0"
            variants={itemVariants}
          >
            {data.subHeadline}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <GradientButton href={data.ctaPrimary.link} variant="filled">
              {data.ctaPrimary.text}
            </GradientButton>
            <GradientButton href={data.ctaSecondary.link} variant="outline">
              {data.ctaSecondary.text}
            </GradientButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
