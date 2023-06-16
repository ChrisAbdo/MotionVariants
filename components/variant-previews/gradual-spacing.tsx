import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function GradualSpacing() {
  const text = "Gradual Spacing";
  const variants1 = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="flex space-x-1 justify-center">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants1}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
          >
            {char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
