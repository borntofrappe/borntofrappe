<script context="module">
	export async function load() {
		const entries = await Promise.all(
			Object.entries(import.meta.glob('/src/log/*.md')).map(async ([path, entry]) => {
				const { metadata } = await entry();

				const slug = path.split('/').pop().replace('.md', '');
				return {
					...metadata,
					slug
				};
			})
		);

		return {
			props: {
				entries
			}
		};
	}
</script>

<script>
	import Meta from '$lib/components/routes/Meta.svelte';
	import Header from '$lib/components/routes/Header.svelte';

	export let entries;
</script>

<Meta
	title="borntofrappe / log"
	description="Hello, and welcome to the log of my personal website. This is where I jot down a series of notes loosely connected by the fact that I'm the one writing them. Signed, Gabriele Corti, coding online @borntofrappe."
/>

<Header title="Log" body="Proof that you really don't need to read everything you find online." />

<main id="content">
	<h2>Entries</h2>
	<ol>
		{#each entries as { title, entry, slug }}
			<li value={entry}>
				<a href="/log/{slug}">{title}</a>
			</li>
		{/each}
	</ol>
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
