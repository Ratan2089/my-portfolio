'use client';

import { ACADEMICS } from "@/lib/data/constants";
import { GraduationCap, BookOpen, Award, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

// Map string identifiers to actual Lucide component instances
const IconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Award: Award
};

export default function Academics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section
      id="education"
      className="relative py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden"
    >
      {/* Background glow orb */}
      <div className="absolute left-1/4 bottom-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Academics
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Educational Milestones
          </p>
          <div className="mt-4 w-12 h-1.5 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto" />
        </div>

        {/* Timeline Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Vertical central timeline line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2" />

          {/* Academic items */}
          <div className="space-y-12">
            {ACADEMICS.map((item, idx) => {
              const IconComponent = IconMap[item.icon] || GraduationCap;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Icon Marker on the Central Line */}
                  <div className="absolute left-4 md:left-1/2 top-4 w-9 h-9 rounded-full bg-white dark:bg-zinc-900 border-2 border-blue-500 dark:border-blue-400 flex items-center justify-center -translate-x-1/2 shadow-md z-10 text-blue-500 dark:text-blue-400 hover:scale-110 transition-transform">
                    <IconComponent size={16} />
                  </div>

                  {/* Card Container */}
                  <div
                    className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/60 shadow-lg shadow-zinc-100/50 dark:shadow-none hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-300">
                      
                      {/* Year badge */}
                      <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 mb-3`}>
                        <Calendar size={12} />
                        <span>{item.year}</span>
                      </span>

                      {/* Degree Title */}
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                        {item.degree}
                      </h3>

                      {/* Institution & University */}
                      <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300 mt-1 flex items-center justify-start md:justify-end gap-1.5">
                        <MapPin size={14} className="text-zinc-400 shrink-0" />
                        <span>{item.college}</span>
                      </p>
                      
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {item.university}
                      </p>

                      {/* Grade Info */}
                      <div className={`mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center ${isEven ? "justify-start md:justify-end" : "justify-start"} gap-1.5`}>
                        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Result:</span>
                        <span className="text-sm font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/20 px-2.5 py-0.5 rounded-lg border border-green-100 dark:border-green-900/20">
                          {item.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
