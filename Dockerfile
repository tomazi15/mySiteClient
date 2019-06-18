#Server
FROM node:latest

#create app dir in the container
RUN mkdir -p /usr/src/app

#sets working direcotry for the app
#this allows to run all the comand
#like RUN CMD etc.
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm config set strict-ssl false
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3006

CMD [ "npm", "run", "start" ]