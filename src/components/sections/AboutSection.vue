<template>
  <section id="about" class="about">
    <div class="container">
      <SectionTitle number="01" title="关于我" subtitle="学术背景与研究兴趣" />

      <div class="about-grid">
        <div class="about-photo-area" ref="photoRef" :class="{ visible: photoVisible }">
          <div class="photo-wrapper">
            <img src="/罗涵.jpg" alt="罗涵" class="photo-img" />
          </div>
        </div>

        <div class="about-main" ref="mainRef" :class="{ visible: mainVisible }">
          <div class="about-text">
            <p>{{ personalInfo.bio }}</p>
          </div>

          <div class="info-card">
            <div class="info-row">
              <span class="info-label">学校</span>
              <span class="info-value">{{ personalInfo.university }}（{{ personalInfo.universityNote }}）</span>
            </div>
            <div class="info-row">
              <span class="info-label">专业</span>
              <span class="info-value">{{ personalInfo.major }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">GPA</span>
              <span class="info-value highlight">{{ personalInfo.gpa }} / 4.0（{{ personalInfo.gpaRank }}）</span>
            </div>
            <div class="info-row">
              <span class="info-label">状态</span>
              <span class="info-value">
                <Badge variant="green">{{ personalInfo.expectedOutcome }}</Badge>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="interests-section" ref="interestsRef" :class="{ visible: interestsVisible }">
        <h3 class="interests-title">研究兴趣</h3>
        <div class="interests-tags">
          <span v-for="(interest, i) in personalInfo.researchInterests" :key="i" class="interest-tag">
            {{ interest }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/common/SectionTitle.vue'
import Badge from '@/components/common/Badge.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { personalInfo } from '@/data/resume'

const { elementRef: photoRef, isVisible: photoVisible } = useScrollAnimation(0.1)
const { elementRef: mainRef, isVisible: mainVisible } = useScrollAnimation(0.1)
const { elementRef: interestsRef, isVisible: interestsVisible } = useScrollAnimation(0.1)
</script>

<style scoped>
.about {
  background-color: var(--bg-secondary);
}

.about-grid {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 48px;
  margin-bottom: 48px;
  align-items: start;
}

.about-photo-area {
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.6s ease;
}

.about-photo-area.visible {
  opacity: 1;
  transform: translateX(0);
}

.photo-wrapper {
  width: 200px;
  height: 260px;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 2px solid var(--border-color);
  background: var(--bg-card);
}

.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.about-main {
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.6s ease;
}

.about-main.visible {
  opacity: 1;
  transform: translateX(0);
}

.about-text p {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 24px;
}

.info-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 20px 24px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--border-color-light);
}

.info-row:last-child {
  border-bottom: none;
}

.info-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

.info-value {
  font-size: 0.9rem;
  color: var(--text-primary);
  text-align: right;
}

.info-value.highlight {
  color: var(--accent-blue);
  font-family: var(--font-mono);
  font-weight: 600;
}

/* Interests */
.interests-section {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.interests-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.interests-title {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 16px;
  font-weight: 600;
}

.interests-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.interest-tag {
  font-size: 0.82rem;
  color: var(--accent-blue);
  background: rgba(88, 166, 255, 0.06);
  border: 1px solid rgba(88, 166, 255, 0.12);
  padding: 5px 12px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .photo-wrapper {
    width: 160px;
    height: 210px;
    margin: 0 auto;
  }
}
</style>
