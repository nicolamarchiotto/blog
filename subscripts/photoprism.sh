sudo docker run -d \
  --name photoprism \
  --security-opt seccomp=unconfined \
  --security-opt apparmor=unconfined \
  -p 2342:2342 \
  -e PHOTOPRISM_UPLOAD_NSFW="true" \0
  -e PHOTOPRISM_ADMIN_PASSWORD="insecure" \
  -v /photoprism/storage \
  -v ~/Pictures:/photoprism/originals \
  --restart unless-stopped 
  photoprism/photoprism
