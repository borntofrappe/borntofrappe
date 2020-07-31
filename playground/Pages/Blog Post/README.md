Page shown for articles in the blog, following the `/blog/post-title` path.

## Markup

Include the code from the following projects:

- components/skip to content

- sections/navigation

- sections/header blog post

- content

- components/footer

## content

Include the markup presumed for a series of articles in a `<main>` element with an `id` of `content`.

The markup is produced with a script using `markdown-it` and `shiki`. Refer to _Utils/Markdown Parser_ and specifically `script-markdown-it` to see how the syntax is created from markdown documents.

For the stylesheet, consider the code for the following components:

- blockquote

- code snippet

- heading permalink

- list

- table
