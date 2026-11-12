<template>
  <li class="nav-item">
    <!-- `custom` exposes `isExactActive`, so `aria-current` can reach screen readers. -->
    <RouterLink v-slot="{ href, navigate, isExactActive }" :to="url" custom>
      <a
        class="nav-link site-nav__link"
        :class="{ active: isExactActive }"
        :href="href"
        :aria-current="isExactActive ? 'page' : undefined"
        @click="navigate"
      >
        {{ name }}
      </a>
    </RouterLink>
  </li>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  url: { type: String, required: true },
  name: { type: String, required: true }
})
</script>

<style scoped>
.site-nav__link {
  color: var(--c-cream);
  transition: color var(--dur-base) var(--ease);
}

.site-nav__link:hover {
  color: var(--c-warm);
}

/* An amber underline, like a selected tab on a terminal status line. */
.site-nav__link.active {
  color: var(--c-cream);
  background-color: var(--surface-sunken);
  box-shadow: inset 0 -2px 0 var(--c-warm);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
