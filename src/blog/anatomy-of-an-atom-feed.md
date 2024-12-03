---
title: Anatomy of an Atom feed
description: A few notes on a possibly working Atom feed served with SvelteKit.
date: 2023-02-01T18:37:46
---

Visit <a data-sveltekit-reload href="/feed.xml">a specific page</a> and this website _should_ serve an Atom feed. Checked?

<details open>
    <summary>
		<p style:display="inline">Here is how the feed is structured.</p>
	</summary>

```xml
const feed = `<?xml version="1.0" encoding="utf-8"?>
	<feed xmlns="http://www.w3.org/2005/Atom">
		<title>${title}</title>
		<subtitle>${description}</subtitle>
		<link href="${origin}/feed.xml" rel="self" />
        <link href="${origin}/" />
		<id>${origin}/</id>
		<updated>${new Date().toISOString()}</updated>
		<author>
			<name>${name}</name>
			<email>${email}</email>
        </author>
		${blog
			.map(
				({ url, title, date, description }) => `<entry>
			<title>${title}</title>
			<link href="${url}/" />
			<id>${url}/</id>
			<updated>${date.toISOString()}</updated>
			<summary>${description}</summary>
		</entry>`
			).join('')}
	</feed>`
```

</details>

You might notice a JavaScript expression here and there, but assuming those are valid, I want to focus on a selection of values.

## Canonical URI

The string for `<id>` element should be predictably unique. The origin for the website is a good starting point, but remember to have the URL ending with a trailing slash.

```xml
<id>${origin}/</id>
```

In the specific instance `origin` does not include the character, explaining the reference to the feed itself.

```xml
<link href="${origin}/feed.xml" rel="self" />
```

## Date and date format

In the `<updated>` element, for the website and for the entries describing blog posts, you need a date [in a specific format](https://www.rfc-editor.org/rfc/rfc4287#section-3.3). The `toISOString` method leads to one of the options.

```xml
<updated>${new Date().toISOString()}</updated>
```

There's a bit of trickery here with SvelteKit pre-rendering the file, but if that sentence goes over your head, focus on the fact that `new Date()` creates an instance of a date object. From that point the method works as intended.

```js
new Date().toISOString();
// 2023-02-01T13:02:37.224Z
```

As an aside, it seems the [W3C Validation Service](https://validator.w3.org/feed/) complains when it finds two `<updated>` elements with the same value. In the unlikely scenario you end up writing more than one article in the same day, consider using a more specific date.

```diff
-date: 2023-02-01
+date: 2023-02-01T15:40:14
```

## Content

In the `<entry>` element each blog post adds a description through the `<summary>` element.

```xml
<summary>${description}</summary>
```

Consider replacing the summary with a `<content>` element and the actual content in HTML format.

```xml
<content type="html"><![CDATA[${html}]]></content>
```

I have articles which are heavily interactive, and I'd like to examine the implications before making a decision on the matter.

## Tags

If you manage to categorize the articles with a set of keywords add the labels in `<category>` elements.

```xml
<category term="xml" />
<category term="feed" />
```

Note that the string should be included in the `term` attribute, not between two `<category>` tags.

If you have `tags` as an array of strings the following snippet will do the trick.

```js
tags.map((tag) => `<category term="${tag}" />`).join('\n');
```

## SvelteKit trickery

It was my intention to focus on the feed only, but it is inevitable the discussion expands to SvelteKit — I can't just mention an intriguing line of code and not elaborate further.

Reach the `/feed.xml` endpoint and the kit handles a `GET` request, prompting the feed with a specific header.

```js
return new Response(feed, {
	headers: {
		'Content-Type': 'application/xml'
	}
});
```

Site details are cherry-picked from a hard-coded object, while the blog data is found with a custom function — all beyond the scope of this article.

The date in which the feed was updated, that's where the thrifty section lives and breathes. I mentioned the value refers to a date, a fresh new date.

```xml
<updated>${new Date().toISOString()}</updated>
```

Why, would not that value describe the instant in which you actually receive the feed? Well, as you develop the application and you test the route, it certainly is.

**But**. If you pre-render the route.

```js
export const prerender = true;
```

As you build the website you create `feed.xml` on the server. That fresh new date then? It'll always refer to the precious timestamp the process ran.
