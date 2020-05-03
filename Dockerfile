FROM node:latest
WORKDIR /usr/
COPY package*.json ./
RUN npm install
COPY .env ./
COPY src/ src/
COPY public/ public/
EXPOSE 3000
ENV REACT_APP_API_BASE=http://open990demobackend-env-1.3x3uibyjqp.us-east-1.elasticbeanstalk.com/
ENTRYPOINT ["npm", "start"]