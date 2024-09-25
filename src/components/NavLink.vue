<template>
  <li class="nav-item">
    <router-link :to="url" :style="isActive ? activeStyle : linkStyle"
      :class="['mt-1', 'nav-link', { active: isActive }]">
      {{ name }}
    </router-link>
  </li>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  isScrolled: {
    type: Boolean,
    default: false
  }
});

const route = useRoute();

const linkStyle = computed(() => ({
  color: props.isScrolled ? '#0dcaf0' : 'antiquewhite',
}));

const activeStyle = {
  color: 'antiquewhite',
  fontSize: '1rem',
  marginRight: '.4rem',
  height: '2.4rem'
};

const isActive = computed(() => route.path === props.url);
</script>
