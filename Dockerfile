# base image
FROM node:8.10-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn
COPY ./ ./
COPY src/ ./src
RUN yarn build

# start app
CMD ["yarn", "start"]
EXPOSE 3000