"use client";

import { motion } from "motion/react";
import {
  Terminal,
  Mic2,
  GraduationCap,
  Sparkles,
  Files,
  Search,
  GitBranch,
  Blocks,
  Settings,
  ChevronRight,
  FileCode2,
  FileJson,
  File,
  GitCommitHorizontal,
  CircleCheck,
  Clock,
  Play,
  CheckCircle2,
  Circle,
} from "lucide-react";

/* ── Roles for the terminal panel ── */
const roles = [
  {
    icon: Terminal,
    label: "Programmer",
    detail: "TypeScript, Node.js, React, Next.js",
    accent: "border-electric-blue",
    dot: "bg-electric-blue",
    dotGlow: "shadow-[0_0_6px_rgba(59,130,246,0.8)]",
    iconColor: "text-electric-blue",
  },
  {
    icon: Mic2,
    label: "Public Speaker",
    detail: "10+ talks, workshops & webinars",
    accent: "border-cyber-purple",
    dot: "bg-cyber-purple",
    dotGlow: "shadow-[0_0_6px_rgba(139,92,246,0.8)]",
    iconColor: "text-cyber-purple",
  },
  {
    icon: GraduationCap,
    label: "Educator",
    detail: "500+ students mentored & impacted",
    accent: "border-cyan-accent",
    dot: "bg-cyan-accent",
    dotGlow: "shadow-[0_0_6px_rgba(6,182,212,0.8)]",
    iconColor: "text-cyan-accent",
  },
  {
    icon: Sparkles,
    label: "Gen AI Explorer",
    detail: "LLMs, prompt engineering, AI pipelines",
    accent: "border-purple-accent",
    dot: "bg-purple-accent",
    dotGlow: "shadow-[0_0_6px_rgba(168,85,247,0.8)]",
    iconColor: "text-purple-accent",
  },
];

/* ── Floating background snippets ── */
const bgSnippets = [
  { text: "$ git commit -m 'ship it'", x: "2%", y: "2%", delay: 0 },
  { text: "$ npm run build ✓", x: "42%", y: "1%", delay: 1.6 },
  { text: "JIRA-1042 → In Review", x: "80%", y: "3%", delay: 3.2 },
  { text: 'console.log("hello world")', x: "32%", y: "24%", delay: 2.0 },
  { text: "POST /api/v1/users → 201", x: "72%", y: "28%", delay: 4.5 },
  { text: "db.users.find({ active: true })", x: "1%", y: "50%", delay: 1.0 },
  { text: "#deploy → production ✓", x: "44%", y: "52%", delay: 5.0 },
  { text: "$ pip install langchain", x: "68%", y: "68%", delay: 2.8 },
  { text: "Sprint 12 — 8/10 done", x: "6%", y: "72%", delay: 3.8 },
  { text: "GET /health → 200 OK", x: "3%", y: "92%", delay: 4.0 },
  { text: "npx next dev --turbopack", x: "38%", y: "95%", delay: 0.8 },
  { text: "brew install node@22", x: "76%", y: "93%", delay: 5.5 },
];

/* ── Git log entries ── */
const gitLog = [
  { hash: "a3f1c9d", msg: "feat: add about section", time: "2h ago", color: "text-[#28c840]" },
  { hash: "e7b42a1", msg: "fix: resolve hydration error", time: "5h ago", color: "text-electric-blue" },
  { hash: "c0d8f3e", msg: "chore: update dependencies", time: "1d ago", color: "text-cyber-purple" },
  { hash: "9a2e5b7", msg: "feat: coin-flip hero image", time: "2d ago", color: "text-cyan-accent" },
];

