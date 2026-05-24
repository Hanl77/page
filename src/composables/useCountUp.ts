import { ref, onMounted, watch } from 'vue'

export function useCountUp(target: number, duration = 2000, decimals = 0) {
  const count = ref(0)
  const isAnimating = ref(false)

  function startCount() {
    if (isAnimating.value) return
    isAnimating.value = true

    const startTime = performance.now()
    const startValue = 0

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      count.value = Number((startValue + (target - startValue) * eased).toFixed(decimals))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        count.value = Number(target.toFixed(decimals))
        isAnimating.value = false
      }
    }

    requestAnimationFrame(animate)
  }

  return { count, startCount }
}

export function useCountUpOnView(target: number, duration = 2000, decimals = 0) {
  const count = ref(0)
  const elementRef = ref<HTMLElement | null>(null)
  const hasStarted = ref(false)

  onMounted(() => {
    if (!elementRef.value) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted.value) {
            hasStarted.value = true
            animate()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(elementRef.value)
  })

  function animate() {
    const startTime = performance.now()

    function step(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      count.value = Number((target * eased).toFixed(decimals))

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        count.value = Number(target.toFixed(decimals))
      }
    }

    requestAnimationFrame(step)
  }

  return { count, elementRef }
}
