export const FADE_DOWN_CODE = `
// DEFINE ANIMATION VARIANT
  
let FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

// USE ANIMATION VARIANT

<motion.div
  initial="hidden"
  animate="show"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
>
  <motion.h1 variants={FADE_DOWN_ANIMATION_VARIANTS}>
    Your Online Thought Manager
  </motion.h1>

  <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS}>
    Welcome to Eternalog, a place to store your thoughts and
    ideas.
  </motion.p>

  <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
    test
  </motion.div>
</motion.div>
`;

export const FADE_UP_CODE = `
// DEFINE ANIMATION VARIANT

let FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

// USE ANIMATION VARIANT

<motion.div
    initial="hidden"
    animate="show"
    viewport={{ once: true }}
    variants={{
        hidden: {},
        show: {
        transition: {
            staggerChildren: 0.15,
        },
        },
    }}
>
    <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS}>
        Your Online Thought Manager
    </motion.h1>

    <motion.p variants={FADE_UP_ANIMATION_VARIANTS}>
        Welcome to Eternalog, a place to store your thoughts and
        ideas.
    </motion.p>

    <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        test
    </motion.div>
</motion.div>
`;

export const MULTIDIRECTION_SLIDE_CODE = `
// DEFINE ANIMATION VARIANT

const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
};

// USE ANIMATION VARIANT

<div>
    <motion.h1
        initial="hidden"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
    >
        first
    </motion.h1>

    <motion.h1
        initial="right"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
    >
        second
    </motion.h1>

    <motion.h1
        initial="hidden"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
    >
        third
    </motion.h1>
</div>
`;

export const STAGGERED_FADE_IN_CODE = `
// DEFINE ANIMATION VARIANT

const sentence = "Staggered Fade In";

const wordVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({ y: 0, opacity: 1, transition: { delay: i * 0.1 } }),
  };

const words = sentence.split(" ");

// USE ANIMATION VARIANT

<motion.h1 initial="hidden" animate="visible">
    {words.map((word, i) => (
        <motion.span key={word} variants={wordVariants} custom={i}>
            {word}{" "}
        </motion.span>
    ))}
</motion.h1>
`;

export const STAGGERED_PULL_UP_CODE = `
// DEFINE ANIMATION VARIANT

const words = 'staggered pull up';
const letters = words.split('');

// USE ANIMATION VARIANT

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
`;

export const PAGE_SLIDE_CODE = `
"use client";

import React from "react";
import { motion } from "framer-motion";
import { PAGE_SLIDE_VARIANTS } from "@/lib/constants";

export default function SlideUp() {
  // @ts-ignore
  const { setIntroFinished } = React.useContext(VisibilityContext);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, 3000); // Update this to match the total animation time

    return () => clearTimeout(timer);
  }, [setIntroFinished]);

  return (
    <motion.div
      className="space-y-6 h-screen w-screen fixed top-0 left-0 flex flex-col items-center justify-center z-50"
      variants={PAGE_SLIDE_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      Slide Up
    </motion.div>
  );
}
`;


