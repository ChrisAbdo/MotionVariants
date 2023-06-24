"use client";

import React, { useEffect, useState } from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/shared/mode-toggle";
import { NavDropdown } from "@/components/shared/nav-dropdown";
import NavLinks from "@/components/shared/nav-links";
import VVLogo from "@/components/shared/vv-logo";

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b" : ""
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12 z-50">
          <VVLogo />
          <div className="hidden lg:flex lg:gap-x-12">
            <NavLinks />
          </div>
        </div>
        <div className="flex lg:hidden z-50">
          <NavDropdown />
        </div>
        <div className="hidden lg:flex space-x-4 z-50">
          <Button className="flex items-center">
            <GitHubLogoIcon className="h-4 w-4 mr-2" />
            Star on GitHub
          </Button>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
