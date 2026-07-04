'use client';

import { useState, useEffect } from "react";

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    // Set initial scroll position
    updatePosition();

    window.addEventListener("scroll", updatePosition, { passive: true });
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
}
