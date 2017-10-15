FROM nginx:latest

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN rm /etc/nginx/conf.d/default.conf

ADD default.conf /etc/nginx/conf.d/

COPY dist/ /usr/share/nginx/html/