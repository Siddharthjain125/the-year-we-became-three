"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  gradient?: string;
}

export function SectionWrapper({
  id,
  children,
  className = "",
  gradient,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -40]);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative flex min-h-svh w-full items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-12 lg:px-16 ${className}`}
    >
      {gradient && (
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: gradient }}
        />
      )}
      <motion.div
        style={{ opacity, y }}
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        {children}
      </motion.div>
    </section>
  );
}
