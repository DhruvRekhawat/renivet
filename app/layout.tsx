import type { Metadata } from "next";
import { Merriweather,Forum } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import Navbar from "@/components/molecules/navbar";
import Head from "next/head";
import Image from "next/image";
import FB from "@/assests/icons/facebook.png"
import IG from "@/assests/icons/instagram.png"
import X from  "@/assests/icons/twitter.png"


const forum = Forum({subsets:['latin'],weight:['400']})
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
      <Head>
        <link rel="icon" href="/icon.jpg" type="image/x-icon" />
      </Head>
      <body className={forum.className}>
      <Navbar></Navbar>
      {children}
      <footer className="bg-brand-darkgreen w-full px-8 py-4 flex flex-col md:flex-row justify-center items-center text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            <ul className="text-brand-offwhite">
              <h1 className="text-lg text-brand-orangewhite">Important Links</h1>
              <li>About</li>
              <li>How it Works</li>
              <li>Subscribe</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
            <ul className="text-brand-offwhite">
              <h1 className="text-lg text-brand-orangewhite">Contact Us</h1>
              <li>Phone</li>
              <li>Email</li>
              <li>Address</li>
            </ul>
            <ul className="text-brand-offwhite">
              <h1 className="text-lg text-brand-orangewhite">Follow Us On:</h1>
              <div className="flex gap-4 justify-center items-center my-2">
              <li><Image src={FB} height={25} alt="social" ></Image></li>
              <li><Image src={IG} height={25} alt="social"></Image></li>
              <li><Image src={X} height={25} alt="social"></Image></li>
              </div>
                           
            </ul>
            <p className="md:col-span-3 text-brand-offwhite">&copy; Renivet Solutions Pvt. Ltd.</p>
          </div>
        </footer>
        <SpeedInsights></SpeedInsights>
      </body>
    </html>
  );
}
