# Quote

A quote in markdown is parsed to a `blockquote` element. For instance, the following markdown:

> there's no better time than now

Is parsed with the following markup:

```html
<blockquote>
  <p>tehre' no better time than now</p>
</blockquote>
```

In light of this, the component is devoted solely on the `<blockquote>` element. There are two more HTML elements to mark up quotes and citations (see the [_Research_](#research) section), but they are currently beyond the scope of the website.

## Stylesheet

Use the syntax created for `sparkles.svg` to visually wrap the quote. Add the graphic through the `::before` and `::after` pseudo element .

For one of the pseudo element, flip the graphic to have the two visuals mirror each other. You can achieve this in at least two ways:

- with a negative scale

  ```css
  blockquote::after {
    transform: translate(-50%, -50%) scale(-1);
  }
  ```

- with half a rotation

  ```css
  blockquote::after {
    transform: translate(-50%, -50%) rotation(0.5turn);
  }
  ```

## Research

There are three elements connected to quotes and citations; `q`, `blockquote` and `cite`. I'll refer you to the MDN docs for more information, or again the living standard for the HTML syntax, but the following list works as a good starting point.

- `q` and `blockquote` work similarly, in that they are both used to mark up a quote. `q` is however an inline element, while `blockquote` a block element.

- `q` wraps the text in between quotes

- `blockquote` automatically indents the text with some margin (this default is removed in the specific project by the `global.css` stylesheet)

- `cite` doesn't actually quote text, but describes the source of a particular quote/work

- there is a `cite` attribute for the `q` and `blockquote` elements. This one allows to provide an informative URL for the source of the quote, fulfilling a task similar to the `cite` element

  ```html
  <blockquote
    cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote#Attributes"
  >
    <p>This element's attributes include the global attributes.</p>
  </blockquote>
  ```
