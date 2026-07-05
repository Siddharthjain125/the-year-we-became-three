"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { Confetti } from "@/components/ui/Confetti";

export function FinalMessageSection() {
  const { final } = siteContent;

  return (
    <section
      id="final"
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden px-5 py-24 sm:px-8"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#080810]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(180,100,130,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_30%_70%,rgba(120,80,180,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_70%_30%,rgba(200,140,160,0.1),transparent)]" />
      </div>

      <Confetti />

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-[11px] font-medium uppercase tracking-[0.35em] text-rose-300/70"
        >
          {final.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2.5rem,9vw,5rem)] font-light leading-[1.08] tracking-tight text-white"
        >
          {final.title}
          <br />
          <span className="bg-gradient-to-r from-rose-200 via-white to-violet-200 bg-clip-text text-transparent">
            {final.titleAccent}
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-8 max-w-lg text-base font-light leading-relaxed text-white/50 sm:text-lg"
        >
          {final.message}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-6 text-sm font-light italic text-white/35 sm:text-base"
        >
          {final.closing}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 backdrop-blur-xl"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-rose-300/80" />
          <span className="text-xs font-medium tracking-[0.15em] text-white/50 sm:text-sm">
            {final.name}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
