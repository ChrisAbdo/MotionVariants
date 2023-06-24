"use client";

import React from "react";

import {
  ArrowDownIcon,
  CalendarIcon,
  CodeIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export default function VVLogo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href="/">
          <Button variant="link" className="text-lg">
            <CodeIcon className="h-6 w-6 mr-2" />
            Variant Vault
          </Button>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/66892203?v=4" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Built by Christopher Abdo</h4>
            <p className="text-sm">
              Check out my other projects{" "}
              <ArrowDownIcon className="inline-block h-4 w-4" />
            </p>
            <div className="flex items-center pt-2 space-x-2">
              <Link
                href="https://www.twitter.com/abdo_eth"
                rel="noopener"
                target="_blank"
              >
                <Button variant="ghost" size="icon">
                  <TwitterLogoIcon className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://www.github.com/chrisabdo"
                rel="noopener"
                target="_blank"
              >
                <Button variant="ghost" size="icon">
                  <GitHubLogoIcon className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/christopher-abdo/"
                rel="noopener"
                target="_blank"
              >
                <Button variant="ghost" size="icon">
                  <LinkedInLogoIcon className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
