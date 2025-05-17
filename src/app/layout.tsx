import type { Metadata } from "next"
import { Sora } from "next/font/google"
import "./globals.css"

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Aidan Honor",
  description: "Explore my personal projects and work.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
