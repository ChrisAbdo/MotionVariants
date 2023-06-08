export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.1 },
};

export const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const MULTIDIRECTION_SLIDE_VARIANTS = {
  hidden: { opacity: 0, x: "-25vw" },
  visible: { opacity: 1, x: 0 },
  right: { opacity: 0, x: "25vw" },
};

export const PAGE_SLIDE_VARIANTS = {
  initial: {
    opacity: 1,
    y: "0%",
    zIndex: 1, // Ensure it starts on top
    backgroundColor: "black",
  },
  animate: {
    opacity: 0,
    y: "-130%",
    scale: 1.01,
    backgroundColor: "black",
    transition: {
      delay: 2,
      duration: 1.0,
      zIndex: { delay: 1.0, value: -1 }, // Delay the zIndex change until after the animation
      when: "afterChildren", // animate children first
    },
  },
  exit: {
    opacity: 1,
    y: "-100%",
    zIndex: 1, // Ensure it goes back on top
    transition: {
      duration: 1,
    },
  },
};

export const FADE_IN_ANIMATION_VARIANTS = {
  initial: { y: 100, opacity: 0 },
  animate: (i: any) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
    },
  }),
};
