"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster />
      <ProgressBar
        height="4px"
        color="#F7684D"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
