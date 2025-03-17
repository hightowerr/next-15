import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'

// Load Inter font
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Netjam - AI Solutions",
  description: "Custom AI solutions that deliver real results",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/favicon.ico' },
    ],
    apple: [
      { url: '/images/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      </head>
      <body className="font-body bg-[#F2F0EF]">
        {children}
      </body>
    </html>
  );
}
