<script context="module">
	export async function load({ page, session }) {
		const { slug } = page.params;

		const match = session.posts.find((post) => post.slug === slug);

		if (match) {
			const posts = import.meta.glob('/src/blog/*.{md,svx}');
			const post = await posts[match.path]();

			const { default: Component, metadata } = post;
			const { title } = metadata;

			return {
				props: {
					title,
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
	export let title;
	export let Component;
</script>

<header>
	<h1>{title}</h1>
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
