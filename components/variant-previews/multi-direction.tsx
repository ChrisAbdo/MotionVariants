import { MULTIDIRECTION_SLIDE_VARIANTS } from "@/lib/constants";
import { motion } from "framer-motion";
import React from "react";

export default function MultiDirection({ key }: { key: number }) {
  return (
    <div className="overflow-hidden" key={key}>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Multi Direction
      </motion.h1>

      <motion.h1
        initial="right"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Slide
      </motion.h1>
    </div>
  );
}
