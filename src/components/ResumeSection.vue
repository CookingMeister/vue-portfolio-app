<template>
  <section
    id="Resume"
    :style="{
      fontFamily: 'Roboto, sans-serif',
      backgroundImage: 'linear-gradient(135deg, rgb(30, 6, 245), rgba(0, 110, 255, 0.87))',
      paddingTop: '20vh',
      paddingBottom: '8vh'
    }"
  >
    <div class="container px-4">
      <h2
        class="fs-2"
        :style="{
          color: 'antiquewhite',
          textShadow: '1px 1px 3px black',
          marginBottom: '2.5rem'
        }"
      >
        Resume
      </h2>
      <div class="border-top border-light my-3" style="opacity: 0.6"></div>

      <Transition name="fade" appear>
        <div class="row row-cols align-items-stretch g-4 p-5 mb-3">
          <div class="col-lg-12 d-flex justify-content-center mx-lg-5 mx-2">
            <div class="row">
              <DownloadLink />
              <h4
                :style="{
                  color: 'antiquewhite',
                  textShadow: '1px 1px 3px black',
                  marginLeft: '-2vw'
                }"
              >
                Skills
              </h4>
              <div class="border-top border-light mt-4 mb-5" style="opacity: 0.6"></div>

              <SkillList
                v-for="(category, index) in skillCategories"
                :key="index"
                :title="category.title"
                :skills="category.skills"
                :fontStyles="fontStyles"
              />
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import DownloadLink from './DownloadLink.vue'
import SkillList from './SkillList.vue'

const fontStyles = ref({
  fontSize: '1.2rem',
  color: 'antiquewhite',
  textDecoration: 'none',
  textShadow: '1px 1px 3px black'
})

const skillCategories = ref([
  {
    title: 'Libraries & Frameworks',
    skills: [
      'Vue + Vue Router',
      'React + React Router',
      'Node',
      'Express',
      'Spring Boot',
      'Apollo Server',
      'Bootstrap',
      'Tailwind'
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'Git + GitHub/GitLab',
      'AWS + EC2',
      'Heroku + Netlify + Render',
      'Webpack',
      'Vite',
      'WAMP/XAMPP',
      'Postman + Insomnia',
      'Jest',
      'FileZilla'
    ]
  },
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'Java', 'PHP', 'HTML + CSS', 'PL/B + Visual-PLB']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'GraphQL', 'SQLite', 'phpMyAdmin']
  },
  {
    title: 'AI & Machine Learning',
    skills: ['Ollama', 'OpenWebUI', 'Deepseek', 'Claude', 'ChatGPT']
  },
  {
    title: 'Virtualization & Infrastructure',
    skills: [
      'Docker',
      'Docker Compose',
      'Proxmox + Clusters',
      'Portainer',
      'TrueNAS SCALE',
      'Nextcloud'
    ]
  },
  {
    title: 'Network Management',
    skills: ['Managed Switches', 'Pi-hole + AdGuard', 'CasaOS', 'DNS Server', 'DHCP Server']
  },
  {
    title: 'Operating Systems & Shell',
    skills: ['Linux', 'Windows + WSL', 'macOS', 'PowerShell', 'BASH + ZSH']
  }
])
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.9s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
