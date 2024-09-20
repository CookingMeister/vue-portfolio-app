<template>
  <div id="app">
    <HeaderComponent />
    <main class="mt-2">
      <div class="background-overlay"></div>
      <router-view></router-view>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from './components/Header.vue'
import FooterComponent from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
})
</script>

<style scoped>
main {
  position: relative;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
  mask-image: linear-gradient(170deg, transparent 40%, black);
  -webkit-mask-image: linear-gradient(170deg, transparent 40%, black);
}
</style>