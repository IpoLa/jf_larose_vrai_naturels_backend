# Use Debian slim — avoids Alpine/OpenSSL/Prisma compatibility hell
FROM node:20-slim

# Install OpenSSL + netcat (Debian has openssl 3.x which Prisma 5 supports natively)
RUN apt-get update && apt-get install -y \
    openssl \
    netcat-openbsd \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

# Install all deps
RUN npm ci

# Generate Prisma client (debian-openssl-3.0.x — already in binaryTargets)
RUN npx prisma generate

# Copy source
COPY . .

# Build NestJS app
RUN npm run build

# Compile seed.ts → dist/prisma/seed.js
RUN node_modules/.bin/tsc prisma/seed.ts \
        --outDir dist/prisma \
        --module commonjs \
        --esModuleInterop true \
        --moduleResolution node \
        --target es2017 \
        --skipLibCheck \
        --resolveJsonModule 2>&1 \
    && echo "✅ seed.ts → dist/prisma/seed.js compiled OK"

# Verify
RUN ls -la dist/prisma/seed.js && echo "✅ seed.js exists" || echo "❌ seed.js MISSING"
RUN ls -la dist/main.js && echo "✅ main.js exists" || echo "❌ main.js MISSING"

COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/app/entrypoint.sh"]
