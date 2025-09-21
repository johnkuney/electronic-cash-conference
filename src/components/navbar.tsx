'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import CountdownBar from './countdownBar'

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
      className={`fade-up fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background/70 shadow-md backdrop-blur-md'
          : 'bg-background'
      }`}
    >
      <CountdownBar />
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
            href="#location"
            className="hover:text-accent font-semibold transition duration-200"
          >
            Location
          </Link>
          <Link
            href="#speakers"
            className="hover:text-accent font-semibold transition duration-200"
          >
            Speakers
          </Link>
          <Link
            href="#schedule"
            className="hover:text-accent font-semibold transition duration-200"
          >
            Schedule
          </Link>
          <Link
            href="#tickets"
            className="from-accent to-accentDark rounded-full bg-gradient-to-r px-5 py-1 font-semibold text-white transition duration-200 hover:opacity-90"
          >
            Tickets
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
        <div className="animate-slide-down bg-background flex flex-col gap-4 px-6 py-8 md:hidden">
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
            href="#tickets"
            onClick={() => setIsOpen(false)}
            className="from-accent to-accentDark max-w-[120px] rounded-full bg-gradient-to-r px-5 py-1 text-center font-semibold text-white transition duration-200 hover:opacity-90"
          >
            Tickets
          </Link>
        </div>
      )}
    </header>
  )
}
