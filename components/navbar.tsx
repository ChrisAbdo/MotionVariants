import Link from "next/link";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

const navigation = [
  { name: "Text Variants", href: "/text-variants" },
  { name: "Page Variants", href: "/page-variants" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <h1 className="text-2xl tracking-[-0.02em] drop-shadow-sm">
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
              className="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-primary before:absolute before:left-0 before:bottom-0 "
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="outline">
            <Star className="mr-2" size={16} />
            Star on GitHub
          </Button>
        </div>
      </nav>
    </header>
  );
}
