# borntofrappe

A personal website.

## scripts

Following the syntax described in `package.json`:

- `npm run dev`: runs 11ty once, producing the **dist** folder with the necessary `html` static files

- `npm run serve`: runs 11ty by setting up a _hot-reloading web server_. The utility is run again if a file in the **scr** input folder is modified

- `npm run build`: runs 11ty and then a puppeteer script to create `.png` static images for the markdown files in the **blog** folder
