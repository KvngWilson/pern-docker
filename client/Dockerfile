FROM node:19-alpine

WORKDIR /home/node/app

COPY . .

RUN chown -R node:node /home/node/app

USER node

RUN npm install

EXPOSE 5173

CMD [ "npm", "run", "dev" ]