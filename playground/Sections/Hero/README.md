# Hero section

- add `aria-*` attributes to describe the anchor link elements

## Usage notes

### font-size

The size of the text is fixed and not updated for thinner viewports. This is not meant to translate in the final version, and consider instead a range of `[1.25-2]` rem.

### Markup

The section describes two elements: the SVG illustration and an unordered list. In the final version, consider adding content, even if visually hidden.

Consider also wrapping the SVG in a `nav` element, with an `aria-label` describing the links.

### ul

In the stylesheet, I repeated some of the property value pairs specified for the **List** component. Consider having these in the global stylesheet, and change only the values associated with a larger `font-size`, like the spacing between items.
