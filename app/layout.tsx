import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/contexts/sidebar-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Office 306",
  description: "office 306",
  generator: 'v0.dev',
  metadataBase: new URL('https://sanmarlok.org'),
  openGraph: {
    title: 'Office 306',
    description: 'office 306',
    url: 'https://sanmarlok.org/',
    siteName: 'Office 306',
    images: [
      {
        url: '/OGP.jpg',
        width: 1200,
        height: 630,
        alt: 'Office 306',
      }
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Office 306',
    description: 'office 306',
    images: ['/OGP.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <SidebarProvider>{children}</SidebarProvider>
      </body>
    </html>
  )
}
