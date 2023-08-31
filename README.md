# myBlog

Website built using [Zola](https://www.getzola.org/)

`zola serve` to launch webserver on `localhost:1111`

Based style used [kodama-theme](https://github.com/adfaure/kodama-theme)

Note that, for the moment the generation of the css is not automated. As a result, it is necessary to re-run this command when changes are made with the styling.

`npx tailwindcss -i styles/styles.css -o static/styles/styles.css`

To be able to reach your zola website from inside your network and automatically serve it

`npx tailwindcss -i styles/styles.css -o static/styles/styles.css && zola serve --interface 0.0.0.0 --base-url {your_ip}`

