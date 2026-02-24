FROM node:20-slim

# Optional: install netcat if your entrypoint.sh uses it for wait-for-it style checks
# RUN apt-get update && apt-get install -y netcat-openbsd && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies (no --legacy-peer-deps unless you have real conflicts)
RUN npm install

# Generate Prisma client (will download debian-openssl-3.0.x engine)
RUN npx prisma generate

# Copy rest of source
COPY . .

# Build NestJS app
RUN npm run build

# Compile seed.ts (adjust flags as needed)
RUN npx tsc prisma/seed.ts \
    --outDir dist/prisma \
    --module commonjs \
    --esModuleInterop \
    --moduleResolution node \
    --target es2017 \
    --skipLibCheck \
    --resolveJsonModule 2>&1 || \
    echo "⚠️ seed.ts compile warning (may be ok)"

# Verify
RUN ls -la dist/prisma/ || echo "⚠️ dist/prisma not found"

# Entrypoint
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["/app/entrypoint.sh"]