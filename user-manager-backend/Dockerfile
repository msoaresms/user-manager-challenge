FROM node:20

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @nestjs/cli

RUN npm install

RUN npm run build

RUN npm rebuild bcrypt --build-from-source

EXPOSE 3000

CMD ["npm", "run", "start:prod"]