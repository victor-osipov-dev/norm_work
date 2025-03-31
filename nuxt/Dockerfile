FROM node:23-alpine

WORKDIR /app

COPY package* .
RUN npm ci
COPY . .

RUN npm run build

CMD ["node", ".output/server/index.mjs"]