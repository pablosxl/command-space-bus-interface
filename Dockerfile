# ARGS
ARG SPA_PORT

# estágio de compilação
FROM node:10.16.0-jessie AS build-stage

COPY ./ /app
WORKDIR /app

RUN npm install && npm run build-production

#RUN rm -f .npmrc

# estágio de produção
FROM nginx:1.17.1-alpine AS run-stage

ARG SPA_PORT=8001

#Variáveis de ambiente
ENV NODE_ENV=production
ENV VUE_APP_API=http://35.199.113.137:7111
ENV VUE_APP_UPLOAD_DOCUMENTS_API=http://34.95.143.101:7112

RUN mkdir /app

# Only folders of "dist" 
COPY --from=build-stage /app/dist /app

# Overhides NGINGX default.conf
COPY --from=build-stage /app/nginx.conf /etc/nginx.conf

EXPOSE ${SPA_PORT}

CMD ["nginx", "-g", "daemon off;"]
