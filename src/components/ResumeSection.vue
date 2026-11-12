<template>
  <section id="Resume" class="section-panel">
    <div class="container px-4">
      <p class="section-path" aria-hidden="true">~/resume</p>
      <h1 class="fs-2 section-title">Resume</h1>
      <div class="section-rule"></div>

      <Transition name="fade" appear>
        <div>
          <div class="resume__top">
            <div>
              <TerminalCard :facts="whoami" />
              <DownloadLink class="resume__download" />
            </div>

            <div>
              <!-- The prompt is what is seen; the plain heading is what is announced. -->
              <h2 class="prompt-heading">
                <span aria-hidden="true">$ git log --career</span>
                <span class="visually-hidden">Experience and education</span>
              </h2>
              <CareerLog :entries="career" />
            </div>
          </div>

          <h2 class="prompt-heading">
            <span aria-hidden="true">$ skills --list</span>
            <span class="visually-hidden">Skills</span>
          </h2>

          <ul class="skill-list list-unstyled">
            <SkillList
              v-for="category in skillCategories"
              :key="category.id"
              :title="category.title"
              :skills="category.skills"
            />
          </ul>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
import CareerLog from './CareerLog.vue'
import DownloadLink from './DownloadLink.vue'
import SkillList from './SkillList.vue'
import TerminalCard from './TerminalCard.vue'
import { career, skillCategories, whoami } from '@/data/site.js'
</script>

<style scoped>
/* Terminal and career stack on a phone, and sit side by side once there is room. */
.resume__top {
  display: grid;
  gap: 2.25rem;
  margin-bottom: 3rem;
}

@media (min-width: 992px) {
  .resume__top {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
    gap: 2.5rem;
    align-items: start;
  }
}

.resume__download {
  margin-top: 1.5rem;
}

.skill-list {
  width: 100%;
  margin: 0;
  /* Matching rules close the list and keep the flat layout visually anchored. */
  border-top: var(--border-hairline);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--dur-slow) var(--ease);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
