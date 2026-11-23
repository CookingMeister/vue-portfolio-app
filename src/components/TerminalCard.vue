<template>
  <!--
    A terminal window answering `whoami`. The window chrome, the prompts and the
    cursor are decoration and hidden from assistive tech; the facts are a real
    description list.
  -->
  <div class="terminal plate">
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
  font-size: var(--fs-sm);
  font-weight: 500;
  line-height: 1.75;
  /* The surface is `.plate`; the glow marks this one as a live window. */
  box-shadow: 0 0 22px color-mix(in srgb, var(--c-warm) 12%, transparent);
}

.terminal__bar {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 0.75rem;
  font-size: var(--fs-xs);
  background: var(--c-plate-raised);
  border-bottom: var(--border-hairline);
}

.terminal__bar i {
  width: 9px;
  height: 9px;
  background: var(--c-cream-muted);
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
