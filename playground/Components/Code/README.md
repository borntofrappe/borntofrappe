# Code

Code is included in one of two ways:

- inline

  ```md
  Use `console.log('something')` to display 'something' in the developer console
  ```

  In this instance the parser includes the instruction in between `<code>` tags

  ```html
  <p>
    Use
    <code>console.log('something')</code> to display 'something' in the
    developer console
  </p>
  ```

- in code fences

  ````md
  ```js
  function setPreference(preference) {
    document.body.setAttribute('data-preference', preference);
    window.localStorage.setItem('color-scheme', preference);
  }
  ```
  ````

  In this instance the parse builds a more complex markup structure, to preserve the spacing of the snippet

  ```html
  <div>
    <pre><code>function setPreference(preference) {
  document.body.setAttribute('data-preference', preference);
  window.localStorage.setItem('color-scheme', preference);
  }
  </code></pre>
  </div>
  ```

## Markup

The `html` behind `index.htlm` is provided by the `Utils` folder and the demo exploring the markdown parser.

For code fences, the idea is to enhance the markup with a `<span>` element providing additional information; information in the form of a label describing the language of the code snippet, and an SVG icon visually matching the label.

```html
<div>
  <span> {{icon}} {{text}} </span>
  <pre><code>{code}</code></pre>
</div>
```

Consider adding aria roles to the span so that assistive technologies are informed of the text's own purpose.

```html
<span aria-label="Language"> {{icon}} {{text}} </span>
```

## prefers-color-scheme

For the dark preference, reduce the weight of the code included inline.

```css
@media (prefers-color-scheme: dark) {
  body:not([data-preference]) main p > code {
    font-weight: 600;
  }
}

body[data-preference='dark'] main p > code {
  font-weight: 600;
}
```

## Syntax highlighting

In the `Utils` folder I also experiment with syntax highlighting, with the `shiki` and `markdown-it` libraries. At the time of writing, the feature is not implemented, but is included in `index-syntax.html` to show how the complete component would look like.
