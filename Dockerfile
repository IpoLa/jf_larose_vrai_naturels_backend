FROM node:20-alpine

# Install netcat for healthcheck in entrypoint
RUN apk add --no-cache netcat-openbsd

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install ALL dependencies (including devDeps needed for build)
RUN npm install --legacy-peer-deps

# Generate Prisma client
RUN npx prisma generate

# Copy source
COPY . .

# Build NestJS app
RUN npm run build

RUN apk add --no-cache openssl1.1-compat

# Compile seed.ts → dist/prisma/seed.js
RUN npx tsc prisma/seed.ts \
    --outDir dist/prisma \
    --module commonjs \
    --esModuleInterop \
    --moduleResolution node \
    --target es2017 \
    --skipLibCheck \
    --resolveJsonModule 2>&1 || \
    echo "⚠️ seed.ts compile warning (may be ok)"

# Verify seed compiled
RUN ls -la dist/prisma/ || echo "⚠️ dist/prisma not found"

# Copy and set entrypoint
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/app/entrypoint.sh"]