---
title: Test Article One
date: 2021-5-29-12
brief: A few words on a project exploring SVG syntax.
keywords: ['svg']
---

Let me introduce the `<use>` element.

You can repeat the same shape:

```html
<path fill="hsl(5, 81%, 56%)" d="M 0 0 v -50 a 25 25 0 0 1 0 50" />
<path
  fill="hsl(217, 89%, 61%)"
  transform="rotate(90)"
  d="M 0 0 v -50 a 25 25 0 0 1 0 50"
/>
<path
  fill="hsl(136, 53%, 43%)"
  transform="rotate(180)"
  d="M 0 0 v -50 a 25 25 0 0 1 0 50"
/>
<path
  fill="hsl(45, 97%, 50%)"
  transform="rotate(270)"
  d="M 0 0 v -50 a 25 25 0 0 1 0 50"
/>
```

Alternatively, you can **define** the shape, and later **re-use** it with the `<use>` element.

```html
<defs>
  <path id="leaf" d="M 0 0 v -50 a 25 25 0 0 1 0 50" />
</defs>

<use href="#leaf" fill="hsl(5, 81%, 56%)" />
<use href="#leaf" fill="hsl(217, 89%, 61%)" transform="rotate(90)" />
<use href="#leaf" fill="hsl(136, 53%, 43%)" transform="rotate(180)" />
<use href="#leaf" fill="hsl(45, 97%, 50%)" transform="rotate(270)" />
```

## Advantages

By repeating the same shape, it means you only need to change the syntax in the `defs` block to have it modify every instance. In this light, it functions as similarly to a component in a design system.

In terms of size, the benefits depend on the complexity of the element being defined. Refer to the `.svg` files for a comparison: the most recent version of the logo is actually smaller when repeating the path elements (`v1-paths.svg`), while the previous one is smaller when relying on the `<use>` element. Every `.svg` has been processed through [SVGOMG](https://jakearchibald.github.io/svgomg/) so that the syntax has been optimized and can be compared in a more meaningful standard.

| Size in bytes | paths | use |
| ------------- | ----- | --- |
| v0            | 712   | 445 |
| v1            | 307   | 362 |

## Pay attention

1. The `<use>` element does not accept every attribute

   You can set [_presentational attributes_](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Presentation) like `fill` and `stroke`, but not attributes characteristics of the defined element, like `d` for `<path>` elements.

   ```html
   <!-- works -->
   <use href="#leaf" fill="purple" />

   <!-- does NOT work 
   does not change the `d` attribute set on the defined shape
   -->
   <use href="#leaf" d="M 0 0 l 50 50" />
   ```

2. When setting a presentational attribute, also remember that these **do not** override the attributes set on the defined shape.

   Refer to the older version of the logo for a reference. The graphic defines a path element with a `fill`, to create a shadow, and the color is mainted when the shape is re-used in the body of the SVG element.

   ```html
   <path
     fill="hsl(0, 0%, 0%)"
     opacity="0.2"
     d="M 2.5 -2.5 l 22.5 -25 v 27.5 h -15"
   />
   ```

   Every `<use>` element will use the given color. Even if you specify a different value.

3. Be careful to describe the `id` attribute with a unique value. In the project at hand, using `#leaf` for both `<defs>` block would cause both graphics to use the shape defined first.

   ```html
   <svg>
     <defs>
       <path id="leaf">
     </defs>
   <svg>

   <svg>
     <defs>
       <path id="leaf">
     </defs>
     <use href="#leaf" />
   <svg>
   ```

   In this trivial example the `<use>` element will refer to the first path, even if this is defined in a previous, different SVG element.
