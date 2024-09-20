<template>
  <li class="nav-item">
    <router-link
      :to="url"
      :style="isActive ? activeStyle : linkStyle"
      :class="['mt-1', 'nav-link', { active: isActive }]"
    >
      {{ name }}
    </router-link>
  </li>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'NavLink',
  props: {
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
  },
  setup(props) {
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

    return {
      linkStyle,
      activeStyle,
      isActive
    };
  }
};
</script>
