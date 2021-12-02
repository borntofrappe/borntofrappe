<script>
	import Meta from '$lib/components/routes/Meta.svelte';
	import Header from '$lib/components/routes/Header.svelte';
</script>

<Meta
	title="borntofrappe / log"
	description="Hello, and welcome to the log of my personal website. This is where I jot down a series of notes loosely connected by the fact that I'm the one writing them. Signed, Gabriele Corti, coding online @borntofrappe."
/>

<Header title="Log" body="Proof that you really don't need to read everything you find online." />

<main id="content">
	<h2>Entries</h2>
	<ul>
		<li>
			<a href="/log/test-entry">test entry</a>
		</li>
	</ul>
</main>

<style>
	main {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 2em auto;
	}

	main > * + * {
		margin-top: 0.5em;
	}
</style>
