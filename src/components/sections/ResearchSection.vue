<template>
  <section id="research" class="research">
    <div class="container">
      <SectionTitle number="03" title="科研项目" subtitle="主持及参与的科研课题" />

      <div class="research-grid">
        <ProjectCard
          v-for="(project, index) in researchProjects"
          :key="project.id"
          :project="project"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/common/SectionTitle.vue'
import ProjectCard from '@/components/common/ProjectCard.vue'
import { researchProjects } from '@/data/resume'
</script>

<style scoped>
.research {
  background-color: var(--bg-secondary);
}

.research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
}

@media (max-width: 768px) {
  .research-grid {
    grid-template-columns: 1fr;
  }
}
</style>
