<template>
  <section id="awards" class="awards">
    <div class="container">
      <SectionTitle number="04" title="竞赛奖项" subtitle="程序设计竞赛与学科竞赛成果" />

      <div class="awards-stats" ref="statsRef" :class="{ visible: statsVisible }">
        <div class="award-stat">
          <span class="award-stat-number">{{ nationalCount }}</span>
          <span class="award-stat-label">国家级奖项</span>
        </div>
        <div class="award-stat">
          <span class="award-stat-number">{{ provincialCount }}</span>
          <span class="award-stat-label">省部级奖项</span>
        </div>
      </div>

      <div class="awards-sections">
        <div class="awards-group" ref="nationalRef" :class="{ visible: nationalVisible }">
          <h3 class="group-title">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" class="group-icon gold">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            国家级奖项
          </h3>
          <div class="awards-list">
            <AwardCard
              v-for="(award, index) in nationalAwards"
              :key="award.id"
              :award="award"
              :index="index"
            />
          </div>
        </div>

        <div class="awards-group" ref="provincialRef" :class="{ visible: provincialVisible }">
          <h3 class="group-title">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" class="group-icon blue">
              <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
            省部级奖项
          </h3>
          <div class="awards-list">
            <AwardCard
              v-for="(award, index) in provincialAwards"
              :key="award.id"
              :award="award"
              :index="index"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import AwardCard from '@/components/common/AwardCard.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { awards } from '@/data/resume'

const nationalAwards = computed(() => awards.filter(a => a.level === '国家级'))
const provincialAwards = computed(() => awards.filter(a => a.level === '省部级'))
const nationalCount = nationalAwards.value.length
const provincialCount = provincialAwards.value.length

const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2)
const { elementRef: nationalRef, isVisible: nationalVisible } = useScrollAnimation(0.1)
const { elementRef: provincialRef, isVisible: provincialVisible } = useScrollAnimation(0.1)
</script>

<style scoped>
.awards {
  background-color: var(--bg-primary);
}

.awards-stats {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.awards-stats.visible {
  opacity: 1;
  transform: translateY(0);
}

.award-stat {
  text-align: center;
  padding: 16px 32px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
}

.award-stat-number {
  display: block;
  font-family: var(--font-mono);
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-gold);
  margin-bottom: 4px;
}

.award-stat-label {
  font-size: 0.82rem;
  color: var(--text-muted);
}

.awards-sections {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.awards-group {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.awards-group.visible {
  opacity: 1;
  transform: translateY(0);
}

.group-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-color-light);
}

.group-icon.gold {
  color: var(--accent-gold);
}

.group-icon.blue {
  color: var(--accent-blue);
}

.awards-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (max-width: 768px) {
  .awards-stats {
    flex-direction: column;
    align-items: center;
  }
}
</style>
