import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "../styles/globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doctor Portfolio",
  description: "Professional medical portfolio and booking site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="font-sans bg-medical-light text-gray-800 min-h-full flex flex-col">{children}</body>
    </html>
  );
}