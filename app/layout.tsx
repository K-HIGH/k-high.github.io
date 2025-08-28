import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "돋보길 - 어르신을 위한 안전한 길찾기 앱",
  description:
    "어르신을 위한 안전하고 편리한 길찾기 도우미 앱. 큰 글씨, 쉬운 조작, 24시간 지원으로 안전한 외출을 도와드립니다.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
