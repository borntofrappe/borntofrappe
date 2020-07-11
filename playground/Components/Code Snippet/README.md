# Code Snippet

The structure described in `index.html` comes from a node script using `shiki`. The **Utils** folder and the **Markdown Parser** project describe how to create this markup, but regardless of the parser/syntax highlighter, the idea is to include code in one of two variants.

## Block

In a a `<div>` container, a code block is preceded by a `<span>` element providing additional information.

```njk
<div>
  <span>
    {{icon}}
    {{text}}
  </span>
  {code}
</div>
```

In place of `{{text}}`, the idea is to incorporate one of the following strings:

- the language of the snippet: `html`, `css`

- the name of the file, extension included: `index.html`, `style.css`

## Inline

In a `<p>` paragraph element, code is inlined directly in a `<code>` element.

```html
<p>In JavaScript, use <code>console.log()</code> to display text</p>
```
