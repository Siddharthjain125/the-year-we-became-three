"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WarmCard } from "@/components/ui/WarmCard";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

export function BecomingThreeSection() {
  const { becomingThree } = siteContent;

  return (
    <SectionWrapper id="becoming-three" background="lavender">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full"
        >
          <ParallaxImage
            src={becomingThree.image}
            alt={becomingThree.imageAlt}
            className="h-full w-full"
          />
        </motion.div>

        <div>
          <SectionHeader
            eyebrow={becomingThree.eyebrow}
            title={becomingThree.title}
            centered={false}
          />

          <div className="space-y-6">
            {becomingThree.paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                className="text-base font-light leading-[1.85] text-charcoal/70 sm:text-lg"
              >
                {text}
              </motion.p>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {becomingThree.milestones.map((item, i) => (
              <WarmCard key={item.label} delay={0.3 + i * 0.08} className="!p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-gold/80">
                  {item.label}
                </p>
                <p className="mt-1.5 font-display text-xl text-charcoal sm:text-2xl">
                  {item.value}
                </p>
              </WarmCard>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
