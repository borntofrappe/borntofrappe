[![borntofrappe](https://raw.githubusercontent.com/borntofrappe/borntofrappe/master/borntofrappe.svg)](http://borntofrappe.netlify.app/)

## What's this?

This is meant to be my personal website. Built with 11ty, hosted on netlify, it works as my little corner on the web to shown that I can work as a developer. A front-end web developer, but one that is interested in code beyond HTML, CSS and JavaScript. At the time of writing, for instance, a developer interested in Lua, mainly for 2D game development, and Python, mainly for data analysis.

## How to run?

<!-- One step at a time -->

In `package.json` I accommodate for a few instructions:

- `npm run dev` runs 11ty once, and creates the website in a `dist` folder

- `npm run serve` sets up a local environment with a live server. The website is then made available on `localhost:8080`

- `npm run build` runs 11ty as in `npm run dev`, but follows the instruction by executing the code in `puppeteer.js`. In this manner, it creates social graph images for every blog post in the `blog` folder.

_Update_: before running 11ty, each instruction executes the code described in `icons.js`, in order to read the contents of the `utils/icons` folder and create the object detailing the syntax of the SVG icons in key-valye pairs.

## What's `playground`?

In the context of this repository, `playground` is a folder dedicated to small, independent demos which are meant to provide the basis for the final website. 11ty is instructed to disregard this folder, and look at the code housed in the `src` folder.

In order of increasing complexity, you find three folders for the design of the main routes: `Components`, `Sections` and `Pages`. This layered structure allows me to focus on the markup, stylesheet and logic of the building blocks, and how it comes together in larger and larger structures.

In `Style Guide` I document the choices made in terms of color, fonts, and I save the vector graphics designed for the website.

Finally and in `Utils` I create a few scripts for different utilities. These are included in some shape or form in the actual website.

## What's next?

A blog. All I need is the courage to actually write about my coding challenges.
