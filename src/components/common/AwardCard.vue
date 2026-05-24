<template>
  <div
    class="award-card"
    ref="elementRef"
    :class="{ visible: isVisible }"
    :style="{ transitionDelay: `${index * 0.1}s` }"
  >
    <div class="award-icon" :class="award.level === '国家级' ? 'national' : 'provincial'">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    </div>
    <div class="award-content">
      <h4 class="award-name">{{ award.name }}</h4>
      <div class="award-meta">
        <Badge :variant="award.level === '国家级' ? 'gold' : 'blue'" size="sm">{{ award.level }}</Badge>
        <span class="award-rank" :class="rankClass">{{ award.rank }}</span>
        <span class="award-year">{{ award.year }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Badge from './Badge.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import type { Award } from '@/data/resume'

const props = defineProps<{
  award: Award
  index: number
}>()

const { elementRef, isVisible } = useScrollAnimation(0.1)

const rankClass = computed(() => {
  if (props.award.rank.includes('一')) return 'rank-first'
  if (props.award.rank.includes('二')) return 'rank-second'
  return 'rank-third'
})
</script>

<style scoped>
.award-card {
  display: flex;
  gap: 16px;
  padding: 16px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(20px);
}

.award-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.award-card:hover {
  border-color: var(--accent-gold);
  background-color: var(--bg-card-hover);
}

.award-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.award-icon.national {
  background: rgba(210, 153, 34, 0.15);
  color: var(--accent-gold);
}

.award-icon.provincial {
  background: rgba(88, 166, 255, 0.1);
  color: var(--accent-blue);
}

.award-content {
  flex: 1;
  min-width: 0;
}

.award-name {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.4;
}

.award-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.award-rank {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
}

.rank-first {
  color: var(--accent-gold);
}

.rank-second {
  color: var(--text-secondary);
}

.rank-third {
  color: var(--accent-cyan);
}

.award-year {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-left: auto;
}
</style>
