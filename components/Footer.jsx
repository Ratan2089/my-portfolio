'use client';

import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from "@/lib/data/constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e, hash) => {
    e.preventDefault();
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-white dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300 py-12 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute left-1/2 bottom-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Branding & Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform"
        >
          KR
        </a>

        {/* Footer Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              onClick={(e) => handleLinkClick(e, link.hash)}
              className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center space-x-4 mb-8">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={SOCIAL_LINKS.email}
            className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Scroll To Top Button */}
        <motion.button
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScrollToTop}
          className="mb-8 p-3 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </motion.button>

        {/* Copyright */}
        <p className="text-xs text-zinc-400 dark:text-zinc-500 text-center">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Built with Next.js & Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}
