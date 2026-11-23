<template>
  <!-- Career drawn as a commit history: newest first, one dot per entry. -->
  <ol class="career list-unstyled">
    <li
      v-for="entry in entries"
      :key="entry.title"
      class="career__entry"
      :class="{ 'career__entry--before': entry.kind !== 'software' }"
    >
      <p class="career__when">{{ entry.when }}</p>
      <h3 class="career__title">{{ entry.title }}</h3>
      <p class="career__place">{{ entry.place }}</p>
    </li>
  </ol>
</template>

<script setup>
defineProps({
  /** Rows of `{ when, title, place, kind }`; any kind but 'software' draws a hollow dot. */
  entries: { type: Array, required: true }
})
</script>

<style scoped>
/* The line is the branch; each entry hangs a commit dot on it. */
.career {
  margin: 0;
  padding-left: 1.25rem;
  border-left: 1px solid var(--c-cream-muted);
}

.career__entry {
  position: relative;
  padding: 0 0 1rem 0.25rem;
}

.career__entry:last-child {
  padding-bottom: 0;
}

.career__entry::before {
  position: absolute;
  top: 0.3rem;
  /* Centres the 10px dot on the 1px line. */
  left: calc(-1.25rem - 5.5px);
  width: 10px;
  height: 10px;
  content: '';
  background: var(--c-warm);
  border-radius: 50%;
  /* A ring in the page's own colour cuts the line around each dot. */
  box-shadow: 0 0 0 3px var(--c-ground-mid);
}

/* The years before software: the same line, an open dot. */
.career__entry--before::before {
  background: var(--c-plate);
  border: 2px solid var(--c-warm);
}

.career__when {
  margin: 0;
  font-family: var(--font-mono);
  font-size: var(--fs-xs);
  font-weight: 500;
  opacity: 0.7;
}

.career__title {
  margin: 0.05rem 0;
  font-size: var(--fs-base);
  font-weight: 500;
}

.career__place {
  margin: 0;
  font-size: var(--fs-sm);
  opacity: 0.85;
}
</style>
