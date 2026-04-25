"use client";

import { motion } from "motion/react";
import { experience, accentClass } from "@/lib/data";
import Reveal from "./Reveal";
import Stats from "./Stats";

export default function Experience() {
  return (
    <>
    <ol className="space-y-8">
      {experience.map((job, i) => {
        const c = accentClass[job.color];
        return (
          <Reveal as="li" key={job.role + job.company} delay={i * 0.06}>
            <article>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative grid grid-cols-1 gap-2 sm:grid-cols-[1fr_auto] sm:gap-4"
              >
                <div>
                  <h3 className="flex items-center gap-2 text-[15px] font-semibold text-ink-100">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${c.dot} transition-all group-hover:scale-150`}
                      aria-hidden
                    />
                    {job.role}
                  </h3>
                  <p className={`mt-0.5 text-xs ${c.text}`}>{job.company}</p>
                </div>
                <div className="text-left text-xs text-ink-400 sm:text-right">
                  <p>{job.period}</p>
                  <p className="text-ink-500">{job.location}</p>
                </div>
              </motion.div>

              <ul className="mt-3 space-y-1.5 pl-3.5">
                {job.bullets.map((b, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      delay: 0.15 + j * 0.05,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
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
            </article>
          </Reveal>
        );
      })}
    </ol>
    <Stats />
    </>
  );
}
