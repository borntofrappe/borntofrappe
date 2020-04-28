# Code Snippet

- use the `>` selector to target the parent `pre` element only

- remove the margin on the pre element `.shiki`

- add a `div` element describing the language

## Usage Notes

### Markup

The structure described in `index.html` comes from a script using `shiki`. Try to replicate the HTML with whatever syntax highlighting is most appropriate for 11ty.

```html
<pre>
  <div>
    {{icons.lang}}
    {{name.lang}}
  </div>
</pre>
```

For instance:

```html
<pre>
  <div>
    <svg><!-- ... --></svg>
    index.html
  </div>
</pre>
```

### Width

Consider resizing the element to occupy a smaller width.

### Scrollbar

Repeat the same style specified for the vertical scrollbar of the document. Intuitively, style the `height` instead of the `width`.
