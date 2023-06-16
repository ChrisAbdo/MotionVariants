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

export const RIPPLE_PULL_UP_CODE = `
// DEFINE ANIMATION VARIANT

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

// USE ANIMATION VARIANT

<motion.h1 variants={container} initial="hidden" animate="show">
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
`;

export const VELOCITY_CODE = `
import React from "react";
import { wrap } from "@motionone/utils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */

  // MAKE SURE TO ADD GRAVE ACCENT AROUND THE $ AND CURLY BRACES. I HAD TO REMOVE THEM TO GET THIS TO DISPLAY
  const x = useTransform(baseX, (v) =>  $ {wrap(-20, -45, v)}%);

  const directionFactor = React.useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div
        className="scroller text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        style={{ x }}
      >
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function VelocityScroll() {
  return (
    <section className="mt-12 mb-12 text-center max-w-7xl">
      <ParallaxText baseVelocity={5}>Commend.</ParallaxText>
    </section>
  );
}
`;

export const ROTATE_CODE = `
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function RotateText() {
  const words = ["FIRST", "SECOND", "THIRD"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={words[index]}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {words[index]}
      </motion.h1>
    </AnimatePresence>
  );
}
`;

export const TYPING_EFFECT_CODE = `
import React from "react";

export default function TypingEffect() {
  const text = "Tyyping Effect";
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 200); // Speed of typing effect, 200ms between each character

    // Cleanup function
    return () => {
      clearInterval(typingEffect);
    };
  }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

  return (
    <h1 className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]">
      {displayedText}
    </h1>
  );
}
`;

export const SEPARATE_CODE = `
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
        FIRST
      </motion.h1>
      <motion.h1
        custom={1}
        variants={variants1}
        initial="hidden"
        animate="visible"
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        SECOND
      </motion.h1>
    </div>
  );
}
`;

export const STRIKE_THROUGH_CODE = `
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
          My Heading
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
`;
