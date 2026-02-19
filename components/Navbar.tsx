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
        <div className="w-full flex items-center justify-center">
            <div className="w-1/2 h-16 flex items-center justify-end gap-4 px-4 border-b z-50 relative">
                <p>Home</p>
                <p>Projects</p>
                <p>Connect</p>

                <button
                className="p-2 border rounded transition-all ease-out"
                onClick={() => {
                    console.log("CLICKED")
                    setTheme(theme === "dark" ? "light" : "dark")
                }}
                >
                {theme === "dark"
                    ? <Moon className="h-5 w-5" />
                    : <Sun className="h-5 w-5" />
                }
                </button>
            </div>
            <br className="border-white border"/>
        </div>
)

}
