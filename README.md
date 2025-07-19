# Zola Blog

My personal website built using [Zola](https://www.getzola.org/) based on [kodama-theme](https://github.com/adfaure/kodama-theme)

## Install

Windows install instructions using [Chocolatey](https://docs.chocolatey.org/en-us/)

- `choco install packages.config`
- `npm install`

## Run

- `zola serve` 

## Run and serve website on local network

- `zola serve --interface 0.0.0.0 --base-url {your_ip}`

## Tailwind style

kodama theme reports: Styles can be modified and applied automatically using `npm run watch`

My experience: Editing the tailwind styles does not always apply automatically, to force them run

`npx tailwindcss -i styles/styles.css -o static/styles/styles.css`

## Helpfull links

https://www.maybevain.com/writing/using-tailwind-css-with-zola-static-site-generator/

https://github.com/tailwindlabs/tailwindcss/discussions/2854

# deploy on github pages doc

https://www.getzola.org/documentation/deployment/github-pages/