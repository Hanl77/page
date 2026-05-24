<template>
  <div id="portfolio">
    <NavBar />
    <router-view />
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
</script>

<style>
#portfolio {
  min-height: 100vh;
}
</style>
