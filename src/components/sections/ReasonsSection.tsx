"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ReasonsSection() {
  const { reasons } = siteContent;

  return (
    <SectionWrapper id="reasons" background="ivory">
      <SectionHeader
        eyebrow={reasons.eyebrow}
        title={reasons.title}
        titleEmoji={reasons.titleEmoji}
        subtitle={reasons.subtitle}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {reasons.items.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.6,
              delay: (i % 6) * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden rounded-2xl border border-blush/25 bg-white p-5 shadow-[0_4px_20px_rgba(212,175,55,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(212,175,55,0.12)] sm:p-6"
          >
            <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blush-light to-lavender-light text-xs font-semibold text-rose-gold">
              {i + 1}
            </span>
            <p className="text-sm leading-relaxed text-charcoal/75 sm:text-base">
              {reason}
            </p>
            <div
              className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-champagne/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
