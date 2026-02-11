"use client";

import { motion } from "motion/react";
import { type ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "filled" | "outline";
  className?: string;
}

export default function GradientButton({
  children,
  href,
  onClick,
  variant = "filled",
  className = "",
}: GradientButtonProps) {
  const baseClasses =
    "relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer";

  const filledClasses =
    "bg-gradient-to-r from-electric-blue to-cyber-purple text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]";

  const outlineClasses =
    "border border-white/20 text-white hover:border-electric-blue hover:text-electric-blue hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]";

  const classes = `${baseClasses} ${variant === "filled" ? filledClasses : outlineClasses} ${className}`;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {children}
    </MotionComponent>
  );
}
