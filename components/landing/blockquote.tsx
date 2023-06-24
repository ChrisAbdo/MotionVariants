"use client";

import { motion, useInView } from "framer-motion";
import React from "react";

export default function Blockquote() {
  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
      },
    }),
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const wordsfade = "Variant Vault";
  const lettersfade = wordsfade.split("");
  return (
    <div className="relative mx-auto lg:mx-0">
      <figure>
        <blockquote className="mt-6 text-lg font-semibold  sm:text-xl sm:leading-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            viewport={{ once: false }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <div className="flex justify-center">
              {lettersfade.map((letter, i) => (
                <motion.h1
                  key={i}
                  variants={pullupVariant}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  custom={i}
                  className="text-white text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.h1>
              ))}
            </div>
          </motion.div>
        </blockquote>
      </figure>
    </div>
  );
}
