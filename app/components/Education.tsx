"use client";

import { motion } from "motion/react";
import { education } from "@/lib/data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <ul className="space-y-8">
      {education.map((e, i) => (
        <Reveal as="li" key={e.school} delay={i * 0.05}>
          <article>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="grid grid-cols-1 gap-1 sm:grid-cols-[1fr_auto] sm:gap-4"
            >
              <div>
                <h3 className="text-[15px] font-semibold text-ink-100">
                  {e.school}
                </h3>
                <p className="text-xs text-ink-300">{e.degree}</p>
              </div>
              <div className="text-left text-xs text-ink-400 sm:text-right">
                <p>{e.period}</p>
                <p className="text-ink-500">{e.location}</p>
              </div>
            </motion.div>

            {e.coursework?.length ? (
              <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1.5 text-[11px] text-ink-400">
                <span className="text-ink-500">relevant coursework:</span>
                {e.coursework.map((c, j) => (
                  <motion.span
                    key={c}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      delay: 0.1 + j * 0.04,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="after:mx-1.5 after:text-ink-600 after:content-['·'] last:after:content-['']"
                  >
                    {c}
                  </motion.span>
                ))}
              </div>
            ) : null}
          </article>
        </Reveal>
      ))}
    </ul>
  );
}
