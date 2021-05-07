#!/bin/bash

sudo docker stop ha2-backend
docker rm ha2-backend
docker stop todolist-database
docker rm todolist-database