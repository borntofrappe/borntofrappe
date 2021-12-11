<script context="module">
	export async function load({ page, session }) {
		const { slug } = page.params;
		const post = session.posts[slug];

		if (post) {
			const posts = import.meta.glob('/src/blog/*.{md,svx}');
			const { default: Entry, metadata } = await posts[post.path]();

			return {
				props: {
					Entry,
					...metadata
				}
			};
		}

		return {
			status: 404,
			error: new Error(`No post found for '${page.params.slug}'`)
		};
	}
</script>

<script>
	import Header from '$lib/components/blog/post/Header.svelte';
	export let title;
	export let keywords;
	export let Entry;
</script>

<Header {title} {keywords} />

<main id="content">
	<svelte:component this={Entry} />
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
	main > :global(blockquote + *),
	main > :global(figure),
	main > :global(figure + *) {
		--vertical-rhythm: var(--size-800);
	}

	main > :global(table),
	main > :global(table + *) {
		--vertical-rhythm: var(--size-700);
	}

	main > :global(pre),
	main > :global(pre + *) {
		--vertical-rhythm: var(--size-600);
	}
</style>
