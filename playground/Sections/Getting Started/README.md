# Getting Started

An article in the `main` container of the landing page.

## SVG

Include two `<svg>` elements for the telescope and icons separately.

In this folder you find the static version. In the script recreate the syntax with a variable input. Experiment with coordinates and icons.

## Layout

By default, have the SVG elements side by side, with the rest of the HTML elements right beneath.

With a large enough viewport **and** If grid is supported, place the elements as follows:

```
.           icons
telescope   paragraph
.           link
```

## Animation

There are three animations:

- scale for the circles and the icons. The circles of the mask are also modified so to hide the relevant area of the path element

- color for the circles, the icons and the path element. To this end, the path is broken down in three segments, to reconcile the delay set up on the connecting elements

- the telescope and its hinge.

The markup is modified to target the elements with the `:nth-of-type()` selector.

### Rotation

If grid is supported, the telescope is to the bottom left of the icons. In this instance, change the initial rotation to have the telescope more tilted.

## setAttribute

To set up the animation with the intersection observer API, add/remove a class with `setAttribute` and `removeAttribute`,

You can achieve a similar feature using only `setAttribute` and a ternary operator:

```js
entry.target.setAttribute("class", entry.isIntersecting ? "observed" : "");
```

However, in this instance the class attribute is still present. It just doesn't refer to anything.

```html
<svg class></svg>
```
