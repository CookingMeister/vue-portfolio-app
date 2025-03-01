FROM node:18-alpine

WORKDIR /app

# Install dependencies for main app
COPY package*.json ./
RUN npm install

# Install dependencies for server
COPY server/package*.json ./server/
RUN cd server && npm install

# Copy the rest of the application
COPY . .

# Expose app and server ports
EXPOSE 5173 3001

# Use this for production
# RUN npm run build
# CMD ["node", "server/server.js"]

# Use this for development
CMD ["npm", "run", "dev:docker"]
