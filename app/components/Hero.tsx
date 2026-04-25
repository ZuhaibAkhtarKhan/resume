"use client";

import { motion } from "motion/react";
import Tag from "./Tag";
import { profile } from "@/lib/data";

export default function Hero() {
  const words = profile.bio.split(" ");

  return (
    <div className="mt-12 sm:mt-14">
      <p className="max-w-2xl text-sm leading-relaxed text-ink-200 sm:text-[15px]">
        {words.map((w, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 0.15 + i * 0.022,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block whitespace-pre"
          >
            {w + " "}
          </motion.span>
        ))}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-ink-400">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mr-1"
        >
          currently tinkering with:
        </motion.span>
        {profile.tinkering.map((t, i) => (
          <motion.span
            key={t.label}
            initial={{ opacity: 0, scale: 0.9, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.7 + i * 0.07,
              type: "spring",
              stiffness: 380,
              damping: 22,
            }}
          >
            <Tag label={t.label} color={t.color} />
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="ml-1 inline-block h-3 w-[6px] animate-blink bg-accent-blue/80"
          aria-hidden
        />
      </div>
    </div>
  );
}
