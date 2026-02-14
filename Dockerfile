# Multi-stage build
FROM node:20-slim as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production image
FROM node:20-slim

WORKDIR /app
COPY package*.json ./
# Only install production deps
RUN npm install --only=production
COPY --from=builder /app/dist ./dist
COPY server.js .

# Create volume for SQLite db persistence
RUN mkdir -p data
# Default path for DB in Docker environment
ENV DB_PATH=/app/data/database.sqlite
# Internal port for Express (Unified Front/Back)
ENV PORT=3007

# We expose both requested ports, 
# although our unified server runs on $PORT (3007)
EXPOSE 3007
EXPOSE 3008

# In Coolify, you can map 3007 to your public domain.
# If you need a second service on 3008, you could run a proxy or 
# another instance, but for this app, 3007 handles everything.

CMD ["node", "server.js"]
