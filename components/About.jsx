'use client';

import { PERSONAL_INFO, STATISTICS, CORE_STRENGTHS, TIMELINE_ABOUT } from "@/lib/data/constants";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-zinc-900 border-y border-zinc-100 dark:border-zinc-800/50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-blue-300/10 dark:bg-blue-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            About Me
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Crafting Digital Solutions With Clean Architecture
          </p>
          <div className="mt-4 w-12 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto" />
        </div>

        {/* Content Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Column - Graphic/Avatar & Strengths */}
          <div className="lg:col-span-5 space-y-8">
            {/* Visual Placeholder */}
            <div className="relative rounded-3xl overflow-hidden aspect-square max-w-sm mx-auto bg-gradient-to-tr from-blue-600 to-indigo-600 p-1.5 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 opacity-40 blur-xl" />
              <div className="relative w-full h-full bg-zinc-50 dark:bg-zinc-900 rounded-[22px] flex flex-col justify-center items-center p-8 border border-white/10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-blue-500/30">
                  KR
                </div>
                <h4 className="mt-4 text-xl font-bold text-zinc-800 dark:text-white">Kumar Ratan</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Full Stack Developer</p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  <span className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-xs font-medium">Delhi, IN</span>
                  <span className="px-2.5 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-lg text-xs font-semibold">Active Coder</span>
                </div>
              </div>
            </div>

            {/* Core Competencies Tags */}
            <div className="bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 p-6 rounded-2xl">
              <h4 className="text-lg font-bold text-zinc-800 dark:text-white mb-4">Core Strengths</h4>
              <ul className="space-y-3">
                {CORE_STRENGTHS.map((strength, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-zinc-800 dark:text-zinc-200 block">{strength.title}</strong>
                      <span className="text-zinc-500 dark:text-zinc-400">{strength.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Stats Grid & Bio Description */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-zinc-800 dark:text-white">Who I Am</h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Hi, I&apos;m Kumar Ratan. I specialize in designing and deploying responsive full-stack applications. With a foundation in computer science and strong algorithms background, I focus on constructing high-quality codebase components that perform smoothly across devices.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Whether creating interactive UI features in React/Next.js, designing robust REST databases in MongoDB, or optimizing request routing flows in Node/Express — my objective remains driving user engagement through software reliability.
              </p>
            </div>

            {/* Stats Dashboard Grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATISTICS.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/40 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">{stat.value}</div>
                  <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-1">{stat.label}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{stat.detail}</div>
                </div>
              ))}
            </div>

            {/* Internal Milestones Timeline */}
            <div className="border-t border-zinc-200/60 dark:border-zinc-800/60 pt-8">
              <h4 className="text-lg font-bold text-zinc-800 dark:text-white mb-6">Brief Timeline</h4>
              <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 space-y-8">
                {TIMELINE_ABOUT.map((milestone, index) => (
                  <div key={index} className="relative pl-6">
                    {/* Circle marker */}
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-blue-500 dark:border-blue-400 bg-white dark:bg-zinc-900" />
                    
                    <div className="flex flex-wrap items-center space-x-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
                      <Calendar size={12} />
                      <span>{milestone.year}</span>
                    </div>
                    <h5 className="text-sm font-bold text-zinc-800 dark:text-white mt-1">
                      {milestone.event}
                    </h5>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {milestone.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
