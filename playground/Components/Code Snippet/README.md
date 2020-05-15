# Code Snippet

## Markup

The structure described in `index.html` comes from a node script using `shiki`. See the **Utils** folder.

Modify the default HTML to include a `span` as the first child element of the code snippet. Use this container to describe the language of the code through an icon and text.

```njk
<div>
  <span>
    {{icon}}
    {{lang}}
  </span>
  {code}
</div>
```