"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/content";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Sparkles } from "@/components/ui/Sparkles";
import { ElegantDivider } from "@/components/ui/ElegantDivider";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function HeroSection() {
  const { hero } = siteContent;
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-svh w-full flex-col overflow-hidden bg-ivory"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(245,200,210,0.35),transparent)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_90%_80%,rgba(212,175,55,0.1),transparent)]" />
      <Sparkles />

      {/* Hero image — top portion on mobile, side on desktop */}
      <div className="relative mx-auto mt-8 h-[42vh] w-full max-w-lg px-5 sm:mt-12 sm:h-[48vh] sm:max-w-xl md:absolute md:right-8 md:top-1/2 md:mt-0 md:h-[70vh] md:max-w-md md:-translate-y-1/2 lg:right-16 lg:max-w-lg xl:max-w-xl">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(212,175,55,0.15),0_8px_24px_rgba(0,0,0,0.08)] ring-1 ring-champagne/30"
        >
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 90vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory/20 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Text content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-5 pb-16 pt-6 sm:px-8 md:max-w-[55%] md:pl-12 md:pr-8 lg:pl-20 lg:pr-12">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-rose-gold sm:text-xs"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display text-[clamp(2rem,8vw,4rem)] font-medium leading-[1.1] tracking-tight text-charcoal"
        >
          {hero.headline}{" "}
          <span aria-hidden="true">{hero.headlineEmoji}</span>
        </motion.h1>

        <ElegantDivider className="my-7 sm:my-8 md:!justify-start" />

        <div className="space-y-1">
          {hero.lines.map((line, i) => (
            <motion.p
              key={line}
              custom={2 + i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base font-light leading-relaxed text-charcoal/70 sm:text-lg"
            >
              {line}
            </motion.p>
          ))}

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-[clamp(2rem,6vw,3rem)] font-semibold italic text-blush-dark"
          >
            {hero.highlight}
          </motion.p>
        </div>

        <div className="mt-6 space-y-2 sm:mt-8">
          {hero.closing.map((line, i) => (
            <motion.p
              key={line}
              custom={5 + i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base font-light leading-relaxed text-charcoal/65 sm:text-lg"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <PremiumButton href="#journey">{hero.buttonText}</PremiumButton>
        </div>
      </div>
    </section>
  );
}
