<template>
  <section id="Work" :style="styles">
    <div class="container px-4">
      <h2
        class="fs-2 pb-4"
        :style="{ textShadow: '1px 1px 3px black', color: 'antiquewhite' }"
      >
        Portfolio
      </h2>
      <div class="border-top border-light my-3" style="opacity: 0.6"></div>

      <div class="row row-cols-sm-1 row-cols-md-2 row-cols-xl-3 align-items-stretch g-5 py-5">
        <transition-group name="fade" appear>
          <WorkCard
            v-for="(card, index) in workCards"
            :key="index"
            :title="card.title"
            :github="card.github"
            :deployment="card.deployment"
            :description="card.description"
            :image="card.image"
            :alt="card.alt"
          />
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue';
import WorkCard from './WorkCard.vue';

export default defineComponent({
  name: 'PortfolioSection',
  components: {
    WorkCard,
  },
  setup() {
    const styles = ref({
      fontFamily: 'Roboto, sans-serif',
      backgroundImage:
        'linear-gradient(45deg, rgb(30, 6, 245), rgba(0, 110, 255, 0.777))',
      paddingTop: '20vh',
      paddingBottom: '14vh',
    });

    const workCards = ref([
      {
        title: "Music Festival Wear",
        github: "https://github.com/CookingMeister/music-festival-hub",
        deployment: "https://music-festival-hub.onrender.com/",
        description: "MERN stack e-commerce app",
        image: "/img/festival.png",
        alt: "e-commerce landing page with logo and best-sellers carousel"
      },
      {
        title: "SimplyFit App",
        github: "https://github.com/CookingMeister/fitness-tracker-mvc",
        deployment: "https://ancient-dusk-75744-6e17b3d6732e.herokuapp.com/",
        description: "MVC REST API fitness app",
        image: "/img/dashboard.png",
        alt: "Exercise dashboard with sections for user to add, update, and delete workouts"
      },
      {
        title: "Tech Blog",
        github: "https://github.com/CookingMeister/tech-blog-sequelize",
        deployment: "https://infinite-ocean-68541-91b9dc3361ab.herokuapp.com/",
        description: "90s themed MVC tech blog",
        image: "/img/blog.png",
        alt: "Tech blog with user login and signup, post, and comment functionality"
      },
      {
        title: "Christmas Movie Generator",
        github: "https://github.com/CookingMeister/christmas-movie-generator",
        deployment: "https://samgreenwood84.github.io/christmas-movie-generator/",
        description: "User interactive movie generator API",
        image: "/img/XmasMockup.png",
        alt: "Christmas Movie Generator with user input to generate a random movie"
      },
      {
        title: "Weather Dashboard",
        github: "https://github.com/CookingMeister/weather-dashboard",
        deployment: "https://cookingmeister.github.io/weather-dashboard/",
        description: "5-day weather forecast with search bar",
        image: "/img/weather.png",
        alt: "Weather dashboard with search bar to find current weather and a 5-day forecast"
      },
      {
        title: "Note Taker",
        github: "https://github.com/CookingMeister/note-taker-express",
        deployment: "https://note-taker-express-2rft.onrender.com/",
        description: "JSON note taking app",
        image: "/img/Note.png",
        alt: "Note Taker with add, edit and delete notes functionality"
      }
    ]);

    return {
      styles,
      workCards,
    };
  },
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
