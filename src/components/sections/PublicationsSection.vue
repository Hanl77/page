<template>
  <section id="publications" class="publications">
    <div class="container">
      <SectionTitle number="02" title="学术论文" subtitle="车联网安全与隐私保护方向研究成果" />

      <div class="pub-stats" ref="statsRef" :class="{ visible: statsVisible }">
        <div class="pub-stat">
          <span class="pub-stat-number">{{ pubCount }}</span>
          <span class="pub-stat-label">SCI 论文</span>
        </div>
        <div class="pub-stat">
          <span class="pub-stat-number">{{ firstAuthorCount }}</span>
          <span class="pub-stat-label">第一作者</span>
        </div>
        <div class="pub-stat">
          <span class="pub-stat-number">8.4</span>
          <span class="pub-stat-label">最高 IF</span>
        </div>
        <div class="pub-stat">
          <span class="pub-stat-number">2</span>
          <span class="pub-stat-label">中科院二区</span>
        </div>
      </div>

      <div class="pub-list">
        <PublicationCard
          v-for="(pub, index) in publications"
          :key="pub.id"
          :pub="pub"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/common/SectionTitle.vue'
import PublicationCard from '@/components/common/PublicationCard.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { publications } from '@/data/resume'

const pubCount = publications.length
const firstAuthorCount = publications.filter(p => p.isFirstAuthor).length

const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2)
</script>

<style scoped>
.publications {
  background-color: var(--bg-primary);
}

.pub-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.pub-stats.visible {
  opacity: 1;
  transform: translateY(0);
}

.pub-stat {
  text-align: center;
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: border-color var(--transition-fast);
}

.pub-stat:hover {
  border-color: var(--accent-blue);
}

.pub-stat-number {
  display: block;
  font-family: var(--font-mono);
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-blue);
  margin-bottom: 4px;
}

.pub-stat-label {
  font-size: 0.82rem;
  color: var(--text-muted);
}

.pub-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 768px) {
  .pub-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .pub-stat-number {
    font-size: 1.5rem;
  }
}
</style>
