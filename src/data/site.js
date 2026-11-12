/**
 * Single source of truth for site content. Components render this data; updating
 * the bio, skills or projects means editing this file and nothing else.
 */

export const site = {
  name: 'Shawn Meister',
  brand: 'fullstackchef',
  domain: 'fullstackchef.dev',
  url: 'https://fullstackchef.dev',
  repo: 'https://github.com/CookingMeister/vue-portfolio-app',
  role: 'Full-Stack Developer',
  tagline: 'Full-stack developer, former executive chef',
  location: 'Fredericton, New Brunswick',
  description:
    'Full-stack developer in Fredericton, NB. Working across legacy and modern ' +
    'codebases - PHP, JavaScript, C, C++ and PL/B - modernizing long-running sites and ' +
    'building new ones to spec.'
}

export const websiteServices = {
  name: 'Sunbelt Computer Software',
  url: 'https://www.sunbelt-plb.net/contact/'
}

export const socialLinks = [
  {
    id: 'github',
    name: 'GitHub',
    handle: '@CookingMeister',
    url: 'https://github.com/CookingMeister?tab=repositories',
    icon: 'github',
    blurb: 'Public projects, experiments and source code.'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'in/shawn-meister',
    url: 'https://www.linkedin.com/in/shawn-meister/',
    icon: 'linkedin',
    blurb: 'Work history, and the best place to start a conversation.'
  }
]

export const about = {
  heading: 'Shawn Meister',
  subheading: 'Full-Stack Developer / Former Executive Chef / Homelab Tinkerer',
  paragraphs: [
    'I came to this career sideways. Before writing software I ran kitchens as an executive chef, and the habits came with me: work clean, respect the timing, and never send out something you would not happily eat yourself. That is where the name fullstackchef.dev comes from.',

    'My day-to-day work spans PHP, JavaScript, C, C++, and PL/B, from the PL/B runtime to modernizing long-running client sites. I also handle website design and redesign as a secondary offering at Sunbelt.',

    'Off the clock I run Proxmox VE, TrueNAS CE, OPNsense, and a Talos Linux Kubernetes cluster managed by GitOps. When I am not in a terminal I am outdoors somewhere in the Saint John River valley.'
  ],
  highlights: [
    { value: '13 years', label: 'running professional kitchens' },
    { value: '4 sites', label: 'from the early to mid-1990s rebuilt' },
    { value: '15 methods', label: 'in a regex engine built in C' },
    { value: '3 nodes', label: 'in a Talos k8s cluster' }
  ],
  portrait: {
    src: '/img/profile.webp',
    alt: 'Shawn Meister smiling outdoors on a sunny day beside the water'
  }
}

/** Link text for each project link type, shared by the cards and the earlier-work list. */
export const linkLabels = { github: 'Source', demo: 'Live demo', site: 'Live site' }

/**
 * `links: []` marks closed-source work unless `sourcePlanned` flags an upcoming sample.
 * `status` labels work in progress without implying it has shipped.
 * A link's optional `label` replaces the default text for its type.
 * `earlier: true` moves a project to the compact "Earlier work" list.
 */
