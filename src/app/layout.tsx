"use client";

import "./globals.css";
import { Lato } from "next/font/google";
import ProviderComp from "@/redux/provider";
import { useEffect } from "react";

const lato = Lato({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);


  return (
    <html lang="en" className="scroll-smooth" data-theme="dark">
      <body className={lato.className}>
        <ProviderComp>{children}</ProviderComp>
      </body>
    </html>
  );
}
