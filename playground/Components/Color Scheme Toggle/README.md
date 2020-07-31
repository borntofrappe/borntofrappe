Update the size of the button to fit the element alongside the breadcrumb navigation.

## Notes

The focus of the demo is split in several areas:

- the SVG syntax describing the two states of the toggle

- the CSS properties transitioning the toggle between the two states, and applying the styling for the different preference

- the JavaScript logic considering the preference set through the `prefers-color-scheme` media query or a previous choice set through `localStorage`

## HTML

Refer to `sun.svg` and `moon.svg` for the two states of the toggle. `moon-defs.svg` describes a previous version for the moon, where the icon is created with a `mask` element. Ultimately, I decided to process the syntax through inkscape and SVGOMG to dispose of the `defs` block. This to have an SVG element based on a single `path` element. Both would work, but one requires considerably more code.

In the HTML, the syntax for both icons is included in the same SVG element. Additional group elements are specified to also make it possible to show either visual through the `transform` property. By translating the shapes around the bottom center of the SVG element, it is possible to have the two rotate using the `rotate()` value.

Wrap the SVG syntax in a `button` element, and by default, specify an attribute to disable said element. The idea is to have the interaction enabled only when, or if, the script is available. In the script therefore, remember to remove the `disabled` attribute.

## CSS

Consider first a situation in which the script is not available. In this situation the button cannot be clicked, but the color palette should still respect the preference set at system level. For this, specify the necessary properties in the `prefers-color-scheme` media query.

```css
@media (prefers-color-scheme: dark) {
  body {
    /*  */
  }
}
```

One change for the selector however: do not target just the `body` element, but the `body` element without a `data-` attribute.

```css
@media (prefers-color-scheme: dark) {
  body:not([data-preference]) {
    /*  */
  }
}
```

Once the attribute is included in the script, the idea is to override the preference with the one chosen through said script.

Assuming a `data-preference` attribute then, repeat the properties for the alternative color palette when the attribute matches the decided value.

```css
body[data-preference='dark'] {
}
```

This means that the dark preference is applied:

- if there is no script, but the media query matches

- if there is a script, and this one describe a preference for said choice

### Global change

The change in color is included in the global stylesheet and through custom properties. This is to have the change cascade to every demo and from the `body` element.

In the specific demo, CSS instructs only how to change the appearance of the vector graphic.

### data-transition

Past the selectors using the `data-preference` attribute I also added a `data-transition` attribute. This is to have the `transition` properties applied after the preference is set, conditional to the `data-transition` attribute applied on the `body` element.

## JS

The script checks if custom properties are supported, and if so, it proceeds to consider the color preference.

Start by removing the `disabled` attribute from the button. Then continue by considering the media query and the preference set on local storage:

- if there is a preference set on local storage, include it in the `data-preference` attribute of the `body` element

- if there is no preference, use the one specified (or not specified, by exclusion) by the media query. Moreover, use this preference to save the value in `localStorage`.

Following user interaction then:

- when the button is clicked, set the preference opposite to the one available in localStorage

- when the media query changes, respect the value it specifies

Finally, add the `data-transition` attribute to have the change in preference occur smoothly. I've included the instruction in a `setTimeout()` function because at least one browser applies the transition properties immediately, even if these follow the color scheme being set earlier.
