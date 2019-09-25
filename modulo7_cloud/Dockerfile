FROM ubuntu:18.04

WORKDIR /opt/app

COPY . .

RUN apt-get update
RUN apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs
RUN npm install --only=production


EXPOSE 8888

CMD ["npm", "start"]