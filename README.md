![borntofrappe — 1st January 2021](https://raw.githubusercontent.com/borntofrappe/borntofrappe/master/playground/borntofrappe.svg)

## What's this?

This is meant to be my personal website. Built with 11ty, hosted on netlify, it works as my little corner on the web to shown that I can work as a developer. A front-end web developer, but one that is interested in code beyond HTML, CSS and JavaScript. At the time of writing, for instance, a developer interested in Python, mainly for data analysis, and Lua, mainly for 2D game development.

## How to run?

<!-- One step at a time -->

In `package.json` I accommodate for a few instructions:

- `npm run dev` runs 11ty once, and creates the website in a `dist` folder

- `npm run serve` sets up a local environment with a live server. The website is then made available on `localhost:8080`

- `npm run build` runs 11ty as in `npm run dev`, but follows the instruction by executing the code in `puppeteer.js`. In this manner, it creates social graph images for every blog post in the `blog` folder.

## What's `playground`?

In the context of this repository, `playground` is a folder dedicated to small, independent demos which are meant to provide the basis for the final website. 11ty is instructed to disregard this folder, and look at the code housed in the `src` folder.

In order of increasing complexity, you find three folders for the design of the main routes: `Components`, `Sections` and `Pages`. This layered structure allows me to focus on the markup, stylesheet and logic of the building blocks, and how it comes together in larger and larger structures.

In `Style Guide` I document the choices made in terms of color, fonts, and I save the vector graphics designed for the website.

Finally and in `Utils` I create a few scripts for different utilities. These are included in some shape or form in the actual website.

The folder has also an illustration in `borntofrappe.svg` which describes the banner for this repository. It should be the first visual introducing this very the markdown file.

## What happens on the 1st of January?

`1st January 2021` is the arbitrary deadline I gave myself to finally share the website. Netlify already uses the `src` folder to build a websited at borntofrappe.netlify.app, but I am not confident/brave enough to share this work with the world at large. By this date, I hope to muster enough courage to change that.

<!-- ## What was changed
document style guide
review utils
write a script to create icons.js at build time
  -->
