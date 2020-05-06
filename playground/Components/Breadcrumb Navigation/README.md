# Breadcrumb Navigation

## Markup

The markup changes according to the title of the body:

- borntofrappe by default

- `/` + `path` for every additional route

Add an icon when one is available.

For instance:

- landing page

  ```html
  <nav aria-label="Breadcrumb navigation">
    <a href="/">
      borntofrappe {{ icons.rocket }}
    </a>
  </nav>
  ```

- blog

  ```html
  <nav aria-label="Breadcrumb navigation">
    <a href="/">
      borntofrappe {{ icons.rocket }}
    </a>
    <a href="/blog">
      / blog {{ icons.blog }}
    </a>
  </nav>
  ```

- blog post

  ```html
  <nav aria-label="Breadcrumb navigation">
    <a href="/">
      borntofrappe {{ icons.rocket }}
    </a>
    <a href="/blog">
      / blog {{ icons.blog }}
    </a>
    <a href="/blog/dash-separated-title">
      / blog / dash-separated-title
    </a>
  </nav>
  ```
