FROM node:latest AS builder
WORKDIR /usr/
COPY package*.json ./
RUN npm install
COPY .env ./
COPY src/ src/
COPY public/ public/
ARG REACT_APP_API_BASE=http://open990demobackend-env-1.3x3uibyjqp.us-east-1.elasticbeanstalk.com/
RUN npm run-script build

FROM nginx:latest AS runner
COPY --from=builder /usr/build /usr/share/nginx/html

FROM builder AS artifact
WORKDIR /usr/build
ENTRYPOINT ["tar", "-cjf", "/usr/artifact/open990.tar.bz2", "."]
