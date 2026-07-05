"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const HEARTS = [
  { x: "10%", delay: 0, duration: 8, size: 14 },
  { x: "25%", delay: 2, duration: 10, size: 10 },
  { x: "45%", delay: 1, duration: 9, size: 12 },
  { x: "65%", delay: 3, duration: 11, size: 11 },
  { x: "80%", delay: 0.5, duration: 8.5, size: 13 },
  { x: "92%", delay: 2.5, duration: 10, size: 9 },
];

export function FloatingHearts() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {HEARTS.map((heart, i) => (
        <motion.span
          key={i}
          className="absolute text-blush/30"
          style={{
            left: heart.x,
            fontSize: heart.size,
            bottom: "-5%",
          }}
          animate={{
            y: [0, "-110vh"],
            x: [0, i % 2 === 0 ? 20 : -20],
            opacity: [0, 0.6, 0.6, 0],
            rotate: [0, i % 2 === 0 ? 15 : -15],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  );
}
