"use client"

import { useEffect, useRef, useState } from "react"

const words = ["Hola", "Bonjour", "Ciao", "Namaste", "Hello"]

// ─────────────────────────────────────────────
// 1. TYPEWRITER
// Letters type in one by one, delete, next word types in. Stops at Hello.
// ─────────────────────────────────────────────
export function Typewriter() {
  const [display, setDisplay] = useState("")
  const [blink, setBlink] = useState(true)
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    let wi = 0
    let charIdx = 0
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const word = words[wi]

      if (!deleting) {
        charIdx++
        setDisplay(word.slice(0, charIdx))

        if (charIdx === word.length) {
          if (wi === words.length - 1) {
            setBlink(false)
            return
          }
          timer = setTimeout(() => { deleting = true; tick() }, 900)
          return
        }
      } else {
        charIdx--
        setDisplay(word.slice(0, charIdx))

        if (charIdx === 0) {
          deleting = false
          wi++
        }
      }

      timer = setTimeout(tick, deleting ? 60 : 110)
    }

    timer = setTimeout(tick, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex justify-start items-center text-6xl font-bold betania-patmos-in-regular">
      <span>{display}</span>
      {blink && (
        <span
          style={{
            display: "inline-block",
            width: "3px",
            height: "0.85em",
            background: "currentColor",
            marginLeft: "4px",
            verticalAlign: "middle",
            animation: "tw-blink 1s step-end infinite",
          }}
        />
      )}
      <style>{`@keyframes tw-blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </div>
  )
}

// ─────────────────────────────────────────────
// 2. FLIP / SLOT MACHINE
// Letters flip vertically like an airport departures board.
// ─────────────────────────────────────────────
export function FlipSlot() {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [nextWord, setNextWord] = useState(words[1])
  const [flipping, setFlipping] = useState(false)
  const [flippedChars, setFlippedChars] = useState<boolean[]>([])
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    let wi = 0

    const runFlip = () => {
      if (wi >= words.length - 1) return
      const next = words[wi + 1]
      setNextWord(next)
      setFlipping(true)

      const len = Math.max(words[wi].length, next.length)
      const revealed: boolean[] = Array(len).fill(false)

      let i = 0
      const flipNext = () => {
        if (i >= len) {
          setTimeout(() => {
            wi++
            setCurrentWord(words[wi])
            setFlipping(false)
            setFlippedChars([])
            if (wi < words.length - 1) setTimeout(runFlip, 700)
          }, 200)
          return
        }
        revealed[i] = true
        setFlippedChars([...revealed])
        i++
        setTimeout(flipNext, 80)
      }
      setTimeout(flipNext, 100)
    }

    setTimeout(runFlip, 800)
  }, [])

  const displayWord = flipping ? nextWord : currentWord
  const baseWord = flipping ? currentWord : currentWord

  return (
    <div className="flex justify-start items-center text-6xl font-bold betania-patmos-in-regular">
      <span style={{ display: "inline-flex" }}>
        {displayWord.split("").map((char, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              transform: flippedChars[i] ? "rotateX(0deg)" : "rotateX(90deg)",
              transition: "transform 0.15s ease",
              transformOrigin: "center",
            }}
          >
            {flippedChars[i] ? char : (baseWord[i] ?? char)}
          </span>
        ))}
      </span>
    </div>
  )
}

// ─────────────────────────────────────────────
// 3. GLITCH
// Text scrambles with random chars before resolving. Stops at Hello.
// ─────────────────────────────────────────────
const GLITCH_CHARS = "!@#$%^&*<>?/\\|[]{}~`"

export function Glitch() {
  const [display, setDisplay] = useState(words[0])
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    let wi = 0

    const scrambleTo = (target: string, onDone: () => void) => {
      let iterations = 0
      const maxIterations = target.length * 5
      const interval = setInterval(() => {
        setDisplay(
          target
            .split("")
            .map((char, i) => {
              if (i < Math.floor(iterations / 5)) return char
              return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
            })
            .join("")
        )
        iterations++
        if (iterations > maxIterations) {
          clearInterval(interval)
          setDisplay(target)
          onDone()
        }
      }, 40)
    }

    const next = () => {
      wi++
      if (wi >= words.length) return
      scrambleTo(words[wi], () => {
        if (wi < words.length - 1) setTimeout(next, 600)
      })
    }

    setTimeout(next, 1000)
  }, [])

  return (
    <div className="flex justify-start items-center text-6xl font-bold betania-patmos-in-regular">
      <span
        style={{
          fontVariantNumeric: "tabular-nums",
          letterSpacing: "0.02em",
        }}
      >
        {display}
      </span>
    </div>
  )
}

