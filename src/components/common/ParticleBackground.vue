<template>
  <canvas ref="canvasRef" class="particle-canvas"></canvas>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useParticles } from '@/composables/useParticles'

const canvasRef = ref<HTMLCanvasElement | null>(null)
useParticles(canvasRef)
</script>

<style scoped>
.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
</style>
