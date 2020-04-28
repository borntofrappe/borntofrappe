# About

- use the following icons: world, editor, running, tea, gaming

- animate the illustration only when visible

## Usage notes

### min-height

The demo extends past the viewport to show how the intersection observer API works. Have the illustration outside of sight, and the animation does not run.

### .no-footer

One alternative layout sees the SVG illustration hidden behind the footer, at least partially. The markup includes the footer, but this is ultimately hidden using a class on the body.

```css
body.no-footer footer {
  display: none;
}
```

This class is toggled following a click event on the window object.

```js
window.addEventListener("click", () => {
  document.body.classList.toggle("no-footer");
});
```

This code is most assuredly not meant to be repeated in the final version.
