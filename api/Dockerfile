FROM node:lts-alpine AS base
WORKDIR /app
COPY package*.json .
COPY prisma/ ./prisma/
RUN npm install
COPY . .
RUN npm run clean
RUN npm run build


FROM node:lts-alpine AS development
WORKDIR /app
COPY --from=base ./app/src ./src
COPY --from=base ./app/prisma ./prisma
COPY --from=base ./app/package*.json ./
COPY --from=base ./app/tsconfig.json ./
RUN npm install
CMD [ "npm", "run", "dev" ]
EXPOSE 3001


FROM node:lts-alpine AS production
WORKDIR /app
COPY --from=base ./app/build ./build
COPY --from=base ./app/prisma ./prisma
COPY --from=base ./app/package*.json ./
COPY --from=base ./app/tsconfig.json ./
RUN npm install --production
CMD [ "node", "build/server.js" ]
EXPOSE 3001
