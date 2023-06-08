import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function PageVariantsHeader() {
  return (
    <div className="p-6">
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <a
            href="#"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ChevronLeft
              className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Back
          </a>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <Link
                  href="/"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Home
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <Link
                  href="/text-variants"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Page Variants
                </Link>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Framer Motion Page Variants with TailwindCSS | Work in Progress!
          </h2>
        </div>
      </div>
    </div>
  );
}
