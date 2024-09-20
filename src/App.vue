<template>
  <div id="app">
    <HeaderComponent />
    <main class="mt-4">
      <router-view></router-view>
    </main>
    <FooterComponent />
  </div>
</template>

<script >
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