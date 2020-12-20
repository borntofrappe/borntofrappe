# Skip to Content

Use the syntax described in `skip.svg`.

## Markup

The anchor link is set to be the first children of the `body` block, and links to an HTML element with the id of `content`.

```html
<a href="#content" class="visually-hidden" id="skip-to-content"> </a>
```

The class `visually-hidden` allows to hide the element from view, but not from assistive technologies. The `skip-to-content` id allows to distinguish the anchor link so that the stylesheet is able to target the individual element.

## Filler

For the specific demo, `index.html` includes the navigation developed in `Breadcrumb Navigation` and a `<main>` element with the prescribed id of `content`.

These are useful to showcase how the anchor link works.
