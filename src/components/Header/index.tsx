"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/Header/ThemeToggle"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

function HeaderLinks() {
  return (
    <>
      <Link href="/" className="hover:text-gray-200 transition-colors">Home</Link>
      <Link href="/projects" className="hover:text-gray-200 transition-colors">Projects</Link>
      <Link href="/contact" className="hover:text-gray-200 transition-colors">Contact</Link>
    </>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="flex justify-between items-center w-full p-4 sm:p-6 sticky top-0 z-50">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full bg-slate-400/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 sm:py-5 sm:px-6">
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="flex items-center gap-3 sm:gap-4">
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer sm:hidden h-9 w-9"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
            <h1 className="text-xl sm:text-2xl font-bold">Aidan Honor</h1>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <HeaderLinks />
            </div>
            <ModeToggle />
          </div>
        </div>
        <div 
          className={`flex flex-col sm:hidden items-center gap-4 transition-all duration-200 ease-in-out ${
            isMenuOpen ? "opacity-100 max-h-48 mt-4" : "opacity-0 max-h-0 mt-0"
          }`}
        >
          <HeaderLinks />
        </div>
      </div>
    </header>
  )
}