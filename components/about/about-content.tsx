"use client";

import { Cloud } from "lucide-react";
import { motion } from "framer-motion";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import AboutFooter from "@/components/about/footer";

const features = [
  {
    name: "2M+ Weekly Framer Motion Users",
    description:
      "Framer Motion is one of the most popular animation library for React. Find some quick and easy to use animations for your next project.",
    icon: Cloud,
  },
  {
    name: "Easy Integration",
    description:
      "All the variants are super easy to integrate into your own project. Just copy and paste.",
    icon: Cloud,
  },
  {
    name: "Beautiful Animations",
    description:
      "Hand crafted animations that are simple, subtle, and beautiful.",
    icon: Cloud,
  },
  {
    name: "Free to use",
    description:
      "All the animations are free to use for personal and commercial projects.",
    icon: Cloud,
  },
  {
    name: "Easy to customize",
    description:
      "Easily customize any variant to match what you are looking for.",
    icon: Cloud,
  },
  {
    name: "Made with Framer Motion and Tailwind CSS",
    description:
      "All the animations are made with Framer Motion and Tailwind CSS. However, you are able to easily switch to any other CSS framework or library.",
    icon: Cloud,
  },
];

export default function AboutContent() {
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
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <motion.h1
              className="text-base font-semibold leading-7 text-indigo-400"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Everything you need
            </motion.h1>
            <motion.p
              className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Beautiful Framer Motion Animations
            </motion.p>
            <motion.div
              className="mt-6 text-lg leading-8"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Ready to use animations for your next project. Just copy and
              paste.
            </motion.div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.img
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              src="/landing.jpeg"
              alt="App screenshot"
              className="rounded-xl ring-1 ring-white/10"
              width={2432}
              height={1442}
            />
          </div>
        </div>
        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8"
        >
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 "
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </motion.div>
  );
}
