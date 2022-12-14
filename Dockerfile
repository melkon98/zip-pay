# Installs Node.js image
FROM node:16.13.1-alpine3.14

# sets the working directory for any RUN, CMD, COPY command
# all files we put in the Docker container running the server will be in /usr/src/app (e.g. /usr/src/app/package.json)

COPY package*.json ./

RUN npm install

# Copies everything in the src directory to WORKDIR/src
COPY . .

RUN npm run build

# Installs all packages

# Runs the dev npm script to build & start the server
CMD npm start