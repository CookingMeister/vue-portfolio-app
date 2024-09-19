<template>
  <div class="text-center mb-2 pb-5">
    <a
      href="/Resume_Apr2024.docx"
      download
      :style="{
        textDecoration: 'none',
        width: 'max-content',
        transition: 'all 0.3s',
        borderRadius: '50px'
      }"
      class="btn btn-outline-info btn-lg px-4"
    >
      <i class="fas fa-file-download me-3"></i>
      Download Resume
    </a>
  </div>
</template>

<script>
export default {
  name: 'DownloadLink'
}
</script>
