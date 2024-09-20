<template>
  <section
    id="footer"
    :style="{
      fontFamily: 'Roboto, sans-serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      height: '24vh',
      backgroundImage: 'url(\'/img/Designer.png\')',
      backgroundPosition: 'center',
      fontSize: '80%',
      position: 'relative',
      zIndex: 1
    }"
  >
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
    <div class="container text-light">
      <footer>
        <div
          class="social d-flex justify-content-center align-items-center"
          @mouseover="onMouseOver"
          @mouseout="onMouseOut"
        >
          <a href="https://github.com/CookingMeister?tab=repositories">
            <i class="fab fa-github fa-2x px-3 py-4"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shawn-meister/"
            @mouseover="onMouseOver"
            @mouseout="onMouseOut"
          >
            <i class="fab fa-linkedin fa-2x px-3 py-4"></i>
          </a>
        </div>
        <span>© {{ currentYear }} Meister</span>
        <p>Fredericton</p>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  },
  methods: {
    onMouseOver(event) {
      event.target.style.color = '#0dcaf0'
    },
    onMouseOut(event) {
      event.target.style.color = 'antiquewhite'
    }
  }
}
</script>
