import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <Link
            href="https://twitter.com/abdo_eth"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Chris Abdo
          </Link>
          . The source code is available on&nbsp;
          <Link
            href="https://github.com/chrisabdo/motionvariants"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
