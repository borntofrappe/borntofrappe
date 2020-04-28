# Footer

- link to twitter account

- add dot pattern in the background

- add wave-like pattern above the element

- add heart icon in the center and on top of the pattern

## Usage notes

### Patterns

See **Style Guide/Patterns** for the `.svg` syntax used in the background and pseudo element.

### Pseudo height

The height of the pseudo element is `20px`, exactly half the height of the SVG element included in the `mask-image` property. This is on purpose to show only half the wave.

```css
footer::before {
  mask-image: url("... width='100' height='40' ...");
  height: 20px;
}
```

### Repeated background

The pseudo element repeats the same properties used to add the dotted pattern for the footer: `background-image`, `-size` and `-position`.

It seems this duplication is necessary for cross browser support. Using `background: inherit` — at least on Edge and at the time of writing — is not enough.

### 1px

Specify a 1px translation on the pseudo element describing the wave pattern.

```css
footer::before {
  transform: translateY(1px);
}
```

Without this — at least on mobile devices — there is often an annoying gap between the pseudo element and the footer. Enough to break the illusion of having a contiguous shape.

For this change, the `background-position` is adjusted to offset the translation.

```css
footer::before {
  background-position: -5px -6px;
}
```
