import { ref, onMounted, watch, type Ref } from 'vue'

interface RadarDataPoint {
  label: string
  value: number
}

export function useRadarChart(
  canvasRef: Ref<HTMLCanvasElement | null>,
  data: RadarDataPoint[],
  options: {
    maxValue?: number
    color?: string
    bgColor?: string
    gridColor?: string
    labelColor?: string
    animate?: boolean
  } = {}
) {
  const {
    maxValue = 100,
    color = '#58a6ff',
    bgColor = 'rgba(88, 166, 255, 0.1)',
    gridColor = 'rgba(48, 54, 61, 0.6)',
    labelColor = '#8b949e',
    animate = true,
  } = options

  const animationProgress = ref(0)
  let animationFrame: number | null = null

  function draw(progress = 1) {
    const canvas = canvasRef.value
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const width = rect.width
    const height = rect.height
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) / 2 - 50
    const sides = data.length
    const angleStep = (2 * Math.PI) / sides

    ctx.clearRect(0, 0, width, height)

    // Draw grid
    const gridLevels = 5
    for (let level = 1; level <= gridLevels; level++) {
      const r = (radius / gridLevels) * level
      ctx.beginPath()
      for (let i = 0; i <= sides; i++) {
        const angle = i * angleStep - Math.PI / 2
        const x = centerX + r * Math.cos(angle)
        const y = centerY + r * Math.sin(angle)
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.strokeStyle = gridColor
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Draw axes
    for (let i = 0; i < sides; i++) {
      const angle = i * angleStep - Math.PI / 2
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(
        centerX + radius * Math.cos(angle),
        centerY + radius * Math.sin(angle)
      )
      ctx.strokeStyle = gridColor
      ctx.lineWidth = 1
      ctx.stroke()
    }

    // Draw data area
    ctx.beginPath()
    for (let i = 0; i <= sides; i++) {
      const idx = i % sides
      const angle = idx * angleStep - Math.PI / 2
      const value = (data[idx].value / maxValue) * radius * progress
      const x = centerX + value * Math.cos(angle)
      const y = centerY + value * Math.sin(angle)
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.closePath()
    ctx.fillStyle = bgColor
    ctx.fill()
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw data points
    for (let i = 0; i < sides; i++) {
      const angle = i * angleStep - Math.PI / 2
      const value = (data[i].value / maxValue) * radius * progress
      const x = centerX + value * Math.cos(angle)
      const y = centerY + value * Math.sin(angle)

      ctx.beginPath()
      ctx.arc(x, y, 4, 0, 2 * Math.PI)
      ctx.fillStyle = color
      ctx.fill()
      ctx.strokeStyle = '#0d1117'
      ctx.lineWidth = 2
      ctx.stroke()
    }

    // Draw labels
    ctx.font = '13px -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", sans-serif'
    ctx.fillStyle = labelColor
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    for (let i = 0; i < sides; i++) {
      const angle = i * angleStep - Math.PI / 2
      const labelRadius = radius + 28
      const x = centerX + labelRadius * Math.cos(angle)
      const y = centerY + labelRadius * Math.sin(angle)

      ctx.fillStyle = color
      ctx.fillText(data[i].label, x, y)
    }
  }

  function animateIn() {
    if (!animate) {
      draw(1)
      return
    }

    const startTime = performance.now()
    const duration = 1200

    function step(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      animationProgress.value = eased
      draw(eased)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)
  }

  onMounted(() => {
    const canvas = canvasRef.value
    if (!canvas) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateIn()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(canvas)
  })

  return { draw, animateIn }
}
