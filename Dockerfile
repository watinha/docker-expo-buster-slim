FROM node:10.16.3-buster-slim

ADD . /app
WORKDIR /app

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

ENV REACT_NATIVE_PACKAGER_HOSTNAME="10.0.0.2"

RUN apt-get update
RUN apt-get -y install python
RUN apt-get -y install git
RUN npm install -g --unsafe expo-cli


CMD ["npm" , "install", "-g", "--unsafe"]
