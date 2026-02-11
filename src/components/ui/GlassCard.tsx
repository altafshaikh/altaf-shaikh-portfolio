"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { type ReactNode } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  glowOnHover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hoverScale = 1.02,
  glowOnHover = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 transition-colors duration-300 glass-hover ${
        glowOnHover ? "hover:glow-blue" : ""
      } ${className}`}
      whileHover={{ scale: hoverScale }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
