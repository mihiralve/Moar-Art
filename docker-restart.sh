docker stop meera-art_moarart_1
docker container prune -f
./docker-build.sh
docker-compose up -d