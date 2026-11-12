<template>
  <section class="section-panel error-page">
    <Transition name="slide" appear>
      <div class="container text-center">
        <!-- "86'd" is kitchen shorthand for a dish that has run out. -->
        <h1 class="error-page__code">86'd</h1>
        <p class="error-page__lead">This page is off the menu.</p>
        <p class="error-page__plain mb-4">404 &mdash; Page Not Found</p>
        <RouterLink class="keycap" to="/">Back to home</RouterLink>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Height comes from `.section-panel` (100vh), the same as every other page. A
   shorter panel leaves a strip of the body's fixed gradient above the footer. */
.error-page {
  padding-top: 30vh;
}

.error-page__code {
  margin: 0;
  font-family: var(--font-mono);
  font-size: clamp(3.75rem, 14vw, 6.5rem);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--c-warm);
  text-shadow: 0 0 24px rgba(255, 179, 71, 0.45);
}

.error-page__lead {
  margin: 0.5rem 0 0.35rem;
  font-size: 1.35rem;
}

/* The plain statement, for anyone who has never worked a line. */
.error-page__plain {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  opacity: 0.75;
}

.slide-enter-active,
.slide-leave-active {
  transition: all var(--dur-base) ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
