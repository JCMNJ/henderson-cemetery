import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hendersoncemetery.com"),
  title: {
    default: "Henderson Cemetery Preserving Our History",
    template: "%s | Henderson Cemetery Archive",
  },
  description:
    "Historical preservation archive and burial records for Henderson Cemetery in Harmarville, Pennsylvania.",
  alternates: {
    canonical: "https://www.hendersoncemetery.com",
  },
  openGraph: {
    title: "Henderson Cemetery Preserving Our History",
    description:
      "Historical preservation archive and burial records for Henderson Cemetery in Harmarville, Pennsylvania.",
    url: "https://www.hendersoncemetery.com",
    type: "website",
    locale: "en_US",
    siteName: "Henderson Cemetery Archive",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Henderson Cemetery monogram and preserving our history text over a cemetery photograph",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Henderson Cemetery Preserving Our History",
    description:
      "Historical preservation archive and burial records for Henderson Cemetery in Harmarville, Pennsylvania.",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Henderson Cemetery monogram and preserving our history text over a cemetery photograph",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
