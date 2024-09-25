<template>
  <section id="About" :style="{
    fontFamily: 'Roboto, sans-serif',
    backgroundImage: 'linear-gradient(135deg, rgb(30, 6, 245), rgba(0, 110, 255, 0.87))',
    paddingTop: '5vh',
    paddingBottom: '5vh',
    minHeight: '90vh'
  }">
    <div class="container">
      <div class="px-2 pt-5 mt-5 text-center">
        <!-- Vue Transitions -->
        <Transition name="fade-down" appear>
          <h1 class="display-4 fw-bold text-body-emphasis pt-5">I am Shawn Meister</h1>
        </Transition>
        <div class="col-lg-6 mx-auto py-2">
          <Transition name="fade" appear>
            <p class="lead fw-bold text-body-emphasis mt-3 pb-4">
              Developer, Designer, Professional Chef
            </p>
          </Transition>
          <Transition name="fade-up" appear>
            <p class="text-body-emphasis px-3 pb-4">
              A UNB alumnus, I'm a Fredericton-based developer with a unique background. After
              pursuing Psychology and working as a culinary professional, I discovered my passion
              for coding. When not immersed in code or cooking up a storm, you'll find me exploring
              the great outdoors in the picturesque river valley of Fredericton, New Brunswick.
            </p>
          </Transition>
          <div class="d-flex justify-content-center align-items-center my-5">
            <img src="/img/profile.png" class="profile-pic img-fluid rounded-circle"
              alt="Sunny summer day profile of young man smiling outside." width="250" height="250" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-down-enter-active,
.fade-down-leave-active,
.fade-enter-active,
.fade-leave-active,
.fade-up-enter-active,
.fade-up-leave-active {
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.fade-down-enter-from,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-80px);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(80px);
}
</style>
