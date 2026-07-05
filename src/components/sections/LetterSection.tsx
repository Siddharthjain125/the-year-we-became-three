"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function LetterSection() {
  const { letter } = siteContent;

  return (
    <SectionWrapper id="letter" background="warm">
      <div className="mx-auto max-w-2xl">
        <SectionHeader eyebrow={letter.eyebrow} title={letter.title} />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-4 overflow-hidden rounded-2xl bg-[#FFFDF8] p-8 shadow-[0_12px_48px_rgba(212,175,55,0.1),0_4px_16px_rgba(0,0,0,0.04)] ring-1 ring-champagne/20 sm:rounded-3xl sm:p-10 md:p-12"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 31px, rgba(212,175,55,0.06) 31px, rgba(212,175,55,0.06) 32px)",
          }}
        >
          {/* Paper texture overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,200,210,0.08),transparent_60%)]" />

          <div className="relative space-y-6 sm:space-y-7">
            {letter.paragraphs.map((text, i) => {
              const isGreeting = text.startsWith("My dearest");
              const isClosing = text.startsWith("Happy birthday");

              return (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.07 }}
                  className={`leading-[1.9] ${
                    isGreeting
                      ? "font-display text-xl text-charcoal sm:text-2xl"
                      : isClosing
                        ? "font-display text-lg italic text-blush-dark sm:text-xl"
                        : "text-base font-light text-charcoal/75 sm:text-lg"
                  }`}
                >
                  {text}
                </motion.p>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative mt-10 border-t border-champagne/20 pt-8"
          >
            <p className="text-base text-charcoal/60">{letter.signOff}</p>
            <p className="font-signature mt-2 text-3xl text-blush-dark sm:text-4xl">
              {letter.signature}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
