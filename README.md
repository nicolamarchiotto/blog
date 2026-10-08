# Zola Blog

My personal website built using [Zola](https://www.getzola.org/) based on [kodama-theme](https://github.com/adfaure/kodama-theme)

## Zola version
- Repository not compatible with latest zola version, developed with 0.19.0


## Windows install

Using [Chocolatey](https://docs.chocolatey.org/en-us/)

- `choco install packages.config`
- `npm install`

## Linux install - WSL

- Get zola package at https://github.com/getzola/zola/releases 
- untar it: tar -xzf zola-x86_64-unknown-linux-gnu.tar.gz
- move it in bin folder
    - sudo mv zola /usr/local/bin/
    - sudo chmod +x /usr/local/bin/zola
- test installation: zola --version

## Run

- `zola serve --interface 0.0.0.0 --port 8080 --base-url http://localhost`

## Run and serve website on local network

- `zola serve --interface 0.0.0.0 --base-url {your_ip}`

## Tailwind style

kodama theme reports: Styles can be modified and applied automatically using `npm run watch`

My experience: Editing the tailwind styles does not always apply automatically, to force them run

`npx tailwindcss -i styles/styles.css -o static/styles/styles.css`

## Helpfull links

https://www.maybevain.com/writing/using-tailwind-css-with-zola-static-site-generator/

https://github.com/tailwindlabs/tailwindcss/discussions/2854

# Deploy on github pages documentation

https://www.getzola.org/documentation/deployment/github-pages/

# Install zola with docker

docker pull ghcr.io/getzola/zola:v0.19.1

docker run --rm `
  -v "${PWD}:/app" `
  --workdir /app `
  ghcr.io/getzola/zola:v0.19.1 `
  build

# Serve with docker

docker run --rm `
  -v "${PWD}:/app" `
  --workdir /app `
  -p 8080:8080 `
  ghcr.io/getzola/zola:v0.19.1 `
  serve --interface 0.0.0.0 --port 8080 --base-url http://localhost:8080