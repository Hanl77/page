import { ref, onMounted, onUnmounted, type Ref } from 'vue'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export function useParticles(canvasRef: Ref<HTMLCanvasElement | null>) {
  const particles: Particle[] = []
  let animationFrame: number | null = null
  let resizeHandler: (() => void) | null = null

  function initParticles(width: number, height: number) {
    particles.length = 0
    const count = Math.floor((width * height) / 12000)

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }
  }

  function draw() {
    const canvas = canvasRef.value
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      initParticles(rect.width, rect.height)
    }

    const width = rect.width
    const height = rect.height

    ctx.clearRect(0, 0, width, height)

    // Update and draw particles
    for (const p of particles) {
      p.x += p.vx
      p.y += p.vy

      if (p.x < 0) p.x = width
      if (p.x > width) p.x = 0
      if (p.y < 0) p.y = height
      if (p.y > height) p.y = 0

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI)
      ctx.fillStyle = `rgba(88, 166, 255, ${p.opacity})`
      ctx.fill()
    }

    // Draw connections
    const maxDist = 120
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.15
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(88, 166, 255, ${opacity})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }

    animationFrame = requestAnimationFrame(draw)
  }

  onMounted(() => {
    const canvas = canvasRef.value
    if (!canvas) return

    resizeHandler = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      const ctx = canvas.getContext('2d')
      if (ctx) ctx.scale(dpr, dpr)
      initParticles(rect.width, rect.height)
    }

    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    draw()
  })

  onUnmounted(() => {
    if (animationFrame) cancelAnimationFrame(animationFrame)
    if (resizeHandler) window.removeEventListener('resize', resizeHandler)
  })

  return { particles }
}
