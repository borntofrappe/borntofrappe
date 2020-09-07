Review `index-syntax.html` to see how the component manages a code block with syntax highlighting. The markup is included through the script `script-markdown-it` found in _Utils/Markdown Parser_.

Regardless of syntax highlighting, change the markup of code as included between code fences.

## Markup

In a `<div>` container, introduce the code with a `<span>` element providing additional information.

```njk
<div>
  <span>
    {{icon}}
    {{text}}
  </span>
  {code}
</div>
```

Add aria roles to the span so that assistive technologies are informed of the text's own purpose.

## prefers-color-scheme

For the dark preference, reduce the weight of the code included inline.

Update the attribute on the `body` element to review the change.

```html
<body data-preference="dark"></body>
```
