FROM node:18-alpine AS dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /home/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install

FROM node:18-alpine AS builder
WORKDIR /home/app
COPY --from=dependencies /home/app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ARG NODE_ENV
ENV NODE_ENV="${NODE_ENV}"
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /home/app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=builder /home/app/.next/standalone ./
COPY --from=builder /home/app/public ./public
COPY --from=builder /home/app/.next/static ./.next/static

EXPOSE 3000
ENV PORT=3000
CMD ["node", "server.js"]
