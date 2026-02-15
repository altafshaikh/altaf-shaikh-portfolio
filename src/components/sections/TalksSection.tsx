"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Talk } from "@/data/fallback";

const typeColors: Record<string, string> = {
  workshop: "text-electric-blue border-electric-blue/20 bg-electric-blue/10",
  webinar: "text-cyber-purple border-cyber-purple/20 bg-cyber-purple/10",
  mentoring: "text-cyan-accent border-cyan-accent/20 bg-cyan-accent/10",
};

function VideoCard({ talk, index }: { talk: Talk; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
        href={talk.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div className="glass rounded-2xl overflow-hidden glass-hover transition-transform duration-300 group-hover:-translate-y-1">
          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden">
            <img
              src={talk.thumbnail}
              alt={talk.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
                <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
              </div>
            </div>

            {/* Type badge */}
            <div className="absolute top-3 left-3">
              <span
                className={`text-xs font-mono px-3 py-1 rounded-full border backdrop-blur-sm ${
                  typeColors[talk.type] || "text-white border-white/20 bg-white/10"
                }`}
              >
                {talk.type}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="p-5">
            <h3 className="font-mono text-sm md:text-base font-bold leading-snug group-hover:text-electric-blue transition-colors duration-300 line-clamp-2">
              {talk.title}
            </h3>
            <p className="text-text-secondary text-xs mt-2 leading-relaxed line-clamp-2">
              {talk.description}
            </p>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function TalksSection({ talks }: { talks: Talk[] }) {
  return (
    <section id="talks" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="My Talks & Workshops"
          subtitle="Workshops, webinars, and mentoring sessions on modern development."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {talks.map((talk, index) => (
            <VideoCard key={talk.title} talk={talk} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
