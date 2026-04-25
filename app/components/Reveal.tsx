"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "ul" | "header" | "footer";
};

export default function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  as = "div",
}: Props) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
    >
      {children}
    </Tag>
  );
}
