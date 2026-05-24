<template>
  <section id="contact" class="contact">
    <div class="container">
      <SectionTitle number="06" title="联系方式" subtitle="欢迎学术交流与合作" />

      <div class="contact-layout">
        <div class="contact-info" ref="infoRef" :class="{ visible: infoVisible }">
          <div class="contact-card">
            <h3 class="contact-heading">联系信息</h3>

            <a :href="`mailto:${personalInfo.email}`" class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <span class="contact-label">邮箱</span>
                <span class="contact-value">{{ personalInfo.email }}</span>
              </div>
            </a>

            <a :href="`tel:${personalInfo.phone}`" class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <span class="contact-label">电话</span>
                <span class="contact-value">{{ personalInfo.phone }}</span>
              </div>
            </a>

            <a href="https://github.com/Luo-Han" target="_blank" rel="noopener" class="contact-item">
              <div class="contact-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
                </svg>
              </div>
              <div>
                <span class="contact-label">GitHub</span>
                <span class="contact-value">github.com/Luo-Han</span>
              </div>
            </a>
          </div>
        </div>

        <div class="contact-form-wrapper" ref="formRef" :class="{ visible: formVisible }">
          <div class="contact-card">
            <h3 class="contact-heading">发送消息</h3>
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">姓名</label>
                <input id="name" v-model="form.name" type="text" placeholder="请输入您的姓名" required />
              </div>
              <div class="form-group">
                <label for="email">邮箱</label>
                <input id="email" v-model="form.email" type="email" placeholder="请输入您的邮箱" required />
              </div>
              <div class="form-group">
                <label for="message">消息</label>
                <textarea id="message" v-model="form.message" rows="4" placeholder="请输入您的消息" required></textarea>
              </div>
              <button type="submit" class="submit-btn" :disabled="submitted">
                <svg v-if="!submitted" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                <svg v-else viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {{ submitted ? '已发送' : '发送消息' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import SectionTitle from '@/components/common/SectionTitle.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { personalInfo } from '@/data/resume'

const { elementRef: infoRef, isVisible: infoVisible } = useScrollAnimation(0.1)
const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation(0.1)

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    form.name = ''
    form.email = ''
    form.message = ''
    submitted.value = false
  }, 3000)
}
</script>

<style scoped>
.contact {
  background-color: var(--bg-primary);
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.contact-info,
.contact-form-wrapper {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.contact-info.visible,
.contact-form-wrapper.visible {
  opacity: 1;
  transform: translateY(0);
}

.contact-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 28px;
  height: 100%;
}

.contact-heading {
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.contact-item {
  display: flex;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid var(--border-color-light);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-item:hover {
  padding-left: 8px;
}

.contact-item:hover .contact-icon {
  color: var(--accent-blue);
}

.contact-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: rgba(88, 166, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  flex-shrink: 0;
  transition: color var(--transition-fast);
}

.contact-label {
  display: block;
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-bottom: 2px;
}

.contact-value {
  display: block;
  font-size: 0.9rem;
  color: var(--text-primary);
}

/* Form */
.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 6px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px 14px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: 0.9rem;
  transition: border-color var(--transition-fast);
  outline: none;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--accent-blue);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: var(--accent-blue);
  color: #0f1117;
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.submit-btn:hover:not(:disabled) {
  opacity: 0.85;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: default;
}

@media (max-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
}
</style>