// ─────────────────────────────────────────────
// 4. WORD SLIDE
// Current word slides up and out, next slides in from below.
// ─────────────────────────────────────────────
export function WordSlide() {
  const [items, setItems] = useState([{ word: words[0], id: 0, state: "visible" }])
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    let wi = 0

    const slide = () => {
      if (wi >= words.length - 1) return
      wi++
      const id = wi

      setItems((prev) => [
        ...prev.map((p) => ({ ...p, state: "exit" })),
        { word: words[wi], id, state: "enter" },
      ])

      setTimeout(() => {
        setItems([{ word: words[wi], id, state: "visible" }])
        if (wi < words.length - 1) setTimeout(slide, 700)
      }, 400)
    }

    setTimeout(slide, 900)
  }, [])

  return (
    <div
      className="flex justify-start items-center text-6xl font-bold betania-patmos-in-regular"
      style={{ position: "relative", overflow: "hidden", height: "1.2em" }}
    >
      {items.map(({ word, id, state }) => (
        <span
          key={id}
          style={{
            position: "absolute",
            left: 0,
            transition: "transform 0.35s cubic-bezier(0.77,0,0.18,1), opacity 0.35s ease",
            transform:
              state === "enter"
                ? "translateY(100%)"
                : state === "exit"
                ? "translateY(-100%)"
                : "translateY(0%)",
            opacity: state === "visible" ? 1 : 0,
            whiteSpace: "nowrap",
          }}
        >
          {word}
        </span>
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────
// 5. PARTICLE DISSOLVE
// Word dissolves into dots, reforms as next word.
// ─────────────────────────────────────────────
export function ParticleDissolve() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")!
    const dpr = window.devicePixelRatio || 1
    const W = 400
    const H = 100
    canvas.width = W * dpr
    canvas.height = H * dpr
    canvas.style.width = W + "px"
    canvas.style.height = H + "px"
    ctx.scale(dpr, dpr)

    const getPixels = (word: string): { x: number; y: number }[] => {
      ctx.clearRect(0, 0, W, H)
      ctx.fillStyle = "#fff"
      ctx.font = "bold 64px serif"
      ctx.textBaseline = "middle"
      ctx.fillText(word, 0, H / 2)
      const data = ctx.getImageData(0, 0, W * dpr, H * dpr).data
      const pts: { x: number; y: number }[] = []
      for (let y = 0; y < H * dpr; y += 4) {
        for (let x = 0; x < W * dpr; x += 4) {
          const idx = (y * W * dpr + x) * 4
          if (data[idx + 3] > 128) pts.push({ x: x / dpr, y: y / dpr })
        }
      }
      return pts
    }

    type Particle = {
      x: number; y: number; tx: number; ty: number
      vx: number; vy: number; alpha: number
    }

    let particles: Particle[] = []
    let wi = 0
    let animId: number
    let phase: "forming" | "holding" | "dissolving" = "forming"
    let phaseTimer = 0

    const initParticles = (targetPts: { x: number; y: number }[]) => {
      particles = targetPts.map((pt) => ({
        x: Math.random() * W,
        y: Math.random() * H,
        tx: pt.x,
        ty: pt.y,
        vx: 0,
        vy: 0,
        alpha: 0,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`
        ctx.fill()
      }
    }

    let lastTime = performance.now()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const now = performance.now()
      const dt = (now - lastTime) / 1000
      lastTime = now
      phaseTimer += dt

      if (phase === "forming") {
        let done = true
        for (const p of particles) {
          p.x += (p.tx - p.x) * 0.08
          p.y += (p.ty - p.y) * 0.08
          p.alpha = Math.min(p.alpha + dt * 2, 1)
          if (Math.abs(p.x - p.tx) > 0.5) done = false
        }
        if (done || phaseTimer > 1.2) {
          phase = "holding"
          phaseTimer = 0
        }
      } else if (phase === "holding") {
        if (phaseTimer > 0.8) {
          if (wi >= words.length - 1) { cancelAnimationFrame(animId); draw(); return }
          phase = "dissolving"
          phaseTimer = 0
          for (const p of particles) {
            p.vx = (Math.random() - 0.5) * 6
            p.vy = (Math.random() - 0.5) * 6
          }
        }
      } else {
        let allGone = true
        for (const p of particles) {
          p.x += p.vx
          p.y += p.vy
          p.alpha = Math.max(p.alpha - dt * 2.5, 0)
          if (p.alpha > 0) allGone = false
        }
        if (allGone || phaseTimer > 0.8) {
          wi++
          if (wi >= words.length) { cancelAnimationFrame(animId); return }
          initParticles(getPixels(words[wi]))
          phase = "forming"
          phaseTimer = 0
        }
      }

      draw()
    }

    initParticles(getPixels(words[0]))
    phase = "forming"
    animate()

    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <div
      ref={containerRef}
      className="flex justify-start items-center betania-patmos-in-regular"
    >
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  )
}

// ─────────────────────────────────────────────
// 6. WAVE RIPPLE
// Letters ripple in one by one with a staggered bounce. Stops at Hello.
// ─────────────────────────────────────────────
export function WaveRipple() {
  const [wordIdx, setWordIdx] = useState(0)
  const [visible, setVisible] = useState(false)
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

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
    <div className="flex justify-start items-center text-6xl font-bold betania-patmos-in-regular">
      <span style={{ display: "inline-flex" }}>
        {word.split("").map((char, i) => (
          <span
            key={`${wordIdx}-${i}`}
            style={{
              display: "inline-block",
              animation: visible ? `wave-in 0.5s cubic-bezier(0.22,1,0.36,1) forwards` : "wave-out 0.2s ease forwards",
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

// ─────────────────────────────────────────────
// 7. SCRAMBLE REVEAL
// Each letter locks in sequentially from random chars. Stops at Hello.
// ─────────────────────────────────────────────
export function ScrambleReveal() {
  const [display, setDisplay] = useState(words[0])
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let wi = 0

    const revealWord = (target: string, onDone: () => void) => {
      const locked: string[] = Array(target.length).fill(null)
      let lockedCount = 0
      let frame: ReturnType<typeof setTimeout>

      const scramble = () => {
        const next = target.split("").map((char, i) => {
          if (locked[i] !== null) return locked[i]
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
        setDisplay(next.join(""))

        if (lockedCount < target.length) {
          // lock one more char every ~6 frames
          if (Math.random() > 0.7) {
            locked[lockedCount] = target[lockedCount]
            lockedCount++
          }
          frame = setTimeout(scramble, 50)
        } else {
          // lock remainder
          setDisplay(target)
          onDone()
        }
      }

      scramble()
      return () => clearTimeout(frame)
    }

    const next = () => {
      wi++
      if (wi >= words.length) return
      revealWord(words[wi], () => {
        if (wi < words.length - 1) setTimeout(next, 700)
      })
    }

    setTimeout(next, 900)
  }, [])

  return (
    <div className="flex justify-start items-center text-6xl font-bold betania-patmos-in-regular">
      <span style={{ fontVariantNumeric: "tabular-nums", letterSpacing: "0.02em" }}>
        {display}
      </span>
    </div>
  )
}

// ─────────────────────────────────────────────
// 8. ZOOM BLUR
// Word scales down from huge+blurry, then zooms out before next word.
// ─────────────────────────────────────────────
export function ZoomBlur() {
  const [wordIdx, setWordIdx] = useState(0)
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in")
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    let wi = 0

    const cycle = () => {
      setPhase("in")
      setTimeout(() => {
        setPhase("hold")
        if (wi === words.length - 1) return
        setTimeout(() => {
          setPhase("out")
          setTimeout(() => {
            wi++
            setWordIdx(wi)
            cycle()
          }, 350)
        }, 700)
      }, 500)
    }

    cycle()
  }, [])

  const style: React.CSSProperties =
    phase === "in"
      ? { transform: "scale(2.5)", filter: "blur(16px)", opacity: 0 }
      : phase === "hold"
      ? { transform: "scale(1)", filter: "blur(0px)", opacity: 1 }
      : { transform: "scale(0.4)", filter: "blur(8px)", opacity: 0 }

  return (
    <div
      className="flex justify-start items-center text-6xl font-bold betania-patmos-in-regular"
      style={{ overflow: "hidden" }}
    >
      <span
        style={{
          display: "inline-block",
          transition:
            phase === "in"
              ? "transform 0.5s cubic-bezier(0.22,1,0.36,1), filter 0.5s ease, opacity 0.5s ease"
              : "transform 0.3s ease, filter 0.3s ease, opacity 0.3s ease",
          ...style,
        }}
      >
        {words[wordIdx]}
      </span>
    </div>
  )
}
