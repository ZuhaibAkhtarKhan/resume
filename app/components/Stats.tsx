"use client";

import { motion, useInView, animate, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mt-8 border-t border-ink-800 pt-5"
    >
      <p className="mb-3 text-[11px] uppercase tracking-wider text-ink-500">
        across these roles
      </p>
      <dl className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Stat key={s.label} delay={i * 0.08} {...s} />
        ))}
      </dl>
    </motion.div>
  );
}

function Stat({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix?: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration: 1.4,
      delay,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [inView, value, delay, mv]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="border-l border-ink-700/70 pl-3"
    >
      <dt className="sr-only">{label}</dt>
      <dd>
        <span className="text-xl font-semibold tracking-tight text-ink-100 tabular-nums sm:text-2xl">
          <motion.span>{rounded}</motion.span>
          {suffix && <span className="text-accent-blue">{suffix}</span>}
        </span>
        <p className="mt-0.5 text-[11px] leading-snug text-ink-400">{label}</p>
      </dd>
    </motion.div>
  );
}
