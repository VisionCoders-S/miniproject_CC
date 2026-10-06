import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Future Engineers — Student Showcase",
  description: "Meet the next generation of engineers, builders, and creative technologists.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
