import { Geist, Geist_Mono } from "next/font/google";
import { Inter_Tight, Ms_Madi } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const msMadi = Ms_Madi({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ms-madi",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inter-tight",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "100Bares",
  description: "La experiencia detrás del telón",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interTight.variable} ${msMadi.variable} antialiased min-h-screen bg-black`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
