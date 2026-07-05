"use client";

import { motion } from "framer-motion";
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

const COLORS = [
  "#f5c6d0",
  "#e8b4bc",
  "#d4a5a5",
  "#c9b1ff",
  "#ffd6e0",
  "#fff5f0",
  "#f0e6ff",
];

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 6 + Math.random() * 4,
    size: 4 + Math.random() * 6,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    rotation: Math.random() * 360,
  }));
}

function ConfettiParticles() {
  const [particles] = useState(() => generateParticles(40));

  return (
    <>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          initial={{ y: -20, rotate: p.rotation, opacity: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            rotate: [p.rotation, p.rotation + 180],
            opacity: [0, 0.7, 0.7, 0],
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

export function Confetti() {
  const isClient = useIsClient();

  if (!isClient) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <ConfettiParticles />
    </div>
  );
}
