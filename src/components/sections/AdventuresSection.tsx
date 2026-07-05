"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function AdventuresSection() {
  const { adventures } = siteContent;

  return (
    <SectionWrapper id="adventures" background="warm">
      <SectionHeader
        eyebrow={adventures.eyebrow}
        title={adventures.title}
        subtitle={adventures.subtitle}
      />

      {/* Mobile: horizontal scroll */}
      <div className="mt-4 -mx-5 flex gap-5 overflow-x-auto px-5 pb-6 snap-x snap-mandatory scrollbar-hide sm:-mx-8 sm:px-8 md:hidden">
        {adventures.images.map((image, i) => (
          <motion.div
            key={image.src + i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.06 }}
            className="w-[78vw] shrink-0 snap-center"
          >
            <AdventureCard image={image} />
          </motion.div>
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="mt-4 hidden gap-5 md:grid md:grid-cols-3 md:gap-6">
        {adventures.images.map((image, i) => (
          <motion.div
            key={image.src + i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.06 }}
            className={i === 0 || i === 5 ? "md:col-span-2" : ""}
          >
            <AdventureCard image={image} tall={i === 0 || i === 3} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function AdventureCard({
  image,
  tall = false,
}: {
  image: { src: string; alt: string; caption: string };
  tall?: boolean;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_32px_rgba(212,175,55,0.1),0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-champagne/15 sm:rounded-3xl">
      <div
        className={`relative w-full overflow-hidden ${tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 78vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-charcoal/10 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <p className="text-sm font-light leading-snug text-white/90 sm:text-base">
          {image.caption}
        </p>
      </div>
    </div>
  );
}
