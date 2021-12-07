---
title: list-values
entry: 2
---

Here's something I learned adding a route to list every entry for the log: HTML has a `value` attribute for list items in ordered lists. You can actually change the counter from the markup.

```html
<ol>
	<li value="1">One</li>
	<li value="3">Three</li>
	<li value="5">Five</li>
</ol>
```

Why would you want that? Let's say if you have a log, kinda like this one. Let's say you attach an integer to the entries in this log, incrementing the value with each passing day. Let's say, and I'm not setting up anything here, that you fail to write an entry every single day. Well, now you have a way to admit defeat. I know it's unlikely, but you know... now you know another way to mark up content.
