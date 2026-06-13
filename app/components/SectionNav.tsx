"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "education", label: "education" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "certifications", label: "certs" },
  { id: "awards", label: "awards" },
];

export default function SectionNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      aria-label="sections"
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col items-end gap-3">
        {SECTIONS.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                data-cursor="hover"
                className="group flex items-center gap-2"
                aria-label={`Jump to ${s.label}`}
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={`text-[10px] uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "translate-x-0 text-accent-blue opacity-100"
                      : "-translate-x-1 text-ink-400 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                >
                  {s.label}
                </span>
                <motion.span
                  animate={{
                    width: isActive ? 24 : 12,
                    backgroundColor: isActive ? "#7aa6ff" : "#3a3a42",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="block h-px"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
