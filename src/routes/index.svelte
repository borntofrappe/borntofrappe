<script>
	import Meta from '$lib/components/routes/Meta.svelte';
	import Header from '$lib/components/routes/Header.svelte';

	import GettingStarted from '$lib/components/index/GettingStarted.svelte';
	import About from '$lib/components/index/About.svelte';
</script>

<Meta
	title="borntofrappe"
	description="Hello, and welcome to my personal website. This is where I try to convince you I'm a solid programmer. Signed, Gabriele Corti, coding online @borntofrappe."
/>

<Header title="Hello world" body="You are welcomed." />

<main id="content">
	<GettingStarted />
	<About />
</main>

<style>
	main {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin-left: auto;
		margin-right: auto;
		--section-whitespace: 6em;
	}

	main :global(p) {
		line-height: 1.75;
	}

	main > :global(section) {
		margin-top: 6em;
		margin-top: var(--section-whitespace);
		margin-bottom: 6em;
		margin-bottom: var(--section-whitespace);
	}

	main > :global(section > * + *) {
		margin-top: 0.75em;
	}
</style>
