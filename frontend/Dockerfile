FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY /public/index.html /usr/src/app/public

RUN npm install

CMD ["npm", "start"]