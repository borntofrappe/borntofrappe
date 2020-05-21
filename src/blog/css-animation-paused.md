---
title: CSS animation paused
date: 2020-05-18
brief: A specific article on a specific CSS property
keywords: ["html", "css"]
---

This article is mostly about a single property, but I always appreciate it when I have the chance to leverage a CSS feature I rarely use.

## The Problem

Say you have a CSS-based animation.

<!-- add 1. Animation -->

I won't go into details on how the animation is set up, but if you take a look at the stylesheet, you'll see the scale of the `<svg>` element is animated to create the familiar, if perhaps slow, heart beat.

```css
svg {
  animation: heart-beat 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
}

@keyframes heart-beat {
  25%,
  75% {
    transform: scale(0.7);
  }
  50% {
    transform: scale(1);
  }
}
```

Say you want to pair the animation to user interaction, like the hover or focus state of a button.

To this end, nest the icon in a `<button>` element.

```html
<button>
  Like
  <svg>
    <!-- heart icon -->
  </svg>
</button>
```

In CSS, you might resize the visual to consider the `font-size` of the button itself.

```css
button svg {
  width: 1em;
  height: auto;
}
```

But most importantly, you animate the shape following the `:hover` and `:focus` pseudo selectors.

```css
button:hover svg,
button:focus svg {
  animation: heart-beat 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
}
```

You might also decided to update the color of the button, but let's focus on the animation for the time being.

<!-- add 2. Button Hover & Focus -->

Hover or focus on the button, and the animation plays out as expected. Remove the hover or focus state, and the animation stops.

The animation stops, but the scale of the icon abruptly reverts back to its initial value. Unless the hover or focus state is removed in the precise moment a new iteration begins, this makes for less than a pleasing transition.

## The Solution

More than _the_ solution, _one possible_ solution. One possible way to remove the immediate jump between scales.

The idea is to take advantage of the [`animation-play-state` property](https://developer.mozilla.org/en/docs/Web/CSS/animation-play-state), and literally pause the animation as the hover or focus state is removed.

In the stylesheet, reposition the animation properties back in the `<svg>` element.

```css
button svg {
  animation: heart-beat 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
}
```

Instead of letting the animation play out however, pause its execution with the `animation-play-state` property.

```css
button svg {
  animation: heart-beat 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
  animation-play-state: paused;
}
```

Finally, and only when the hover or focus state is detected, let the animation play out by updating the property, from `paused` to `running`.

```css
button:hover svg,
button:focus svg {
  animation-play-state: running;
}
```

I might be particular, but this makes for a world of a difference.

<!-- add 3. Play State -->

## Prefers Reduced Motion

The example provided in the article is quite trivial, but I would be remiss if I were not to mention the media query. If only to highlight how accommodating CSS can be.

When the preference is detected, pause the animation repeating the previous property-value pair.

```css
@media (prefers-reduced-motion: reduce) {
  button:hover svg,
  button:focus svg {
    animation-play-state: paused;
  }
}
```

This makes me wonder, however. I've always used the media query to remove existing animations.

```css
@media (prefers-reduced-motion: reduce) {
  button:hover svg,
  button:focus svg {
    animation: none;
  }
}
```

But fundamentally, setting `animation-play-state` to `paused` achieves the same result. In a situation in which the preference changes midway through, it might even be a preferable solution. Feel free to tell me otherwise. And feel free to fork this demo and make something awesome with it.

<!-- add 4. Support Media Query -->
