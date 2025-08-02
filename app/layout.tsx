import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Baynext - Operationalize MMM at Scale",
  description:
    "A platform designed to simplify MMM training, manage dataset versions, and help analyze marketing ROI with modern tools for data-driven marketers.",
  keywords: ["MMM", "Marketing Mix Modeling", "ROI Analysis", "Marketing Analytics", "Data Science"],
  authors: [{ name: "Baynext Team" }],
  creator: "Baynext",
  publisher: "Baynext",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://baynext.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Baynext - Operationalize MMM at Scale",
    description:
      "A platform designed to simplify MMM training, manage dataset versions, and help analyze marketing ROI with modern tools for data-driven marketers.",
    url: "https://baynext.com",
    siteName: "Baynext",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Baynext - Marketing Mix Modeling Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baynext - Operationalize MMM at Scale",
    description:
      "A platform designed to simplify MMM training, manage dataset versions, and help analyze marketing ROI with modern tools for data-driven marketers.",
    images: ["/og-image.png"],
    creator: "@baynext",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.png",
        color: "#06B6D4",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06B6D4" },
    { media: "(prefers-color-scheme: dark)", color: "#06B6D4" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional favicon links for better browser support */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#06B6D4" />
        <meta name="msapplication-TileColor" content="#06B6D4" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
