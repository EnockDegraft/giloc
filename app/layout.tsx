import "@/app/globals.css"
import { Suspense } from "react"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import { Loading } from "@/components/loading"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Global Integrity Leaders Of Change",
  description: "Empowering young entrepreneurs, developing trustworthy leaders, and nurturing talents across Africa.",
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>GILOC - Global Integrity Leaders Of Change</title>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="white" enableSystem>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <Loading size="large" />
              </div>
            }
          >
            {children}
          </Suspense>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
