FROM node:lts-alpine AS base
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run clean
RUN npm run build

FROM node:lts-alpine AS development
ENV NODE_ENV=development
WORKDIR /app
COPY --from=base ./app/src ./src
COPY --from=base ./app/package*.json ./
COPY --from=base ./app/tsconfig*.json ./
COPY --from=base ./app/vite.config.ts ./
COPY --from=base ./app/index.html ./
RUN npm install
CMD [ "npm", "run", "dev" ]
EXPOSE 3000

FROM node:lts-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=base ./app/dist ./dist
COPY --from=base ./app/package*.json ./
COPY --from=base ./app/*config*.{json,ts} ./
COPY --from=base ./app/index.html ./
RUN npm install --production
CMD [ "npm", "start" ]
EXPOSE 3000
