# vue-portfolio-app

[![badge](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/mit)

This is a Vue.js-based portfolio application showcasing my skills, projects, and resume. It features a modern, responsive design with smooth transitions and interactive elements.

## Features

- Interactive portfolio section with links to repos and deployed apps
- Resume section with downloadable PDF
- Skill categories display
- Dynamic header, footer with social media links
- Contact form with email functionality
- Responsive design for various screen sizes

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Environment Variables

```sh
EMAIL_HOST=your_email_service # e.g., gmail
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
```

- These variables should be set in a `.env` file in the `server` directory. Replace with your email service and credentials.

### Email API Server

- The server is set up to use the `nodemailer` package to send emails. To run the server:

```sh
node server.js
```

- The server will listen on port 3001 by default and uses Nodemailer to send emails through the configured email service.

### Compile and Hot-Reload for Development

```sh
npm run dev
```

- This command starts the development server and the email server concurrently.

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
docker run -d -p 5173:5173 -p 3001:3001 --env NODE_ENV=development --env-file ./server/.env vue-portfolio-app
```

- Replace `development` with `production` for production deployment.

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
- Node.js with Express for the backend email server
- Nodemailer for email functionality

### Contact Form Functionality

The application includes a contact form that allows visitors to send emails directly through the portfolio site. The form:

- Validates user input
- Submits data to the local email server
- Provides feedback on successful submission or errors
- Protects against spam through basic validation

To test email functionality locally, ensure both the Vue app and the email server are running.

### Contributing

Contributions, issues, and feature requests are welcome. Feel free to open a Pull Request if you want to contribute.

### License

[![badge](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/mit)

This project is licensed under the [MIT License](LICENSE).