export const projects = [
  {
    id: 'plb-chat-ide',
    title: 'PL/B IDE Help Bot',
    description:
      'A closed-source IDE help bot currently in development, built in PL/B ' +
      'with SQLite for database storage.',
    tags: ['PL/B', 'SQLite'],
    status: 'In development',
    featured: true,
    closedSource: true,
    links: []
  },
  {
    id: 'plb-chromadb-sample',
    title: 'PL/B ChromaDB Sample',
    description:
      'A PL/B sample application in development that answers questions using HTML help files. ' +
      'Ollama runs Gemma 4 for chat, while embedding-gemma-2 converts the help content ' +
      'into vectors stored in ChromaDB for retrieval-augmented generation (RAG). ' +
      'Planned for release in the PL/B samples repository.',
    tags: ['PL/B', 'ChromaDB', 'Ollama', 'Gemma 4', 'embedding-gemma-2', 'RAG'],
    status: 'In development',
    featured: true,
    sourcePlanned: true,
    links: []
  },
  {
    id: 'plb-regex-engine',
    title: 'PL/B Regex Engine',
    description:
      'A regular expression engine written from scratch in C for the PL/B language runtime, ' +
      'exposed to PL/B programs as a REGEX object. Its fifteen methods cover compiling, ' +
      'testing, matching, searching, counting, replacing and splitting. It supports capture groups, backreferences, lazy quantifiers, POSIX ' +
      'classes and multiline matching, with a bounded backtracking stack so a runaway ' +
      'pattern raises an error and never hangs the runtime.',
    tags: ['C', 'C++', 'PL/B', 'Parsing', 'Backtracking'],
    featured: true,
    closedSource: true,
    links: []
  },
  {
    id: 'legacy-modernization',
    title: 'Legacy Site Modernization',
    description:
      'Three client websites dating back to 1992, rebuilt from the ground up: restructured, ' +
      'reworded and restyled as fast, responsive static sites for Polymathic Group, Parsons ' +
      'Professional Corporation and Parsons & Cummings. They run on an IIS 10 server at the ' +
      'client, and each also carries matching configuration for Azure Static Web Apps.',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'IIS 10', 'Azure'],
    image: '/img/polymathic.webp',
    alt: 'Polymathic Group home page with a navy hero and a general ledger illustration',
    featured: true,
    closedSource: true,
    // http for now: the client's server gets its certificates shortly. Switch these
    // to https then, and remove the hosts from PENDING_HTTPS in site.spec.js.
    links: [
      { type: 'site', label: 'polymathic.com', url: 'http://polymathic.com/' },
      { type: 'site', label: 'parsons.ca', url: 'http://parsons.ca/' },
      { type: 'site', label: 'parsons.on.ca', url: 'http://parsons.on.ca/' }
    ]
  },
  {
    id: 'sunbelt-website',
    title: 'Sunbelt Computer Software Website',
    description:
      'A redesign of the website for Sunbelt Computer Software, the PL/B language development ' +
      'and support company, covering its products, blog and support pages. I also maintain ' +
      'the PHP forum, which I migrated from PHP 5.4 to PHP 8.',
    tags: ['Web Design', 'Redesign', 'PHP 8', 'PL/B'],
    image: '/img/sunbelt.webp',
    alt: 'Sunbelt Computer Software home page with a blue header and sun logo',
    featured: true,
    closedSource: true,
    links: [{ type: 'site', url: 'https://www.sunbelt-plb.net/' }]
  },
  {
    id: 'homelab-omni-proxmox',
    title: 'Talos Kubernetes Homelab',
    description:
      'A three-node Talos Linux Kubernetes cluster on Proxmox VE, with machines managed by ' +
      'Sidero Omni and cluster state delivered from Git by Flux CD. Cilium handles networking ' +
      'and load balancing, SOPS and age encrypt secrets, and Renovate keeps versions current.',
    tags: ['Kubernetes', 'Talos Linux', 'Flux CD', 'Cilium', 'Proxmox VE'],
    image: '/img/omni.webp',
    alt: 'Sidero Omni dashboard showing one healthy cluster and three running Talos machines',
    links: [{ type: 'github', url: 'https://github.com/CookingMeister/homelab-omni-proxmox' }]
  },
  {
    id: 'openai-vue-app',
    title: 'OpenAI Chat App',
    description:
      'Text and image chat client for the OpenAI API with document-based ' +
      'retrieval-augmented generation (RAG). Document chunks and embeddings are stored ' +
      'in the browser using IndexedDB, ranked by cosine similarity, and retrieved as ' +
      'context for answers with source citations. A Vue 3 front end talks to an Express ' +
      'backend that keeps the API key server-side and handles image uploads.',
    tags: ['Vue 3', 'Vite', 'Express', 'OpenAI API', 'IndexedDB', 'RAG'],
    image: '/img/openai-chat.webp',
    alt: 'Dark-themed chat interface showing a conversation about C++ with a model selector and message box',
    // No demo: the app needs an OpenAI API key, so there is nothing to host publicly.
    links: [{ type: 'github', url: 'https://github.com/CookingMeister/openai-vue-app' }]
  },
  {
    id: 'music-festival-hub',
    title: 'Music Festival Wear',
    description: 'MERN stack e-commerce application with a product catalogue and cart.',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    image: '/img/festival.webp',
    alt: 'E-commerce landing page with logo and best-sellers carousel',
    links: [
      { type: 'demo', url: 'https://music-festival-hub.onrender.com/' },
      { type: 'github', url: 'https://github.com/CookingMeister/music-festival-hub' }
    ]
  },
  {
    id: 'simplyfit',
    title: 'SimplyFit App',
    description: 'MVC fitness tracker with a REST API for creating and updating workouts.',
    tags: ['Node', 'Express', 'MVC', 'REST'],
    earlier: true,
    // No demo: Heroku retired its free dynos.
    links: [{ type: 'github', url: 'https://github.com/CookingMeister/fitness-tracker-mvc' }]
  },
  {
    id: 'tech-blog',
    title: 'Tech Blog',
    description: '90s-themed MVC blog with authentication, posts, and threaded comments.',
    tags: ['Sequelize', 'MySQL', 'Express', 'Handlebars'],
    earlier: true,
    // No demo: Heroku retired its free dynos.
    links: [{ type: 'github', url: 'https://github.com/CookingMeister/tech-blog-sequelize' }]
  },
  {
    id: 'christmas-movie-generator',
    title: 'Christmas Movie Generator',
    description: 'Interactive movie picker built on a third-party film API.',
    tags: ['JavaScript', 'REST API', 'CSS'],
    earlier: true,
    links: [{ type: 'github', url: 'https://github.com/CookingMeister/christmas-movie-generator' }]
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Five-day forecast with city search and persisted recent lookups.',
    tags: ['JavaScript', 'REST API', 'localStorage'],
    earlier: true,
    links: [
      { type: 'demo', url: 'https://cookingmeister.github.io/weather-dashboard/' },
      { type: 'github', url: 'https://github.com/CookingMeister/weather-dashboard' }
    ]
  }
]

