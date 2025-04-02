'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-md' : 'bg-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/ecc-logo.png"
            alt="Electronic Cash Conference Logo"
            className="h-14 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#about"
            className="font-bold hover:text-accent transition duration-200"
          >
            About
          </Link>
          <Link
            href="#speakers"
            className="font-semibold hover:text-accent transition duration-200"
          >
            Speakers
          </Link>
          <Link
            href="#location"
            className="font-semibold hover:text-accent transition duration-200"
          >
            Location
          </Link>
          <Link
            href="#register"
            className="ml-4 bg-gradient-to-r from-accent to-accent-dark text-white font-semibold px-5 py-2 rounded-full hover:opacity-90 transition duration-200"
          >
            Register
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-4 animate-slide-down">
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
            className="block bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold px-5 py-2 rounded-full text-center"
          >
            Register
          </Link>
        </div>
      )}
    </header>
  );
}
