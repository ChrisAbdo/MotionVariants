"use client";

import React from "react";
import Copy from "./copy";
import { motion, useInView } from "framer-motion";
import AllVariants from "./all-variants";

export default function Intro() {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <div>
      <motion.div
        initial="hidden"
        ref={ref}
        animate={isInView ? "show" : "hidden"}
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
          Variant Vault Usage Guide
        </motion.h1>
        <motion.p
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="mt-6 text-lg leading-8"
        >
          Using Variant Vault is easy. All you need to do is install Framer
          Motion and copy and paste the code into your project.{" "}
        </motion.p>

        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="w-full mt-10 flex items-center justify-center gap-x-6 "
        >
          <div className="not-prose my-6 rounded-2xl bg-primary-foreground w-full">
            <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-2 rounded-t-lg border bg-primary-foreground px-4">
              <h3 className="mr-auto pt-3 text-xs font-semibold ">
                Step 1: Install Framer Motion
              </h3>
            </div>
            <div className="group border-l border-r border-b rounded-b-lg">
              <div className="relative">
                <pre className="overflow-x-auto p-4 text-xs">
                  <code className="language-bash">
                    <span>
                      <span>yarn add framer-motion</span>
                    </span>
                  </code>
                </pre>

                <Copy />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="w-full mt-10"
        >
          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="w-full mt-10 gap-x-6 "
          >
            <p className="mt-4 text-lg">
              Here are all the variant definitions in case you want to make a
              constants file.
            </p>
            <br />
            <AllVariants />
          </motion.div>
        </motion.div>
      </motion.div>
      {/* <h2 className="text-2xl font-bold leading-10 tracking-tight">
      </h2> */}

      <div className="mb-12">
        <p className="mt-4 text-lg"></p>
      </div>
    </div>
  );
}
