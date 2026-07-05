"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteContent } from "@/data/content";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function MemoryGallerySection() {
  const { gallery } = siteContent;

  return (
    <SectionWrapper
      id="gallery"
      gradient="linear-gradient(180deg, #0f0d14 0%, #100e16 50%, #0a0a0f 100%)"
    >
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-rose-300/60"
        >
          {gallery.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[clamp(2rem,6vw,3.5rem)] font-light tracking-tight text-white"
        >
          {gallery.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-4 max-w-md text-sm font-light text-white/40 sm:text-base"
        >
          {gallery.subtitle}
        </motion.p>
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="mt-12 -mx-5 flex gap-4 overflow-x-auto px-5 pb-4 snap-x snap-mandatory scrollbar-hide sm:-mx-8 sm:px-8 md:hidden">
        {gallery.images.map((image, i) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="w-[75vw] shrink-0 snap-center"
          >
            <GalleryCard image={image} />
          </motion.div>
        ))}
      </div>

      {/* Desktop: masonry-style grid */}
      <div className="mt-12 hidden gap-4 md:grid md:grid-cols-3 md:gap-5">
        {gallery.images.map((image, i) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className={i === 0 || i === 5 ? "md:col-span-2 md:row-span-1" : ""}
          >
            <GalleryCard image={image} tall={i === 0 || i === 3} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function GalleryCard({
  image,
  tall = false,
}: {
  image: { src: string; alt: string; caption: string };
  tall?: boolean;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm sm:rounded-3xl">
      <div
        className={`relative w-full overflow-hidden ${tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 75vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <p className="text-xs font-light tracking-wide text-white/70 sm:text-sm">
          {image.caption}
        </p>
      </div>
    </div>
  );
}
