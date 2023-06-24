"use client";

import React, { useEffect, useState } from "react";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/shared/mode-toggle";
import { NavDropdown } from "@/components/shared/nav-dropdown";
import NavLinks from "@/components/shared/nav-links";
import VVLogo from "@/components/shared/vv-logo";
import Link from "next/link";
import { motion } from "framer-motion";
import NavSheet from "./nav-sheet";

export default function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Call handleScroll on initial render
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-2xl border-b" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", bounce: 0.25 }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12 z-50">
          <VVLogo />
          <div className="hidden lg:flex lg:gap-x-12">
            <NavLinks />
          </div>
        </div>
        <div className="flex lg:hidden z-50">
          {/* <NavDropdown /> */}
          <NavSheet />
        </div>
        <div className="hidden lg:flex space-x-1 z-50">
          <Link
            href="https://www.twitter.com/abdo_eth"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="flex items-center" variant="ghost" size="icon">
              <TwitterLogoIcon className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="https://www.github.com/chrisabdo/motionvariants"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="flex items-center" variant="ghost" size="icon">
              <GitHubLogoIcon className="h-4 w-4" />
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </motion.header>
  );
}
