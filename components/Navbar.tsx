"use client"

import { useEffect, useState } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full mt-6 z-50 flex justify-center px-4">
      
      <nav className="relative flex items-center justify-between pb-3 pt-1 w-full sm:w-4/5 md:w-3/4 lg:w-3/5 border-b border-zinc-300 dark:border-zinc-900 bg-transparent">

        <a href="/" className="group flex items-center font-medium tracking-tight text-3xl">
  <span className="mr font-bold text-zinc-600 dark:text-zinc-700">/</span>
  <span className="text-foreground">aryan</span>
  <span className="text-zinc-500 transition-colors group-hover:text-zinc-400">.dev</span>
</a>
        <div className="flex items-center gap-4 md:gap-8">
          
          <div className="hidden md:flex items-center gap-8 text-lg font-medium text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors">About</a>
            <button
              onClick={() => {
                const el = document.getElementById("projects");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-foreground transition-colors"
            >
              Projects
            </button>
            {/* <a href="#connect" className="hover:text-foreground transition-colors">Connect</a> */}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 -mr-2 hover:bg-accent transition-colors text-muted-foreground hover:text-foreground rounded-md"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 -mr-2 hover:bg-accent transition-colors text-muted-foreground hover:text-foreground rounded-md"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 border-b border-x border-border/40 bg-background/95 backdrop-blur-md shadow-lg p-5 flex flex-col gap-4 text-base font-medium text-muted-foreground md:hidden z-50">
            <a href="/" onClick={() => setIsOpen(false)} className="hover:text-foreground transition-colors">Home</a>
            <a href="/projects" onClick={() => setIsOpen(false)} className="hover:text-foreground transition-colors">Projects</a>
            <a href="/connect" onClick={() => setIsOpen(false)} className="hover:text-foreground transition-colors">Connect</a>
          </div>
        )}
      </nav>
    </div>
  )
}