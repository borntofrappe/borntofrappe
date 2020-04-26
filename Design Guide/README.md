# Design Guide

Systems, patterns and assets used in the website.

## Icons

Ultimately, the idea is to build a object describing the icons through property value pairs, and have the templating engine inject the syntax instead.

In `_data` and `icons.js`:

```js
module.exports = {
  blog: `<svg></svg>`,
  rocket: `<svg></svg>`,
};
```

Through the templating language:

```njk
{{ icons.rocket }}
{{ icons.blog }}
```

When creating an icon:

- specify a default size of `1em`

- add `aria-hidden: true` and `aria-focusable: false`
