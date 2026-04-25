"use client";

import { motion } from "motion/react";
import {
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiGithub,
  SiDocker,
  SiLinux,
  SiJira,
  SiArduino,
  SiLangchain,
  SiFlask,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  Binary,
  Boxes,
  Database,
  Workflow,
  Infinity as InfinityIcon,
  Network,
  Layers,
  MousePointer2,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import { skills, type SkillItem } from "@/lib/data";
import Reveal from "./Reveal";

type AnyIcon = IconType | LucideIcon;

const ICONS: Record<string, AnyIcon> = {
  python: SiPython,
  cplusplus: SiCplusplus,
  postgresql: SiPostgresql,
  javascript: SiJavascript,
  tailwindcss: SiTailwindcss,
  html5: SiHtml5,
  github: SiGithub,
  docker: SiDocker,
  linux: SiLinux,
  jira: SiJira,
  vscode: VscVscode,
  cursor: MousePointer2,
  arduino: SiArduino,
  langchain: SiLangchain,
  flask: SiFlask,
  nodejs: SiNodedotjs,
  numpy: SiNumpy,
  pandas: SiPandas,
  // generic / lucide fallbacks
  binary: Binary,
  boxes: Boxes,
  database: Database,
  workflow: Workflow,
  infinity: InfinityIcon,
  network: Network,
  layers: Layers,
};

export default function Skills() {
  return (
    <div className="space-y-5">
      {skills.map((group, gi) => (
        <Reveal key={group.title} delay={gi * 0.04}>
          <div>
            <h3 className="mb-2 text-[11px] uppercase tracking-wider text-ink-500">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-x-2 gap-y-2">
              {group.items.map((item, i) => (
                <SkillChip
                  key={item.name}
                  item={item}
                  delay={gi * 0.04 + i * 0.025}
                />
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function SkillChip({ item, delay }: { item: SkillItem; delay: number }) {
  const Icon = ICONS[item.icon] ?? Layers;

  return (
    <motion.li
      data-cursor="hover"
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2 }}
      className="group inline-flex items-center gap-1.5 rounded-md border border-ink-700/70 bg-ink-900/40 px-2 py-1 text-[11px] text-ink-300 transition-colors hover:border-ink-600 hover:text-ink-100"
    >
      <Icon
        className="h-3.5 w-3.5 shrink-0 text-ink-400 transition-colors duration-200 group-hover:[color:var(--c)]"
        style={{ ["--c" as string]: item.color ?? "#7aa6ff" }}
        aria-hidden
      />
      <span>{item.name}</span>
    </motion.li>
  );
}
