'use client';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/data/constants";

/* ─────────────────────────────────────────────
   Brand colour map — keyed by skill name as it
   appears in constants.js SKILL_CATEGORIES.
   `adaptive: true` means the brand mark is black/
   white and should just follow the theme text
   colour instead of a fixed hex (so it stays
   visible in both light & dark mode).
───────────────────────────────────────────── */
const COLOR_MAP = {
  "React": { color: "#61DAFB" },
  "Next.js": { adaptive: true },
  "JavaScript": { color: "#F7DF1E" },
  "HTML": { color: "#E34F26" },
  "CSS": { color: "#1572B6" },
  "Tailwind": { color: "#38BDF8" },
  "Redux": { color: "#764ABC" },
  "Node.js": { color: "#68A063" },
  "Express": { adaptive: true },
  "REST API": { color: "#00D8A8" },
  "JWT": { color: "#FB015B" },
  "MongoDB": { color: "#4DB33D" },
  "Git": { color: "#F05032" },
  "GitHub": { adaptive: true },
  "VS Code": { color: "#007ACC" },
  "Postman": { color: "#FF6C37" },
  "Vercel": { adaptive: true },
};

const DEFAULT_ENTRY = { color: "#38BDF8" };

/* ─────────────────────────────────────────────
   Flatten SKILL_CATEGORIES (grouped by category)
   into a single, de-duplicated list of badges.
───────────────────────────────────────────── */
function getFlattenedSkills() {
  const seen = new Set();
  const list = [];

  SKILL_CATEGORIES.forEach((group) => {
    group.skills.forEach((skill) => {
      if (seen.has(skill.name)) return;
      seen.add(skill.name);
      const meta = COLOR_MAP[skill.name] || DEFAULT_ENTRY;
      list.push({
        name: skill.name,
        progress: skill.progress ?? 75,
        ...meta,
      });
    });
  });

  return list;
}

/* ─────────────────────────────────────────────
   Hexagon clipPath polygon (pointy-top variant)
───────────────────────────────────────────── */
const HEX_POINTS = "50,4 93,27.5 93,72.5 50,96 7,72.5 7,27.5";

function HexBadge({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const delay = index * 0.06;
  const strokeColor = skill.adaptive ? "currentColor" : skill.color;

  // Proficiency (0-100) drives how strong the glow / colour wash reads.
  const p = Math.max(0, Math.min(100, skill.progress));
  const glowBlur = 2 + Math.round((p / 100) * 6);
  const washOpacity = 0.04 + (p / 100) * 0.12;
  const strokeWidth = 2 + (p / 100) * 1.6;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.6, y: 30 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.34, 1.56, 0.64, 1] }}
      className={`group relative w-[110px] sm:w-[125px] md:w-[145px] cursor-default transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.07] hover:z-10 ${skill.adaptive ? "text-zinc-800 dark:text-zinc-100" : ""
        }`}
    >
      {/* ── SVG hexagon shell ── */}
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-auto transition-[filter] duration-300"
        style={{
          filter: `drop-shadow(0 0 ${glowBlur}px ${skill.adaptive ? "rgba(120,120,140,0.25)" : skill.color + "55"
            })`,
        }}
        aria-hidden="true"
      >
        {/* base fill — light/dark adaptive, brightens slightly on hover */}
        <polygon
          points={HEX_POINTS}
          className="[fill:#f4f5f7] dark:[fill:#111317] group-hover:[fill:#e9ebf0] dark:group-hover:[fill:#16191f] [stroke:rgba(0,0,0,0.08)] dark:[stroke:rgba(255,255,255,0.06)] transition-colors duration-300"
          strokeWidth="1"
        />

        {/* proficiency wash — colour intensity communicates skill level */}
        <polygon
          points={HEX_POINTS}
          fill={skill.adaptive ? "currentColor" : skill.color}
          fillOpacity={washOpacity}
        />

        {/* animated colour stroke — spinning arc */}
        <motion.polygon
          points={HEX_POINTS}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: delay + 0.2, ease: "easeOut" }}
        />
      </svg>

      {/* ── Label inside hex ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-[10%] text-center">
        <span className="text-[0.6rem] sm:text-[0.7rem] md:text-[0.78rem] font-extrabold tracking-wider uppercase leading-tight text-zinc-900 dark:text-white">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
export default function Skills() {
  const skills = getFlattenedSkills();

  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden bg-white dark:bg-zinc-900 border-y border-zinc-100 dark:border-zinc-800/50 transition-colors duration-300"
    >
      {/* ── ambient radial blobs (match Hero/Projects palette) ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400/5 dark:bg-blue-600/5 rounded-full blur-[60px]" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-72 h-72 bg-indigo-400/5 dark:bg-indigo-600/5 rounded-full blur-[70px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── Section heading ── */}
        <div className="text-center mb-16 select-none">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
          >
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Skill Set
            </span>
          </motion.h2>

          {/* accent bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 mx-auto h-[3px] w-16 rounded-full origin-left bg-gradient-to-r from-cyan-400 to-violet-500"
          />
        </div>

        {/* ── Hex grid ── */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <HexBadge key={skill.name} skill={skill} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}