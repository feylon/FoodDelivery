# 1-BOSQICH: Build qilish uchun to'liq Node 12
FROM node:12 AS builder
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn run build

# 2-BOSQICH: Nginx serveri
FROM nginx:alpine
# Yangi nginx sozlamasini konteynerga nusxalash
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]