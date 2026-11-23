import "@fontsource-variable/outfit"
import "@fontsource-variable/oxanium"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { DESCRIPTION, SITE } from "@/lib/site"

export const metadata = {
  title: {
    default: `${SITE.name} - Photographer`,
    template: `%s | ${SITE.name}`,
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE.siteUrl),
  openGraph: {
    title: `${SITE.name} - Photographer`,
    description: DESCRIPTION,
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
