"use client";

import { motion } from "framer-motion";

export function ScrollIndicator({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
        {label}
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="h-10 w-[1px] bg-gradient-to-b from-white/0 via-white/50 to-white/0"
      />
    </motion.div>
  );
}
