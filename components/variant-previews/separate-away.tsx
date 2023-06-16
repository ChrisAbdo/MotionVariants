import { motion } from "framer-motion";
import React from "react";

export default function SeparateAway() {
  const variants1 = {
    hidden: { opacity: 0, y: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      y: custom * 5,
      transition: { duration: 1.5 },
    }),
  };
  return (
    <div>
      <motion.h1
        custom={-1}
        variants={variants1}
        initial="hidden"
        animate="visible"
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Separate
      </motion.h1>
      <motion.h1
        custom={1}
        variants={variants1}
        initial="hidden"
        animate="visible"
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Away
      </motion.h1>
    </div>
  );
}
