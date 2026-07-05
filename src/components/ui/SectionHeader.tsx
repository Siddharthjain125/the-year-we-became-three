"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  titleEmoji?: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  titleEmoji,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  const reducedMotion = useReducedMotion();
  const align = centered ? "text-center" : "text-left";

  return (
    <div className={`${align} mb-12 sm:mb-16`}>
      <motion.p
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-gold sm:text-xs"
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        initial={reducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display text-[clamp(1.875rem,5.5vw,3.25rem)] font-medium leading-tight tracking-tight text-charcoal"
      >
        {title}
        {titleEmoji && (
          <span className="ml-2 inline-block" aria-hidden="true">
            {titleEmoji}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`mt-4 max-w-lg text-base font-light leading-relaxed text-charcoal/60 sm:text-lg ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
