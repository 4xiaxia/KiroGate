import type { Metadata, Viewport } from "next"
import { Sora, Noto_Sans_SC } from "next/font/google"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
})

export const metadata: Metadata = {
  title: "KiroGate - OpenAI & Anthropic Compatible Kiro API Gateway",
  description:
    "Open-source Kiro IDE API proxy gateway supporting OpenAI and Anthropic API formats. Use Claude models through any compatible tool with streaming, tool calling, and multi-tenant support.",
  keywords: [
    "KiroGate",
    "Kiro",
    "Claude",
    "OpenAI",
    "Anthropic",
    "API Gateway",
    "Proxy",
    "AI",
    "LLM",
  ],
  openGraph: {
    title: "KiroGate - OpenAI & Anthropic Compatible Kiro API Gateway",
    description:
      "Open-source Kiro IDE API proxy gateway supporting OpenAI and Anthropic API formats.",
    type: "website",
    siteName: "KiroGate",
  },
  twitter: {
    card: "summary_large_image",
    title: "KiroGate - OpenAI & Anthropic Compatible Kiro API Gateway",
    description:
      "Open-source Kiro IDE API proxy gateway supporting OpenAI and Anthropic API formats.",
  },
}

export const viewport: Viewport = {
  themeColor: "#38bdf8",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${notoSansSC.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
