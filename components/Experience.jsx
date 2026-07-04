'use client';

import { EXPERIENCE } from "@/lib/data/constants";
import { Briefcase, Calendar, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      id="experience"
      className="relative py-24 bg-white dark:bg-zinc-900 border-y border-zinc-100 dark:border-zinc-800/50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute right-1/4 top-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Experience
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Professional Work History
          </p>
          <div className="mt-4 w-12 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto" />
        </div>

        {/* Vertical Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative pl-6 md:pl-10 space-y-12"
        >
          {/* Main vertical timeline line */}
          <div className="absolute left-1.5 md:left-[21px] top-1 bottom-1 w-0.5 bg-zinc-200 dark:bg-zinc-800" />

          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative"
            >
              {/* Timeline marker icon */}
              <div className="absolute -left-[27px] md:-left-[43px] top-1.5 w-10 h-10 rounded-full bg-white dark:bg-zinc-950 border-2 border-blue-500 dark:border-blue-400 flex items-center justify-center text-blue-500 dark:text-blue-400 shadow-md z-10">
                <Briefcase size={16} />
              </div>

              {/* Company Card */}
              <div className="p-6 md:p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-zinc-900/40 hover:bg-white dark:hover:bg-zinc-900 shadow-lg shadow-zinc-100/30 dark:shadow-none hover:shadow-xl hover:border-blue-500/20 transition-all duration-300">
                
                {/* Header Meta info */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b border-zinc-200/60 dark:border-zinc-800/60 pb-4 mb-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-base font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="inline-flex items-center space-x-1.5 text-sm font-semibold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-lg w-fit h-fit">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
                    Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start space-x-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        <CheckCircle className="w-5 h-5 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements Highlight */}
                {exp.achievements && (
                  <div className="mb-6 p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100/50 dark:border-blue-900/30 flex items-start space-x-3">
                    <Award className="w-5 h-5 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                        Key Achievement
                      </h5>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-1 font-medium">
                        {exp.achievements}
                      </p>
                    </div>
                  </div>
                )}

                {/* Technologies List */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-zinc-800 dark:text-zinc-400 uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-xs font-semibold border border-zinc-200/40 dark:border-zinc-800/40 hover:border-blue-500/30 hover:bg-white dark:hover:bg-zinc-800 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
