FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 2000

CMD ["yarn", "run", "start"]