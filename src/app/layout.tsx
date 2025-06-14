import type { Metadata } from "next";
import "./globals.css";
import RootLayout from "@/layouts/root-layout";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "The Periodical",
  description: "A blog for the community, by the community.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
