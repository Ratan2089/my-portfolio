'use client';

import { useState, useEffect } from "react";

export default function useIntersectionObserver(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // Trigger when the section occupies a significant middle portion of viewport
      threshold: 0,
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sectionIds, options]);

  return activeId;
}
