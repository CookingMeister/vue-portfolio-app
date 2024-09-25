<template>
  <div :style="{
    fontFamily: 'Roboto, sans-serif',
    backgroundImage:
      'linear-gradient(45deg, rgb(30, 6, 245), rgba(0, 110, 255, 0.777))',
    height: '90vh',
    paddingTop: '30vh',
    color: 'antiquewhite',
  }">
    <Transition name="slide" appear>
      <div class="container text-center">
        <h1 :style="{ color: '#C20024', textShadow: '1px 1px 3px black' }">
          404 Page Not Found
        </h1>
        <p>The page you are looking for is not available.</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
