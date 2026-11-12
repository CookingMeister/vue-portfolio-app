<template>
  <!--
    A terminal window answering `whoami`. The window chrome, the prompts and the
    cursor are decoration and hidden from assistive tech; the facts are a real
    description list.
  -->
  <div class="terminal">
    <div class="terminal__bar" aria-hidden="true">
      <i></i><i></i><i></i>
      <span>{{ host }}: ~</span>
    </div>
    <div class="terminal__body">
      <p class="terminal__line" aria-hidden="true">
        <span class="terminal__prompt">$</span> whoami --verbose
      </p>
      <dl class="terminal__facts">
        <template v-for="fact in facts" :key="fact.key">
          <dt>{{ fact.key }}</dt>
          <dd>{{ fact.value }}</dd>
        </template>
      </dl>
      <p class="terminal__line" aria-hidden="true">
        <span class="terminal__prompt">$</span> <span class="cursor-block"></span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { site } from '@/data/site.js'

defineProps({
  /** Rows of `{ key, value }`, printed as the command's output. */
  facts: { type: Array, required: true }
})

// "shawn@fullstackchef", from the first name and the brand.
const host = `${site.name.split(' ')[0].toLowerCase()}@${site.brand}`
</script>

<style scoped>
.terminal {
  overflow: hidden;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.75;
  color: var(--c-cream);
  /* The same CRT plate and phosphor edge as the header. */
  background:
    repeating-linear-gradient(rgba(255, 255, 255, 0.03) 0 1px, transparent 1px 3px), var(--c-plate);
  border: 1px solid rgba(255, 179, 71, 0.45);
  border-radius: var(--radius-key);
  box-shadow: 0 0 22px rgba(255, 179, 71, 0.12);
}

.terminal__bar {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  background: #0c2038;
  border-bottom: var(--border-hairline);
}

.terminal__bar i {
  width: 9px;
  height: 9px;
  background: rgba(250, 235, 215, 0.3);
  border-radius: 50%;
}

.terminal__bar span {
  margin-left: 0.5rem;
  opacity: 0.65;
}

.terminal__body {
  padding: 0.85rem 1rem 1rem;
}

.terminal__line {
  margin: 0;
}

.terminal__prompt {
  color: var(--c-accent);
}

/* Keys in one column, values in the next, like aligned command output. */
.terminal__facts {
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 1.5ch;
  margin: 0;
}

.terminal__facts dt {
  font-weight: 500;
  color: var(--c-warm);
}

.terminal__facts dd {
  margin: 0;
}
</style>
