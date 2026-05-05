import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IOI City Mall | Southeast Asia's Largest Shopping Destination",
  description:
    "Experience the scale, energy, and opportunity at IOI City Mall. 2.5 million sq ft of retail, dining, entertainment, and world-class event spaces in Putrajaya, Malaysia.",
  keywords: [
    "IOI City Mall",
    "shopping mall",
    "retail leasing",
    "event venue",
    "Malaysia mall",
    "Putrajaya",
    "Southeast Asia largest mall",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "IOI City Mall | Southeast Asia's Largest Shopping Destination",
    description:
      "Experience the scale, energy, and opportunity at IOI City Mall.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-black text-white overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
