"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import { projects, accentClass } from "@/lib/data";
import Tag from "./Tag";
import Reveal from "./Reveal";
import { useRef } from "react";

export default function Projects() {
  return (
    <ul className="space-y-5">
      {projects.map((p, i) => (
        <Reveal as="li" key={p.name} delay={i * 0.05}>
          <ProjectCard project={p} />
        </Reveal>
      ))}
    </ul>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const c = accentClass[project.color];
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--px", `${e.clientX - rect.left}px`);
    el.style.setProperty("--py", `${e.clientY - rect.top}px`);
  };

  const Wrapper = motion.article;

  return (
    <Wrapper
      ref={ref as React.RefObject<HTMLElement>}
      onMouseMove={onMove}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="group relative overflow-hidden rounded-lg border border-ink-700/70 bg-ink-900/40 p-5 backdrop-blur-sm transition-colors hover:border-ink-600"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--px, 50%) var(--py, 50%), rgba(255,255,255,0.06), transparent 60%)",
        }}
      />

      <header className="grid grid-cols-1 gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-4">
        <div className="flex items-baseline gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full ${c.dot} transition-all group-hover:scale-[2]`}
            aria-hidden
          />
          <h3 className="text-[15px] font-semibold text-ink-100">
            {project.name}
          </h3>
          <span className="text-[11px] text-ink-500">{project.tagline}</span>
        </div>
        <p className="text-left text-[11px] text-ink-500 sm:text-right">
          {project.period}
        </p>
      </header>

      <p className="mt-2 text-xs leading-relaxed text-ink-300">
        {project.description}
      </p>

      {project.bullets?.length ? (
        <ul className="mt-2 space-y-1.5 pl-3.5">
          {project.bullets.map((b, j) => (
            <motion.li
              key={j}
              initial={{ opacity: 0, x: -4 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.1 + j * 0.05, duration: 0.4 }}
              className="relative text-xs leading-relaxed text-ink-300"
            >
              <span
                className="absolute -left-3.5 top-2 h-px w-2 bg-ink-500"
                aria-hidden
              />
              {b}
            </motion.li>
          ))}
        </ul>
      ) : null}

      <footer className="mt-4 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s.label} label={s.label} color={s.color} />
          ))}
        </div>

        {project.link ? (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            aria-label={`${project.name} source on GitHub`}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="group/link inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-[11px] text-ink-300 ring-1 ring-ink-700 transition-colors hover:text-accent-blue hover:ring-accent-blue/40"
          >
            <Github className="h-3 w-3" />
            <span>source</span>
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </motion.a>
        ) : (
          <span
            className="inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-[11px] text-ink-500 ring-1 ring-ink-800"
            title="Repository private — work in progress"
          >
            <Lock className="h-3 w-3" />
            wip
          </span>
        )}
      </footer>
    </Wrapper>
  );
}
