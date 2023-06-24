"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import Link from "next/link";
import React from "react";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex items-center space-x-6 text-sm">
      <Link
        href="/usage"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/usage" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Usage
      </Link>
      <Link
        href="/text-variants"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/text-variants"
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Text Variants
      </Link>
      <Link
        href="/page-variants"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/page-variants"
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Page Variants
      </Link>
    </div>
  );
}
