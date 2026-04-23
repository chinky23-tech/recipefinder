# ── Development Stage ────────────────────────────────────────
FROM node:22-alpine AS development

WORKDIR /app

# Install dependencies first (cached layer)
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

EXPOSE 5001

# Use nodemon for hot-reloading in development
CMD ["npx", "nodemon", "server.js"]

# ── Production Stage ─────────────────────────────────────────
FROM node:22-alpine AS production

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5001

CMD ["node", "server.js"]
