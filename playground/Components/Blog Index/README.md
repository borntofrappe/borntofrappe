# Blog Index

- add sparkles.svg for the first article

- format date output to show the name of the month, followed by the number of the day, followed by the full year

## Usage notes

### text-decoration

Consider commenting out the following line:

```css
article h2 a {
  text-decoration: none;
}
```

### Markdown

This is mostly for the `.md` documents, but remember to add the dates in the format described by the [living standard](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element) and specifically [the part on a valid month string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-month-string).

```md
---
date: 2020-1-20
date: 2020-2-25
---
```

Following this convention, the month value starts at `1`.
