FROM nginx:1.24.0
COPY nginx.conf /etc/nginx/nginx.conf
COPY /www /usr/share/nginx/html
