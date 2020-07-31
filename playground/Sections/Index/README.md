List of articles included in the blog page.

## Markup

Consider the frontmatter presumed by a series of articles, describing the title, date and brief description.

```html
<article>
  <h2>
    <a href="{link}">
      {title}
    </a>
  </h2>

  <time datetime="{date}">
    {formattedDate}
  </time>

  <p>
    {brief}
  </p>
</article>
```

## Date

Follow the convention described in the [living standard](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element) and specifically [the part on a valid month string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-month-string).

Use an array detailing the months to format the date in a more readable form: `2020-1-20` to `January 20, 2020`. Full month name, followed by the integer describing the day, followed by the four digit years.

## First article

Highlight the first element in the main container with a larger size, different accent color, and the SVG syntax behind `sparkles.svg`.

Include the vector graphic in the stylesheet through `mark` properties.

## Grid

By default, have the articles follow one another in a single column layout.

If grid is supported, create a two-column layout, and have the first article spread to cover the entirety of its row.

```css
@supports (display: grid) {
  main {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    grid-gap: 1.25rem 1.75rem;
  }
}
```

The two columns become one as the viewport has no longer space to occupy two `15em` sized columns.

## Subgrid

If subgrid is supported, line up the heading+time+paragraph elements across columns.

```css
@supports (grid-template-columns: subgrid) {
  article {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 3;
  }
}
```

## prefers-color-scheme

For the dark preference reduce the weight of the `<h2>` elements. Update the attribute on the `body` element to review the changes.

```html
<body data-preference="dark"></body>
```
