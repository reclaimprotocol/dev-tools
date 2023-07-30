FROM node:lts-alpine3.16

RUN apk update && apk upgrade && apk add git
RUN apk add protoc

WORKDIR /grpc-server

# Copy package.json and package-lock.json (if available) to the working directory
COPY ./grpc-server/package*.json ./

RUN npm install

# Copy the rest of the application code to the working directory
COPY ./grpc-server .

RUN npm run build

CMD [ "npm", "run", "start" ]

EXPOSE 9090
