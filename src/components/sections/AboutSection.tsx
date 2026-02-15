"use client";

import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="glass rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-text-secondary text-sm font-mono uppercase tracking-wider mb-4">
            About Me
          </p>
          <h2 className="font-mono text-2xl md:text-3xl font-bold leading-snug mb-6">
            <span className="gradient-text">
              I build things for the web &amp; teach others to do the same.
            </span>
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              I&apos;m a Software Development Engineer who thrives at the
              intersection of clean code, modern tooling, and developer
              education. With 5+ years of hands-on experience shipping
              production apps, I&apos;ve built everything from REST APIs and
              microservices to AI-powered frontends.
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
    </section>
  );
}
