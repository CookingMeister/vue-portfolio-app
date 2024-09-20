<template>
  <section
    id="Contact"
    :style="{
      fontFamily: 'Roboto, sans-serif',
      backgroundImage:
        'linear-gradient(45deg, rgb(30, 6, 245), rgba(0, 110, 255, 0.777))',
      paddingTop: '20vh',
      paddingBottom: '8vh',
      minHeight: '100vh',
      color: 'antiquewhite',
      borderRadius: '2px',
    }"
  >
    <div class="container px-4">
      <h3
        class="fs-2"
        :style="{
          marginBottom: '2.5rem',
          textShadow: '1px 1px 3px black',
        }"
      >
        Contact
      </h3>

      <div
        class="border-top border-light mb-5 mt-4"
        :style="{ opacity: '0.6' }"
      ></div>

      <!-- Vue Transition -->
      <transition name="fade" appear>
       
        <form
          class="row gy-2 gx-4 align-items-center justify-content-center mx-auto w-100 d-block my-1"
          @submit.prevent="handleSubmit"
        >
        <p class="lead text-center mb-4">Fill out this form to send me a message.</p>
          <div class="col-md-12 col-lg-6 mx-auto pb-3 mt-5">
            <label for="name" class="form-label mx-1">Name</label>
            <input
              :style="{ borderRadius: '3px', backgroundColor: 'antiquewhite' }"
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter your name"
              v-model="name"
              required
            />
          </div>
          <div class="col-md-12 col-lg-6 mx-auto pb-1">
            <label for="email" class="form-label mx-1">Email address</label>
            <input
              :style="{ borderRadius: '3px', backgroundColor: 'antiquewhite' }"
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email"
              v-model="email"
              required
            />
            <!-- Display email error if there is one  -->
            <p
              v-if="emailError"
              :style="{
                textShadow: '1px 1px 2px black',
                color: '#15f5ba',
                letterSpacing: '1px',
              }"
              class="text-center mt-3"
            >
              <em>{{ emailError }}</em>
            </p>
          </div>
          <div class="col-md-12 col-lg-6 mx-auto pb-1">
            <label for="message" class="form-label mx-1">Message</label>
            <textarea
              :style="{ borderRadius: '3px', backgroundColor: 'antiquewhite' }"
              class="form-control"
              id="message"
              rows="5"
              placeholder="Enter your message"
              v-model="message"
              required
            ></textarea>

            <div class="d-flex justify-content-end">
              <button
                type="submit"
                class="btn btn-dark my-4"
                :style="{
                  width: '25%',
                  border: '1px solid antiquewhite',
                  borderRadius: '50px',
                  transition: 'all 0.3s',
                }"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </transition>
    </div>
  </section>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'ContactForm',
  setup() {
    const name = ref('');
    const email = ref('');
    const message = ref('');
    const emailError = ref('');

    watch(email, (newEmail) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(newEmail)) {
        emailError.value = 'Please enter a valid email address.';
      } else {
        emailError.value = '';
      }
    });

    const handleSubmit = () => {
      if (emailError.value === '') {
        console.log('Name:', name.value);
        console.log('Email:', email.value);
        console.log('Message:', message.value);
        name.value = '';
        email.value = '';
        message.value = '';
      }
    };

    return {
      name,
      email,
      message,
      emailError,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
