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

function LineNum({ n }: { n: number }) {
  return (
    <span className="select-none text-white/15 w-8 inline-block text-right mr-4 text-xs">
      {n}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: highlight pills */}
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

          {/* Right: terminal-style code block */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] overflow-hidden shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs font-mono text-white/30">
                  about-altaf.ts
                </span>
              </div>

              {/* Code content */}
              <div className="p-5 font-mono text-sm leading-7 overflow-x-auto">
                {/* Line 1: comment */}
                <div>
                  <LineNum n={1} />
                  <span className="text-white/30">
                    {"// "}Who am I?
                  </span>
                </div>

                {/* Line 2: blank */}
                <div>
                  <LineNum n={2} />
                </div>

                {/* Line 3: const */}
                <div>
                  <LineNum n={3} />
                  <span className="text-cyber-purple">const</span>{" "}
                  <span className="text-electric-blue">altaf</span>{" "}
                  <span className="text-white/50">=</span>{" "}
                  <span className="text-white/50">{"{"}</span>
                </div>

                {/* Line 4: role */}
                <div>
                  <LineNum n={4} />
                  <span className="text-white/20 ml-8">{"  "}</span>
                  <span className="text-cyan-accent">role</span>
                  <span className="text-white/40">:</span>{" "}
                  <span className="text-[#a5d6a7]">
                    &quot;Software Development Engineer&quot;
                  </span>
                  <span className="text-white/40">,</span>
                </div>

                {/* Line 5: passion */}
                <div>
                  <LineNum n={5} />
                  <span className="text-white/20 ml-8">{"  "}</span>
                  <span className="text-cyan-accent">passion</span>
                  <span className="text-white/40">:</span>{" "}
                  <span className="text-white/50">[</span>
                  <span className="text-[#a5d6a7]">&quot;clean code&quot;</span>
                  <span className="text-white/40">, </span>
                  <span className="text-[#a5d6a7]">&quot;modern tooling&quot;</span>
                  <span className="text-white/40">, </span>
                  <span className="text-[#a5d6a7]">&quot;dev education&quot;</span>
                  <span className="text-white/50">]</span>
                  <span className="text-white/40">,</span>
                </div>

                {/* Line 6: experience */}
                <div>
                  <LineNum n={6} />
                  <span className="text-white/20 ml-8">{"  "}</span>
                  <span className="text-cyan-accent">experience</span>
                  <span className="text-white/40">:</span>{" "}
                  <span className="text-[#f9a825]">5</span>
                  <span className="text-white/40">,</span>{" "}
                  <span className="text-white/30">
                    {"// "}years shipping production apps
                  </span>
                </div>

                {/* Line 7: builds */}
                <div>
                  <LineNum n={7} />
                  <span className="text-white/20 ml-8">{"  "}</span>
                  <span className="text-cyan-accent">builds</span>
                  <span className="text-white/40">:</span>{" "}
                  <span className="text-[#a5d6a7]">
                    &quot;REST APIs → Microservices → AI Frontends&quot;
                  </span>
                  <span className="text-white/40">,</span>
                </div>

                {/* Line 8: students */}
                <div>
                  <LineNum n={8} />
                  <span className="text-white/20 ml-8">{"  "}</span>
                  <span className="text-cyan-accent">studentsImpacted</span>
                  <span className="text-white/40">:</span>{" "}
                  <span className="text-[#f9a825]">500</span>
                  <span className="text-white/40">,</span>
                </div>

                {/* Line 9: talks */}
                <div>
                  <LineNum n={9} />
                  <span className="text-white/20 ml-8">{"  "}</span>
                  <span className="text-cyan-accent">publicTalks</span>
                  <span className="text-white/40">:</span>{" "}
                  <span className="text-[#f9a825]">10</span>
                  <span className="text-white/40">,</span>
                </div>

                {/* Line 10: motto */}
                <div>
                  <LineNum n={10} />
                  <span className="text-white/20 ml-8">{"  "}</span>
                  <span className="text-cyan-accent">motto</span>
                  <span className="text-white/40">:</span>{" "}
                  <span className="text-[#a5d6a7]">
                    &quot;Great engineers share knowledge, not hoard it.&quot;
                  </span>
                </div>

                {/* Line 11: closing brace */}
                <div>
                  <LineNum n={11} />
                  <span className="text-white/50">{"}"}</span>
                  <span className="text-white/40">;</span>
                </div>

                {/* Line 12: blank */}
                <div>
                  <LineNum n={12} />
                </div>

                {/* Line 13: export */}
                <div>
                  <LineNum n={13} />
                  <span className="text-cyber-purple">export default</span>{" "}
                  <span className="text-electric-blue">altaf</span>
                  <span className="text-white/40">;</span>
                  <motion.span
                    className="inline-block w-2 h-5 bg-electric-blue/70 ml-0.5 align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
