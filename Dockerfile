# base image
FROM node:12.16-alpine

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
RUN yarn run build


# start app
#CMD ["yarn", "start"]
RUN yarn global add serve
CMD ["serve", "-p", "3000", "-s", "build"]
EXPOSE 3000