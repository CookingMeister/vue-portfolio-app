<template>
  <header ref="headerEl" class="site-header" :class="{ 'site-header--scrolled': isScrolled }">
    <!-- The bar runs full width; its contents sit on the same column as the page. -->
    <div class="container px-4 site-header__inner">
      <RouterLink to="/" class="site-header__brand" :aria-label="`${site.brand} - home`">
        <img
          :src="brandIcon"
          alt=""
          class="site-header__logo"
          width="52"
          height="36"
          aria-hidden="true"
        />
        <!-- Typed like a prompt: the brand, the TLD dimmed, then a block cursor. -->
        <span class="site-header__name">
          {{ site.brand }}<span class="site-header__tld">{{ tld }}</span
          ><span class="cursor-block site-header__cursor" aria-hidden="true"></span>
        </span>
      </RouterLink>

      <nav aria-label="Main">
        <ul class="nav nav-pills">
          <NavLink v-for="item in navItems" :key="item.url" :url="item.url" :name="item.name" />
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue'
import { RouterLink } from 'vue-router'
import NavLink from './NavLink.vue'
import { site } from '@/data/site.js'

const brandIcon = '/img/fullstackchef.png'
// ".dev" - whatever follows the brand in the domain.
const tld = site.domain.slice(site.brand.length)

const navItems = [
  { url: '/', name: 'About' },
  { url: '/portfolio', name: 'Portfolio' },
  { url: '/resume', name: 'Resume' },
  { url: '/contact', name: 'Contact' }
]

const isScrolled = ref(false)
const headerEl = useTemplateRef('headerEl')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

/**
 * Publishes the header's real height as `--header-height` on :root, which page
 * sections use to reserve space. A fixed value goes stale as soon as the header
 * grows - most visibly on narrow screens, where `flex-wrap` drops the nav onto a
 * second line and page titles slide underneath it.
 */
const measureHeader = () => {
  const height = headerEl.value?.offsetHeight
  if (height) {
    document.documentElement.style.setProperty('--header-height', `${height}px`)
  }
}

let observer = null

onMounted(() => {
  // `passive`: this listener never calls preventDefault, so scrolling can stay
  // on the compositor thread.
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  measureHeader()

  // Re-measure on wrap, font load or zoom, falling back to the one-time
  // measurement above where ResizeObserver is unavailable.
  if (typeof ResizeObserver !== 'undefined' && headerEl.value) {
    observer = new ResizeObserver(measureHeader)
    observer.observe(headerEl.value)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  observer?.disconnect()
})
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 26px 0;
  font-weight: 500;
  /* A CRT plate: faint scanlines, with an amber phosphor edge along the bottom. */
  background: var(--scanlines), var(--c-plate);
  border-bottom: 1px solid color-mix(in srgb, var(--c-warm) 55%, transparent);
  box-shadow: 0 1px 14px color-mix(in srgb, var(--c-warm) 22%, transparent);
  transition: box-shadow var(--dur-base) var(--ease);
}

/* The brand and nav line up with the page content's edges at every width. */
.site-header__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

/* On phones the nav drops to its own row under the brand. Tighter pills keep
   all four links on that one row inside the page's 24px side margins. */
@media (max-width: 575.98px) {
  .site-header__inner .nav {
    --bs-nav-link-padding-x: 0.625rem;
  }
}

/* The glow strengthens once the page scrolls beneath the header. */
.site-header--scrolled {
  box-shadow: 0 2px 22px color-mix(in srgb, var(--c-warm) 35%, transparent);
}

.site-header__brand {
  display: flex;
  align-items: center;
  margin-right: auto;
  color: var(--c-cream);
  text-decoration: none;
  transition: color var(--dur-fast) var(--ease);
}

.site-header__logo {
  width: 3.25rem;
  height: 2.25rem;
  object-fit: contain;
  mix-blend-mode: screen;
}

.site-header__name {
  margin-left: 0.6rem;
  font-family: var(--font-mono);
  font-size: var(--fs-lg);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.01em;
}

.site-header__tld {
  opacity: 0.55;
}

/* The cursor itself is the shared `.cursor-block` in styles.css. */
.site-header__cursor {
  margin-left: 0.2rem;
}

.site-header__brand:hover,
.site-header__brand:focus-visible {
  color: var(--c-warm);
}
</style>
