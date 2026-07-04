'use client';

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import useScrollPosition from "@/hooks/useScrollPosition";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { NAV_LINKS } from "@/lib/data/constants";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const scrollPosition = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Hook to track current active section ID
  const activeSection = useIntersectionObserver(
    NAV_LINKS.map(link => link.hash.replace("#", ""))
  );

  const isScrolled = scrollPosition > 20;

  const handleLinkClick = (e, hash) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      // Update hash in URL
      window.history.pushState(null, "", hash);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md shadow-md border-b border-zinc-200/50 dark:border-zinc-800/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent cursor-pointer"
        >
          KR
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((link) => {
            const sectionName = link.hash.replace("#", "");
            const isActive = activeSection === sectionName || (activeSection === "" && sectionName === "home");
            
            return (
              <a
                key={link.hash}
                href={link.hash}
                onClick={(e) => handleLinkClick(e, link.hash)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-blue-50/50 dark:bg-blue-950/30 rounded-full -z-10 border border-blue-100/50 dark:border-blue-900/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors duration-200 text-zinc-600 dark:text-zinc-400"
            aria-label="Toggle theme"
          >
            {mounted ? (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />) : <div className="w-[18px] h-[18px]" />}
          </button>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors duration-200 text-zinc-600 dark:text-zinc-400"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-2">
              {NAV_LINKS.map((link) => {
                const sectionName = link.hash.replace("#", "");
                const isActive = activeSection === sectionName || (activeSection === "" && sectionName === "home");

                return (
                  <a
                    key={link.hash}
                    href={link.hash}
                    onClick={(e) => handleLinkClick(e, link.hash)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400"
                        : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
