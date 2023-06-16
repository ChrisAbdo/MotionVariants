import { motion } from "framer-motion";
import React from "react";

export default function BlinkingText() {
  const variants1 = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <motion.h1
      initial="visible"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 0.5, repeat: Infinity }}
      variants={variants1}
      className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
    >
      Blinking Text
    </motion.h1>
  );
}
