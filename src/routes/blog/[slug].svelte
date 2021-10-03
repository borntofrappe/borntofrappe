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
	import icons from '$lib/icons.js';

	export let title;
	export let keywords;
	export let Component;
</script>

<header>
	<h1>{title}</h1>

	{#if keywords}
		<h2>Keywords</h2>
		<ul>
			{#each keywords.split(/,\s+?/) as keyword}
				<li>{@html icons[keyword] || icons.bug}<span class="visually-hidden">{keyword}</span></li>
			{/each}
		</ul>
	{/if}
</header>

<main id="content">
	<svelte:component this={Component} />
</main>

<style>
	main {
		max-width: 42rem;
		margin: 1rem auto;
	}

	main > :global(* + *) {
		margin-top: 1em;
	}
</style>
