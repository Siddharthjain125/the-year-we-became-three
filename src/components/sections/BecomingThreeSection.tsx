"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

export function BecomingThreeSection() {
  const { becomingThree } = siteContent;

  return (
    <SectionWrapper
      id="becoming-three"
      gradient="linear-gradient(180deg, #0a0a0f 0%, #12101a 50%, #0f0d14 100%)"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-violet-300/60"
          >
            {becomingThree.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[clamp(2rem,6vw,3.5rem)] font-light leading-tight tracking-tight text-white"
          >
            {becomingThree.title}
          </motion.h2>

          <div className="mt-8 space-y-5">
            {becomingThree.paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                className="text-sm font-light leading-relaxed text-white/50 sm:text-base"
              >
                {text}
              </motion.p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
            {becomingThree.milestones.map((item, i) => (
              <GlassCard key={item.label} delay={0.3 + i * 0.08} className="!p-4 sm:!p-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
                  {item.label}
                </p>
                <p className="mt-1 font-display text-xl text-white/90 sm:text-2xl">
                  {item.value}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full sm:aspect-[3/4]"
        >
          <ParallaxImage
            src={becomingThree.image}
            alt={becomingThree.imageAlt}
            className="h-full w-full shadow-2xl shadow-violet-900/20"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
