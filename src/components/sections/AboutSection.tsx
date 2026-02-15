"use client";

import { motion } from "motion/react";
import { Code2, Mic, GraduationCap, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    label: "Full-Stack Dev",
    color: "from-electric-blue to-cyan-accent",
    glow: "group-hover:shadow-[0_0_24px_rgba(59,130,246,0.4)]",
  },
  {
    icon: Mic,
    label: "Public Speaker",
    color: "from-cyber-purple to-purple-accent",
    glow: "group-hover:shadow-[0_0_24px_rgba(139,92,246,0.4)]",
  },
  {
    icon: GraduationCap,
    label: "Educator",
    color: "from-cyan-accent to-electric-blue",
    glow: "group-hover:shadow-[0_0_24px_rgba(6,182,212,0.4)]",
  },
  {
    icon: Rocket,
    label: "Open Source",
    color: "from-purple-accent to-cyber-purple",
    glow: "group-hover:shadow-[0_0_24px_rgba(168,85,247,0.4)]",
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left: highlight pills - 2 cols */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className={`group glass rounded-2xl p-5 flex flex-col items-center gap-3 text-center cursor-default transition-all duration-300 ${h.glow}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${h.color} flex items-center justify-center`}
                >
                  <h.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-mono text-text-secondary font-medium">
                  {h.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: text content - 3 cols */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-text-secondary text-sm font-mono uppercase tracking-wider mb-3">
              About Me
            </p>
            <h2 className="font-mono text-2xl md:text-3xl font-bold leading-snug mb-6">
              <span className="gradient-text">
                I build things for the web
              </span>{" "}
              <span className="text-white/90">&amp; teach others to do the same.</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed text-sm md:text-base">
              <p>
                I&apos;m a Software Development Engineer who thrives at the
                intersection of{" "}
                <span className="text-electric-blue font-medium">clean code</span>,{" "}
                <span className="text-cyber-purple font-medium">modern tooling</span>, and{" "}
                <span className="text-cyan-accent font-medium">developer education</span>.
                With 5+ years of hands-on experience shipping production apps,
                I&apos;ve built everything from REST APIs and microservices to
                AI-powered frontends.
              </p>
              <p>
                Beyond the terminal, I&apos;m a public speaker and educator
                &mdash; I&apos;ve mentored 500+ students, delivered 10+ talks
                and workshops, and contributed to the open-source community. I
                believe great engineers are made by sharing knowledge, not
                hoarding it.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
