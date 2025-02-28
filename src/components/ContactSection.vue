<template>
  <section id="Contact" :style="{
    fontFamily: 'Roboto, sans-serif',
    backgroundImage: 'linear-gradient(135deg, rgb(30, 6, 245), rgba(0, 110, 255, 0.87))',
    paddingTop: '20vh',
    paddingBottom: '8vh',
    minHeight: '100vh',
    color: 'antiquewhite',
    borderRadius: '2px'
  }">
    <div class="container px-4">
      <h3 class="fs-2" :style="{
        marginBottom: '2.5rem',
        textShadow: '1px 1px 3px black'
      }">
        Contact
      </h3>

      <div class="border-top border-light mb-5 mt-4" :style="{ opacity: '0.6' }"></div>

      <!-- Vue Transition -->
      <transition name="fade" appear>
        <form class="row gy-2 gx-4 align-items-center justify-content-center mx-auto w-100 d-block my-1"
          @submit.prevent="handleSubmit">
          <p class="lead text-center mb-4">Fill out this form to send me a message.</p>
          <div class="col-md-12 col-lg-6 mx-auto pb-3 mt-5">
            <label for="name" class="form-label mx-1">Name</label>
            <input :style="{ borderRadius: '3px', backgroundColor: 'antiquewhite' }" type="text" class="form-control"
              id="name" placeholder="Enter your name" v-model="name" required />
          </div>
          <div class="col-md-12 col-lg-6 mx-auto pb-1">
            <label for="email" class="form-label mx-1">Email address</label>
            <input :style="{ borderRadius: '3px', backgroundColor: 'antiquewhite' }" type="email" class="form-control"
              id="email" placeholder="Enter your email" v-model="email" required />
            <!-- Display email error if there is one  -->
            <p v-if="emailError" :style="{
              textShadow: '1px 1px 2px black',
              color: '#15f5ba',
              letterSpacing: '1px'
            }" class="text-center mt-3">
              <em>{{ emailError }}</em>
            </p>
          </div>
          <div class="col-md-12 col-lg-6 mx-auto pb-1">
            <label for="message" class="form-label mx-1">Message</label>
            <textarea :style="{ borderRadius: '3px', backgroundColor: 'antiquewhite' }" class="form-control"
              id="message" rows="5" placeholder="Enter your message" v-model="message" required></textarea>

            <div class="d-flex flex-column align-items-end">
              <button type="submit" class="btn btn-dark my-4" :disabled="isSubmitting" :style="{
                width: '25%',
                border: '1px solid antiquewhite',
                borderRadius: '50px',
                transition: 'all 0.3s'
              }">
                {{ isSubmitting ? 'Sending...' : 'Submit' }}
              </button>

              <!-- Submission status message -->
              <p v-if="submitStatus" :style="{
                textShadow: '1px 1px 2px black',
                color: submitStatus.success ? '#15f5ba' : '#ff6b6b',
                letterSpacing: '1px',
                marginTop: '1rem'
              }" class="text-center">
                <em>{{ submitStatus.message }}</em>
              </p>
            </div>
          </div>
        </form>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const emailError = ref('')
const isSubmitting = ref(false)
const submitStatus = ref(null)

/////////////////////////////////////////////////////////////////////////////////////////////////
// API URL for email backend                                ***CHANGE THIS URL FOR PRODUCTION***
const API_URL = 'http://localhost:3001/api/send-email'
//                                                         ************************************
/////////////////////////////////////////////////////////////////////////////////////////////////

watch(email, (newEmail) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (newEmail && !emailRegex.test(newEmail)) {
    emailError.value = 'Please enter a valid email address.'
  } else {
    emailError.value = ''
  }
})

const handleSubmit = async () => {
  // Only proceed if email is valid
  if (emailError.value !== '') {
    return
  }

  // Show loading state
  isSubmitting.value = true
  submitStatus.value = null

  try {
    // Send data to your backend API
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value
      })
    })

    const data = await response.json()

    if (response.ok) {
      // Success case
      submitStatus.value = {
        success: true,
        message: 'Your message has been sent successfully!'
      }

      // Clear form fields
      name.value = ''
      email.value = ''
      message.value = ''

      // Clear success message after 5 seconds
      setTimeout(() => {
        submitStatus.value = null
      }, 5000)
    } else {
      // Error from server
      submitStatus.value = {
        success: false,
        message: data.message || 'Failed to send message. Please try again.'
      }
    }
  } catch (error) {
    console.error('Error sending form:', error)
    submitStatus.value = {
      success: false,
      message: 'Network error. Please check your connection and try again.'
    }
  } finally {
    // Reset loading state
    isSubmitting.value = false
  }
}
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
