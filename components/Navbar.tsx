"use client"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

export default function navbar(){

    const {resolvedTheme, setTheme} = useTheme()
    return (
        <div className="relative">
        <div className="flex absolute right-0">
            <p>Home</p>
            <p>projects</p>
            <p>Connect</p>
            <button
            onClick={() => setTheme(resolvedTheme == 'dark' ? 'light' : 'dark')}>
                {resolvedTheme == 'dark' ? <Moon h-5 w-5 /> : <Sun h-5 w-5/>}
            </button>
        </div>
    </div>
    )
}