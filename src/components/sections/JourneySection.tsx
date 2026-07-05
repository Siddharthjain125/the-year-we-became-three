"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { ElegantDivider } from "@/components/ui/ElegantDivider";

export function JourneySection() {
  const { journey } = siteContent;

  return (
    <SectionWrapper id="journey" background="blush">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <SectionHeader
            eyebrow={journey.eyebrow}
            title={journey.title}
            centered={false}
          />

          <div className="space-y-6">
            {journey.paragraphs.map((text, i) => (
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

          <ElegantDivider className="mt-10 !justify-start" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 aspect-[4/5] w-full lg:order-2"
        >
          <ParallaxImage
            src={journey.image}
            alt={journey.imageAlt}
            className="h-full w-full"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
