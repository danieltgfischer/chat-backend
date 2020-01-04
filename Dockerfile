FROM node:13-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

COPY ./entrypoint.sh /entrypoint.sh

RUN apk update 

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait

RUN npm set progress=false \  
  && npm install -g prisma -y \
  && chmod +x /wait \
  && chmod +x /entrypoint.sh \
  && yarn 

EXPOSE 4000

CMD /wait && /bin/sh /entrypoint.sh