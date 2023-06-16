import React from "react";
import { motion } from "framer-motion";

export default function RipplePullUp() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
    >
      {"Ripple Pull Up".split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          style={{ display: "inline-block", marginRight: "5px" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
