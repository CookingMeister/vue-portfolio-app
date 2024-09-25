<template>
  <img
    src="/img/profile.png"
    alt="Sunny outdoors man profile by the water"
    width="28"
    height="28"
    :class="className"
  />
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>
