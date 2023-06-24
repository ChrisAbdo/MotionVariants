"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CheckIcon, ClipboardIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";

export default function Copy() {
  const { toast } = useToast();

  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className="group/button absolute right-2 top-1.5 overflow-hidden text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100"
        >
          {/* <ClipboardIcon className="w-4 h-4" /> */}
          {copied ? (
            <CheckIcon className="w-4 h-4" />
          ) : (
            <ClipboardIcon className="w-4 h-4" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-24 mr-24">
        <DropdownMenuGroup>
          <DropdownMenuItem
            onSelect={() => {
              setCopied(true);
              window.navigator.clipboard.writeText("npm install framer-motion");
              toast({
                title: "Copied npm command to clipboard",
                description: "npm install framer-motion",
              });
            }}
          >
            npm
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              setCopied(true);
              window.navigator.clipboard.writeText("yarn add framer-motion");
              toast({
                title: "Copied yarn command to clipboard",
                description: "yarn add framer-motion",
              });
            }}
          >
            yarn
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              setCopied(true);
              window.navigator.clipboard.writeText("pnpm i framer-motion");
              toast({
                title: "Copied pnpm command to clipboard",
                description: "pnpm i framer-motion",
              });
            }}
          >
            pnpm
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
