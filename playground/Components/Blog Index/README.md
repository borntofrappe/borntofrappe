# Blog Index

## Markdown

The script populates the `main` element with the frontmatter presumed from a series of articles.

## Date

Follow the convention described by the [living standard](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element) and specifically [the part on a valid month string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-month-string).

With this convention a value of `1` for the month corresponds to January: `2020-1-20` for the 20th of January.

Use an array detailing the months to format the date in a more readable form: `2020-1-20` to `January 20, 2020`

## Sparkles

Add the icon behind `sparkles.svg` next to the first article.

The first article is also highlighted with a more prominent size and accent color.

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

Two columns which become one as the viewport has no longer space to occupy two `15em` sized columns.

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

## v2

Consider adding the icon of a calendar in place of the solid border alongside the `time` element.
