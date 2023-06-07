"use client";

import { AnimatePresence, motion } from "framer-motion";

import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_UP_ANIMATION_VARIANTS,
  MULTIDIRECTION_SLIDE_VARIANTS,
} from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function Example() {
  const { ref: refAbout, inView: inViewAbout } = useInView({
    triggerOnce: false,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
  });
  const { ref: refMultiSlide, inView: inViewMulti } = useInView({
    triggerOnce: false,
  });

  const sentence = "This is an example of a fade in animation.";
  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // duration in seconds
      },
    },
  };

  const words = sentence.split(" ");

  return (
    <div className="bg-white">
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
          <div className="py-24 sm:py-32">
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
                    className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                  >
                    Beautiful Framer Motion Animations
                  </motion.h1>
                  <motion.p
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className="mt-6 text-lg leading-8 text-gray-600"
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
                          src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
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
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <motion.h2
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                Everything you need
              </motion.h2>
              <motion.p
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                Beautiful Framer Motion Animations
              </motion.p>
              <motion.p
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="mt-6 text-lg leading-8 text-gray-600"
              >
                This example contains the fade up animation variant.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
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

            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <figure>
                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                  <motion.div
                    ref={ref2}
                    initial="hidden"
                    animate={inView2 ? "show" : "hidden"}
                    variants={{
                      hidden: {},
                      show: {
                        transition: {
                          staggerChildren: 0.15,
                        },
                      },
                    }}
                  >
                    {words.map((word, i) => (
                      <motion.span
                        key={`${word}-${i}`}
                        variants={wordVariants}
                        initial="hidden"
                        animate={inView2 ? "visible" : "hidden"}
                      >
                        {word}{" "}
                      </motion.span>
                    ))}
                  </motion.div>
                </blockquote>
              </figure>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="relative -z-10 mt-32 px-6 lg:px-8">
          <div
            className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
              style={{
                clipPath:
                  "polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center overflow-hidden">
            <motion.div
              ref={refMultiSlide}
              initial="hidden"
              animate={inViewMulti ? "show" : "hidden"}
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
                initial="hidden"
                animate={inViewMulti ? "visible" : "hidden"}
                variants={MULTIDIRECTION_SLIDE_VARIANTS}
                transition={{ duration: 1 }}
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                Multi Direction
              </motion.h1>

              <motion.h1
                initial="right"
                animate={inViewMulti ? "visible" : "hidden"}
                variants={MULTIDIRECTION_SLIDE_VARIANTS}
                transition={{ duration: 1 }}
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                Slide
              </motion.h1>

              <motion.h1
                initial="hidden"
                animate="visible"
                variants={MULTIDIRECTION_SLIDE_VARIANTS}
                transition={{ duration: 1 }}
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                Example
              </motion.h1>
            </motion.div>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Get started now! Sorry, this one does not re-render correctly on
              scroll.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/text-variants">
                <Button>Get Started</Button>
              </Link>

              <Link href="/about">
                <Button variant="secondary">
                  Learn More &nbsp;<span aria-hidden="true">→</span>
                </Button>
              </Link>
            </div>
          </div>
          <div
            className="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
