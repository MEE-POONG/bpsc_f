FROM node:12.22.10

WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . .

CMD ["yarn", "start"]