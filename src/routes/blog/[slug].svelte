<script context="module">
	export async function load({ session, params }) {
		const { articles } = session;

		const article = articles[params.slug];

		if (article) {
			const articles = import.meta.glob('/src/blog/*.{md,svx}');
			const { default: Module, metadata } = await articles[article.path]();

			return {
				props: {
					Module,
					...metadata
				}
			};
		}

		return {
			status: 404,
			error: new Error(`No article found in 'blog/${params.slug}'`)
		};
	}
</script>

<script>
	import Meta from '$lib/components/routes/Meta.svelte';

	export let title;
	export let brief;
	export let Module;
</script>

<Meta title="{title} | borntofrappe" description={brief} />

<main id="content">
	<header>
		<h1>{title}</h1>
	</header>
	<svelte:component this={Module} />
</main>

<style>
	main {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 1em auto;
	}

	main > :global(* + *) {
		margin-top: 1em;
	}
</style>
