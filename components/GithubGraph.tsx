"use client"

import {GitHubCalendar} from "react-github-calendar"
import { useRef, useEffect, useState } from "react"

const lastNineMonths = (contributions: any[]) => {
  const nineMonthsAgo = new Date()
  nineMonthsAgo.setMonth(nineMonthsAgo.getMonth() - 9)
  return contributions.filter(day => new Date(day.date) >= nineMonthsAgo)
}

export function GithubGraph() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
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

  return (
    <div ref={wrapperRef} className="w-full">
      <div
        ref={innerRef}
        style={{ zoom: scale }}
      >
        <GitHubCalendar
          username="aryyann011"
          colorScheme="dark"
          blockSize={14}
          blockRadius={4}
          blockMargin={5}
        />
      </div>
    </div>
  )
}