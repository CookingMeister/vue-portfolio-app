<template>
  <div class="col-md-6 mb-4">
    <div
      class="card text-center text-light border-0 shadow-lg h-100"
      :style="{ transition: 'transform 0.3s ease-in-out', background: 'linear-gradient(135deg, #222, #333)' }"
    >
      <div class="card-body">
        <h5 class="card-title text-info">{{ title }}</h5>
        <ul class="list-unstyled d-flex flex-column align-items-center ms-3">
          <li v-for="(skill, index) in skills" :key="index" class="my-2 w-100 text-start">
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  skills: Array
})
</script>
