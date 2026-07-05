"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  background?: "ivory" | "blush" | "lavender" | "warm";
}

const BACKGROUNDS = {
  ivory:
    "bg-ivory bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(245,200,210,0.15),transparent)]",
  blush:
    "bg-blush-light bg-[radial-gradient(ellipse_70%_60%_at_80%_20%,rgba(212,175,55,0.08),transparent)]",
  lavender:
    "bg-lavender-light bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(200,180,220,0.12),transparent)]",
  warm: "bg-gradient-to-b from-ivory via-blush-light/30 to-ivory",
};

export function SectionWrapper({
  id,
  children,
  className = "",
  background = "ivory",
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [40, 0, 0, -30]);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative flex min-h-svh w-full items-center justify-center overflow-hidden px-5 py-24 sm:px-8 md:px-12 lg:px-16 ${BACKGROUNDS[background]} ${className}`}
    >
      <motion.div
        style={reducedMotion ? undefined : { opacity, y }}
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        {children}
      </motion.div>
    </section>
  );
}
