import "@/styles/globals.css"

import { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { FaDiscord } from "react-icons/fa"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Libertarianism", "Freedom", "Anarchism", "Capitalism"],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@asier_bayon",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        style={{
          backgroundImage: "url('/background.webp')",
        }}
        className={cn(
          "flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat",
          inter.className
        )}
      >
        <a
          href="https://discord.gg/QTcYcT7D"
          target="__blank"
          style={{
            height: 75,
            width: 300,
            padding: "0 50px",
            marginTop: 400,
            background: "rgba(255, 255, 255, 0.38)",
            borderRadius: 16,
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.22)",
          }}
          className="flex items-center justify-between backdrop-blur"
        >
          <FaDiscord size={50} color="black" />
          <h2 className="text-xl font-bold">¡Únete ahora!</h2>
        </a>
        {/*         <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="container flex min-h-screen flex-col py-4 md:w-[45rem] md:py-8">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider> */}
        <script
          data-goatcounter="https://liberalismoxyz.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </body>
    </html>
  )
}
