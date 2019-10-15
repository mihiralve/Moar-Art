./docker-build.sh
docker stop meera-art_moarart_1
docker container prune -f
docker-compose up -d