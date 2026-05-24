<template>
  <div class="section-title" ref="elementRef" :class="{ visible: isVisible }">
    <span class="section-number">{{ number }}</span>
    <h2 class="title-text">{{ title }}</h2>
    <p class="title-subtitle" v-if="subtitle">{{ subtitle }}</p>
    <div class="title-line"></div>
  </div>
</template>

<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'

defineProps<{
  title: string
  subtitle?: string
  number?: string
}>()

const { elementRef, isVisible } = useScrollAnimation(0.2)
</script>

<style scoped>
.section-title {
  margin-bottom: 48px;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.section-title.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-number {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent-blue);
  display: block;
  margin-bottom: 8px;
  letter-spacing: 2px;
}

.title-text {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.title-subtitle {
  color: var(--text-secondary);
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.title-line {
  width: 48px;
  height: 2px;
  background: var(--accent-blue);
  border-radius: 1px;
  margin: 16px auto 0;
}

@media (max-width: 768px) {
  .title-text {
    font-size: 1.6rem;
  }

  .section-title {
    margin-bottom: 32px;
  }
}
</style>
