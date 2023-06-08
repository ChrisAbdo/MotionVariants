import { FADE_IN_ANIMATION_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import React from "react";

export default function FadeIn() {
  const words = "staggered-pullup";
  const letters = words.split("");
  return (
    <div className="flex justify-center">
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={FADE_IN_ANIMATION_VARIANTS}
          initial="initial"
          animate="animate"
          custom={i}
          className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        >
          {letter}
        </motion.h1>
      ))}
    </div>
  );
}
