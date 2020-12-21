# Opengraph Images

The goal is to here create the images for the opengraph standard. These `.png` files are referenced in the `<head>` of the document, and are shown when the specific page is shared on social platforms like twitter.

## script-static

`script-static` creates the images for the main routes (landing page, blog index, 404). For these pages, the design of the image does not change, which means the images can be included directly in the website.

Puppeteer launches chromium, loads the markup for the `.html` files in the **static** folder, and takes a screenshot for the pages it finds.

## script-multi & script

Both `script-multi` and `script` create a series of images for a series of presumed articles. Since the articles are not known in their number/title/description, it is necessary to have the script run every time the website is built, so the scripts are more of a proof of concept for what is ultimately included in the website. The images they create are not included in the website.

The difference between the two scripts boils down to efficiency:

- with `script-multi` puppeteer launches chromium, loads a web page for the first article, takes a screenshot, and repeats the same sequence for every article. Load, screenshot, load screenshot. This is considerably inefficient, as the pages share a considerable amount of code – think for instance about the fonts being loaded at every iteration – which leads to the next script

- with `script` puppeteer launches chromium, populates one single page with the information for all the articles, and then takes a series of screenshots modifying the `y` coordinate after every iteration

In most practical terms: **use the code described in `script.js`**
