# Opengraph Images

A node script to produce the static assets ultimately added in the `<head>` of the document. These are created as screenshot using puppeteer.

## script-static

Create the `.png` images for the landing page and the blog page. These are meant to be included by default in the static folder.

## script-multi

Create `.png` images starting from the presumed frontmatter from a series of blog posts. In the **blog** folder you find the script creating the necessary markup with a template file. `index.html` is included to describe the layout and style of the would-be images.

**Important note**: this script is considerably inefficient. For every article, puppeteer injects the page with the necessary markup, which means the browser needs to render as many pages as there are posts. This realization leads to the next script.

## script

Create `.png` images from a single page. Puppeteer renders the page, and then takes a series of screenshot modifying the `y` coordinate.
