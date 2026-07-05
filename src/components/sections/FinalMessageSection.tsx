"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { GoldConfetti } from "@/components/ui/GoldConfetti";
import { FloatingHearts } from "@/components/ui/FloatingHearts";
import { Sparkles } from "@/components/ui/Sparkles";
import { ElegantDivider } from "@/components/ui/ElegantDivider";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function FinalMessageSection() {
  const { final } = siteContent;
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="final"
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-gradient-to-b from-blush-light/40 via-ivory to-lavender-light/30 px-5 py-28 sm:px-8"
    >
      <GoldConfetti />
      <FloatingHearts />
      <Sparkles />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        <motion.h2
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2rem,8vw,3.75rem)] font-medium leading-[1.12] tracking-tight text-charcoal"
        >
          {final.headline}{" "}
          <span aria-hidden="true">{final.headlineEmoji}</span>
        </motion.h2>

        <ElegantDivider className="my-8 sm:my-10" />

        <div className="space-y-5">
          {final.paragraphs.map((text, i) => (
            <motion.p
              key={text}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.12 }}
              className="text-base font-light leading-relaxed text-charcoal/70 sm:text-lg"
            >
              {text}
            </motion.p>
          ))}

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-display text-2xl font-semibold italic text-blush-dark sm:text-3xl"
          >
            {final.closing}
          </motion.p>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-14 space-y-3"
        >
          <p className="text-base text-charcoal/60">{final.signOff}</p>
          <p className="font-signature text-4xl text-charcoal sm:text-5xl">
            {final.sender}
          </p>
          <p className="text-base font-light text-charcoal/65 sm:text-lg">
            {final.family}
          </p>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 inline-flex items-center gap-2 rounded-full border border-champagne/30 bg-white/80 px-6 py-3 shadow-[0_4px_20px_rgba(212,175,55,0.1)] backdrop-blur-sm"
          aria-hidden="true"
        >
          <span className="text-rose-gold">♥</span>
          <span className="text-xs font-medium tracking-[0.2em] text-charcoal/50 uppercase">
            Forever & Always
          </span>
          <span className="text-rose-gold">♥</span>
        </motion.div>
      </div>
    </section>
  );
}
