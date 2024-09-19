<template>
  <div>
    <HeaderComponent />
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from '/Header.vue'
import FooterComponent from '/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
})
</script>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.path)
</script>
