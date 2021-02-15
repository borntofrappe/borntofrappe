---
title: 'dots.svg'
date: 2021-02-15
description: A shamefully long story for a very simple icon.
keywords: ['svg']
hasCode: true
---

I enjoy writing SVG icons, almost to a fault. This website actually started with SVG icons, drawing the outline for the HTML, CSS and JavaScript stack, but the particular post is about a different visual. An icon for [borntofrappe.github.io](borntofrappe.github.io), and served next to the document title to any browser supporting the `.svg` format.

## Inspiration

As a starting point, I wanted to create a series of dots, radiating from the center in a nice, regular pattern.

```txt
   o
 o   o
o     o
 o   o
   o
```

The visual is incredibly simple, but it's also meant to match the goal of the website. The website works as a hub, providing a link to external resources, and in this light, the dots are a visual for the new, exiting destinations. In terms of design, the website is also meant to include an incredibly neat visualization using the Canvas API and a series of particles, but the connection will be evident only as I implement the feature with JavaScript.

## v1 - translate and rotate

It all starts with a nice `<svg>` element, modifying the coordinate system through the `viewBox` attribute in order to draw the elements from the very center of the SVG canvas.

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="-50 -50 100 100"
  width="32"
  height="32"
>
  <!-- draw here -->
</svg>
```

The `viewBox` attribute is useful for more than just modifying the origin of the coordinate system, but the topic is far beyond the scope of this article.

In between the opening and closing tags, I like to add a group element, `<g>`. It works as a helpful container, and it is useful to set a few properties for every shape which follows. For instance, `fill` to color the dots, and `stroke` to remove the imperceptible, default outline.

```html
<g fill="hsl(220, 100%, 8%)" stroke="none">
  <!-- draw here -->
</g>
```

From this setup, a dot is drawn with a `<circle>` element. The only attribute strictly necessary to visualize the shape is `r`, for the radius of the circle.

```html
<circle r="10" />
```

`cx` and `cy` are then helpful to position the shape in the coordinate system (top to bottom, left to right).

```html
<circle cx="40" r="10" />
```

I like to use the `transform` attribute instead of `cx` and `cy`.

```html
<circle transform="translate(40 0)" r="10" />
```

Perhaps it is because I am reminded of the `transform` property in CSS, and how it is preferable to `left`, `top` properties for a transition or animation. Regardless, the end result is the same: a dot on the very right edge of the canvas.

One dot down, seven to go. It would be easy to draw at least three more dots, for the remaining cardinal points.

```html
<!-- east, south, west, north -->
<circle transform="translate(40 0)" r="10" />
<circle transform="translate(0 40)" r="10" />
<circle transform="translate(-40 0)" r="10" />
<circle transform="translate(0 -40)" r="10" />
```

However, and for the points in between, the `x` and `y` coordinate would actually require a touch a trigonometry. What's the cosine of `45` degrees again?
Luckily, and before somebody reminds me that `Math.cos()` needs an angle in radians and not degrees, the `transform` attribute comes to the resque with the `rotate` function. The life-saving idea is to apply a rotation before the translation.

```txt
x
 \ 45°
  \
   o
```

Which means drawing the dots around the center is matter of repeating the same element incrementing the rotation.

```html
<circle transform="translate(40 0)" r="10" />
<circle transform="rotate(45) translate(40 0)" r="10" />
<circle transform="rotate(90) translate(40 0)" r="10" />
<circle transform="rotate(135) translate(40 0)" r="10" />
<circle transform="rotate(180) translate(40 0)" r="10" />
<circle transform="rotate(225) translate(40 0)" r="10" />
<circle transform="rotate(270) translate(40 0)" r="10" />
<circle transform="rotate(315) translate(40 0)" r="10" />
```

## v2 - use

I'm positive somebody was yelling `transform`!, `transform`! as I pretended to consider trigonometric functions. I'm also positive that same person was yelling `<use>`!, `<use>` while reading the previous snippet.

For everybody else, the `<use>` element provides a nice, quick way to repeat another SVG element. This by referencing the `id` attribute of the desired shape.

```html
<circle id="dot" transform="translate(40 0)" r="10" />
<!-- draw the same dot -->
<use href="#dot" />
```

I would think the `transform` attribute of the `<use>` element would be applied _after_ the attribute of the `<circle>` element, but luckily, it works the other way around. The dot is first rotated <!-- 45, 90, 135, 180, 225, 270, 315 -->, and then translated in the desired slot.

Which means, the code is updated as follows.

```html
<circle id="dot" transform="translate(40 0)" r="10" />
<use href="#dot" transform="rotate(45)" />
<use href="#dot" transform="rotate(90)" />
<use href="#dot" transform="rotate(135)" />
<use href="#dot" transform="rotate(180)" />
<use href="#dot" transform="rotate(225)" />
<use href="#dot" transform="rotate(270)" />
<use href="#dot" transform="rotate(315)" />
```

## v3 - scale

But bear with me for a minute. The `<use>` element might reference drawing elements, like `<circle>`, but also group elements, `<g>`.

With this realization, it is enough to draw four neighboring dots, and then repeat the same structure on the opposite side.

```html
<g id="dots">
  <circle id="dot" transform="translate(40 0)" r="10" />
  <use href="#dot" transform="rotate(45)" />
  <use href="#dot" transform="rotate(90)" />
  <use href="#dot" transform="rotate(135)" />
</g>
<use href="#dots" transform="scale(-1 -1)" />
```

The `transform` attribute is applied from the center of the canvas, which means the dots are flipped to draw the second half of the desired visual.

And yes, I do realize the same effect is achieved with a half rotation, but the title for the paragraph would have been quite less intriguing (rotate once more?).

```html
<!-- <use href="#dots" transform="scale(-1 -1)"/> -->
<use href="#dots" transform="rotate(180)" />
```

## v4 - keystrokes

I said I prefer the `transform` attribute, but `cx` saves a few keys while achieving the same result.

```html
<!-- <circle id="dot" transform="translate(40 0)" r="10" /> -->
<circle id="dot" cx="40" r="10" />
```

The label for the `id` attribute leaves also room for improvement.

```html
<!-- <circle id="dot" cx="40" r="10" /> -->
<circle id="d" cx="40" r="10" />
```

And what was I thinking about using `hsl` for the color? Hexadecimal values are clearly an improvement.

```html
<!-- <g fill="hsl(220, 100%, 8%)" stroke="none"> -->
<g fill="#000E29" stroke="none"></g>
```

Not that mention all that whitespace between elements. I'll leave that to you, though. In the end, if you manage less than 338 bytes, please tell me how [@borntofrappe](http://twitter.com/borntofrappe).
