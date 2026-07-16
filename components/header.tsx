"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const closeMenu = useCallback(() => {
    setIsClosing(true)
    setTimeout(() => {
      setIsOpen(false)
      setIsClosing(false)
    }, 500)
  }, [])

  const toggleMenu = useCallback(() => {
    if (isOpen) {
      closeMenu()
    } else {
      setIsOpen(true)
    }
  }, [isOpen, closeMenu])

  useEffect(() => {
    if (isOpen && !isClosing) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, isClosing])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About Us" },
  ]

  const showMenu = isOpen && !isClosing

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6">
      {/* Backdrop blur for mobile menu - positioned outside nav */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-md transition-all duration-500 ease-out md:hidden ${
          showMenu
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      <nav className={`relative max-w-7xl mx-auto bg-background/80 backdrop-blur-md border border-border/50 rounded-2xl md:rounded-3xl shadow-lg transition-all duration-500 ease-out`}>
        <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-10">
            <span className="font-serif text-foreground text-base sm:text-lg md:text-2xl font-normal truncate">
              PT Kanematsu Trading
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-10 p-2 rounded-full hover:bg-muted/50 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-400 ease-out ${
                isOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
              }`}>
                <Menu className="w-5 h-5" />
              </span>
              <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-400 ease-out ${
                isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
              }`}>
                <X className="w-5 h-5" />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation - Slide Down */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            showMenu ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 sm:px-6 pb-14 pt-2 border-t border-border/30 rounded-b-2xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group flex items-center justify-between px-4 py-3.5 rounded-xl text-foreground hover:bg-muted/50 transition-all duration-400 ease-out ${
                    showMenu ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                  }`}
                  style={{
                    transitionDelay: showMenu ? `${index * 60}ms` : `${(navLinks.length - 1 - index) * 40}ms`,
                  }}
                  onClick={closeMenu}
                >
                  <span className="text-base font-medium">{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>

            <div
              className={`mt-3 px-4 transition-all duration-500 ease-out ${
                showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{
                transitionDelay: showMenu ? '300ms' : '0ms',
              }}
            >
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full py-6 text-base font-medium shadow-lg shadow-primary/20"
                onClick={closeMenu}
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}