"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface WarmCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function WarmCard({
  children,
  className = "",
  delay = 0,
}: WarmCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl border border-blush/20 bg-white p-6 shadow-[0_8px_32px_rgba(212,175,55,0.08),0_2px_8px_rgba(0,0,0,0.04)] sm:rounded-3xl sm:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}
