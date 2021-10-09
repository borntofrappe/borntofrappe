---
title: Datetime
datetime: 2021-10-9T22:53
brief: Dates in JavaScript are known to provide a headache or two. This blog tries to find a solution starting from a valid datetime value
keywords: html, js
---

```html
<time datetime="2021-10-9"> October 9, 2021 </time>
```

```js
const date = new Date(
	...post.datetime
		// separate
		.split(/[-,T:]/)
		// month in the [0, 11] range
		.map((d, i) => (i === 1 ? parseInt(d, 10) - 1 : parseInt(d, 10)))
);
```

```js
new Intl.DateTimeFormat('en', {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
});
```
