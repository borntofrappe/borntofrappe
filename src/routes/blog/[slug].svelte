<script context="module">
	export async function load({ page }) {
		const posts = await Promise.all(
			Object.entries(import.meta.glob('/src/blog/*.{md,svx}')).map(async ([path]) => {
				const [slug] = path.split('/').pop().split('.');

				return {
					slug,
					path
				};
			})
		);

		const match = posts.find(({ slug }) => slug === page.params.slug);

		if (match) {
			const posts = import.meta.glob('/src/blog/*.{md,svx}');
			const { default: Entry, metadata } = await posts[match.path]();

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
