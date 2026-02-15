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
import SectionHeading from "@/components/ui/SectionHeading";
import type { SkillItem } from "@/data/fallback";

const iconMap: Record<string, React.ReactNode> = {
  nextjs: <Globe className="w-10 h-10" />,
  react: <Code2 className="w-10 h-10" />,
  typescript: <FileCode2 className="w-10 h-10" />,
  nodejs: <Server className="w-10 h-10" />,
  ai: <Brain className="w-10 h-10" />,
  mongodb: <Database className="w-10 h-10" />,
  docker: <Container className="w-10 h-10" />,
  kubernetes: <Sparkles className="w-10 h-10" />,
};

function SkillPill({ skill }: { skill: SkillItem }) {
  return (
    <div className="flex flex-col items-center gap-3 px-8 py-5 mx-3 rounded-2xl glass glass-hover min-w-[120px] select-none">
      <div className="text-electric-blue">
        {iconMap[skill.icon] || <Code2 className="w-10 h-10" />}
      </div>
      <span className="text-sm font-mono text-text-secondary whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

export default function BentoGridSkills({
  skills,
}: {
  skills: SkillItem[];
}) {
  // Duplicate the list so the marquee loops seamlessly
  const doubled = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies I work with every day."
        />

        {/* Horizontal auto-scrolling marquee */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="tech-marquee-track py-4">
            {doubled.map((skill, i) => (
              <SkillPill key={`${skill.name}-${i}`} skill={skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
