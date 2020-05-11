# Code Snippet

## Markup

The structure described in `index.html` comes from a node script using `shiki`. See the **Utils** folder.

Modify the default HTML to include a `div` as the first child element of the code snippet. Use this container to describe the language of the code.

```njk
<pre>
  <div>
    {icon}
    <span>{lang}</span>
  </div>
  {code}
</pre>
```

## Code

On top of the markup created using shiki, add `<code>` elements inside of `<p>` elements to style the code outside of code snippets.
