"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Youtube, Instagram } from "lucide-react";
import MarqueeText from "@/components/ui/MarqueeText";
import { fallbackData } from "@/data/fallback";

const socialLinks = [
  {
    icon: Linkedin,
    href: fallbackData.social.linkedin,
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: fallbackData.social.github,
    label: "GitHub",
  },
  {
    icon: Youtube,
    href: fallbackData.social.youtube,
    label: "YouTube",
  },
  {
    icon: Instagram,
    href: fallbackData.social.instagram,
    label: "Instagram",
  },
];

export default function SocialFooter() {
  return (
    <footer id="footer" className="pt-20 pb-8 border-t border-white/5">
      {/* Marquee */}
      <MarqueeText text="Let's Chat" speed="slow" className="mb-16" />

      {/* Social Icons */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex items-center justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-electric-blue transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon className="w-7 h-7" />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom */}
        <div className="text-center text-text-secondary text-xs font-mono">
          <p className="mb-1">
            Built with Next.js, Tailwind CSS & Contentstack
          </p>
          <p>&copy; {new Date().getFullYear()} Altaf Shaikh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
