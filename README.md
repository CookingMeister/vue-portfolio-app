# vue-portfolio-app

[![badge](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/mit)

This is a Vue.js-based portfolio application showcasing my skills, projects, and resume. It features a modern, responsive design with smooth transitions and interactive elements.

## Features

- Interactive portfolio section with links to repos and deployed apps
- Resume section with downloadable PDF
- Skill categories display
- Dynamic header, footer with social media links
- Responsive design for various screen sizes

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Docker Deployment (Optional)

#### Build Docker Image

```sh
docker build -t vue-portfolio-app .
```

#### Run Docker Container

```sh
docker run -d -p 5173:80 vue-portfolio-app
```

- Access the app at http://localhost:5173

### Docker Compose Deployment

#### Start the app using Docker Compose

```sh
docker-compose up -d
```

#### Stop the app

```sh
docker-compose down
```

#### Scale the app if needed

```sh
docker-compose up -d --scale app=3
```

- Access the app at http://localhost:5173

### Technologies Used

- Vue.js 3
- Vite
- Vitest for unit testing
- ESLint for code linting
- Docker for containerization
- Docker Compose for orchestration

### Contributing

Contributions, issues, and feature requests are welcome. Feel free to open a Pull Request if you want to contribute.

### License

[![badge](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/mit)

This project is licensed under the [MIT License](LICENSE).
