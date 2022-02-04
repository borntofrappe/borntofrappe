<script context="module">
	export async function load({ session, params }) {
		const { entries } = session;

		const entry = entries.get(params.slug);

		if (entry) {
			const blog = import.meta.glob('/src/blog/**/*.{md,svx}');
			const { default: Module } = await blog[entry.path]();
			const { title, brief, keywords, latest } = entry;

			return {
				props: {
					title,
					brief,
					keywords: keywords.replace(/ /g, '').split(','),
					latest,
					Module
				}
			};
		}

		return {
			status: 404,
			error: new Error(`No article found for ${entry.slug}.`)
		};
	}
</script>

<script>
	import Meta from '$lib/components/routes/Meta.svelte';
	import Header from '$lib/components/blog/article/Header.svelte';

	export let title;
	export let brief;
	export let keywords;
	export let latest;

	export let Module;
</script>

<Meta title="{title} | borntofrappe" description={brief} />

<Header {title} {keywords} {latest} />

<main id="content">
	<svelte:component this={Module} />
</main>

<style>
	main {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 3em auto 6em;
	}

	main > :global(* + *) {
		margin-top: 1em;
		margin-top: var(--vertical-rhythm, 1em);
	}

	main > :global(h2),
	main > :global(h3) {
		--vertical-rhythm: var(--size-800);
	}

	main > :global(h2 + *),
	main > :global(h3 + *) {
		--vertical-rhythm: var(--size-300);
	}

	main > :global(blockquote),
	main > :global(blockquote + *) {
		--vertical-rhythm: var(--size-800);
	}

	main > :global(table),
	main > :global(table + *) {
		--vertical-rhythm: var(--size-700);
	}
</style>
