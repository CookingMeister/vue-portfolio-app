<template>
  <!--
    The Saint John River valley at dusk, with an 80s striped sun. Decorative, so
    hidden from assistive tech. Drawn in SVG: a few kilobytes, sharp at any width.
  -->
  <svg
    class="landscape"
    viewBox="0 0 1200 200"
    preserveAspectRatio="xMidYMax slice"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id="landscape-sun" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#ffd98a" />
        <stop offset="0.55" stop-color="#ffb347" />
        <stop offset="1" stop-color="#ff6f61" />
      </linearGradient>
      <radialGradient id="landscape-glow">
        <stop offset="0" stop-color="#ff9a5a" stop-opacity="0.5" />
        <stop offset="1" stop-color="#ff9a5a" stop-opacity="0" />
      </radialGradient>
      <!-- The slats that make it an 80s sun: cut out, thicker toward the horizon. -->
      <mask id="landscape-slats">
        <rect x="0" y="0" width="1200" height="200" fill="white" />
        <rect
          v-for="slat in slats"
          :key="slat.y"
          x="480"
          :y="slat.y"
          width="240"
          :height="slat.height"
          fill="black"
        />
      </mask>
    </defs>

    <!-- Stars are squares: pixels, not dots. -->
    <rect
      v-for="(star, i) in stars"
      :key="`star-${i}`"
      :x="star.x"
      :y="star.y"
      :width="star.size"
      :height="star.size"
      :opacity="star.opacity"
      fill="antiquewhite"
    />

    <circle cx="600" cy="120" r="190" fill="url(#landscape-glow)" />
    <circle cx="600" cy="98" r="78" fill="url(#landscape-sun)" mask="url(#landscape-slats)" />

    <!-- Far hills. -->
    <path
      d="M0 120 C120 88 220 102 330 110 C430 118 500 90 600 102 C720 116 800 82 930 96 C1040 108 1120 92 1200 104 L1200 200 L0 200 Z"
      fill="#1c3a66"
    />

    <!-- Near ridge, with a pine treeline along its crest. -->
    <path :d="treeline" fill="#0a1c33" />

    <!-- The river, with the sun's reflection broken into bars. -->
    <rect x="0" y="162" width="1200" height="38" fill="#081627" />
    <rect
      v-for="(bar, i) in reflection"
      :key="`bar-${i}`"
      :x="bar.x"
      :y="bar.y"
      :width="bar.width"
      :fill="bar.fill"
      :opacity="bar.opacity"
      height="1.8"
    />
    <rect x="0" y="161" width="1200" height="1" fill="#0dcaf0" opacity="0.35" />
  </svg>
</template>

<script setup>
/**
 * A small seeded generator. `Math.random()` would draw a different treeline in
 * the prerendered HTML than in the browser, and hydration would then mismatch.
 */
function seeded(seed) {
  let state = seed
  return () => {
    state = (state * 16807) % 2147483647
    return (state - 1) / 2147483646
  }
}

/** Fixed precision, so the server and the browser serialise identical attributes. */
const n = (value) => Number(value.toFixed(1))

const slats = []
for (let i = 0, y = 74; i < 7; i++) {
  const height = 2 + i * 1.6
  slats.push({ y: n(y), height: n(height) })
  y += height + 9 - i * 0.4
}

const starRandom = seeded(7)
const stars = Array.from({ length: 46 }, () => ({
  x: n(starRandom() * 1200),
  y: n(starRandom() * 75),
  size: starRandom() > 0.8 ? 2.4 : 1.5,
  opacity: Number((0.25 + starRandom() * 0.55).toFixed(2))
}))

const ridge = (x) => 138 + Math.sin(x / 150) * 9 + Math.sin(x / 47) * 3
const treeRandom = seeded(21)
let treeline = `M0 200 L0 ${n(ridge(0))}`
for (let x = 0; x < 1200;) {
  const width = 9 + treeRandom() * 9
  const height = 14 + treeRandom() * 26
  const tip = ridge(x + width / 2) - height
  treeline += ` L${n(x)} ${n(ridge(x))} L${n(x + width / 2)} ${n(tip)} L${n(x + width)} ${n(ridge(x + width))}`
  x += width + treeRandom() * 5
}
treeline += ' L1200 200 Z'

const barRandom = seeded(5)
const reflection = Array.from({ length: 6 }, (_, i) => {
  const width = 150 - i * 20 + barRandom() * 16
  return {
    x: n(600 - width / 2),
    y: n(166 + i * 5.5),
    width: n(width),
    fill: i < 3 ? '#ffb347' : '#ff7a59',
    opacity: Number((0.6 - i * 0.07).toFixed(2))
  }
})
</script>

<style scoped>
.landscape {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
