"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsClient } from "@/hooks/useIsClient";
import { useState } from "react";

interface Particle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  rotation: number;
}

const GOLD_COLORS = [
  "#D4AF37",
  "#C9A962",
  "#E8C872",
  "#F5DEB3",
  "#DAA520",
  "#F0C674",
  "#E6BE8A",
  "#FFD700",
];

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 5 + Math.random() * 4,
    size: 3 + Math.random() * 5,
    color: GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)],
    rotation: Math.random() * 360,
  }));
}

function GoldConfettiParticles() {
  const [particles] = useState(() => generateParticles(50));

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute opacity-70"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
            borderRadius: "1px",
          }}
          initial={{ y: -20, rotate: p.rotation, opacity: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            rotate: [p.rotation, p.rotation + 360],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}

export function GoldConfetti() {
  const reducedMotion = useReducedMotion();
  const isClient = useIsClient();

  if (reducedMotion || !isClient) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <GoldConfettiParticles />
    </div>
  );
}