export const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    skills: [
      'JavaScript (ES6+)',
      'PHP',
      'C',
      'C++',
      'PL/B + Visual PL/B',
      'Java',
      'HTML + CSS',
      'SQL',
      'YAML'
    ]
  },
  {
    id: 'frameworks',
    title: 'Libraries & Frameworks',
    skills: [
      'Vue 3 + Vue Router',
      'React + React Router',
      'Node',
      'Express',
      'Spring Boot',
      'GraphQL + Apollo Server',
      'Bootstrap',
      'Tailwind'
    ]
  },
  {
    id: 'hosting',
    title: 'Hosting & Deployment',
    skills: ['Azure', 'IIS 10', 'Cloudflare', 'Netlify', 'Render', 'AWS EC2']
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'IndexedDB', 'ChromaDB (vector database)']
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    skills: ['Git + GitHub/GitLab', 'Vite', 'Webpack', 'Vitest + Jest', 'Postman + Insomnia']
  },
  {
    id: 'infrastructure',
    title: 'Virtualization & Homelab',
    skills: [
      'Proxmox VE + clusters',
      'TrueNAS CE',
      'Kubernetes',
      'Talos Linux',
      'Sidero Omni',
      'Flux CD (GitOps)',
      'Cilium (eBPF networking)',
      'Traefik',
      'SOPS + age secrets',
      'Renovate',
      'Docker + Podman + Compose'
    ]
  },
  {
    id: 'networking',
    title: 'Networking',
    skills: [
      'OPNsense firewall & routing',
      'Managed switches',
      'DNS + DHCP servers',
      'Pi-hole + AdGuard'
    ]
  },
  {
    id: 'systems',
    title: 'Operating Systems & Shell',
    skills: ['Linux', 'Bash + Zsh', 'Windows + WSL', 'PowerShell', 'macOS']
  },
  {
    id: 'ai',
    title: 'AI & Retrieval',
    skills: [
      'Retrieval-augmented generation (RAG)',
      'Claude Code',
      'ChatGPT',
      'Ollama',
      'OpenWebUI',
      'Local models (Qwen, Gemma)',
      'Pi Agent'
    ]
  }
]

/** Printed by the terminal card on the Resume page, as the output of `whoami`. */
export const whoami = [
  { key: 'name', value: site.name },
  { key: 'role', value: site.role },
  { key: 'base', value: site.location },
  { key: 'works in', value: 'C, C++, PL/B, PHP, JavaScript' },
  { key: 'runs', value: 'Talos Kubernetes on Proxmox VE' },
  { key: 'before', value: 'Ran professional kitchens, 13 years' }
]

/**
 * Newest first. `kind: 'software'` draws a filled dot on the career line; any
 * other kind ('kitchen', 'education') is life before software and draws a
 * hollow one. Keep this in step with resume/resume.html, the full record.
 */
export const career = [
  {
    when: '2024-06 → now',
    title: 'Software Developer',
    place: 'Sunbelt Computer Software · Remote',
    kind: 'software'
  },
  {
    when: '2024',
    title: 'Certificate, Full Stack Web Development',
    place: 'University of New Brunswick · top performer, 96%',
    kind: 'software'
  },
  {
    when: '2015-04 → 2023-09',
    title: 'Executive Chef',
    place: 'The Palate Restaurant · Fredericton, NB',
    kind: 'kitchen'
  },
  {
    when: '2002',
    title: 'Bachelor of Arts, Psychology and Philosophy',
    place: 'University of New Brunswick · Fredericton, NB',
    kind: 'education'
  }
]

/** Version-neutral path: replace the file in `public/` and the link still works. */
export const resumeFile = '/resume.pdf'
