'use client';

import { useState } from "react";
import { PROJECTS } from "@/lib/data/constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const FILTERS = ["All", "Frontend", "Full Stack", "Next.js", "React"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  // const filteredProjects = PROJECTS.filter((project) => {
  //   if (activeFilter === "All") return true;
  //   if (activeFilter === "Frontend") {
  //     return project.category === "React" || project.category === "Next.js";
  //   }
  //   return project.category === activeFilter;
  // });


  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;

    const categories = Array.isArray(project.category)
      ? project.category
      : [project.category];

    if (activeFilter === "Frontend") {
      return (
        categories.includes("Frontend") ||
        categories.includes("React") ||
        categories.includes("Next.js")
      );
    }

    return categories.includes(activeFilter);
  });

  return (
    <section
      id="projects"
      className="relative py-24 bg-white dark:bg-zinc-900 border-y border-zinc-100 dark:border-zinc-800/50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute left-10 top-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-10 bottom-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-base font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Projects
          </h2>
          <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Featured Portfolio Work
          </p>
          <div className="mt-4 w-12 h-1.5 bg-blue-600 dark:bg-blue-50 rounded-full mx-auto" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === filter
                ? "text-white"
                : "text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
            >
              {activeFilter === filter && (
                <motion.span
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-full -z-10 shadow-lg shadow-blue-500/10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-50/40 dark:bg-zinc-900/30 overflow-hidden shadow-lg shadow-zinc-100/50 dark:shadow-none hover:shadow-xl hover:border-blue-500/20 dark:hover:border-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Project Image Container */}
                <div className="relative aspect-video overflow-hidden border-b border-zinc-200/50 dark:border-zinc-800/50 bg-zinc-100 dark:bg-zinc-850">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={false}
                  />
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-zinc-900/90 text-blue-600 dark:text-blue-400 border border-zinc-200/40 dark:border-zinc-800/40 backdrop-blur-sm">
                    {Array.isArray(project.category)
                      ? project.category.join(" • ")
                      : project.category}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Bullet features */}
                  <div className="space-y-1.5 flex-grow">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-zinc-500 dark:text-zinc-400">
                        <Check size={12} className="text-green-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md text-[10px] font-semibold border border-zinc-200/20 dark:border-zinc-800/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Links */}
                  <div className="flex items-center space-x-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 text-xs font-semibold rounded-xl border border-zinc-300 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 transition-colors duration-200"
                    >
                      <FaGithub size={14} />
                      <span>Code</span>
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 text-xs font-semibold rounded-xl bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white shadow-md shadow-blue-500/10 transition-all duration-200"
                    >
                      <FaExternalLinkAlt size={12} />
                      <span>Live Demo</span>
                    </a>
                  </div>

                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
