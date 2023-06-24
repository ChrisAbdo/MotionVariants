import Link from "next/link";
import { Button } from "../ui/button";

export default function CallToAction() {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-24 sm:py-32 ">
        <div className="relative isolate overflow-hidden bg-primary-foreground border px-6 py-24 text-center sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight  sm:text-4xl">
            Discover beautiful variants for your next project now!
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 ">
            Thank you for using Variant Vault. I hope you enjoy it.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/text-variants">
              <Button>Get Started</Button>
            </Link>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
