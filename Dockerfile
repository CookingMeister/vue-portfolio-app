# Build the prerendered site, then serve it as static files. The Node stage is
# discarded, so the published image carries nginx and dist/ and nothing else.

FROM node:26-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# The slim variant leaves out njs, xslt and geoip. nginx.conf uses only core
# modules, so those would be attack surface with no benefit.
FROM nginx:1.30-alpine-slim AS serve

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
    CMD wget -qO- http://localhost/ >/dev/null || exit 1
