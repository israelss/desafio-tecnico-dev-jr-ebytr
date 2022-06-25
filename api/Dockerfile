FROM node:lts-alpine
RUN apk --no-cache add curl
WORKDIR /app
COPY package*.json .
COPY prisma/ ./prisma/
RUN npm install
COPY . .
CMD [ "npm", "start" ]
EXPOSE 3001