import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Swastick's EPIC Journey - Thank You Payment Resiliency Squad!",
  description:
    "A vibrant, dynamic celebration website featuring 24 amazing team members from the Payment Resiliency team. An energetic, modern design with unique card layouts, animations, and a heartfelt thank you message from Swastick.",
  keywords: "Swastick, Payment Resiliency Team, Internship Journey, Thank You, Dynamic UI, Team Celebration",
  authors: [{ name: "Swastick" }],
  openGraph: {
    title: "Swastick's EPIC Journey - Thank You Payment Resiliency Squad!",
    description: "A vibrant celebration of an incredible internship journey with 24 amazing team members.",
    type: "website",
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
