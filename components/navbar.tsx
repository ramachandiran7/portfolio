"use client"

import Link from "next/link"
import { Moon, Sun, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link href="/" className="text-xl md:text-2xl font-bold whitespace-nowrap">
          Ramachandiran S
        </Link>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <div
          className={`absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 md:bg-transparent md:dark:bg-transparent md:static md:flex items-center gap-6 lg:gap-8 flex-shrink-0 transition-all duration-300 ease-in-out ${isMenuOpen ? "flex flex-col py-4" : "hidden"} md:flex md:flex-row`}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-yellow-500 px-3 py-2 rounded-md transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="hover:text-yellow-500 px-3 py-2 rounded-md transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="hover:text-yellow-500 px-3 py-2 rounded-md transition-colors"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-yellow-500 px-3 py-2 rounded-md transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("certifications")}
            className="hover:text-yellow-500 px-3 py-2 rounded-md transition-colors"
          >
            Certifications
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-yellow-500 px-3 py-2 rounded-md transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-yellow-500 px-3 py-2 rounded-md transition-colors"
          >
            Contact
          </button>
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-gray-900 dark:text-gray-100"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
        </div>
        <div className="relative w-10 h-10 overflow-hidden rounded-full md:flex hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo.jpg-wbFZ9lHyXZSBlWOuYUBtW6zpQdTe7N.jpeg"
            alt="Ramachandiran S"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </nav>
  )
}
