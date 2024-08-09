# Install

Windows install instructions

- choco install packages.config
- npm install

# myBlog

Website built using [Zola](https://www.getzola.org/)

`zola serve` to launch localhost webserver on `localhost:1111`

Startup theme used: [kodama-theme](https://github.com/adfaure/kodama-theme)

Styles can be modified and applied automatically using `npm run watch`

Edit on the tailwind styles does not always apply automatically, to force them run

`npx tailwindcss -i styles/styles.css -o static/styles/styles.css`

To be able to reach your zola website from inside your network and automatically serve it

`zola serve --interface 0.0.0.0 --base-url {your_ip}`

## Helpfull links
https://www.maybevain.com/writing/using-tailwind-css-with-zola-static-site-generator/

https://github.com/tailwindlabs/tailwindcss/discussions/2854

