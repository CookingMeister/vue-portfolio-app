<template>
  <footer id="footer" class="site-footer">
    <div class="site-footer__scene">
      <FooterLandscape />
    </div>

    <!-- A status line, like the ones along the bottom of tmux and k9s. -->
    <div class="site-footer__status">
      <span class="site-footer__segment site-footer__segment--brand">{{ site.brand }}</span>
      <span class="site-footer__segment site-footer__segment--path">~/fredericton-nb</span>
      <span class="site-footer__copy">&copy; {{ currentYear }} {{ site.name }}</span>

      <nav class="site-footer__links" aria-label="Social profiles">
        <a
          v-for="link in socialLinks"
          :key="link.id"
          class="social-link site-footer__link"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AppIcon :name="link.icon" size="1rem" />
          <span>{{ link.name }}</span>
          <span class="visually-hidden">(opens in a new tab)</span>
        </a>
      </nav>

      <!-- The site is its own work sample, so the footer links to its source. -->
      <a
        class="social-link site-footer__link"
        :href="site.repo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AppIcon name="journalCode" size="1rem" />
        <span>Source</span>
        <span class="visually-hidden">for this site (opens in a new tab)</span>
      </a>
    </div>
  </footer>
</template>

<script setup>
import AppIcon from './AppIcon.vue'
import FooterLandscape from './FooterLandscape.vue'
import { site, socialLinks } from '@/data/site.js'

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  position: relative;
  z-index: 1;
}

/* Dusk sky behind the SVG: navy overhead, warming to plum at the horizon.
   The height follows the drawing's 6:1 shape, so wide screens show the whole
   sun; below the minimum the SVG crops its sides instead of shrinking. */
.site-footer__scene {
  height: clamp(150px, 16.67vw, 280px);
  overflow: hidden;
  background: linear-gradient(#0b1d36 0%, #1a2f5a 55%, #3b2a57 100%);
}

.site-footer__status {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--c-cream);
  background: var(--c-plate);
  border-top: var(--border-hairline);
}

.site-footer__segment,
.site-footer__copy,
.site-footer__link {
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 0.9rem;
  white-space: nowrap;
}

.site-footer__segment--brand {
  color: var(--c-plate);
  background: var(--c-accent);
}

.site-footer__segment--path {
  background: #10294a;
}

.site-footer__copy {
  flex: 1;
  opacity: 0.75;
}

.site-footer__links {
  display: flex;
}

.site-footer__link {
  gap: 0.4rem;
  text-decoration: none;
}

/* On a phone the path tag goes first; the name and the links are what matter. */
@media (max-width: 575.98px) {
  .site-footer__segment--path {
    display: none;
  }
}
</style>
