import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import localFont from 'next/font/local'
import  { Toaster } from 'react-hot-toast';
const tripSans = localFont({
  src: [
    {
      path: '../../public/fonts/TripSans-Regular.ttf',
      weight: "400"
    },
    {
      path: '../../public/fonts/TripSans-Medium.ttf',
      weight: "500"
    },
    {
      path: '../../public/fonts/TripSans-Bold.ttf',
      weight: "600"
    },
  ],
  variable: '--font-trip-sans'
});

export const metadata: Metadata = {
  title: "GreenStixz Networks",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${tripSans.variable}`}>
      <body className="dark:bg-black">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer/>
        </Providers>
      </body>
      <Toaster  />
    </html>
  );
}
