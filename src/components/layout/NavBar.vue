<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'menu-open': isMobileMenuOpen }">
    <div class="nav-container">
      <a href="#hero" class="nav-logo" @click="closeMobileMenu">罗涵</a>

      <button class="mobile-toggle" @click="toggleMobileMenu" :aria-label="isMobileMenuOpen ? '关闭菜单' : '打开菜单'">
        <span class="hamburger" :class="{ active: isMobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <ul class="nav-links" :class="{ open: isMobileMenuOpen }">
        <li v-for="item in navItems" :key="item.id">
          <a
            :href="'#' + item.id"
            class="nav-link"
            :class="{ active: activeSection === item.id }"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { id: 'hero', label: '首页' },
  { id: 'about', label: '关于' },
  { id: 'publications', label: '论文' },
  { id: 'research', label: '科研' },
  { id: 'awards', label: '奖项' },
  { id: 'skills', label: '技能' },
  { id: 'contact', label: '联系' },
]

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('hero')

function handleScroll() {
  isScrolled.value = window.scrollY > 20

  const sections = navItems.map(item => ({
    id: item.id,
    el: document.getElementById(item.id),
  }))

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section.el) {
      const rect = section.el.getBoundingClientRect()
      if (rect.top <= 120) {
        activeSection.value = section.id
        break
      }
    }
  }
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  transition: background-color var(--transition-normal);
  background-color: transparent;
}

.navbar.scrolled {
  background-color: rgba(15, 17, 23, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
}

.nav-container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: 2px;
  transition: color var(--transition-fast);
}

.nav-logo:hover {
  color: var(--accent-blue);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
}

.nav-link {
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-decoration: none;
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  transition: color var(--transition-fast);
  cursor: pointer;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-link.active {
  color: var(--accent-blue);
}

/* Mobile toggle */
.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 20px;
}

.hamburger span {
  display: block;
  height: 2px;
  background-color: var(--text-primary);
  border-radius: 1px;
  transition: transform var(--transition-normal), opacity var(--transition-normal);
}

.hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(15, 17, 23, 0.98);
    backdrop-filter: blur(16px);
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--transition-normal);
  }

  .nav-links.open {
    opacity: 1;
    pointer-events: auto;
  }

  .nav-link {
    font-size: 1.1rem;
    padding: 10px 24px;
  }
}
</style>
