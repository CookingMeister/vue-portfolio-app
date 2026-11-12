<template>
  <a class="keycap" :href="resumeFile" download>
    <AppIcon name="download" />
    Download Resume (PDF)
  </a>
</template>

<script setup>
import AppIcon from './AppIcon.vue'
import { resumeFile } from '@/data/site.js'
</script>
