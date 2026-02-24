"use client"

import { useEffect, useState } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => { console.log("Theme changed:", theme) }, [theme])

  if (!mounted) return null

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="relative flex items-center justify-between px-6 py-3 w-3/4 rounded-full border border-border/40 bg-background/80 backdrop-blur-md shadow-lg">

        <a href="/" className="text-base font-bold tracking-tight text-xl text-foreground">
          MyPortfolio
        </a>

        <div className="hidden md:flex items-center gap-8 text-lg font-medium text-muted-foreground">
          <a href="/" className="hover:text-foreground transition-colors">Home</a>
          <a href="/projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="/connect" className="hover:text-foreground transition-colors">Connect</a>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              console.log("CLICKED")
              setTheme(theme === "dark" ? "light" : "dark")
            }}
            className="p-2 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-accent transition-colors"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full mt-4 left-0 right-0 mx-2 rounded-2xl border border-border/40 bg-background/95 backdrop-blur-md shadow-xl p-5 flex flex-col gap-4 text-lg font-medium text-muted-foreground md:hidden">
            <a href="/" onClick={() => setIsOpen(false)} className="hover:text-foreground transition-colors">Home</a>
            <a href="/projects" onClick={() => setIsOpen(false)} className="hover:text-foreground transition-colors">Projects</a>
            <a href="/connect" onClick={() => setIsOpen(false)} className="hover:text-foreground transition-colors">Connect</a>
          </div>
        )}
      </nav>
    </div>
  )
}
