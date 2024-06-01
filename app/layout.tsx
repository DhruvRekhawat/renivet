import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/molecules/navbar";

const merriweather = Merriweather({subsets:["latin"],weight:['300','400','700']})
export const metadata: Metadata = {
  title: "Renivet",
  description: "Renivet - A innovative marketplace for sustainable brands",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={merriweather.className}>
      {children}
      </body>
    </html>
  );
}
