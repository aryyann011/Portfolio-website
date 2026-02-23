"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
 
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    console.log("Theme changed:", theme)
  }, [theme])

  if (!mounted) return null

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-full z-50 flex items-center justify-between px-12 py-4 rounded-xl border border-border/40 bg-background/80 backdrop-blur-md">
      {/* Logo / Brand */}
      <span className="text-xl font-semibold tracking-tight">MyPortfolio</span>

      {/* Nav Links */}
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="/" className="hover:text-foreground transition-colors">Home</a>
        <a href="/projects" className="hover:text-foreground transition-colors">Projects</a>
        <a href="/connect" className="hover:text-foreground transition-colors">Connect</a>
      </div>

      {/* Theme Toggle */}
      <button
        className="p-2 rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
        onClick={() => {
          console.log("CLICKED")
          setTheme(theme === "dark" ? "light" : "dark")
        }}
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </nav>
  )
}
