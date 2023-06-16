import { motion } from "framer-motion";
import React from "react";

export default function StrikeText() {
  const variants1 = {
    hidden: { scaleX: 0, opacity: 1, originX: 0 },
    visible: { scaleX: 1, opacity: 1 },
    exit: { scaleX: 0, opacity: 0, originX: 1 },
  };
  return (
    <>
      <div className="relative">
        <h1 className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]">
          Strike Text
        </h1>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants1}
          transition={{ duration: 0.5 }}
          className="absolute w-full h-1 bg-black top-1/2 transform -translate-y-1/2"
        />
      </div>
    </>
  );
}
