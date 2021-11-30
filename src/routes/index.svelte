<script>
	import Meta from '$lib/components/routes/Meta.svelte';

	const title = 'borntofrappe';
</script>

<Meta
	{title}
	description="Hello, and welcome to my personal website. This is where I try to convince you I'm a solid programmer. Signed, Gabriele Corti, coding online @borntofrappe."
/>

<h1>{title}</h1>

<p>Here's two things about me:</p>

<ol>
	<li>I like to start new projects</li>
	<li>I often fail to follow through past the initial, exciting phase</li>
</ol>

<p>So here's my own website, reinforcing the first factoid and hopefully overriding the second.</p>

<footer>
	<p>Signed, Gabriele Corti on <time datetime="2021-11-29">November 29, 2021</time>.</p>
</footer>
