# Markdown Parser

A tentative script to parse markdown to markup.

11ty considers the `.md` natively, but I figured I'd learn a thing or two by running my own version.

## renderer

The default renderer for marked.js is modified as follows:

- include a `div` container as the first child of every code snippet. This to include the icon and the name of the language

  ```html
  <pre>
    <div>
      <svg>{{icon}}</svg>
      <span>language</span>
    </div>
  </pre>
  ```

- add an anchor link element next to each heading to provide a permalink option

  ```html
  <h2 id="heading">
    Text
    <a href="#heading"><svg></svg></a>
  </h2>
  ```

  Use the syntax for the permalink icon in place of the `<svg>` element

## checkDir

Create a **pages** folder only if strictly necessary (if one doesn't exist already).
