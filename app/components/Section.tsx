"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: Props) {
  const reduce = useReducedMotion();

  return (
    <section id={id} className="scroll-mt-24 py-6 sm:py-8">
      <motion.div
        initial={{ opacity: 0, x: reduce ? 0 : 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-5 flex items-center justify-end gap-3"
      >
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-ink-600 to-ink-600/40" />
        <h2 className="text-sm tracking-wide text-accent-blue lowercase">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  );
}
