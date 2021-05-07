#!/bin/bash

docker stop ha2-backend
docker rm ha2-backend
docker pull mysql:5.7
docker run --name=todolist-database -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=test -e MYSQL_USER=test -e MYSQL_PASSWORD=password -d mysql:5.7
./mvnw package -DskipTests
docker build . -t ha2-backend
sleep 10
docker run -p 8086:8086 --name ha2-backend --link todolist-database:mysql -d ha2-backend