"use client"

import { GitHubCalendar } from "react-github-calendar"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function GithubGraph() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [blockSize, setBlockSize] = useState(14)

  useEffect(() => {
    setMounted(true)

    const handleResize = () => {
      const width = window.innerWidth

      if (width < 500) {
        setBlockSize(8)
      } else if (width < 768) {
        setBlockSize(10)
      } else if (width < 1024) {
        setBlockSize(12)
      } else {
        setBlockSize(14)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full">
      <GitHubCalendar
        username="aryyann011"
        colorScheme={resolvedTheme === "light" ? "light" : "dark"}
        blockSize={blockSize}
        blockRadius={4}
        blockMargin={4}
      />
    </div>
  )
}