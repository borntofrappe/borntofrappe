---
title: className and SVG elements
date: 2020-05-19
brief: The many ways you can add a class to an SVG element. className is not one of them. 
keywords: ["js", "svg"]
---

In the process of animating an SVG illustration through the intersection observer API, I stumbled on a rather pesky situation: not being able to set a class on an `<svg>` element using the `className` API.

In this demo, I try to explore why that is.

## Demo

In the demo, I create a basic vector graphic. Its appearance is modified with CSS and through a class.

```css
svg.bounce {
  animation: bounce 1s ease-in-out infinite alternate;
}
@keyframes bounce {
  to {
    transform: scale(1.5);
  }
}
```

Fire up the demo and open up the console, writing the following lines of JavaScript.

```js
const svg = document.querySelector("svg");
console.log(svg.className);
```

Surprise, it returns an object. An `SVGAnimatedString` with two fields:

- `baseVal`

- `animVal`

Both are an empty spring, because the `<svg>` element does not have a class to begin with.

```js
{baseVal: "", animVal: ""}
```

Go back to the HTML and add the class.

```diff
+ <svg class="bounce">
```

Fire up the demo, and beside noticing the animation, look at the same string.

```js
{baseVal: "bounce", animVal: "bounce"}
```

In light of this, it seems natural that you cannot set the class directly:

```js
const svg = document.querySelector("svg");
// does not work
svg.className = "bounce";
```

How to add the class then?

### baseVal

Change the string held by the string in the `baseVal` field.

```js
svg.className.baseVal = "bounce";
```

Modifying the value of `animVal` doesn't work.

### setAttribute

This is the route suggested by MDN actually.

```js
svg.setAttribute("class", "bounce");
```

### SVGAnimatedString

The demo warrants a larger discussion/exploration of `SVGAnimatedString`, but to get started, it's more than enough to appease the current need of setting a class with JS.

## Links

- [Problem getting the class name of an svg element](https://www.reddit.com/r/learnjavascript/comments/3o9tk8/problem_getting_the_class_name_of_an_svg_element/). A reddit post from 4 years back tackling the problem. It's in the context of jQuery, but plenty applicable.

- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) on className. There is a string on SVG syntax to use `getAttribute` and `setAttribute` instead:

  > It is better to get/set the className of an element using Element.getAttribute and Element.setAttribute if you are dealing with SVG elements.