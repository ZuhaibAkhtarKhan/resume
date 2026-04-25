"use client";

import { useEffect, useRef } from "react";

export default function BackgroundGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid bg-radial-fade opacity-60" />
      <div className="absolute inset-0 spotlight" />
      <div
        className="absolute -top-40 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(122,166,255,0.25), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 h-[340px] w-[640px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(199,155,255,0.25), transparent)",
        }}
      />
    </div>
  );
}
