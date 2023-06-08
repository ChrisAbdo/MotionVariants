import "./globals.css";

import { Providers } from "./providers";

import Navbar from "@/components/navbar";
import AboutFooter from "@/components/about/footer";

import { Analytics } from "@vercel/analytics/react";

import localFont from "next/font/local";
const calSans = localFont({ src: "./CalSans-SemiBold.woff2" });

export const metadata = {
  title: "Variant Vault - A collection of Framer Motion variants",
  description:
    "Variant Vault is a collection of Framer Motion variants that you can use in your own projects. All the variants are free to use for personal and commercial projects.",

  twitter: {
    card: "summary_large_image",
    title: "Variant Vault - A collection of Framer Motion variants",
    description:
      "Variant Vault is a collection of Framer Motion variants that you can use in your own projects. All the variants are free to use for personal and commercial projects.",
    creator: "@abdo_eth",
  },
  metadataBase: new URL("https://variantvault.vercel.app/"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={calSans.className}>
        <Providers>
          <Navbar />
          {children}
          <AboutFooter />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
