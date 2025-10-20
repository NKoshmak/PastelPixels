/** @format */

import "./globals.css";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider"; 

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Pastel Pixels Studio",
  description: "Digital templates and design systems for soulful storytellers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className={jakarta.className}>
        <Navbar />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Footer />
      </body>
    </html>
  );
}
