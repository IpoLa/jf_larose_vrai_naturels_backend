FROM node:20-alpine

# Install OpenSSL 1.1 (required by Prisma 5) + netcat for entrypoint
RUN apk add --no-cache \
    openssl \
    libc6-compat \
    netcat-openbsd \
    && apk add --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/v3.16/main \
    openssl1.1-compat 2>/dev/null || true

ENV OPENSSL_CONF=/dev/null

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci

RUN npx prisma generate

COPY . .

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
    && echo "✅ seed compiled" \
    || echo "⚠️ seed compile warning"

RUN ls -la dist/prisma/ || echo "❌ dist/prisma missing"

COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/app/entrypoint.sh"]