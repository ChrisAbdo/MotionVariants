"use client";

import { AnimatePresence, motion } from "framer-motion";

import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_IN_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
  MULTIDIRECTION_SLIDE_VARIANTS,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { Cloud } from "lucide-react";

const features = [
  {
    name: "2M+ Weekly Framer Motion Users.",
    description:
      "Framer Motion is one of the most popular animation library for React. Find some quick and easy to use animations for your next project.",
    icon: Cloud,
  },
  {
    name: "Easy Integration.",
    description:
      "All the variants are super easy to integrate into your own project. Just copy and paste.",
    icon: Cloud,
  },
  {
    name: "Beautiful Animations.",
    description:
      "Hand crafted animations that are simple, subtle, and beautiful.",
    icon: Cloud,
  },
];

export default function Example() {
  const { ref: refAbout, inView: inViewAbout } = useInView({
    triggerOnce: false,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
  });
  const { ref: refBottom, inView: inViewBottom } = useInView({
    triggerOnce: false,
  });

  const wordsfade = "variant-vault";
  const lettersfade = wordsfade.split("");

  return (
    <div className="min-h-screen">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-12 sm:py-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
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
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className="text-4xl font-bold tracking-tight sm:text-6xl"
                  >
                    Beautiful Framer Motion Animations
                  </motion.h1>
                  <motion.p
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className="mt-6 text-lg leading-8"
                  >
                    A collection of handmade, free, and ready to use animations
                    & variants for your next project.
                  </motion.p>

                  <motion.div
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className="mt-10 flex items-center justify-center gap-x-6"
                  >
                    <Link href="/text-variants">
                      <Button>Get started</Button>
                    </Link>

                    <Link href="/about">
                      <Button variant="ghost">
                        Learn more &nbsp;<span aria-hidden="true">→</span>
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
              <div className="mt-16 flow-root sm:mt-24">
                <motion.div
                  className="rounded-md"
                  initial={{ y: 100, opacity: 0 }} // Image starts from 100px below and fully transparent
                  animate={{ y: 0, opacity: 1 }} // Image ends at its original position and fully opaque
                  transition={{ type: "spring", stiffness: 50, damping: 20 }} // transition specifications
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <img
                          src="/landing.jpeg"
                          alt="App screenshot"
                          width={2432}
                          height={1442}
                          className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>

        {/* Feature section */}
        <motion.div
          ref={refAbout}
          initial="hidden"
          animate={inViewAbout ? "show" : "hidden"}
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
          <div className="mx-auto mt-12 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <motion.h2
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                Everything you need
              </motion.h2>
              <motion.p
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Beautiful Framer Motion Animations
              </motion.p>
              <motion.p
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="mt-6 text-lg leading-8"
              >
                This example contains the fade up animation variant.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden  px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
            <div
              className="absolute -left-80 -top-56 transform-gpu blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div
              className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>

            <div className="relative mx-auto lg:mx-0">
              <figure>
                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                  <motion.div
                    ref={ref2}
                    initial="hidden"
                    animate={inView2 ? "show" : "hidden"}
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
                          variants={FADE_IN_ANIMATION_VARIANTS}
                          initial="initial"
                          animate={inView2 ? "animate" : "initial"}
                          custom={i}
                          className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
                        >
                          {letter}
                        </motion.h1>
                      ))}
                    </div>
                  </motion.div>
                </blockquote>
              </figure>
            </div>
          </div>
        </div>

        <div className="overflow-hidden py-24 sm:py-32 mt-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <motion.div
                    ref={refBottom}
                    initial="hidden"
                    animate={inViewBottom ? "show" : "hidden"}
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
                    <motion.h2
                      variants={FADE_UP_ANIMATION_VARIANTS}
                      className="text-base font-semibold leading-7 text-indigo-600"
                    >
                      Get started quickly
                    </motion.h2>
                    <motion.p
                      variants={FADE_UP_ANIMATION_VARIANTS}
                      className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                      Beautiful Framer Motion Animations
                    </motion.p>
                    <motion.p
                      variants={FADE_UP_ANIMATION_VARIANTS}
                      className="mt-6 text-lg leading-8 "
                    >
                      Ready to use animations for your next project. Just copy
                      and paste.
                    </motion.p>

                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                      {features.map((feature) => (
                        <motion.div
                          key={feature.name}
                          variants={FADE_DOWN_ANIMATION_VARIANTS}
                          className="relative pl-9"
                        >
                          <dt className="inline font-semibold">
                            <feature.icon
                              className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                              aria-hidden="true"
                            />
                            {feature.name}
                          </dt>{" "}
                          <dd className="inline">{feature.description}</dd>
                        </motion.div>
                      ))}
                    </dl>
                  </motion.div>
                </div>
              </div>
              <img
                src="/landing.jpeg"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
