"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Menu, Phone, Twitter, X, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleDonateClick = () => {
    closeMenu()
    router.push("/donate")
  }

  return (
    <>
      {/* Top bar with contact info and social media - compact single line */}
      <div className="bg-amber-600 text-white py-1.5 px-2 lg:px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-2 sm:gap-4 lg:gap-6 text-xs">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span className="hidden sm:inline">Sowutuom, Accra</span>
              <span className="sm:hidden">Accra</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>0554388159</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Mail className="h-3 w-3" />
              <span>kojomensahdestiny@gmail.com</span>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <Link
              href="https://facebook.com"
              className="text-white hover:text-amber-200 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
            <Link
              href="https://twitter.com"
              className="text-white hover:text-amber-200 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-white hover:text-amber-200 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-white hover:text-amber-200 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
            <Link
              href="https://www.youtube.com/@g_iloc"
              className="text-white hover:text-amber-200 transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube className="h-3 w-3 sm:h-4 sm:w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main header with navigation */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b relative z-40">
        <Link className="flex items-center justify-center" href="/">
          <Image
            src="https://i.postimg.cc/cHWjtMrr/Whats-App-Image-2025-05-06-at-11-57-24-556ba0c6.jpg"
            alt="GILOC Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="font-bold">GILOC</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/programs">
            Programs
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/success-stories">
            Success Stories
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/team">
            Our Team
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/get-involved">
            Get Involved
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/donate">
            Donate
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden ml-auto">
          <Button variant="ghost" size="icon" className="h-9 w-9 p-0" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
            <div className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="border-b p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="https://i.postimg.cc/rsP2Z6qz/Whats-App-Image-2025-05-05-at-22-04-16-a4671ce4.jpg"
                      alt="GILOC Logo"
                      width={32}
                      height={32}
                      className="mr-2"
                    />
                    <span className="font-bold text-lg">GILOC</span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-9 w-9 p-0" onClick={closeMenu}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Mobile Menu Links */}
                <nav className="flex flex-col p-4 flex-1 overflow-y-auto">
                  <Link
                    className="flex items-center py-3 px-2 text-lg font-medium hover:bg-amber-50 rounded-md transition-colors duration-200 ease-in-out"
                    href="/"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                  <Link
                    className="flex items-center py-3 px-2 text-lg font-medium hover:bg-amber-50 rounded-md transition-colors duration-200 ease-in-out"
                    href="/about"
                    onClick={closeMenu}
                  >
                    About
                  </Link>
                  <Link
                    className="flex items-center py-3 px-2 text-lg font-medium hover:bg-amber-50 rounded-md transition-colors duration-200 ease-in-out"
                    href="/programs"
                    onClick={closeMenu}
                  >
                    Programs
                  </Link>
                  <Link
                    className="flex items-center py-3 px-2 text-lg font-medium hover:bg-amber-50 rounded-md transition-colors duration-200 ease-in-out"
                    href="/success-stories"
                    onClick={closeMenu}
                  >
                    Success Stories
                  </Link>
                  <Link
                    className="flex items-center py-3 px-2 text-lg font-medium hover:bg-amber-50 rounded-md transition-colors duration-200 ease-in-out"
                    href="/team"
                    onClick={closeMenu}
                  >
                    Our Team
                  </Link>
                  <Link
                    className="flex items-center py-3 px-2 text-lg font-medium hover:bg-amber-50 rounded-md transition-colors duration-200 ease-in-out"
                    href="/get-involved"
                    onClick={closeMenu}
                  >
                    Get Involved
                  </Link>
                  <Link
                    className="flex items-center py-3 px-2 text-lg font-medium hover:bg-amber-50 rounded-md transition-colors duration-200 ease-in-out"
                    href="/contact"
                    onClick={closeMenu}
                  >
                    Contact
                  </Link>

                  {/* Call to Action Button */}
                  <div className="mt-6">
                    <Button
                      className="w-full bg-amber-600 hover:bg-amber-700 transition-colors duration-200"
                      onClick={handleDonateClick}
                    >
                      Donate Now
                    </Button>
                  </div>
                </nav>

                {/* Contact Info in Mobile Menu */}
                <div className="border-t p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    <p className="text-sm text-gray-600">Sowutuom, Accra</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-amber-600" />
                    <p className="text-sm text-gray-600">0554388159</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-amber-600" />
                    <p className="text-sm text-gray-600">kojomensahdestiny@gmail.com</p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="border-t p-4">
                  <p className="text-sm font-medium mb-3 text-gray-500">Follow Us</p>
                  <div className="flex gap-4">
                    <Link
                      href="https://facebook.com"
                      className="text-gray-500 hover:text-amber-600 transition-colors duration-200"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>

                    <Link
                      href="https://instagram.com"
                      className="text-gray-500 hover:text-amber-600 transition-colors duration-200"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      className="text-gray-500 hover:text-amber-600 transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://www.youtube.com/@g_iloc"
                      className="text-gray-500 hover:text-amber-600 transition-colors duration-200"
                      aria-label="YouTube"
                    >
                      <Youtube className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
