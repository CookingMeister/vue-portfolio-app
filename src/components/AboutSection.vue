<template>
  <section id="about" class="section-panel about">
    <div class="container px-4">
      <!-- Source order stays natural on phones; grid areas create the desktop layout. -->
      <div class="about__grid">
        <div class="about__intro">
          <p class="section-path" aria-hidden="true">~/about</p>
          <h1 class="display-5 fw-medium">{{ about.heading }}</h1>
          <p class="about__tagline mb-0">
            <span class="about__tagline-text">{{ about.subheading }}</span><span
              class="cursor-block about__cursor"
              aria-hidden="true"
            ></span>
          </p>
          <!-- The lede and the links sit in the intro, not after the bio, so phones
               reach "See my work" without scrolling past the portrait and the story. -->
          <p class="about__lede">{{ about.lede }}</p>

          <div class="about__actions">
            <RouterLink class="keycap" to="/portfolio">See my work</RouterLink>
            <RouterLink class="keycap keycap--alt" to="/contact">Get in touch</RouterLink>
          </div>
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
          <p v-for="(paragraph, i) in about.paragraphs" :key="i" class="prose">
            {{ paragraph }}
          </p>
        </div>

        <aside class="about__highlights" aria-labelledby="highlights-heading">
          <!-- Kitchen order tickets. "Order up" is the call that a dish is done and
               waiting for the server: finished work, ready for the reader. -->
          <h2 id="highlights-heading" class="prompt-heading">
            <span aria-hidden="true">$ highlights --order-up</span>
            <span class="visually-hidden">Career highlights</span>
          </h2>
          <ul class="about__highlight-list list-unstyled">
            <li
              v-for="(highlight, i) in about.highlights"
              :key="highlight.value"
              class="plate ticket"
            >
              <!-- The ticket stub: its number and the station it went to. Decoration. -->
              <p class="ticket__head" aria-hidden="true">
                <span>#{{ String(i + 1).padStart(2, '0') }}</span>
                <span>{{ highlight.station }}</span>
              </p>
              <div class="ticket__body">
                <strong>{{ highlight.value }}</strong>
                <span>{{ highlight.label }}</span>
              </div>
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
  font-size: clamp(var(--fs-sm), 2.5vw, var(--fs-base));
  font-weight: 500;
  line-height: 1.6;
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
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border: 2px solid var(--c-warm);
}

.about__meta {
  margin: 0;
  opacity: 0.85;
  letter-spacing: 0.04em;
  font-size: var(--fs-sm);
}

/* The tagline's size at every width, so it reads under the tagline, never over it
   (the tagline shrinks to 14px on phones). */
.about__lede {
  max-width: 40rem;
  margin: 1rem auto 0;
  font-size: clamp(var(--fs-sm), 2.5vw, var(--fs-base));
  line-height: 1.6;
}

.about__copy p {
  margin-bottom: 1.15rem;
  text-align: left;
}

.about__copy p:last-child {
  margin-bottom: 0;
}

.about__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 1.5rem;
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
  overflow: hidden;
  font-family: var(--font-mono);
  font-size: var(--fs-xs);
  font-weight: 500;
  line-height: 1.5;
}

/* A kitchen ticket's stub, drawn like the terminal window's title bar, with a
   dashed tear-off line between it and the order. */
.ticket__head {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 0;
  padding: 0.3rem 1rem;
  color: color-mix(in srgb, var(--c-cream) 65%, transparent);
  letter-spacing: 0.04em;
  background: var(--c-plate-raised);
  border-bottom: 1px dashed var(--c-cream-muted);
}

.ticket__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.75rem 1rem 1rem;
}

.about__highlight-list strong {
  margin-bottom: 0.25rem;
  font-size: var(--fs-md);
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
    animation: tagline-type 0.8s steps(63, end) forwards;
  }
}

@keyframes tagline-type {
  to {
    width: 63ch;
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

  .about__lede {
    margin-left: 0;
  }

  .about__portrait {
    grid-area: portrait;
    margin-top: 1.5rem;
  }

  /* The copy and the highlights share a row, so their first lines share a
     baseline: "$ highlights --top" sits on the same line as the first line of
     the bio instead of 7px above it. */
  .about__copy {
    grid-area: copy;
    align-self: baseline;
  }

  .about__actions {
    justify-content: flex-start;
  }

  .about__highlights {
    grid-area: highlights;
    align-self: baseline;
  }

  .about__highlight-list {
    grid-template-columns: 1fr;
  }
}

/* From 1400px the middle column fits the 63ch tagline, so the highlights can take
   the right column from the top instead of waiting below the intro row. Narrower,
   the tagline needs both columns. */
@media (min-width: 1400px) {
  .about__grid {
    grid-template-areas:
      'portrait intro highlights'
      'portrait copy highlights';
  }

  .about__highlights {
    align-self: start;
  }
}
</style>
