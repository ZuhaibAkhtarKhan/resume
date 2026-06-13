"use client";

import { motion } from "motion/react";
import { certifications, accentClass } from "@/lib/data";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <ul className="space-y-5">
      {certifications.map((cert, i) => {
        const c = accentClass[cert.color];
        return (
          <Reveal as="li" key={cert.name} delay={i * 0.05}>
            <article>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group grid grid-cols-1 gap-1 sm:grid-cols-[1fr_auto] sm:gap-4"
              >
                <div>
                  <h3 className="flex items-center gap-2 text-[15px] font-semibold text-ink-100">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${c.dot} transition-all group-hover:scale-150`}
                      aria-hidden
                    />
                    {cert.name}
                  </h3>
                  <p className={`mt-0.5 text-xs ${c.text}`}>{cert.issuer}</p>
                </div>
                <div className="text-left text-xs text-ink-400 sm:text-right">
                  <p>
                    {cert.period}
                    {cert.inProgress ? (
                      <span className="ml-1.5 text-ink-500">— in progress</span>
                    ) : null}
                  </p>
                </div>
              </motion.div>
            </article>
          </Reveal>
        );
      })}
    </ul>
  );
}
