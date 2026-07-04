'use client';

import { useState, useEffect } from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/data/constants";
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import { Mail, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation parameters
  const currentRole = PERSONAL_INFO.roles[roleIndex];
  const typingSpeed = isDeleting ? 40 : 80;
  const holdTime = 2000;

  useEffect(() => {
    let timer;
    if (!isDeleting && displayedText === currentRole) {
      // Pause when full role is typed
      timer = setTimeout(() => setIsDeleting(true), holdTime);
    } else if (isDeleting && displayedText === "") {
      // Switch roles when text is fully deleted
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
      }, 0);
    } else {
      // Type or delete characters
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? prev.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRole, roleIndex, typingSpeed]);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/10 dark:bg-sky-900/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Column - Content */}
        <div className="lg:col-span-7 text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-200/50 dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            <span>Open to Opportunities</span>
          </motion.div>

          <div className="space-y-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl font-medium text-zinc-600 dark:text-zinc-400"
            >
              Hello, I&apos;m
            </motion.h3>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 h-[48px] flex items-center"
            >
              <span>{displayedText}</span>
              <span className="inline-block w-1 h-8 ml-1.5 bg-blue-600 dark:bg-blue-400 animate-blink" />
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed"
          >
            {PERSONAL_INFO.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#contact"
              onClick={handleContactClick}
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Contact Me</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 border border-zinc-300 dark:border-zinc-800 bg-white/85 dark:bg-zinc-900/80 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium rounded-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center space-x-4 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 w-fit"
          >
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
              aria-label="Email Address"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right Column - Illustration & Floating Badges */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-80 h-80 sm:w-96 sm:h-96"
          >
            {/* Center Graphic */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full border border-blue-500/10 animate-[spin_60s_linear_infinite]" />
            <div className="absolute inset-6 bg-gradient-to-bl from-indigo-500/10 to-sky-500/10 rounded-full border border-indigo-500/10 animate-[spin_40s_linear_infinite_reverse]" />

            {/* Main Interactive Developer Graphic */}
            <div className="absolute inset-16 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-3xl flex items-center justify-center p-6 backdrop-blur-sm">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-blue-500 dark:text-blue-400 stroke-current fill-none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Code Window UI */}
                <rect x="5" y="15" width="90" height="70" rx="8" className="text-zinc-300 dark:text-zinc-700" />
                <line x1="5" y1="30" x2="95" y2="30" className="text-zinc-200 dark:text-zinc-800" />
                <circle cx="15" cy="22" r="2" className="fill-red-400 text-red-400" />
                <circle cx="23" cy="22" r="2" className="fill-yellow-400 text-yellow-400" />
                <circle cx="31" cy="22" r="2" className="fill-green-400 text-green-400" />

                {/* Code Lines */}
                <path d="M15 42 h20" className="text-blue-500" strokeWidth="2.5" />
                <path d="M15 52 h45" className="text-zinc-400 dark:text-zinc-500" />
                <path d="M15 62 h30" className="text-indigo-400" />
                <path d="M25 72 h25" className="text-sky-500" />
                <path d="M70 42 l12 12-12 12" className="text-blue-500" strokeWidth="2" />
              </svg>
            </div>

            {/* Orbiting Floating Badges */}
            {/* React */}
            <motion.div
              animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 left-10 p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg rounded-2xl flex items-center space-x-2 text-sky-500 cursor-pointer hover:scale-110 transition-transform"
            >
              <FaReact size={24} className="animate-[spin_8s_linear_infinite]" />
              <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">React</span>
            </motion.div>

            {/* Next.js */}
            <motion.div
              animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute top-12 -right-8 p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg rounded-2xl flex items-center space-x-2 text-black dark:text-white cursor-pointer hover:scale-110 transition-transform"
            >
              <SiNextdotjs size={24} />
              <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Next.js</span>
            </motion.div>

            {/* MongoDB */}
            <motion.div
              animate={{ y: [0, -8, 0], x: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-16 -left-8 p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg rounded-2xl flex items-center space-x-2 text-green-500 cursor-pointer hover:scale-110 transition-transform"
            >
              <SiMongodb size={24} />
              <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">MongoDB</span>
            </motion.div>

            {/* Node.js */}
            <motion.div
              animate={{ y: [0, 12, 0], x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
              className="absolute -bottom-4 right-12 p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg rounded-2xl flex items-center space-x-2 text-green-600 cursor-pointer hover:scale-110 transition-transform"
            >
              <FaNodeJs size={24} />
              <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300">Node</span>
            </motion.div>

            {/* Express.js */}
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
              className="absolute top-1/2 -right-12 p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg rounded-xl text-zinc-700 dark:text-zinc-300 cursor-pointer hover:scale-110 transition-transform"
            >
              <SiExpress size={20} />
            </motion.div>

            {/* Tailwind */}
            <motion.div
              animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
              className="absolute bottom-1/2 -left-12 p-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg rounded-xl text-teal-400 cursor-pointer hover:scale-110 transition-transform"
            >
              <SiTailwindcss size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
