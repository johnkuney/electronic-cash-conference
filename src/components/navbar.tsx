'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background/70 shadow-md backdrop-blur-md'
          : 'bg-background'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/ecc-logo.png"
            alt="Electronic Cash Conference Logo"
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href="#about"
            className="hover:text-accent font-bold transition duration-200"
          >
            About
          </Link>
          <Link
            href="#speakers"
            className="hover:text-accent font-semibold transition duration-200"
          >
            Speakers
          </Link>
          <Link
            href="#location"
            className="hover:text-accent font-semibold transition duration-200"
          >
            Location
          </Link>
          <Link
            href="#register"
            className="from-accent to-accentDark rounded-full bg-gradient-to-r px-4 py-2 font-semibold text-white transition duration-200 hover:opacity-90"
          >
            Register
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="animate-slide-down space-y-4 bg-black px-6 pb-4 md:hidden">
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block font-semibold"
          >
            About
          </Link>
          <Link
            href="#speakers"
            onClick={() => setIsOpen(false)}
            className="block font-semibold"
          >
            Speakers
          </Link>
          <Link
            href="#location"
            onClick={() => setIsOpen(false)}
            className="block font-semibold"
          >
            Location
          </Link>
          <Link
            href="#register"
            onClick={() => setIsOpen(false)}
            className="block rounded-full bg-gradient-to-r from-purple-600 to-purple-400 px-5 py-2 text-center font-semibold text-white"
          >
            Register
          </Link>
        </div>
      )}
    </header>
  )
}
