FROM node:14.18.2-alpine3.12 as build

WORKDIR /app

COPY ./package.json ./
# COPY ./package-lock.json ./
RUN npm install
COPY . .

RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]