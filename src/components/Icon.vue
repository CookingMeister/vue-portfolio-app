<template>
  <img
    src="/img/profile.png"
    alt="Sunny outdoors profile by the water"
    width="28"
    height="28"
    :class="className"
  />
</template>

<script>
export default {
  name: 'ProfileIcon',
  props: {
    className: {
      type: String,
      default: ''
    }
  }
}
</script>
