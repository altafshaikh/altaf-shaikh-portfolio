"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "motion/react";

interface Persona {
  src: string;
  label: string;
}

const personas: Persona[] = [
  { src: "/images/altaf-profile.png", label: "Speaker" },
  { src: "/images/altaf-educator.png", label: "Educator" },
  { src: "/images/altaf-coder.png", label: "Coder" },
];

export default function CoinFlip() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const controls = useAnimation();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const spin = useCallback(async () => {
    if (isSpinning) return;
    setIsSpinning(true);

    const nextIndex = (currentIndex + 1) % personas.length;

    // Phase 1: spin from 0° → 90° (edge-on, invisible)
    await controls.start({
      rotateY: 90,
      transition: { duration: 0.35, ease: "easeIn" },
    });

    // Swap image at the midpoint (hidden behind the edge)
    setCurrentIndex(nextIndex);

    // Phase 2: spin from -90° → 0° (reveal new face)
    controls.set({ rotateY: -90 });
    await controls.start({
      rotateY: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    });

    setIsSpinning(false);
  }, [isSpinning, currentIndex, controls]);

  // Auto-spin every 4 seconds
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      spin();
    }, 4000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, isSpinning, spin]);

  const current = personas[currentIndex];

  return (
    <div className="relative flex flex-col items-center gap-5">
      {/* Glass ring frame + coin */}
      <div className="rounded-full p-[6px] glass" style={{ perspective: 800 }}>
        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-dark-surface cursor-pointer select-none ring-1 ring-white/5"
          animate={controls}
          style={{ transformStyle: "preserve-3d" }}
          onClick={spin}
          whileHover={{ scale: 1.03 }}
          title="Click to spin"
        >
          <Image
            src={current.src}
            alt={`Altaf Shaikh - ${current.label}`}
            width={384}
            height={384}
            className="w-full h-full object-cover object-top"
            priority
            draggable={false}
          />
        </motion.div>
      </div>

      {/* Glass pill: label + dots */}
      <div className="glass rounded-full px-5 py-2.5 flex items-center gap-4">
        {/* Persona label */}
        <motion.div
          key={current.label}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-1.5"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-text-secondary">
            The
          </span>
          <span className="text-sm font-mono font-bold gradient-text uppercase tracking-wider">
            {current.label}
          </span>
        </motion.div>

        {/* Divider */}
        <div className="w-px h-4 bg-white/10" />

        {/* Dot indicators */}
        <div className="flex gap-1.5">
          {personas.map((p, i) => (
            <button
              key={p.label}
              onClick={() => {
                if (i !== currentIndex && !isSpinning) {
                  const jumpTo = async () => {
                    setIsSpinning(true);
                    await controls.start({
                      rotateY: 90,
                      transition: { duration: 0.35, ease: "easeIn" },
                    });
                    setCurrentIndex(i);
                    controls.set({ rotateY: -90 });
                    await controls.start({
                      rotateY: 0,
                      transition: { duration: 0.35, ease: "easeOut" },
                    });
                    setIsSpinning(false);
                  };
                  jumpTo();
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-electric-blue w-5"
                  : "bg-white/20 hover:bg-white/40 w-2"
              }`}
              aria-label={`Show ${p.label}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
