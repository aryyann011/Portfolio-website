"use client"

import { GitHubCalendar } from "react-github-calendar"
import { useRef, useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function GithubGraph() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  
  // Theme handling for the calendar
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const calculate = () => {
      if (wrapperRef.current && innerRef.current) {
        const wrapperWidth = wrapperRef.current.offsetWidth
        const innerWidth = innerRef.current.scrollWidth
        if (innerWidth > wrapperWidth) {
          setScale(wrapperWidth / innerWidth)
        }
      }
    }
    setTimeout(calculate, 500)
    window.addEventListener("resize", calculate)
    return () => window.removeEventListener("resize", calculate)
  }, [])

  // Prevent hydration mismatch by hiding until mounted
  if (!mounted) return <div className="w-full h-[150px] animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>

  return (
    <div ref={wrapperRef} className="w-full">
      <div
        ref={innerRef}
        style={{ zoom: scale }}
      >
        <GitHubCalendar
          username="aryyann011"
          colorScheme={resolvedTheme === "light" ? "light" : "dark"}
          blockSize={14}
          blockRadius={4}
          blockMargin={5}
        />
      </div>
    </div>
  )
}