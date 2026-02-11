"use client";

import { motion } from "motion/react";
import {
  Code2,
  Server,
  Brain,
  Database,
  Container,
  Globe,
  Sparkles,
  FileCode2,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import type { SkillItem, StatItem } from "@/data/fallback";

const iconMap: Record<string, React.ReactNode> = {
  nextjs: <Globe className="w-8 h-8" />,
  react: <Code2 className="w-8 h-8" />,
  typescript: <FileCode2 className="w-8 h-8" />,
  nodejs: <Server className="w-8 h-8" />,
  ai: <Brain className="w-8 h-8" />,
  mongodb: <Database className="w-8 h-8" />,
  docker: <Container className="w-8 h-8" />,
  kubernetes: <Sparkles className="w-8 h-8" />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedCounter({ value }: { value: string }) {
  return (
    <span className="text-5xl md:text-6xl font-bold font-mono gradient-text-blue">
      {value}
    </span>
  );
}

export default function BentoGridSkills({
  skills,
  stats,
}: {
  skills: SkillItem[];
  stats: StatItem[];
}) {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Skills & Experience"
          subtitle="Technologies I work with and the impact I've made."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Tech Stack Card - spans 2 cols */}
          <motion.div
            className="md:col-span-2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="h-full">
              <h3 className="font-mono text-sm text-text-secondary uppercase tracking-wider mb-6">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="text-electric-blue">
                      {iconMap[skill.icon] || <Code2 className="w-8 h-8" />}
                    </div>
                    <span className="text-xs text-text-secondary text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Stats Cards */}
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <GlassCard className="h-full flex flex-col items-center justify-center text-center py-10" glowOnHover>
                <AnimatedCounter value={stat.value} />
                <p className="text-text-secondary text-sm mt-3 font-mono">
                  {stat.label}
                </p>
                <div className="mt-4 h-0.5 w-12 bg-gradient-to-r from-electric-blue to-cyan-accent rounded-full" />
              </GlassCard>
            </motion.div>
          ))}

          {/* AI/LLM Feature Card - spans 2 cols */}
          <motion.div
            className="md:col-span-2 lg:col-span-1"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <GlassCard className="h-full relative overflow-hidden" glowOnHover>
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-cyber-purple/5" />
              <div className="relative z-10">
                <Brain className="w-10 h-10 text-cyber-purple mb-4" />
                <h3 className="font-mono text-lg font-bold mb-2">
                  AI / LLM Integration
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Building intelligent applications powered by Large Language
                  Models. From prompt engineering to production-ready AI
                  pipelines.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
