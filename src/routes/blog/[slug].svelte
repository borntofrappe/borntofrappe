<script context="module">
	export async function load({ page, session }) {
		const { slug } = page.params;

		const match = session.posts.find((post) => post.slug === slug);

		if (match) {
			const posts = import.meta.glob('/src/blog/*.{md,svx}');
			const post = await posts[match.path]();

			const { default: Component, metadata } = post;

			return {
				props: {
					...metadata,
					Component
				}
			};
		}

		return {
			status: 404,
			error: new Error('Post not found')
		};
	}
</script>

<script>
	import Header from '$lib/components/blog/post/Header.svelte';

	export let title;
	export let keywords;
	export let Component;
</script>

<Header {title} {keywords} />

<main id="content">
	<svelte:component this={Component} />
</main>

<style>
	main {
		width: 90vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 3.5rem auto 5rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	main > :global(* + *) {
		margin-top: 1em;
		margin-top: var(--vertical-rhythm, 1em);
	}
</style>
