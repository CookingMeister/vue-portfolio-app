<template>
  <section id="About" class="section-panel about">
    <div class="container px-4">
      <!-- Source order stays natural on phones; grid areas create the desktop layout. -->
      <div class="about__grid">
        <div class="about__intro">
          <p class="section-path" aria-hidden="true">~/about</p>
          <h1 class="display-5 fw-500">{{ about.heading }}</h1>
          <p class="about__tagline lead fw-500 mb-0">
            <span class="about__tagline-text">{{ about.subheading }}</span><span
              class="cursor-block about__cursor"
              aria-hidden="true"
            ></span>
          </p>
        </div>

        <div class="about__portrait">
          <img
            :src="about.portrait.src"
            :alt="about.portrait.alt"
            class="profile-pic rounded-circle"
            width="320"
            height="320"
            fetchpriority="high"
            decoding="async"
          />
          <p class="about__meta">{{ site.location }}</p>
        </div>

        <div class="about__copy">
          <p v-for="(paragraph, i) in about.paragraphs" :key="i">
            {{ paragraph }}
          </p>

          <div class="about__actions">
            <RouterLink class="keycap" to="/portfolio">See my work</RouterLink>
            <RouterLink class="keycap keycap--alt" to="/contact">Get in touch</RouterLink>
          </div>
        </div>

        <aside class="about__highlights" aria-labelledby="highlights-heading">
          <h2 id="highlights-heading" class="prompt-heading">
            <span aria-hidden="true">$ highlights --top</span>
            <span class="visually-hidden">Career highlights</span>
          </h2>
          <ul class="about__highlight-list list-unstyled">
            <li v-for="highlight in about.highlights" :key="highlight.value">
              <strong>{{ highlight.value }}</strong>
              <span>{{ highlight.label }}</span>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { about, site } from '@/data/site.js'
</script>

<style scoped>
.about {
  --portrait-size: clamp(150px, 38vw, 190px);
  padding-bottom: 4rem;
  color: var(--c-cream);
}

.fw-500 {
  font-weight: 500;
}

.about__grid {
  display: grid;
  gap: 2rem;
  justify-items: center;
  text-align: center;
}

.about__intro h1 {
  margin-bottom: 0.75rem;
}

.about__tagline {
  font-family: var(--font-mono);
  font-size: clamp(0.82rem, 2.5vw, 1rem);
  line-height: 1.6;
  color: var(--c-cream);
}

.about__cursor {
  margin-left: 0.2em;
}

.about__portrait {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  animation: portrait-in var(--dur-base) var(--ease) both;
}

.profile-pic {
  width: var(--portrait-size);
  height: auto;
  border: 2px solid var(--c-warm);
}

.about__meta {
  margin: 0;
  color: var(--c-cream);
  opacity: 0.85;
  letter-spacing: 0.04em;
  font-size: 0.9rem;
  line-height: 1.6;
}

.about__copy p {
  margin-bottom: 1.15rem;
  font-weight: 300;
  line-height: 1.75;
  letter-spacing: 0.01em;
  text-align: left;
}

.about__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.about__highlights {
  width: 100%;
  text-align: left;
}

.about__highlight-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;
}

.about__highlight-list li {
  display: flex;
  flex-direction: column;
  min-height: 6.5rem;
  padding: 1rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 500;
  line-height: 1.5;
  color: var(--c-cream);
  background:
    repeating-linear-gradient(rgba(255, 255, 255, 0.025) 0 1px, transparent 1px 3px), var(--c-plate);
  border: 1px solid rgba(255, 179, 71, 0.38);
  border-radius: var(--radius-key);
}

.about__highlight-list strong {
  margin-bottom: 0.25rem;
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--c-warm);
}

@keyframes portrait-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* Reveal only the text; the cursor keeps the shared shape and blink timing.
   Clipping preserves the text baseline so the adjacent cursor stays aligned.
   Phones and reduced-motion users see the complete tagline immediately. */
@media (min-width: 768px) and (prefers-reduced-motion: no-preference) {
  .about__tagline-text {
    display: inline-block;
    width: 0;
    white-space: nowrap;
    clip-path: inset(0);
    animation: tagline-type 1.5s steps(63, end) forwards;
  }
}

@keyframes tagline-type {
  to {
    width: 63ch;
  }
}

@media (prefers-reduced-motion: reduce) {
  .about__portrait {
    animation: none;
  }
}

@media (min-width: 992px) {
  .about {
    --portrait-size: 13.5rem;
  }

  .about__grid {
    grid-template-columns: minmax(0, var(--portrait-size)) minmax(0, 1fr) minmax(13rem, 0.55fr);
    grid-template-areas:
      'portrait intro intro'
      'portrait copy highlights';
    column-gap: 2.5rem;
    row-gap: 1.75rem;
    justify-items: stretch;
    align-items: start;
    text-align: left;
  }

  .about__intro {
    grid-area: intro;
  }

  .about__portrait {
    grid-area: portrait;
    margin-top: 1.5rem;
  }

  .about__copy {
    grid-area: copy;
  }

  .about__actions {
    justify-content: flex-start;
  }

  .about__highlights {
    grid-area: highlights;
  }

  .about__highlight-list {
    grid-template-columns: 1fr;
  }
}
</style>
