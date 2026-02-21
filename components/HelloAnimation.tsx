"use client"

import { useEffect, useState } from "react"

const words = [
  "Hola",
  "Bonjour",
  "Ciao",
  "Namaste",
  "Merhaba",
  "Hello"
]

export default function MorphingText() {
  const [index, setIndex] = useState(0)
  const [text1, setText1] = useState(words[0])
  const [text2, setText2] = useState(words[1])

  useEffect(() => {
    let morphTime = 1
    let cooldownTime = 0.25

    let morph = 0
    let cooldown = cooldownTime
    let lastTime = new Date().getTime()

    const animate = () => {
      requestAnimationFrame(animate)

      let now = new Date().getTime()
      let dt = (now - lastTime) / 1000
      lastTime = now

      cooldown -= dt

      if (cooldown <= 0) {
        morph += dt
        let fraction = morph / morphTime

        if (fraction > 1) {
          cooldown = cooldownTime
          morph = 0
          setIndex((prev) => {
            const next = (prev + 1) % words.length
            setText1(words[next])
            setText2(words[(next + 1) % words.length])
            return next
          })
        }

        setMorph(fraction)
      }
    }

    let setMorph = (fraction: number) => {
      const text1El = document.getElementById("text1")
      const text2El = document.getElementById("text2")

      if (!text1El || !text2El) return

      fraction = Math.min(fraction, 1)
      text2El.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
      text2El.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

      fraction = 1 - fraction
      text1El.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
      text1El.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`
    }

    animate()
  }, [])

  return (
    <div className="relative flex justify-center items-center h-40 text-6xl font-bold betania">
      <svg style={{ position: "absolute" }}>
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        style={{ filter: "url(#threshold)" }}
        className="relative"
      >
        <span
          id="text1"
          className="absolute"
        >
          {text1}
        </span>

        <span
          id="text2"
          className="absolute"
        >
          {text2}
        </span>
      </div>
    </div>
  )
}
