"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const SPARKLES = [
  { top: "8%", left: "12%", size: 3, delay: 0 },
  { top: "15%", left: "78%", size: 2, delay: 1.2 },
  { top: "35%", left: "90%", size: 3, delay: 0.6 },
  { top: "55%", left: "5%", size: 2, delay: 2 },
  { top: "72%", left: "85%", size: 4, delay: 0.3 },
  { top: "88%", left: "20%", size: 2, delay: 1.8 },
  { top: "25%", left: "45%", size: 2, delay: 2.5 },
  { top: "65%", left: "55%", size: 3, delay: 1 },
];

export function Sparkles() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {SPARKLES.map((sparkle, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-champagne/60"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: sparkle.size,
            height: sparkle.size,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
