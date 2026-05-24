<template>
  <div
    class="pub-card"
    ref="elementRef"
    :class="{ visible: isVisible }"
    :style="{ transitionDelay: `${index * 0.1}s` }"
  >
    <div class="pub-header">
      <div class="pub-badges">
        <Badge variant="blue" v-if="pub.isFirstAuthor">第一作者</Badge>
        <Badge variant="gold">{{ pub.division }}</Badge>
        <Badge variant="green" v-if="pub.ccfRank">{{ pub.ccfRank }}</Badge>
        <Badge :variant="statusVariant">{{ pub.status }}</Badge>
      </div>
      <span class="pub-if">IF = {{ pub.impactFactor }}</span>
    </div>

    <h3 class="pub-title">
      <a v-if="pub.doi" :href="`https://doi.org/${pub.doi}`" target="_blank" rel="noopener">
        {{ pub.title }}
      </a>
      <span v-else>{{ pub.title }}</span>
    </h3>

    <p class="pub-authors">{{ pub.authors }}</p>

    <p class="pub-journal">
      <em>{{ pub.journal }}</em>
      <span v-if="pub.volume">, {{ pub.volume }}</span>
      <span v-if="pub.pages">: {{ pub.pages }}</span>
      <span>, {{ pub.year }}</span>
    </p>

    <a v-if="pub.doi" :href="`https://doi.org/${pub.doi}`" target="_blank" rel="noopener" class="pub-doi">
      DOI: {{ pub.doi }}
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Badge from './Badge.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import type { Publication } from '@/data/resume'

const props = defineProps<{
  pub: Publication
  index: number
}>()

const { elementRef, isVisible } = useScrollAnimation(0.1)

const statusVariant = computed(() => {
  switch (props.pub.status) {
    case 'Published': return 'green'
    case 'Online published': return 'cyan'
    case 'Under Review': return 'purple'
    default: return 'default'
  }
})
</script>

<style scoped>
.pub-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 24px;
  transition: all 0.4s ease;
  opacity: 0;
  transform: translateY(30px);
}

.pub-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.pub-card:hover {
  border-color: var(--accent-blue);
  background-color: var(--bg-card-hover);
}

.pub-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  flex-wrap: wrap;
  gap: 8px;
}

.pub-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.pub-if {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-gold);
  background: rgba(210, 153, 34, 0.1);
  padding: 2px 10px;
  border-radius: 999px;
  white-space: nowrap;
}

.pub-title {
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.pub-title a {
  color: var(--text-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.pub-title a:hover {
  color: var(--accent-blue);
}

.pub-authors {
  font-size: 0.88rem;
  color: var(--text-secondary);
  margin-bottom: 4px;
  line-height: 1.5;
}

.pub-journal {
  font-family: var(--font-serif);
  font-size: 0.88rem;
  color: var(--accent-blue);
  margin-bottom: 10px;
}

.pub-doi {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.pub-doi:hover {
  color: var(--accent-blue);
}

@media (max-width: 768px) {
  .pub-card {
    padding: 16px;
  }

  .pub-title {
    font-size: 0.95rem;
  }
}
</style>
