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


const siteUrl = "https://yiwenmo.github.io";
const description =
  "Winnie (Yi-Wen) Mo — GIS Ph.D. student at Arizona State University, working on GeoAI and spatial machine learning.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Winnie Mo",
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Winnie Mo",
    description,
    images: [
      {
        url: "/thumbnail_v1.png",
        width: 1200,
        height: 630,
        alt: "Winnie Mo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Winnie Mo",
    description,
    images: ["/thumbnail_v1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
