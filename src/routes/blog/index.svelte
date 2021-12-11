<script>
	import Meta from '$lib/components/routes/Meta.svelte';
	import Header from '$lib/components/routes/Header.svelte';
</script>

<Meta
	title="blog | borntofrappe"
	description="Blog for my personal website. This is where I write about web development, game development and anything that piques my interest. Signed, Gabriele Corti, coding online @borntofrappe."
/>

<Header>
	<h1>Blog</h1>
	<p>I build, I learn, I write. Not necessarily in that order.</p>
</Header>

<main id="content">
	<h2>Well well well</h2>
	<p>There are no posts in this blog. I'm working on it, though. Promise.</p>
</main>

<style>
	main {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 3em auto 6em;
	}

	main > * + * {
		margin-top: 0.75em;
	}
</style>
