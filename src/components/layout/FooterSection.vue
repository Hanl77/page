<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <span class="footer-logo">罗涵</span>
          <p class="footer-desc">车联网安全与隐私保护研究</p>
        </div>
        <div class="footer-links">
          <a href="mailto:luohankz@stu.jsu.edu.cn" class="footer-link" title="邮箱">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          <a href="https://github.com/Luo-Han" target="_blank" rel="noopener" class="footer-link" title="GitHub">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} 罗涵. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 40px 0 24px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.footer-logo {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 2px;
}

.footer-desc {
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-top: 4px;
}

.footer-links {
  display: flex;
  gap: 16px;
}

.footer-link {
  color: var(--text-secondary);
  transition: color var(--transition-fast), transform var(--transition-fast);
  display: flex;
  align-items: center;
}

.footer-link:hover {
  color: var(--accent-blue);
  transform: translateY(-2px);
}

.footer-bottom {
  text-align: center;
  padding-top: 24px;
  border-top: 1px solid var(--border-color-light);
  color: var(--text-muted);
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}
</style>
