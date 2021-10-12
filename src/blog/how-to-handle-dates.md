---
title: How to handle dates
datetime: 2021-10-12T10:18
brief: Date + time = datetime!
keywords: html, js
---

JavaScript is known to be challenging when it comes to dates.

> **Please note**
>
> This article needs writing. Right now it is just an excuse to test the system

## Helpful resources

- [time element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)

- [valid datetime values](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values)

- [CSS Tricks article](https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/)

- [date with arguments](https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/#creating-dates-with-arguments), precision up to milliseconds

## Code Snippets

```html
<time datetime="2021-10-12">October 12, 2021</time>
```

```yaml
title: Time
datetime: 2021-10-12
```

```js
const date = new Date(
	...post.datetime
		// separate - \s T :
		.split(/[-\sT:]/)
		.map((d, i) => (i === 1 ? parseInt(d, 10) - 1 : parseInt(d, 10)))
);
```
