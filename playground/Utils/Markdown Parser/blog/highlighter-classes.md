---
title: Highlighter Classes
date: 2020-12-8
brief: Testing out the many classes added with highlight.js
tags: node, js
---

What follows is a series of code snippets uniquely designed to create `.hljs` classes from the `highlight` library. The goal is to consider these classes and to then color the different elements with specific hsl colors, inspired by a theme like `nord`, or `atom-dark`, or again `material-theme-ocean`.

```js
/* let us begin
_hello world_
*/
const something = 'hello world';


class doesExist = {}

function sayHi(name) {
  console.log('hello ' + name);
  return false;
}

const num = Math.random()
if (num > 0.5 + 0) {
  console.log(`${num} is greater than 0.5`);
}

if something || somethingElse {
  const regexp = / /gi
}
```

```c
int number = 1;
goto somewhere
```

```html
<!DOCTYPE html>
<meta charset="UTF-8" />
<body direction="rtl"></body>
```

```md
# Hello world

- there is
- a nice list

\`\`\`
const hello = 'world';
\`\`\`

_okay_
**not okay**

[This is a link](www.somethingneat.abcdy)
[This is a separate link](1)

> goodbye

[1]: http://example.com
```

```css
nav {
  font-weight: 600;
}

#content[data-preference] {
  content: '';
  margin: 150vh auto 100vh;
}

a.relative:hover::after {
  color: hsl(20, 22%, 12%);
  content: url('');
}

@media (prefers-color-scheme: dark) {
  /* comment */
}
```

```diff
+ addition
- deletion
```
