<template>
  <span class="badge" :class="[`badge-${variant}`, `badge-${size}`]">
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'blue' | 'green' | 'gold' | 'purple' | 'red' | 'cyan' | 'default'
  size?: 'sm' | 'md'
}>(), {
  variant: 'default',
  size: 'sm',
})
</script>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-mono);
  font-weight: 500;
  border-radius: 999px;
  white-space: nowrap;
  border: 1px solid transparent;
}

.badge-sm {
  font-size: 0.7rem;
  padding: 2px 8px;
}

.badge-md {
  font-size: 0.78rem;
  padding: 4px 12px;
}

.badge-blue {
  color: var(--accent-blue);
  background-color: rgba(88, 166, 255, 0.1);
  border-color: rgba(88, 166, 255, 0.2);
}

.badge-green {
  color: var(--accent-green);
  background-color: rgba(63, 185, 80, 0.1);
  border-color: rgba(63, 185, 80, 0.2);
}

.badge-gold {
  color: var(--accent-gold);
  background-color: rgba(210, 153, 34, 0.1);
  border-color: rgba(210, 153, 34, 0.2);
}

.badge-purple {
  color: var(--accent-purple);
  background-color: rgba(188, 140, 255, 0.1);
  border-color: rgba(188, 140, 255, 0.2);
}

.badge-red {
  color: var(--accent-red);
  background-color: rgba(248, 81, 73, 0.1);
  border-color: rgba(248, 81, 73, 0.2);
}

.badge-cyan {
  color: var(--accent-cyan);
  background-color: rgba(57, 210, 192, 0.1);
  border-color: rgba(57, 210, 192, 0.2);
}

.badge-default {
  color: var(--text-secondary);
  background-color: rgba(139, 148, 158, 0.1);
  border-color: rgba(139, 148, 158, 0.2);
}
</style>
