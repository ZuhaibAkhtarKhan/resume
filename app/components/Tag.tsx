"use client";

import { motion } from "motion/react";
import { accentClass, type AccentColor } from "@/lib/data";
import clsx from "clsx";

type Props = {
  label: string;
  color?: AccentColor;
  size?: "sm" | "md";
};

export default function Tag({ label, color = "blue", size = "sm" }: Props) {
  const c = accentClass[color];
  return (
    <motion.span
      data-cursor="hover"
      whileHover={{ y: -2, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className={clsx(
        "inline-flex select-none items-center rounded-md px-2 py-0.5 font-mono ring-1",
        c.text,
        c.bg,
        c.ring,
        size === "sm" ? "text-[11px]" : "text-xs"
      )}
    >
      {label}
    </motion.span>
  );
}
