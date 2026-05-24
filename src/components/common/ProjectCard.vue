<template>
  <div
    class="project-card"
    ref="elementRef"
    :class="{ visible: isVisible }"
    :style="{ transitionDelay: `${index * 0.15}s` }"
  >
    <div class="project-top">
      <div class="project-icon">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      </div>
      <div class="project-status">
        <Badge variant="green">{{ project.status }}</Badge>
        <Badge variant="blue" v-if="project.isHost">主持</Badge>
        <Badge variant="purple" v-else>{{ project.role }}</Badge>
      </div>
    </div>

    <h3 class="project-title">{{ project.title }}</h3>
    <p class="project-funding">项目编号: {{ project.fundingNumber }}</p>
    <p class="project-period">{{ project.period }}</p>

    <p class="project-desc">{{ project.description }}</p>

    <ul class="project-contributions">
      <li v-for="(item, i) in project.contributions" :key="i">
        <span class="bullet">▸</span>
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Badge from './Badge.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import type { ResearchProject } from '@/data/resume'

defineProps<{
  project: ResearchProject
  index: number
}>()

const { elementRef, isVisible } = useScrollAnimation(0.1)
</script>

<style scoped>
.project-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(30px);
}

.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover {
  border-color: var(--accent-green);
  background-color: var(--bg-card-hover);
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.project-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: rgba(63, 185, 80, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-green);
}

.project-status {
  display: flex;
  gap: 6px;
}

.project-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.4;
}

.project-funding {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 4px;
}

.project-period {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

.project-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
}

.project-contributions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.project-contributions li {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.6;
  display: flex;
  gap: 8px;
}

.bullet {
  color: var(--accent-green);
  flex-shrink: 0;
  margin-top: 2px;
}

@media (max-width: 768px) {
  .project-card {
    padding: 20px;
  }
}
</style>
