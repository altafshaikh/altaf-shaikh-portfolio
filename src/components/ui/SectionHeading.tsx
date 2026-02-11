"use client";

import { motion } from "motion/react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-12 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-mono text-3xl md:text-4xl font-bold gradient-text inline-block">
        {title}
      </h2>
      <div className="mt-3 h-1 w-16 bg-gradient-to-r from-electric-blue to-cyber-purple rounded-full" />
      {subtitle && (
        <p className="mt-4 text-text-secondary text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
