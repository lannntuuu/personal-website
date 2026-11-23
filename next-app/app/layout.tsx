import "@fontsource-variable/outfit"
import "@fontsource-variable/oxanium"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SITE } from "@/lib/site"

export const metadata = {
  title: {
    default: `${SITE.name} - Photographer`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Portrait, editorial and travel photography by Tu Lan, made for people who want photographs that feel like themselves.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${SITE.name} - Photographer`,
    description: "Portrait, editorial and travel photography by Tu Lan.",
    images: ["/images/hero-portrait.jpg"],
  },
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
