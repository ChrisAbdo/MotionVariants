"use client";

import React from "react";
import Link from "next/link";
import {
  Braces,
  Github,
  Laptop,
  Linkedin,
  Loader2,
  Moon,
  Star,
  Sun,
  Twitter,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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
          {/* <h1 className="z-50 text-2xl tracking-[-0.02em] drop-shadow-sm">
            <Link href="/">MotionVariants</Link>
          </h1> */}
          <HoverCard>
            <HoverCardTrigger asChild className="z-50">
              <Link href="/">
                <Button
                  variant="link"
                  className="z-50 text-2xl tracking-[-0.02em] drop-shadow-sm"
                >
                  <Braces className="mr-2 h-6 w-6" />
                  Variant Vault
                </Button>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/66892203?v=4" />
                  <AvatarFallback>CA</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">
                    Built by Christopher Abdo
                  </h4>
                  <p className="text-sm">
                    View more of my projects here! &darr;
                  </p>
                  <div className="flex items-center pt-2 space-x-2">
                    <Link
                      href="https://twitter.com/abdo_eth"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Button variant="ghost" size="sm">
                        <Twitter className="h-4 w-4 opacity-70" />
                      </Button>
                    </Link>
                    <Link
                      href="https://www.github.com/chrisabdo"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Button variant="ghost" size="sm">
                        <Github className="h-4 w-4 opacity-70" />
                      </Button>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/christopher-abdo/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" size="sm">
                        <Linkedin className="h-4 w-4 opacity-70" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
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
              className="z-50 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-primary before:absolute before:left-0 before:bottom-0 text-xl"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 justify-end">
          <div className="flex space-x-2">
            <Link
              href="https://www.github.com/chrisabdo/motionvariants"
              target="_blank"
              rel="noopener noreferrer"
              className="z-50 hidden lg:block"
            >
              <Button variant="outline">
                <Star className="mr-2" size={16} />
                Star on GitHub
              </Button>
            </Link>
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
