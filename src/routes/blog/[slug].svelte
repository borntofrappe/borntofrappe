<script context="module">
	export async function load({ session, params }) {
		const { entries } = session;

		const entry = entries.find(({ slug }) => slug === params.slug);

		if (entry) {
			const blog = import.meta.glob('/src/blog/**/*.{md,svx}');
			const { default: Module, metadata } = await blog[entry.path]();
			const { title, brief } = metadata;

			return {
				props: {
					title,
					brief,
					Module
				}
			};
		}

		return {
			status: 404,
			error: new Error(`There is no article for ${entry.slug}.`)
		};
	}
</script>

<script>
	import Meta from '$lib/components/routes/Meta.svelte';
	import Header from '$lib/components/routes/Header.svelte';

	export let title;
	export let brief;
	export let Module;
</script>

<Meta title="{title} | borntofrappe" description={brief} />

<Header>
	<h1>{title}</h1>
	<p>
		{brief}
	</p>
</Header>

<main id="content">
	<svelte:component this={Module} />
</main>

<style>
	main {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 2em auto 6em;
	}

	main > :global(* + *) {
		margin-top: 1em;
		margin-top: var(--vertical-rhythm, 1em);
	}
</style>
