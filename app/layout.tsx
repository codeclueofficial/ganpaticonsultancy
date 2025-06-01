import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import WhatsAppWidget from "@/components/whatsapp-widget"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Ganpati Consultancy - Premier CA Firm in Patna</title>
        <meta
          name="description"
          content="Comprehensive financial solutions for businesses & individuals with 13+ years of trusted expertise in Patna, Bihar"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/ganpati-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <WhatsAppWidget phoneNumber="919631310068" />
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
