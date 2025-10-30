import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer} from "@/components/Footer"; //import the footer under children
import { Navbar } from "@/components/Navbar"; //import the navbar above children
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Qwiikorder",
  description: "Order Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Navbar />
        <SessionProvider>
        {children}
        </SessionProvider>
        <Footer />
      </body>
    </html>
  );
}
