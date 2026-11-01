"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface FeatherDriftProps {
  isDispersed: boolean;
}

export default function FeatherDrift({ isDispersed }: FeatherDriftProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible flex items-center justify-center z-35">
      {/* 6 Floating Raven Feathers */}
      {[...Array(6)].map((_, i) => {
        const spreadAngle = (i / 6) * 2 * Math.PI;
        const disperseDist = 180 + (i % 3) * 60;
        const targetX = Math.cos(spreadAngle) * disperseDist;
        const targetY = Math.sin(spreadAngle) * (disperseDist * 0.7);

        return (
          <motion.div
            key={`feather-${i}`}
            initial={false}
            animate={{
              x: isDispersed ? targetX : Math.cos(spreadAngle) * 35,
              y: isDispersed ? targetY : Math.sin(spreadAngle) * 45 + 80,
              rotate: isDispersed ? (i * 65) % 360 : (i * 25) % 180,
              scale: isDispersed ? 0.7 + (i % 2) * 0.3 : 0.3,
              opacity: isDispersed ? 0.85 : 0.15,
            }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 15,
              delay: i * 0.04,
            }}
            className="absolute w-8 h-8 filter drop-shadow-[0_0_8px_rgba(255,38,59,0.4)]"
          >
            <Image
              src="/assets/itachi/crow-feather.png"
              alt="Raven Feather"
              width={32}
              height={32}
              className="object-contain"
            />
          </motion.div>
        );
      })}

      {/* 8 Glowing Crimson Chakra Embers */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * 2 * Math.PI;
        const dist = 140 + (i % 4) * 50;

        return (
          <motion.div
            key={`ember-${i}`}
            initial={false}
            animate={{
              x: isDispersed ? Math.cos(angle) * dist : Math.cos(angle) * 20,
              y: isDispersed ? Math.sin(angle) * dist : Math.sin(angle) * 20 + 90,
              scale: isDispersed ? [1, 1.5, 1] : 0.5,
              opacity: isDispersed ? [0.2, 0.9, 0.4] : 0.1,
            }}
            transition={{
              duration: isDispersed ? 1.4 : 2,
              repeat: isDispersed ? Infinity : 0,
              delay: i * 0.08,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_12px_#ff263b]"
          />
        );
      })}
    </div>
  );
}

