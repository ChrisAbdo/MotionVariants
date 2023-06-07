"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Laptop, Loader2, Moon, Star, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

const navigation = [
  { name: "Text Variants", href: "/text-variants" },
  { name: "Page Variants", href: "/page-variants" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  let { theme, setTheme } = useTheme();

  let [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  return (
    <header className="z-50">
      <nav
        className="z-50 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <h1 className="z-50 text-2xl tracking-[-0.02em] drop-shadow-sm">
            <Link href="/">MotionVariants</Link>
          </h1>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="z-50 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-primary before:absolute before:left-0 before:bottom-0 text-sm font-semibold leading-6"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex space-x-2">
            <Button variant="outline" className="z-50">
              <Star className="mr-2" size={16} />
              Star on GitHub
            </Button>
            {mounted ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="z-50">
                    {theme === "light" && <Sun size={16} />}
                    {theme === "dark" && <Moon size={16} />}
                    {theme === "system" && <Laptop size={16} />}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-32 mr-12">
                  <DropdownMenuItem onSelect={() => setTheme("light")}>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Light</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setTheme("dark")}>
                    <Moon className="mr-2 h-4 w-4" />
                    <span>Dark</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setTheme("system")}>
                    <Laptop className="mr-2 h-4 w-4" />
                    <span>System</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" className="z-50">
                <Loader2 className="animate-spin" size={16} />
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
