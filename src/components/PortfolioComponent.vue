<template>
  <section id="Work" class="section-panel">
    <div class="container px-4">
      <p class="section-path" aria-hidden="true">~/portfolio</p>
      <h1 class="fs-2 section-title">Portfolio</h1>
      <div class="section-rule"></div>

      <h2 class="fs-5 portfolio__subhead">Featured work</h2>
      <p class="portfolio__note">
        Professional projects and current PL/B development. Source availability is noted on each
        project.
      </p>
      <!-- One card per row: these carry the longest descriptions, and a
           screenshot beside the text needs the full width to stay short. -->
      <div class="row row-cols-1 g-4 pb-5 portfolio__grid">
        <WorkCard
          v-for="project in featured"
          :key="project.id"
          :status="project.status"
          :source-planned="project.sourcePlanned"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :alt="project.alt"
          :tags="project.tags"
          :links="project.links"
        />
      </div>

      <h2 class="fs-5 portfolio__subhead">Open source &amp; personal projects</h2>
      <div class="row row-cols-1 row-cols-md-2 align-items-stretch g-4 pb-5 portfolio__grid">
        <WorkCard
          v-for="project in personal"
          :key="project.id"
          :status="project.status"
          :source-planned="project.sourcePlanned"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :alt="project.alt"
          :tags="project.tags"
          :links="project.links"
        />
      </div>

      <section aria-labelledby="earlier-work-heading">
        <p class="section-path" aria-hidden="true">~/portfolio/archive</p>
        <h2 id="earlier-work-heading" class="fs-5 portfolio__subhead">Earlier work</h2>
        <p class="portfolio__note">
          Smaller projects from when I was learning full-stack development.
        </p>
        <ul class="earlier list-unstyled">
          <li v-for="project in earlier" :key="project.id" class="earlier__row">
            <div>
              <h3 class="earlier__title">{{ project.title }}</h3>
              <p class="earlier__desc">{{ project.description }}</p>
            </div>
            <div class="earlier__links">
              <a
                v-for="link in project.links"
                :key="link.url"
                class="earlier__link"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppIcon :name="link.type === 'github' ? 'github' : 'external'" />
                <span>{{ linkLabels[link.type] }}</span>
                <span class="visually-hidden">for {{ project.title }} (opens in a new tab)</span>
              </a>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script setup>
import AppIcon from './AppIcon.vue'
import WorkCard from './WorkCard.vue'
import { linkLabels, projects } from '@/data/site.js'

const featured = projects.filter((project) => project.featured)
const personal = projects.filter((project) => !project.featured && !project.earlier)
const earlier = projects.filter((project) => project.earlier)
</script>

<style scoped>
.portfolio__subhead {
  margin: 0;
  color: var(--c-cream);
  text-shadow: var(--text-shadow-title);
}

.portfolio__note {
  margin: 0.4rem 0 0;
  color: var(--c-cream);
  opacity: 0.85;
  font-size: 0.95rem;
}

.portfolio__grid {
  /* On the grid rather than the heading, so heading-only and heading-plus-note
     groups get the same air. */
  margin-top: 2rem;
}

/* In an odd-sized group the lead card spans the row: it is the highlight, and
   the group never ends on an empty slot. */
@media (min-width: 768px) {
  .portfolio__grid > .col:first-child:nth-last-child(odd) {
    flex: 0 0 100%;
    width: 100%;
  }
}

/* Flat rows, like the skills list: these are a record, not a showcase. */
.earlier {
  margin: 1.5rem 0 0;
  border-top: var(--border-hairline);
}

.earlier__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 2rem;
  padding: 1rem 0;
  border-bottom: var(--border-hairline);
}

.earlier__title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--c-cream);
}

.earlier__desc {
  margin: 0.15rem 0 0;
  font-size: 0.9rem;
  color: var(--c-cream);
  opacity: 0.85;
}

.earlier__links {
  display: flex;
  gap: 1rem;
}

.earlier__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--c-cream);
  font-size: 0.9rem;
  text-decoration: none;
  transition: color var(--dur-base) var(--ease);
}

.earlier__link:hover,
.earlier__link:focus-visible {
  color: var(--c-warm);
  text-decoration: underline;
}
</style>
