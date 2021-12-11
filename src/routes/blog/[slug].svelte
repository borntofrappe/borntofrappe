<script context="module">
	export async function load({ page }) {
		const { slug } = page.params;
		const path = `/src/blog/${slug}.md`;

		const blog = import.meta.glob('/src/blog/*.md');

		if (blog[path]) {
			const { default: Entry, metadata } = await blog[path]();
			return {
				props: {
					Entry,
					...metadata
				}
			};
		}

		return {
			status: 404,
			error: new Error(`No post found for '${slug}'`)
		};
	}
</script>

<script>
	export let title;
	export let Entry;
</script>

<main>
	<h1>{title}</h1>
	<svelte:component this={Entry} />
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
