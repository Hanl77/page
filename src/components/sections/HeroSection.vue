<template>
  <section id="hero" class="hero">
    <div class="container hero-content">
      <h1 class="hero-name">罗涵</h1>
      <p class="hero-affiliation">
        {{ personalInfo.university }} · {{ personalInfo.major }}
      </p>
      <div class="hero-title">
        <span class="title-static">Research:</span>
        <span class="title-dynamic">{{ displayText }}<span class="cursor">|</span></span>
      </div>
      <p class="hero-subtitle">
        GPA {{ personalInfo.gpa }} / 4.0（{{ personalInfo.gpaRank }}）· {{ personalInfo.expectedOutcome }}
      </p>
      <div class="hero-stats">
        <div class="stat-item">
          <span class="stat-number">{{ pubCount }}</span>
          <span class="stat-label">SCI Papers</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ firstAuthorCount }}</span>
          <span class="stat-label">First Author</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ projectCount }}</span>
          <span class="stat-label">Projects</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">{{ awardCount }}</span>
          <span class="stat-label">Awards</span>
        </div>
      </div>
      <div class="hero-links">
        <a href="mailto:luohankz@stu.jsu.edu.cn" class="hero-link">Email</a>
        <a href="#publications" class="hero-link">Publications</a>
        <a href="#contact" class="hero-link">Contact</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTypewriter } from '@/composables/useTypewriter'
import { personalInfo, publications, researchProjects, awards } from '@/data/resume'

const typeTexts = [
  'VANETs Security',
  'Ciphertext-Policy ABE',
  'Privacy-Preserving Data Sharing',
  'Game-Theoretic Authentication',
]

const { displayText } = useTypewriter(typeTexts, 80, 40, 1800)

const pubCount = publications.length
const firstAuthorCount = publications.filter(p => p.isFirstAuthor).length
const projectCount = researchProjects.length
const awardCount = awards.length
</script>

<style scoped>
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 0 80px;
}

.hero-content {
  text-align: center;
  animation: fadeInUp 0.6s ease;
}

.hero-name {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
  letter-spacing: 6px;
}

.hero-affiliation {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.hero-title {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 12px;
  min-height: 1.6rem;
}

.title-static {
  color: var(--text-muted);
  font-family: var(--font-serif);
  font-style: italic;
}

.title-dynamic {
  color: var(--accent-blue);
  font-family: var(--font-mono);
  font-size: 0.95rem;
}

.cursor {
  color: var(--accent-blue);
  animation: blink 1s step-end infinite;
  font-weight: 300;
}

.hero-subtitle {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 32px;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-bottom: 32px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-family: var(--font-mono);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--accent-blue);
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 2px;
}

.hero-links {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.hero-link {
  font-size: 0.88rem;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 6px 0;
  border-bottom: 1px solid transparent;
  transition: color var(--transition-fast), border-color var(--transition-fast);
}

.hero-link:hover {
  color: var(--accent-blue);
  border-bottom-color: var(--accent-blue);
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes blink {
  50% { opacity: 0; }
}

@media (max-width: 768px) {
  .hero {
    min-height: 70vh;
    padding: 100px 0 60px;
  }

  .hero-name {
    font-size: 2.2rem;
    letter-spacing: 4px;
  }

  .hero-stats {
    gap: 24px;
    flex-wrap: wrap;
  }

  .stat-number {
    font-size: 1.3rem;
  }
}
</style>
