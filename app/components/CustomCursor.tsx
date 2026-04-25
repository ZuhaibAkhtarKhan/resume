"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest(
        "a, button, [data-cursor='hover'], input, textarea, select"
      );
      setHover(interactive);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ translateX: sx, translateY: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <motion.div
          animate={{ scale: hover ? 1.6 : 1, opacity: hover ? 0.9 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="h-3 w-3 rounded-full bg-white"
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ translateX: x, translateY: y }}
        className="pointer-events-none fixed left-0 top-0 z-[99] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{
            scale: hover ? 2.2 : 1,
            opacity: hover ? 0.4 : 0.25,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="h-8 w-8 rounded-full ring-1 ring-white/40"
        />
      </motion.div>
    </>
  );
}
