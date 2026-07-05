"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function WelcomeSection() {
  const { welcome } = siteContent;

  return (
    <section
      id="welcome"
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(120,80,140,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(200,120,140,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_60%,rgba(100,80,160,0.1),transparent)]" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-24 text-center sm:px-8">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 text-[11px] font-medium uppercase tracking-[0.35em] text-rose-300/70 sm:text-xs"
        >
          {welcome.eyebrow}
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display text-[clamp(2.5rem,10vw,5.5rem)] font-light leading-[1.05] tracking-tight text-white"
        >
          {welcome.headline}
          <br />
          <span className="bg-gradient-to-r from-rose-200 via-rose-100 to-violet-200 bg-clip-text text-transparent">
            {welcome.headlineAccent}
          </span>
        </motion.h1>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent sm:mt-10"
        />

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-8 max-w-md text-base font-light leading-relaxed text-white/50 sm:mt-10 sm:max-w-lg sm:text-lg"
        >
          {welcome.tagline}
        </motion.p>
      </div>

      <ScrollIndicator label={welcome.scrollHint} />
    </section>
  );
}
