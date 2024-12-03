---
title: Aggregate functions
description: Experiment with the tech some platforms provide with little fanfare.
date: 2024-07-10T18:07:36
---

Within a SQLite database your queries might lead you to inspect the contents of the available tables, at which point you will treasure knowing a few features and built-in functions:

- use `.schema` to peek at how the tables were first created

  The line shows more than just tables — all the views, triggers and indexes crafted with care —, so you can name one particular unit to focus on the structure of the one piece

  ```sql
  .schema "typing_test"
  ```

- if you are short on space and attention type a _Pragma statement_ such as [`table_info`](https://www.sqlite.org/pragma.html#pragma_table_info) to summarize the columns of the single table

  ```sql
  PRAGMA table_info("typing_test");
  ```

  In this manner will be sure to select the right fields — not hard-coded strings

- if you need some heuristic, an even slimmer output pronto, stat, try _aggregate functions_ like `COUNT`, `MIN` and `MAX`

  ```sql
  SELECT COUNT("wpm"), AVG("wpm") FROM "typing_test";
  ```

  I am confident you can tally the rows yourself, even ball-park the value for very large datasets, but in this instance, since you are already running SQLite code, you don't need anything but what the platform provides.

I liken these features to the front-end reality of modern web browsers. For sure there are fancy frameworks and build tools to achieve something and even add flair. You might have gazed wonderingly at the counter component baked in a demo Svelte app, animating numbers to show the appropriate value. I can even understand the logic once I convince myself of the inner workings of the modulo operator. The point stands: with the compiler, it's not complicated to delight in the pleasing effect. But the web platform promises to expand its reach and even cover this area. For same page transitions it gifts [the `startViewTransition` API](https://developer.chrome.com/docs/web-platform/view-transitions).

The code is a touch gnarly, not supported far and wide but what it provides is an excellent news. Need to count something? Increment, decrement at will, and leave the browser the arduous task to transition the single value in the old and new view.

```js
document.startViewTransition(() => {
	counter.textContent = +counter.textContent + 1;
});
```

No tricks, no secret dealings to hold on a digit while a new one slots into place. And while by default the change involves only fading, it doesn't take much to attempt a better effect and [mock the full change](https://codepen.io/borntofrappe/pen/xxobXxJ).
