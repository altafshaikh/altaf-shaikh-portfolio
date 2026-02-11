"use client";

import { motion } from "motion/react";
import { Play, ExternalLink } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Talk } from "@/data/fallback";

const typeColors: Record<string, string> = {
  workshop: "text-electric-blue border-electric-blue/20 bg-electric-blue/10",
  webinar: "text-cyber-purple border-cyber-purple/20 bg-cyber-purple/10",
  mentoring: "text-cyan-accent border-cyan-accent/20 bg-cyan-accent/10",
};

function FeaturedTalk({ talk }: { talk: Talk }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <a
        href={talk.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10">
          {/* Thumbnail */}
          <img
            src={talk.thumbnail}
            alt={talk.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-20 h-20 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.15 }}
            >
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </motion.div>
          </div>
          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <span
              className={`text-xs font-mono px-3 py-1 rounded-full border ${
                typeColors[talk.type] || "text-white border-white/20"
              } inline-block mb-3`}
            >
              {talk.type}
            </span>
            <h3 className="font-mono text-xl md:text-2xl font-bold text-white">
              {talk.title}
            </h3>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

function TalkCard({
  talk,
  index,
}: {
  talk: Talk;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
        href={talk.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <GlassCard className="flex flex-col md:flex-row gap-4 items-start group-hover:-translate-y-1 transition-transform duration-300">
          <div className="flex-1">
            <span
              className={`text-xs font-mono px-3 py-1 rounded-full border ${
                typeColors[talk.type] || "text-white border-white/20"
              } inline-block mb-3`}
            >
              {talk.type}
            </span>
            <h3 className="font-mono text-lg font-bold mb-2 group-hover:text-electric-blue transition-colors">
              {talk.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {talk.description}
            </p>
          </div>
          <div className="text-text-secondary group-hover:text-electric-blue transition-colors shrink-0">
            <ExternalLink className="w-5 h-5" />
          </div>
        </GlassCard>
      </a>
    </motion.div>
  );
}

export default function TalksSection({ talks }: { talks: Talk[] }) {
  const featured = talks.find((t) => t.isFeatured);
  const others = talks.filter((t) => !t.isFeatured);

  return (
    <section id="talks" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="My Talks"
          subtitle="Workshops, webinars, and mentoring sessions on modern development."
        />

        {featured && <FeaturedTalk talk={featured} />}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {others.map((talk, index) => (
            <TalkCard key={talk.title} talk={talk} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
