"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
  x: number
  y: number
  speed: number
  opacity: number
  fadeDelay: number
  fadeStart: number
  fadingOut: boolean
  reset: () => void
  update: () => void
  draw: (ctx: CanvasRenderingContext2D, gold: boolean) => void
}

interface ParticleCanvasProps {
  isGoldMode: boolean
  onToggle: () => void
}

export function ParticleCanvas({ isGoldMode, onToggle }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number | null>(null)
  const goldRef = useRef(isGoldMode)

  useEffect(() => {
    goldRef.current = isGoldMode
  }, [isGoldMode])

  const createParticle = useCallback((canvas: HTMLCanvasElement): Particle => {
    const particle = {
      x: 0,
      y: 0,
      speed: 0,
      opacity: 1,
      fadeDelay: 0,
      fadeStart: 0,
      fadingOut: false,
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.speed = Math.random() / 5 + 0.1
        this.opacity = 1
        this.fadeDelay = Math.random() * 600 + 100
        this.fadeStart = Date.now() + this.fadeDelay
        this.fadingOut = false
      },
      update() {
        this.y -= this.speed
        if (this.y < 0) this.reset()
        if (!this.fadingOut && Date.now() > this.fadeStart) this.fadingOut = true
        if (this.fadingOut) {
          this.opacity -= 0.008
          if (this.opacity <= 0) this.reset()
        }
      },
      draw(ctx: CanvasRenderingContext2D, gold: boolean) {
        if (gold) {
          ctx.fillStyle = `rgba(${255 - Math.floor(Math.random() * 40)}, ${235 - Math.floor(Math.random() * 55)}, ${100 + Math.floor(Math.random() * 50)}, ${this.opacity})`
        } else {
          ctx.fillStyle = `rgba(${128 + Math.floor(Math.random() * 127)}, 255, 255, ${this.opacity * 0.5})`
        }
        ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1)
      },
    }
    particle.reset()
    particle.y = Math.random() * canvas.height
    return particle
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      const count = Math.floor((canvas.width * canvas.height) / 6000)
      particlesRef.current = []
      for (let i = 0; i < count; i++) {
        particlesRef.current.push(createParticle(canvas))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particlesRef.current.forEach((p) => {
        p.update()
        p.draw(ctx, goldRef.current)
      })
      animationRef.current = requestAnimationFrame(animate)
    }

    resize()
    animate()
    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("resize", resize)
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current)
    }
  }, [createParticle])

  return (
    <>
      {/* ── Toggle dot ── */}
      <div
        onClick={onToggle}
        className="absolute left-1/2 top-[88px] z-[40] h-[18px] w-[18px] -translate-x-1/2 cursor-pointer rounded-full transition-all duration-700"
        style={{
          background: "#0a0a0a",
          boxShadow: isGoldMode
            ? "0 0 16px 3px #d8bd10, 0 0 50px 6px rgba(216,189,16,.25)"
            : "0 0 16px 3px #98c0ef, 0 0 50px 6px rgba(152,192,239,.2)",
        }}
      />

      {/* ── Spotlight beams ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              margin: "0 auto",
              top: "80px",
              width: "28em",
              height: "100%",
              backgroundImage: isGoldMode
                ? "conic-gradient(from 0deg at 50% -5%, transparent 43%, rgba(216,189,16,.15) 48%, rgba(216,189,16,.3) 50%, rgba(216,189,16,.15) 52%, transparent 57%)"
                : "conic-gradient(from 0deg at 50% -5%, transparent 44%, rgba(124,145,182,.08) 49%, rgba(124,145,182,.14) 50%, rgba(124,145,182,.08) 51%, transparent 56%)",
              transformOrigin: "50% 0",
              filter: isGoldMode ? "blur(12px) opacity(0.8)" : "blur(16px) opacity(0.5)",
              borderRadius: "0 0 50% 50%",
              transition: "background-image 0.8s, filter 0.8s",
              animation: `spotlight-sway-${i} ${17 + i * 4}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Particle canvas ── */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ zIndex: 3 }}
      />

      {/* ── Accent grid lines ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
        {[20, 38, 55, 72, 88].map((top, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 transition-colors duration-700"
            style={{
              top: `${top}%`,
              height: "1px",
              background: isGoldMode
                ? "linear-gradient(90deg, transparent, rgba(216,189,16,.12), transparent)"
                : "linear-gradient(90deg, transparent, rgba(152,192,239,.08), transparent)",
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes spotlight-sway-0 {
          0%, 100% { transform: rotateZ(18deg) scale(1); }
          20% { transform: rotateZ(-6deg) scale(1.15); }
          40% { transform: rotateZ(12deg) scale(1.25); }
          60% { transform: rotateZ(-10deg) scale(1.1); }
          80% { transform: rotateZ(8deg) scale(1.05); }
        }
        @keyframes spotlight-sway-1 {
          0%, 100% { transform: rotateZ(-18deg) scale(1.1); }
          25% { transform: rotateZ(10deg) scale(1); }
          50% { transform: rotateZ(-8deg) scale(1.2); }
          75% { transform: rotateZ(14deg) scale(1.05); }
        }
        @keyframes spotlight-sway-2 {
          0%, 100% { transform: rotateZ(0deg) scale(1); }
          33% { transform: rotateZ(8deg) scale(1.18); }
          66% { transform: rotateZ(-6deg) scale(1.1); }
        }
      `}</style>
    </>
  )
}
