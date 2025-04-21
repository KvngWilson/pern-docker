FROM node:19-alpine

WORKDIR /server

COPY package*.json .

RUN chown -R node:node /server

USER node

RUN npm install

EXPOSE 9000

CMD [ "node", "index.js" ]