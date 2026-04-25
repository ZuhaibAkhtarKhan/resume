"use client";

import { motion } from "motion/react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-14 border-t border-ink-800 pt-6 pb-10 text-[11px] text-ink-500"
    >
      <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <p>
          built with <span className="text-accent-blue">next.js</span>,{" "}
          <span className="text-accent-pink">motion</span> &amp;{" "}
          <span className="text-accent-cyan">tailwind</span>. deployed on{" "}
          <span className="text-accent-green">vercel</span>.
        </p>
        <p className="text-ink-600">
          © {new Date().getFullYear()} {profile.name.toLowerCase()}
        </p>
      </div>
    </motion.footer>
  );
}
