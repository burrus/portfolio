## About

Angular is something I've been learning for the past couple of years so, while not the best choice for a static site, I decided to use it to build my portfolio. Besides my familiarity with it, Angular is pretty scalable and will allow me to easily change what my website looks like in the future without starting from scratch. Feel free to clone this repo and use it to jumpstart your own personal website.

## Setup

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4. This repo does not include the `node_modules` directory so after cloning it make sure you run `npm install`. You can then run `ng serve` and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deployment

I used GitHub Pages to deploy this website and it's relatively straightforward to get it going. To make things easy, I suggest running `npm install -g angular-cli-ghpages` to install the [GitHub Pages](https://github.com/angular-schule/angular-cli-ghpages) node package.

Once this package is installed, you can run `ng build --prod --base-href "https://<user-name>.github.io/<repo>/"` to build the project. Afterwards you should see a build in the `dist` directory then you can just run `npx ngh` to deploy the site. At this point, you should be able to navigate to your website. You should also see your website referenced in the GitHub Pages section of your repository's settings.
