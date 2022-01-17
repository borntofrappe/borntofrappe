<script context="module">
	export async function load({ params }) {
		const { day } = params;
		const path = `/src/log/${day}.md`;

		const log = import.meta.glob('/src/log/*.md');

		if (log[path]) {
			const { default: Module, metadata } = await log[path]();
			return {
				props: {
					Module,
					...metadata
				}
			};
		}

		return {
			status: 404,
			error: new Error(`There is no log for day ${day}`)
		};
	}
</script>

<script>
	import Meta from '$lib/components/routes/Meta.svelte';

	export let day;
	export let title;
	export let Module;
</script>

<Meta title="Log day {day} | borntofrappe" description="Log day {day}: {title}." />

<main>
	<h1>{title}</h1>
	<svelte:component this={Module} />
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

	main > :global(svg),
	main > :global(svg + *) {
		--vertical-rhythm: var(--size-700);
	}

	main > :global(ol > * + *),
	main > :global(ul > * + *) {
		margin-top: 0.5em;
	}
</style>
