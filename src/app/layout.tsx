import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

const ringbearer = localFont({
  src: "../public/fonts/ringbearer.ttf",
  variable: "--font-ringbearer",
});

const minion = localFont({
  src: "../public/fonts/MinionPro-Regular.ttf",
  variable: "--font-minion",
});

export const metadata: Metadata = {
  title: "Lord of the Rings Writing Portfolio",
  description: "A collection of Lord of the Rings inspired writings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${ringbearer.variable}`}>
      <body className="font-roboto">{children}</body>
    </html>
  );
}
