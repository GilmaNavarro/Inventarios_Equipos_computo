# Etapa 1: Construcción (Build)
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Servidor Web (Nginx)
FROM nginx:alpine

# Copiamos la configuración de Nginx para React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos los archivos estáticos construidos en la etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer puerto 80 (puerto por defecto de Nginx)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