/* ── npm scripts ── */
const npmScripts = [
  { name: "dev", cmd: "next dev --turbopack", status: "running", icon: Play },
  { name: "build", cmd: "next build", status: "passed", icon: CheckCircle2 },
  { name: "lint", cmd: "next lint", status: "passed", icon: CheckCircle2 },
  { name: "test", cmd: "jest --coverage", status: "pending", icon: Circle },
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
    <section className="py-24 px-6 relative">
      {/* ── Floating dev background snippets ── */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {bgSnippets.map((s) => (
          <motion.span
            key={s.text}
            className="absolute font-mono text-sm pointer-events-none select-none whitespace-nowrap"
            style={{ left: s.x, top: s.y, color: "rgba(255,255,255,0.08)" }}
            animate={{
              y: [0, -8, 0],
              color: [
                "rgba(255,255,255,0.08)",
                "rgba(255,255,255,0.18)",
                "rgba(255,255,255,0.08)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut" as const,
            }}
          >
            {s.text}
          </motion.span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* ══════════ Left: Terminal (3 cols) ══════════ */}
          <motion.div
            className="lg:col-span-3 flex flex-col gap-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Terminal header */}
            <div className="rounded-t-xl border border-white/10 border-b-0 bg-[#0d0d0d] px-4 py-2.5 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-[10px] font-mono text-white/25">
                ~/altaf — zsh
              </span>
            </div>

            {/* Terminal body */}
            <div className="rounded-b-xl border border-white/10 bg-[#0d0d0d] p-4 space-y-1">
              <div className="font-mono text-xs text-white/30 mb-3">
                <span className="text-[#28c840]">altaf</span>
                <span className="text-white/20">@</span>
                <span className="text-cyan-accent">portfolio</span>
                <span className="text-white/20"> ~ % </span>
                <span className="text-white/50">whoami --roles</span>
              </div>

              {roles.map((role, i) => (
                <motion.div
                  key={role.label}
                  className={`group relative flex items-center gap-3 px-3 py-3 rounded-lg border-l-2 ${role.accent} bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300 cursor-default`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className={`w-2 h-2 rounded-full ${role.dot} ${role.dotGlow} shrink-0`}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  />
                  <role.icon className={`w-4 h-4 ${role.iconColor} shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-sm text-white/90 font-medium">
                      {role.label}
                    </span>
                    <p className="font-mono text-[10px] text-white/30 mt-0.5 truncate group-hover:text-white/50 transition-colors duration-300">
                      {role.detail}
                    </p>
                  </div>
                </motion.div>
              ))}

              <div className="font-mono text-xs text-white/30 pt-2">
                <span className="text-[#28c840]">altaf</span>
                <span className="text-white/20">@</span>
                <span className="text-cyan-accent">portfolio</span>
                <span className="text-white/20"> ~ % </span>
                <motion.span
                  className="inline-block w-2 h-3.5 bg-white/50 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
            </div>
          </motion.div>

          {/* ══════════ Center: VS Code Editor (6 cols) ══════════ */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="rounded-2xl border border-white/10 bg-[#1e1e1e] overflow-hidden shadow-2xl">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-3 py-2 bg-[#181818] border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="flex-1 text-center text-[10px] font-mono text-white/20">
                  about-altaf.ts — altaf-portfolio
                </span>
              </div>

              <div className="flex">
                {/* Activity bar */}
                <div className="hidden sm:flex flex-col items-center w-10 bg-[#181818] border-r border-white/5 py-3 gap-4 shrink-0">
                  <Files className="w-4 h-4 text-white/60" />
                  <Search className="w-4 h-4 text-white/20" />
                  <GitBranch className="w-4 h-4 text-white/20" />
                  <Blocks className="w-4 h-4 text-white/20" />
                  <div className="flex-1" />
                  <Settings className="w-4 h-4 text-white/20" />
                </div>

                {/* Editor area */}
                <div className="flex-1 min-w-0 flex flex-col">
                  {/* Tab bar */}
                  <div className="flex items-center border-b border-white/5 bg-[#1e1e1e]">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0d0d0d] border-r border-white/5 border-b-2 border-b-electric-blue">
                      <FileCode2 className="w-3 h-3 text-electric-blue" />
                      <span className="text-[11px] font-mono text-white/70">about-altaf.ts</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 border-r border-white/5">
                      <FileCode2 className="w-3 h-3 text-white/20" />
                      <span className="text-[11px] font-mono text-white/20">skills.ts</span>
                    </div>
                  </div>

                  {/* Breadcrumb */}
                  <div className="px-4 py-1 text-[10px] font-mono text-white/20 flex items-center gap-1 border-b border-white/[0.03]">
                    <span>src</span>
                    <ChevronRight className="w-2.5 h-2.5" />
                    <span className="text-white/40">about-altaf.ts</span>
                  </div>

                  {/* Code content */}
                  <div className="p-4 font-mono text-xs md:text-[13px] leading-6 md:leading-7 overflow-x-auto bg-[#0d0d0d] flex-1">
                    <div className="whitespace-nowrap">
                      <LineNum n={1} />
                      <span className="text-white/30">{"// "}Who am I?</span>
                    </div>
                    <div className="whitespace-nowrap">
                      <LineNum n={2} />
                    </div>
                    <div className="whitespace-nowrap">
                      <LineNum n={3} />
                      <span className="text-cyber-purple">const</span>{" "}
                      <span className="text-electric-blue">altaf</span>{" "}
                      <span className="text-white/50">=</span>{" "}
                      <span className="text-white/50">{"{"}</span>
                    </div>
                    <div className="whitespace-nowrap">
                      <LineNum n={4} />
                      <span className="ml-6" />
                      <span className="text-cyan-accent">role</span>
                      <span className="text-white/40">: </span>
                      <span className="text-[#a5d6a7]">&quot;Software Development Engineer&quot;</span>
                      <span className="text-white/40">,</span>
                    </div>
                    <div className="whitespace-nowrap">
                      <LineNum n={5} />
                      <span className="ml-6" />
                      <span className="text-cyan-accent">passion</span>
                      <span className="text-white/40">: </span>
                      <span className="text-white/50">[</span>
                      <span className="text-[#a5d6a7]">&quot;clean code&quot;</span>
                      <span className="text-white/40">, </span>
                      <span className="text-[#a5d6a7]">&quot;modern tooling&quot;</span>
                      <span className="text-white/40">, </span>
                      <span className="text-[#a5d6a7]">&quot;dev education&quot;</span>
                      <span className="text-white/50">]</span>
                      <span className="text-white/40">,</span>
                    </div>
                    <div className="whitespace-nowrap">
                      <LineNum n={6} />
                      <span className="ml-6" />
                      <span className="text-cyan-accent">experience</span>
                      <span className="text-white/40">: </span>
                      <span className="text-[#f9a825]">5</span>
                      <span className="text-white/40">,</span>
                      <span className="text-white/25"> {"// "}years shipping production apps</span>
                    </div>
                    <div className="whitespace-nowrap">
                      <LineNum n={7} />
                      <span className="ml-6" />
                      <span className="text-cyan-accent">builds</span>
                      <span className="text-white/40">: </span>
                      <span className="text-[#a5d6a7]">&quot;REST APIs → Microservices → AI Frontends&quot;</span>
                      <span className="text-white/40">,</span>
                    </div>
                    <div className="whitespace-nowrap">
                      <LineNum n={8} />
                      <span className="ml-6" />
                      <span className="text-cyan-accent">studentsImpacted</span>
                      <span className="text-white/40">: </span>
                      <span className="text-[#f9a825]">500</span>
                      <span className="text-white/40">,</span>
                    </div>
                    <div className="whitespace-nowrap">
                      <LineNum n={9} />
                      <span className="ml-6" />
                      <span className="text-cyan-accent">publicTalks</span>
                      <span className="text-white/40">: </span>
                      <span className="text-[#f9a825]">10</span>
                      <span className="text-white/40">,</span>
                    </div>
                    <div className="whitespace-nowrap">
                      <LineNum n={10} />
                      <span className="ml-6" />
                      <span className="text-cyan-accent">motto</span>
                      <span className="text-white/40">: </span>
                      <span className="text-[#a5d6a7]">&quot;Great engineers share knowledge, not hoard it.&quot;</span>
                    </div>
                    <div className="whitespace-nowrap">
                      <LineNum n={11} />
                      <span className="text-white/50">{"}"}</span>
                      <span className="text-white/40">;</span>
                    </div>
                    <div className="whitespace-nowrap">
                      <LineNum n={12} />
                    </div>
                    <div className="whitespace-nowrap">
                      <LineNum n={13} />
                      <span className="text-cyber-purple">export default</span>{" "}
                      <span className="text-electric-blue">altaf</span>
                      <span className="text-white/40">;</span>
                      <motion.span
                        className="inline-block w-1.5 h-4 bg-electric-blue/70 ml-0.5 align-middle"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                      />
                    </div>
                  </div>

                  {/* Status bar */}
                  <div className="flex items-center justify-between px-3 py-1 bg-[#007acc] text-[10px] font-mono text-white/80">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <GitBranch className="w-3 h-3" /> master
                      </span>
                      <span>0 errors</span>
                      <span>0 warnings</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Ln 13, Col 24</span>
                      <span>UTF-8</span>
                      <span>TypeScript</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ══════════ Right: Dev Widgets (3 cols) ══════════ */}
          <motion.div
            className="hidden lg:flex lg:col-span-3 flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* ── Git Log Card ── */}
            <div className="rounded-xl border border-white/10 bg-[#0d0d0d] overflow-hidden">
              <div className="px-3 py-2 border-b border-white/5 flex items-center gap-2">
                <GitCommitHorizontal className="w-3.5 h-3.5 text-white/40" />
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                  Git Log
                </span>
              </div>
              <div className="p-3 space-y-2.5">
                {gitLog.map((entry, i) => (
                  <motion.div
                    key={entry.hash}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  >
                    <span className={`font-mono text-[10px] ${entry.color} shrink-0 mt-0.5`}>
                      {entry.hash}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-[11px] text-white/60 truncate">
                        {entry.msg}
                      </p>
                      <p className="font-mono text-[9px] text-white/20 flex items-center gap-1 mt-0.5">
                        <Clock className="w-2.5 h-2.5" /> {entry.time}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── npm Scripts Card ── */}
            <div className="rounded-xl border border-white/10 bg-[#0d0d0d] overflow-hidden">
              <div className="px-3 py-2 border-b border-white/5 flex items-center gap-2">
                <FileJson className="w-3.5 h-3.5 text-white/40" />
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                  npm Scripts
                </span>
              </div>
              <div className="p-3 space-y-2">
                {npmScripts.map((s, i) => (
                  <motion.div
                    key={s.name}
                    className="flex items-center gap-2 group cursor-default"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 + i * 0.08 }}
                  >
                    <s.icon
                      className={`w-3 h-3 shrink-0 ${
                        s.status === "running"
                          ? "text-[#28c840]"
                          : s.status === "passed"
                            ? "text-electric-blue"
                            : "text-white/20"
                      }`}
                    />
                    <span className="font-mono text-[11px] text-white/70 w-10 shrink-0">
                      {s.name}
                    </span>
                    <span className="font-mono text-[10px] text-white/25 truncate flex-1">
                      {s.cmd}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Deploy Status Card ── */}
            <div className="rounded-xl border border-white/10 bg-[#0d0d0d] overflow-hidden">
              <div className="px-3 py-2 border-b border-white/5 flex items-center gap-2">
                <CircleCheck className="w-3.5 h-3.5 text-white/40" />
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">
                  Deploy
                </span>
              </div>
              <div className="p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-white/50">Production</span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#28c840]">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-[#28c840]"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Live
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-white/50">Preview</span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#febc2e]">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-[#febc2e]"
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    Building
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-white/50">Docker</span>
                  <span className="flex items-center gap-1.5 font-mono text-[10px] text-electric-blue">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-electric-blue"
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    Healthy
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
