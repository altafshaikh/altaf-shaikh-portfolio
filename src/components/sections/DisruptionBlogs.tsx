"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import type { BlogPost } from "@/data/fallback";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function BlogCard({ blog, index }: { blog: BlogPost; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="h-full"
    >
      <a
        href={blog.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group h-full"
      >
        <GlassCard className="h-full relative overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 flex flex-col">
          {/* Tag */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/20">
              {blog.tag}
            </span>
            <span className="text-xs text-text-secondary font-mono">
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-mono text-lg font-bold mb-3 group-hover:text-electric-blue transition-colors duration-300">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
            {blog.excerpt}
          </p>

          {/* Read More - Glitch reveal */}
          <div className="relative overflow-hidden mt-auto">
            <div className="flex items-center gap-2 text-sm font-mono text-electric-blue glitch-reveal">
              <span>Read More</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Gradient border bottom on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-blue to-cyber-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </GlassCard>
      </a>
    </motion.div>
  );
}

export default function DisruptionBlogs({ blogs }: { blogs: BlogPost[] }) {
  return (
    <section id="blog" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="The Disruption"
          subtitle="Insights on AI, modern development, and the ever-evolving tech landscape."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.title} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
