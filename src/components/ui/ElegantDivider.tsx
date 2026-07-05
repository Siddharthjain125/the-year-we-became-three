"use client";

import { motion } from "framer-motion";

export function ElegantDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`mx-auto flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-rose-gold/40 sm:w-16" />
      <span className="text-rose-gold/60">✦</span>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-rose-gold/40 sm:w-16" />
    </motion.div>
  );
}
