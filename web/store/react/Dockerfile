# Alpine o'rniga to'liq Node 12 versiyasini olamiz (Python va C++ kompyaylerlari bor)
FROM node:12

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn run build:prod

EXPOSE 3000

CMD ["yarn", "run", "start:prod"]