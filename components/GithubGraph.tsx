"use client"

import { GitHubCalendar } from "react-github-calendar"
import { useRef, useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function GithubGraph() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [containerHeight, setContainerHeight] = useState("auto")
  
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const calculate = () => {
      if (wrapperRef.current && innerRef.current) {
        const wrapperWidth = wrapperRef.current.offsetWidth
        const innerWidth = innerRef.current.scrollWidth
        
        if (innerWidth > wrapperWidth) {
          const newScale = wrapperWidth / innerWidth
          setScale(newScale)
          setContainerHeight(`${innerRef.current.offsetHeight * newScale}px`)
        } else {
          setScale(1)
          setContainerHeight("auto")
        }
      }
    }
    
    setTimeout(calculate, 150)
    window.addEventListener("resize", calculate)
    return () => window.removeEventListener("resize", calculate)
  }, [])

  if (!mounted) return <div className="w-full h-[150px] animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>

  return (
    <div ref={wrapperRef} className="w-full overflow-hidden" style={{ height: containerHeight }}>
      <div
        ref={innerRef}
        style={{ 
          transform: `scale(${scale})`, 
          transformOrigin: "top left", 
          width: "max-content"
        }}
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