<template>
  <section id="contact" class="section-panel">
    <div class="container px-4">
      <p class="section-path" aria-hidden="true">~/contact</p>
      <h1 class="fs-2 section-title">Contact</h1>
      <div class="section-rule"></div>

      <div class="contact__content">
        <p class="prose mb-4">
          The best way to reach me is on LinkedIn. You can also find my code and projects on GitHub.
        </p>

        <ul class="list-unstyled d-flex flex-column gap-4 mb-0">
          <li v-for="link in socialLinks" :key="link.id">
            <a
              class="contact-card plate"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppIcon :name="link.icon" size="2rem" class="contact-card__icon" />
              <span class="contact-card__text">
                <span class="contact-card__name">{{ link.name }}</span>
                <span class="contact-card__handle">{{ link.handle }}</span>
                <span class="contact-card__blurb">{{ link.blurb }}</span>
              </span>
              <span class="visually-hidden">(opens in a new tab)</span>
              <AppIcon name="arrowRight" class="contact-card__arrow" />
            </a>
          </li>
        </ul>

        <div class="contact__services">
          <h2 class="prompt-heading">
            <span aria-hidden="true">$ services --web</span>
            <span class="visually-hidden">Website design and redesign</span>
          </h2>
          <p class="prose">
            Need a new website or a redesign? Get in touch with
            <a :href="websiteServices.url" target="_blank" rel="noopener noreferrer">
              {{ websiteServices.name
              }}<span class="visually-hidden"> (opens in a new tab)</span></a
            >
            to discuss your project.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppIcon from './AppIcon.vue'
import { socialLinks, websiteServices } from '@/data/site.js'
</script>

<style scoped>
.contact__content {
  max-width: 48rem;
  margin-inline: auto;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem;
  text-decoration: none;
  transition: border-color var(--dur-fast) var(--ease);
}

.contact-card:hover,
.contact-card:focus-visible {
  border-color: var(--c-warm);
}

.contact-card__icon,
.contact-card__arrow,
.contact-card__name {
  color: var(--c-accent);
  transition: color var(--dur-fast) var(--ease);
}

.contact-card:hover .contact-card__icon,
.contact-card:focus-visible .contact-card__icon,
.contact-card:hover .contact-card__arrow,
.contact-card:focus-visible .contact-card__arrow,
.contact-card:hover .contact-card__name,
.contact-card:focus-visible .contact-card__name {
  color: var(--c-warm);
}

.contact-card__text {
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 0.25rem;
  text-align: left;
}

.contact-card__name {
  font-size: var(--fs-md);
  font-weight: 500;
}

.contact-card__handle {
  font-family: var(--font-mono);
  font-size: var(--fs-sm);
  font-weight: 500;
  overflow-wrap: anywhere;
}

.contact-card__blurb {
  font-size: var(--fs-sm);
  opacity: 0.85;
}

.contact-card__icon,
.contact-card__arrow {
  flex-shrink: 0;
}

.contact-card__arrow {
  margin-left: auto;
}

.contact__services {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: var(--border-hairline);
}

.contact__services p {
  margin: 0;
}

.contact__services a {
  color: var(--c-accent);
  text-underline-offset: 0.2em;
}

.contact__services a:hover,
.contact__services a:focus-visible {
  color: var(--c-warm);
}

/* Pairs with Bootstrap's 576px `min-width` breakpoints; the .98 closes the gap at
   fractional widths such as browser zoom. */
@media (max-width: 575.98px) {
  .contact-card {
    gap: 0.85rem;
    padding: 1.1rem;
  }
}
</style>
