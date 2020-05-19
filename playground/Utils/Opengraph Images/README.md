# Opengraph Images

A node script to produce the static assets ultimately added in the `<head>` of the document.

```njk
<meta property="og:image" content="{{image}}" />
```

## script-static

Create the `.png` images for the landing page and the blog page. These are static variants, provided to the website as a given.

## script

Create `.png` images for a series of articles, and based on the frontmatter of hypothetical blog posts. In the `.html` file find the general layout, re-used in the template file.
