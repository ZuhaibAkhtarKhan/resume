"use client";

import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import { motion } from "motion/react";
import Magnetic from "./Magnetic";
import { profile } from "@/lib/data";

const links = [
  { href: profile.socials.github, label: "GitHub", Icon: Github },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: profile.socials.email, label: "Email", Icon: Mail },
  {
    href: profile.socials.resume,
    label: "Resume PDF",
    Icon: FileDown,
    download: "zuhaibakhtar_resume.pdf",
  },
];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-start justify-between gap-6"
    >
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-ink-100 sm:text-2xl">
          {profile.name}
        </h1>
        <p className="mt-1 text-xs text-ink-400 sm:text-sm">{profile.role}</p>
      </div>

      <nav aria-label="social" className="flex items-center gap-1.5">
        {links.map(({ href, label, Icon, download }) => (
          <Magnetic key={label}>
            <motion.a
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              download={download}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="group inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-300 ring-1 ring-ink-700 transition-colors hover:text-accent-blue hover:ring-accent-blue/40"
            >
              <Icon className="h-4 w-4" />
            </motion.a>
          </Magnetic>
        ))}
      </nav>
    </motion.header>
  );
}
