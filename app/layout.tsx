import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hendersoncemetery.com"),
  title: {
    default: "Henderson Cemetery Preserving Our History",
    template: "%s | Henderson Cemetery Archive",
  },
  description:
    "Historical preservation archive and burial records for Henderson Cemetery in Harmarville (Acmetonia), Pennsylvania.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Henderson Cemetery Preserving Our History",
    description:
      "Historical preservation archive and burial records for Henderson Cemetery in Harmarville (Acmetonia), Pennsylvania.",
    type: "website",
    locale: "en_US",
    siteName: "Henderson Cemetery Archive",
  },
  twitter: {
    card: "summary",
    title: "Henderson Cemetery Preserving Our History",
    description:
      "Historical preservation archive and burial records for Henderson Cemetery in Harmarville (Acmetonia), Pennsylvania.",
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
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
