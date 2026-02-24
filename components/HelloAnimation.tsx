"use client"

import { useEffect, useRef, useState } from "react"

const words = ["Hello"]

export default function MorphingText() {
  const [wordIdx, setWordIdx] = useState(0)
  const [visible, setVisible] = useState(false)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (hasStarted.current) return
    hasStarted.current = true

    let wi = 0

    const showWord = () => {
      setWordIdx(wi)
      setVisible(true)

      if (wi === words.length - 1) return

      const duration = words[wi].length * 80 + 600
      setTimeout(() => {
        setVisible(false)
        setTimeout(() => {
          wi++
          showWord()
        }, 300)
      }, duration)
    }

    showWord()
  }, [])

  const word = words[wordIdx]

  return (
    <div className="relative flex md:justify-start justify-center items-center text-6xl font-bold font-satisfy text-zinc-900 dark:text-white">
      <span style={{ display: "inline-flex" }}>
        {word.split("").map((char, i) => (
          <span
            key={`${wordIdx}-${i}`}
            style={{
              display: "inline-block",
              animation: visible
                ? `wave-in 0.5s cubic-bezier(0.22,1,0.36,1) forwards`
                : `wave-out 0.2s ease forwards`,
              animationDelay: visible ? `${i * 60}ms` : `${i * 20}ms`,
              opacity: 0,
              transform: "translateY(30px)",
            }}
          >
            {char}
          </span>
        ))}
      </span>

      <style>{`
        @keyframes wave-in {
          0%   { opacity: 0; transform: translateY(30px) scale(0.8); }
          60%  { opacity: 1; transform: translateY(-6px) scale(1.05); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes wave-out {
          0%   { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
      `}</style>
    </div>
  )
}