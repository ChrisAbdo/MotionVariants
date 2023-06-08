import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";

export default function TextVariantsHeader({
  query,
  setQuery,
  filteredVariants,
}: any) {
  return (
    <div className="p-12">
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <Link
            href="/"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ChevronLeft
              className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Back
          </Link>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <Link
                  href="/"
                  className="flex text-sm font-medium text-muted-foreground hover:text-primary duration-200 transition-all"
                >
                  <Home
                    className="mr-2 h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  Home
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight
                  className="h-5 w-5 flex-shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
                <Link
                  href="/text-variants"
                  className="ml-4 text-sm font-medium text-muted-foreground hover:text-primary duration-200 transition-all"
                >
                  Text Variants
                </Link>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
            Framer Motion Text Variants with TailwindCSS
          </h2>
        </div>
        <div className="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">
          <Input
            placeholder="Search for variants..."
            type="search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
