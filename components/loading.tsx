"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface LoadingProps {
  className?: string
  size?: "small" | "medium" | "large"
}

export function Loading({ className, size = "medium" }: LoadingProps) {
  const sizeClasses = {
    small: "w-10 h-10",
    medium: "w-16 h-16",
    large: "w-24 h-24",
  }

  return (
    <div className={cn("flex flex-col items-center justify-center p-4", className)}>
      <div className={cn("relative animate-pulse", sizeClasses[size])}>
        <Image
          src="https://i.postimg.cc/cHWjtMrr/Whats-App-Image-2025-05-06-at-11-57-24-556ba0c6.jpg"
          alt="GILOC Logo"
          width={96}
          height={96}
          className="rounded-full animate-bounce"
        />
      </div>
      <p className="mt-4 text-sm text-gray-500 animate-pulse">Loading...</p>
    </div>
  )
}
