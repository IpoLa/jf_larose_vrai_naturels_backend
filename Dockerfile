FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npx npm install --legacy-peer-deps
COPY . .
RUN npx prisma generate
RUN npx npm run build

FROM node:20-alpine
WORKDIR /app
RUN apk add --no-cache openssl
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY package*.json ./

EXPOSE 3001
CMD ["node", "dist/main"]
