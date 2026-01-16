"use client"

import { Suspense, type ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Loading } from "@/components/loading"

interface SuspenseWrapperProps {
  children: ReactNode
}

export function SuspenseWrapper({ children }: SuspenseWrapperProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense
        fallback={
          <div className="h-16 border-b flex items-center justify-center">
            <Loading size="small" />
          </div>
        }
      >
        <Header />
      </Suspense>
      <main className="flex-1">{children}</main>
      <Suspense
        fallback={
          <div className="h-16 border-t flex items-center justify-center">
            <Loading size="small" />
          </div>
        }
      >
        <Footer />
      </Suspense>
    </div>
  )
}
