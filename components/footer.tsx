"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-4 w-full border-t px-4 md:px-6">
      <div className="flex flex-wrap justify-between items-center gap-2 text-[10px] sm:text-xs">
        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
          <p className="text-gray-500">© 2025 GILOC.</p>
          <p className="text-gray-500">
            Developed by
            <a href="https://degitech.vercel.app" className="text-blue-600 ml-1">
              Degitech Consults
            </a>
          </p>
        </div>
        <nav className="flex gap-3 sm:gap-6">
          <Link className="text-gray-500 hover:underline underline-offset-4" href="/terms">
            Terms
          </Link>
          <Link className="text-gray-500 hover:underline underline-offset-4" href="/privacy">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  )
}
