---
title: Not so permanent link
description: Surf the web to find a better way to explore a single page.
date: 2025-01-09
---

Somebody once taught me "all you need to know about permalinks". In short, links pointing to an area to ease navigation, especially in a page filled with content and a sparse series of targets like headings. The concept is simple: you have a heading in one of the possible six variants.

```html
<h2>Attributes</h2>
```

You assign a unique `id` to the element and then add an anchor link which points to the same reference through the `href` attribute.

```html
<h2 id="attributes">
  Attributes
  <a href="#attributes"></a>
</h2>
```

You can then redirect people to the area selecting the link and even sharing the URL, updated with the inclusion of the reference after the hash mark. You can even create a table of contents with a similar purpose, to skip to a specific section of the page instead of reading all the way through.

```html
<aside>
  <p>On this page</p>
  <ul>
    <li><a href="#attributes">Attributes</a></li>
  </ul>
</aside>
```

As I picked up the practice I learned that the `tabindex` attribute might help to skip the headings when you move through the page hitting the tab key. And also the link should have a descriptive label explaining the purpose of the anchor.

I never stopped to question these learnings, however. Most practically, is there a solution good for once and for all? There's [a page on Wikipedia](https://en.wikipedia.org/wiki/Permalink), but is helpful only as a starting point. You will discover that _usually_ the links have a label, you may even learn how to call the classy sign which sometimes introduces a paragraph, but you won't find an implementation of the actual markup. Exploring the web I found a few articles touting an accessible solution, but in the end resolved to look at the code implemented by few, inspiring and trusted web developers.

There's [Andy Bell](https://piccalil.li/blog/practical-accessibility-tips-you-can-apply-today/#dropdown-menus)
which augments the markup for the anchor link with an icon and label, aside from a series of attributes to style with CSS.

```html
<h2 id="dropdown-menus">
  Dropdown menus
  <a href="#dropdown-menus">
    <span>permalink</span>
    <svg></svg>
  </a>
</h2>
```

There's [Josh Comeau](https://www.joshwcomeau.com/css/container-queries-introduction/#the-basic-idea-1) which follows the same pattern, but shuffling the children. Here the text is _after_ the link.

```html
<h2 id="the-basic-idea">
  <a id="the-basic-idea-1" href="#the-basic-idea-1">
    <svg></svg>
    <span>Link to this heading</span>
  </a>
  The basic idea
</h2>
```

[Adam Argyle](<https://nerdy.dev/css-wishlist-2025#ux-features-(6)>) has quite a different approach on his blog-like website. The headings don't have a unique string and everything is left to the anchor link. The element has a `name` attribute and the reference is to that value.

```html
<h2>
  UX Features (6)
  <a name="ux-features-(6)" href="#ux-features-(6)">#</a>
</h2>
```

The code works, but raises a few questions. Especially when you go to the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#name) and read that the `name` attribute is noted as deprecated. Once again, it works, but not in place of `id`. And with the `id` attribute the markup will continue to work.

```diff
-<a name="ux-features-(6)" href="#ux-features-(6)">#</a>
+<a id="ux-features-(6)" href="#ux-features-(6)">#</a>
```

Speaking of the MDN docs, [the website](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#examples) has yet another solution. The heading has one child element, the permanent link, and the link includes the text.

```html
<h2 id="example"><a href="#example">Example</a></h2>
```

The snippet is charming and feels almost _too_ reasonable. What better label, what better description to point to the heading than the contents of the heading itself?

There might be a hiccup with this "ultimate" take, close to a edge case, but well worth considering. If you were to write [a _rehype_ plugin](/a-practical-rehype-plugin) so that your hypothetical markdown processor creates the structure all on its own, what happens if the heading is already an anchor link?

```md
## [Rehype](https://github.com/rehypejs/rehype)
```

In this instance the result is a nested reference, something which is not really fair in HTML.

```html
<h2 id="rehype">
  <a href="#rehype">
    <a href="https://github.com/rehypejs/rehype">Rehype</a>
  </a>
</h2>
```

Per the HTML standard the only content permitted between anchor tags is [_transparent_ content](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element:concept-element-content-model), not interactive, and certainly, not another link. HTML being a forgiving language the code won't break any page — the browser manages to close the outer link early.

```html
<h2 id="example">
  <a href="#example"></a>
  <a href="https://github.com/rehypejs/rehype">Rehype</a>
</h2>
```

Leading back to the first solution of having a separate permalink, just earlier and without text. As long as you know that the headings don't include a link, or as long as you accept the potential issue, there is likely no better solution than the nested structure. But otherwise stick to the two-elements split, investing more time in actually writing and designing an visible icon instead.
