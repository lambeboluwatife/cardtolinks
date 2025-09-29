import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Krea AI",
  description: "AI-powered image generation and editing tool",
  keywords: [
    "AI",
    "image generation",
    "image editing",
    "artificial intelligence",
    "machine learning",
    "deep learning",
    "neural networks",
    "creative tools",
    "design",
    "graphics",
    "photo editing",
    "visual content",
    "digital art",
  ],
  authors: [{ name: "Krea AI", url: "https://krea.ai" }],
  creator: "Krea AI",
  openGraph: {
    title: "Krea AI",
    description: "AI-powered image generation and editing tool",
    url: "https://krea.ai",
    siteName: "Krea AI",
    images: [
      {
        url: "/image/krea white.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krea AI",
    description: "AI-powered image generation and editing tool",
    images: ["/image/krea white.png"],
    creator: "@krea_ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
