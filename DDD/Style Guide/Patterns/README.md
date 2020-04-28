# Patterns

The syntax has been processed through [this website](http://yoksel.github.io/url-encoder/) to escape the necessary characters and inline the syntax.

They are then included in the `url()` value of the `content`, `background-image` or again `mask-image` property. Like the following:

```css
header {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-50 -50 100 100' width='20' height='20'%3E%3Cg opacity='0.4'%3E%3Cg fill='currentColor' stroke='none'%3E%3Ccircle r='10' /%3E%3Ccircle r='10' transform='translate(50 -50)' /%3E%3Ccircle r='10' transform='translate(50 50)' /%3E%3Ccircle r='10' transform='translate(-50 50)' /%3E%3Ccircle r='10' transform='translate(-50 -50)' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
```
