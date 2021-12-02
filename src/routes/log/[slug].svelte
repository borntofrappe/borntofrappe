<script context="module">
	export const prerender = true;

	export async function load({ page }) {
		const { slug } = page.params;
		const path = `/src/log/${slug}.md`;

		const log = import.meta.glob('/src/log/*.md');

		if (log[path]) {
			const { default: Entry, metadata } = await log[path]();

			return {
				props: {
					Entry,
					...metadata
				}
			};
		}

		return {
			status: 404,
			error: new Error(`No entry found for '${slug}'`)
		};
	}
</script>

<script>
	import Meta from '$lib/components/routes/Meta.svelte';
	import Header from '$lib/components/routes/Header.svelte';

	export let title;
	export let entry;
	export let Entry;
</script>

<Meta
	title="Log entry {entry} - {title} | borntofrappe"
	description="Log entry {entry}: {title}."
/>

<Header {title} body="Log entry {entry}" />

<main id="content">
	<Entry />
</main>

<style>
	main {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 2em auto;
	}

	main > :global(* + *) {
		margin-top: 0.5em;
	}
</style>
