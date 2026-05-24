<template>
  <section id="skills" class="skills">
    <div class="container">
      <SectionTitle number="05" title="专业技能" subtitle="研究能力与技术栈" />

      <div class="skills-layout">
        <div class="radar-section" ref="radarRef" :class="{ visible: radarVisible }">
          <h3 class="skills-subtitle">能力雷达图</h3>
          <canvas ref="radarCanvas" class="radar-canvas"></canvas>
        </div>

        <div class="skills-detail">
          <div
            v-for="(category, catIndex) in skillCategories"
            :key="category.name"
            class="skill-category"
            :ref="(el) => setCategoryRef(el as HTMLElement, catIndex)"
            :class="{ visible: isCategoryVisible(catIndex) }"
          >
            <h3 class="category-title">
              <span class="category-icon" v-html="category.icon"></span>
              {{ category.name }}
            </h3>
            <div class="skill-bars">
              <div v-for="skill in category.skills" :key="skill.name" class="skill-bar-item">
                <div class="skill-bar-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar-track">
                  <div
                    class="skill-bar-fill"
                    :style="{ width: isCategoryVisible(catIndex) ? `${skill.level}%` : '0%' }"
                    :class="category.color"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useRadarChart } from '@/composables/useRadarChart'
import { useScrollAnimationMultiple } from '@/composables/useScrollAnimation'
import { skills } from '@/data/resume'

const radarCanvas = ref<HTMLCanvasElement | null>(null)
const { elementRef: radarRef, isVisible: radarVisible } = useScrollAnimation(0.2)
const { addElement: setCategoryRef, isItemVisible: isCategoryVisible } = useScrollAnimationMultiple(0.15)

const radarData = [
  { label: '密码学', value: 95 },
  { label: '网络安全', value: 90 },
  { label: '隐私保护', value: 90 },
  { label: '形式化验证', value: 80 },
  { label: '编程能力', value: 88 },
  { label: '论文写作', value: 85 },
]

useRadarChart(radarCanvas, radarData, {
  maxValue: 100,
  color: '#58a6ff',
  bgColor: 'rgba(88, 166, 255, 0.12)',
})

const skillCategories = [
  {
    name: '研究方向',
    color: 'blue',
    icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    skills: skills.research,
  },
  {
    name: '编程语言',
    color: 'green',
    icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    skills: skills.programming,
  },
  {
    name: '工具与平台',
    color: 'purple',
    icon: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    skills: skills.tools,
  },
]
</script>

<style scoped>
.skills {
  background-color: var(--bg-secondary);
}

.skills-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 48px;
  align-items: start;
}

.radar-section {
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.radar-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.skills-subtitle {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.radar-canvas {
  width: 100%;
  max-width: 360px;
  height: 360px;
  margin: 0 auto;
}

.skills-detail {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.skill-category {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.skill-category.visible {
  opacity: 1;
  transform: translateY(0);
}

.category-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.category-icon {
  color: var(--accent-blue);
  display: flex;
  align-items: center;
}

.skill-bars {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.skill-bar-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.skill-name {
  font-size: 0.85rem;
  color: var(--text-secondary);
}

.skill-level {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
}

.skill-bar-track {
  height: 6px;
  background: var(--bg-primary);
  border-radius: 3px;
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 1.5s ease;
}

.skill-bar-fill.blue {
  background: var(--accent-blue);
}

.skill-bar-fill.green {
  background: var(--accent-green);
}

.skill-bar-fill.purple {
  background: var(--accent-purple);
}

@media (max-width: 1024px) {
  .skills-layout {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .radar-canvas {
    max-width: 300px;
    height: 300px;
  }
}

@media (max-width: 768px) {
  .radar-canvas {
    max-width: 260px;
    height: 260px;
  }
}
</style>
