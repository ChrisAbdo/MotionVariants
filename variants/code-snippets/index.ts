export const FADE_DOWN_CODE = `import { motion } from "framer-motion";

export function FadeDown() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
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
      <motion.h1
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Fade Down
      </motion.h1>
      <motion.p
        className="mt-6 text-center md:text-2xl"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Animation Preview
      </motion.p>
      <motion.div
        className="mx-auto mt-6 flex items-center justify-center space-x-5"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        If you&apos;re seeing this, thank you for trying my project out! - C.J.A
      </motion.div>
    </motion.div>
  );
}
`;

export const FADE_UP_CODE = `import { motion } from "framer-motion";

export function FadeUpStagger() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
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
      <motion.h1
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        Fade Up
      </motion.h1>
      <motion.p
        className="mt-6 text-center md:text-2xl"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        Animation Preview
      </motion.p>
      <motion.div
        className="mx-auto mt-6 flex items-center justify-center space-x-5"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        <HeartFilledIcon />
      </motion.div>
    </motion.div>
  );
}
`;

export const MULTIDIRECTION_SLIDE_CODE = `import { motion } from "framer-motion";

export function MultiDirectionSlide() {
  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
  };
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
`;

export const STAGGERED_FADE_IN_CODE = `
import React from "react";
import { motion } from "framer-motion";

export default function StaggeredFade() {
  const sentence = "Staggered Fade In";
  const wordVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({ y: 0, opacity: 1, transition: { delay: i * 0.1 } }),
  };
  const words = sentence.split(" ");
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
    >
      {words.map((word, i) => (
        <motion.span key={word} variants={wordVariants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}
`;

export const STAGGERED_PULL_UP_CODE = `import { motion } from "framer-motion";

export function LetterPullUp() {
  const words = "Staggered Letter Pull Up";
  const letters = words.split("");

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

  return (
    <div className="flex justify-center">
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={i}
          className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}
`;

export const RIPPLE_PULL_UP_CODE = `import { motion } from "framer-motion";

export function WordPullUp() {
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

  const words = "Word Pull Up";
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          style={{ display: "inline-block", paddingRight: "15px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
`;

export const VELOCITY_CODE = `// this comes from the framer-motion docs, just ported to twcss
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

export function VelocityScroll() {
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
    const x = useTransform(baseX, (v) => $ {wrap(-20, -45, v)}%);

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
  return (
    <section>
      <ParallaxText baseVelocity={5}>Variant Vault</ParallaxText>
      <ParallaxText baseVelocity={-5}>Variant Vault</ParallaxText>
    </section>
  );
}
`;

export const ROTATE_WORDS_CODE = `import { AnimatePresence, motion } from "framer-motion";
export default function RotateText() {
  const words = ["ROTATE", "BETWEEN", "TEXT"];
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
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        {words[index]}
      </motion.h1>
    </AnimatePresence>
  );
}
`;

export const TYPING_EFFECT_CODE = `import { motion } from "framer-motion";

export function TypingEffect() {
  const text = "Typing Effect";
  const [displayedText, setDisplayedText] = React.useState("");
  const [i, setI] = React.useState(0);

  React.useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, 200);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i]);

  return (
    <h1 className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]">
      {displayedText ? displayedText : "Typing Effect"}
    </h1>
  );
}
`;

export const SEPARATE_CODE = `import { motion } from "framer-motion";

export function SeparateAway() {
  const separate = {
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
        variants={separate}
        initial="hidden"
        animate="visible"
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Separate
      </motion.h1>
      <motion.h1
        custom={1}
        variants={separate}
        initial="hidden"
        animate="visible"
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Away
      </motion.h1>
    </div>
  );
}
`;

export const GRADUAL_SPACING_CODE = `import { AnimatePresence, motion } from "framer-motion";

export function GradualSpacing() {
  const text = "Gradual Spacing";
  const gradual = {
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
            variants={gradual}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
`;

export const BLUR_IN_CODE = `import { motion } from "framer-motion";

export function BlurIn() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants1}
      className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
    >
      Blur In
    </motion.h1>
  );
}
`;

export const SLIGHT_FLIP_CODE = `import { AnimatePresence, motion } from "framer-motion";

export function SlightFlip() {
  const word = "Slight Flip Text";
  const variants1 = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  };
  return (
    <div className="flex space-x-2 justify-center">
      <AnimatePresence>
        {word.split("").map((char, i) => (
          <motion.span
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants1}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
            style={{ transformOrigin: "50% 50%" }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
`;

export const WAVY_TEXT_CODE = `import { motion, AnimatePresence } from "framer-motion";

export function WavyText() {
  const word = "Wavy Text";
  const variants1 = {
    hidden: { y: 10 },
    visible: { y: -10 },
  };
  return (
    <div className="flex space-x-2 justify-center">
      <AnimatePresence>
        {word.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants1}
            transition={{ yoyo: Infinity, duration: 0.5, delay: i * 0.2 }}
            className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
          >
            {char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}
`;
