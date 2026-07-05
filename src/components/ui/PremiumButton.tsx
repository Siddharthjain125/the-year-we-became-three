"use client";

import { motion } from "framer-motion";

interface PremiumButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

export function PremiumButton({ children, onClick, href }: PremiumButtonProps) {
  const className =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 text-sm font-medium tracking-wide text-white shadow-[0_4px_24px_rgba(212,175,55,0.25)] transition-shadow hover:shadow-[0_6px_32px_rgba(212,175,55,0.35)] sm:px-10 sm:py-4 sm:text-base";

  const inner = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-rose-gold via-champagne to-rose-gold bg-[length:200%_100%] transition-[background-position] duration-500 group-hover:bg-right" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          →
        </motion.span>
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileTap={{ scale: 0.97 }}
        className={className}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {inner}
    </motion.button>
  );
}
