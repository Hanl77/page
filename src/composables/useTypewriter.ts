import { ref, onMounted, onUnmounted } from 'vue'

export function useTypewriter(texts: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const displayText = ref('')
  const currentIndex = ref(0)
  const isDeleting = ref(false)
  let timer: ReturnType<typeof setTimeout> | null = null

  function type() {
    const currentText = texts[currentIndex.value]

    if (!isDeleting.value) {
      displayText.value = currentText.substring(0, displayText.value.length + 1)

      if (displayText.value === currentText) {
        timer = setTimeout(() => {
          isDeleting.value = true
          type()
        }, pauseTime)
        return
      }
    } else {
      displayText.value = currentText.substring(0, displayText.value.length - 1)

      if (displayText.value === '') {
        isDeleting.value = false
        currentIndex.value = (currentIndex.value + 1) % texts.length
      }
    }

    timer = setTimeout(type, isDeleting.value ? deletingSpeed : typingSpeed)
  }

  onMounted(() => {
    type()
  })

  onUnmounted(() => {
    if (timer) clearTimeout(timer)
  })

  return { displayText }
}
