"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { PAGE_SLIDE_VARIANTS } from "@/lib/constants";

export default function SlideUp() {
  const [showText, setShowText] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start("animate");
      setShowText(true);
    };

    sequence();
  }, [controls]);

  return (
    <div>
      {!showText && (
        <motion.div
          className="z-0 w-1/2 text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={PAGE_SLIDE_VARIANTS}
          initial="initial"
          animate={controls}
          exit="exit"
        >
          Slide Up
        </motion.div>
      )}

      {showText && (
        <div className="z-10 w-1/2 text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]">
          Text after slide up
        </div>
      )}
    </div>
  );
}
