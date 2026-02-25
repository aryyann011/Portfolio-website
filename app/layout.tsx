import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { Playwrite_AT } from "next/font/google";
import { Satisfy } from "next/font/google";
import { Bitcount_Grid_Double_Ink } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const satisfy = Satisfy({
  weight: "400",  
  subsets: ["latin"],
  variable: "--font-satisfy",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "aryan.dev",
  description: "My portfollio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${satisfy.variable} 
        w-full bg-white min-h-screen dark:bg-black antialiased`}>
        
        <div className="[zoom:0.9]">
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </div>

      </body>
    </html>
  );
}