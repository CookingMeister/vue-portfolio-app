<template>
  <section id="Heading" class="">
    <header
      :style="{
        fontFamily: 'Roboto, sans-serif',
        position: 'fixed',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        top: '0',
        padding: '26px 0',
        width: '100%',
        zIndex: '10',
        // backgroundColor: isScrolled ? '#faebd7' : 'blue',
        // transition:
        //   'background-color 0.3s ease-in-out, color 0.3s ease-in-out',
        backgroundImage: 'url(\'/img/Designer.png\')',
        backgroundPosition: 'center',
        paddingLeft: '1rem',
        fontWeight: '500',
      }"
    >
    <!-- Header Overlay -->
    <div
      :style="{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backdropFilter: 'blur(4px)',
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        zIndex: -1
      }"
    ></div>
      <div
        class="d-flex align-items-center mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        :style="{ color: isScrolled ? '#faebd7' : '#C20024' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          :fill="isScrolled ? '#0dcaf0' : 'antiquewhite'"
          class="bi bi-journal-code ml-1"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708z"
          />
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
        </svg>
        <span
          class="fs-4 head-title mx-2"
          :style="{ color: isScrolled ? '#0dcaf0' : 'antiquewhite' }"
        >
          Meister
        </span>
      </div>

      <ul class="nav nav-pills">
        <NavLink url="/" name="About" :isScrolled="isScrolled" />
        <NavLink url="/portfolio" name="Portfolio" :isScrolled="isScrolled" />
        <NavLink url="/resume" name="Resume" :isScrolled="isScrolled" />
        <NavLink url="/contact" name="Contact" :isScrolled="isScrolled" />
      </ul>
    </header>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import NavLink from './NavLink.vue';

export default {
  name: 'HeaderComponent',
  components: {
    NavLink,
  },
  setup() {
    const isScrolled = ref(false);

    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const shouldChangeColor = scrollHeight > 20;

      isScrolled.value = shouldChangeColor;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isScrolled,
    };
  },
};
</script>
