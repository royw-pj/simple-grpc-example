FROM node AS build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx:stable
COPY --from=build /app/build /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
