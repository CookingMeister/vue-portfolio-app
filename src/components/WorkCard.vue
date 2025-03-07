<template>
  <div class="col">
    <div class="bg-image card rounded-4 card-shadow hover-scale" :style="cardStyle" :alt="alt" @mouseover="handleMouseOver"
      @mouseout="handleMouseOut">
      <ProfileIcon class="rounded-circle border border-light m-2 profile-sm" />

      <!-- Overlay div -->
      <div class="rounded-4" :style="overlayStyles">
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
        <div style="display: flex">
          <a :href="deployment" class="py-2">
            <i class="fas fa-link fa-2x mx-3" style="color: #C20024"></i>
          </a>
          <a :href="github" class="py-2">
            <i class="fab fa-github fa-2x mx-3"></i>
          </a>
        </div>
        <ProfileIcon class="rounded-circle border border-light m-2 profile-sm" />
      </div>
      <!-- End of Overlay -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProfileIcon from './ProfileSmall.vue';

const props = defineProps({
  image: String,
  alt: String,
  title: String,
  description: String,
  deployment: String,
  github: String,
});

const showTitle = ref(false);
const isHovered = ref(false);

const handleMouseOver = () => {
  showTitle.value = true;
  isHovered.value = true;
};

const handleMouseOut = () => {
  showTitle.value = false;
  isHovered.value = false;
};

const cardStyle = computed(() => ({
  fontFamily: 'Roboto, sans-serif',
  backgroundImage: `url(${props.image})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  height: '20vh',
  width: '90%',
  margin: '0 auto',
}));

const overlayStyles = computed(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.82)',
  display: isHovered.value ? 'flex' : 'none',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  transition: 'display 0.3s ease',
  textDecoration: 'none',
}));
</script>

<style scoped>
.hover-scale {
  transition: transform 0.3s ease-in-out;
}

.hover-scale:hover {
  transform: scale(1.1);
}
.card-shadow {
  box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.5);
}
</style>
