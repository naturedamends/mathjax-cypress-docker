#!/bin/bash
set -xe 
docker-compose down
docker-compose build 
docker-compose run runner sh -c 'npm run ci'
docker-compose up -d server
docker-compose run runner sh -c "npm run test"