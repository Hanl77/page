import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollAnimation(threshold = 0.15) {
  const elementRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!elementRef.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { elementRef, isVisible }
}

export function useScrollAnimationMultiple(threshold = 0.1) {
  const elements = ref<HTMLElement[]>([])
  const visibleSet = ref<Set<number>>(new Set())
  let observer: IntersectionObserver | null = null

  function addElement(el: HTMLElement | null, index: number) {
    if (!el || !observer) return
    elements.value[index] = el
    observer.observe(el)
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = elements.value.indexOf(entry.target as HTMLElement)
          if (index !== -1 && entry.isIntersecting) {
            visibleSet.value = new Set([...visibleSet.value, index])
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  function isItemVisible(index: number) {
    return visibleSet.value.has(index)
  }

  return { addElement, isItemVisible }
}
