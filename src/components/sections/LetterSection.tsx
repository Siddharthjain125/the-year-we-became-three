"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";

export function LetterSection() {
  const { letter } = siteContent;

  return (
    <SectionWrapper
      id="letter"
      gradient="linear-gradient(180deg, #0a0a0f 0%, #110e18 50%, #0d0b12 100%)"
    >
      <div className="mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-center text-[11px] font-medium uppercase tracking-[0.35em] text-violet-300/60"
        >
          {letter.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center font-display text-[clamp(1.75rem,5vw,3rem)] font-light tracking-tight text-white"
        >
          {letter.title}
        </motion.h2>

        <GlassCard className="mt-10 sm:mt-12" delay={0.2}>
          <div className="space-y-5 sm:space-y-6">
            {letter.paragraphs.map((text, i) => {
              const isSignature =
                text === "Mom & Dad" || text === "With all our love,";

              return (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                  className={`text-sm leading-[1.85] sm:text-base ${
                    isSignature
                      ? "font-display text-lg text-rose-200/80 italic sm:text-xl"
                      : text === "My dearest love,"
                        ? "font-display text-base text-white/80 sm:text-lg"
                        : "font-light text-white/50"
                  }`}
                >
                  {text}
                </motion.p>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 h-px origin-left bg-gradient-to-r from-rose-300/30 via-violet-300/20 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-4 text-center text-[10px] font-medium uppercase tracking-[0.3em] text-white/25"
          >
            {letter.signature}
          </motion.p>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
}
