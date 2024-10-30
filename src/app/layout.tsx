import type { Metadata } from "next";
import 'typeface-roboto';
import "./globals.css";

export const metadata: Metadata = {
  title: "Buzzvel",
  description: "Technical test for Buzzvel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased w-screen h-screen bg-[#FFFFFF] text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
