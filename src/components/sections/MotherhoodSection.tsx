"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { ElegantDivider } from "@/components/ui/ElegantDivider";

export function MotherhoodSection() {
  const { motherhood } = siteContent;

  return (
    <SectionWrapper id="motherhood" background="blush">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader
            eyebrow={motherhood.eyebrow}
            title={motherhood.title}
            centered={false}
          />

          <div className="space-y-6">
            {motherhood.paragraphs.map((text, i) => (
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
          className="relative aspect-[4/5] w-full"
        >
          <ParallaxImage
            src={motherhood.image}
            alt={motherhood.imageAlt}
            className="h-full w-full"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
