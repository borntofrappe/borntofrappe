<script context="module">
	export const prerender = true;

	export async function load() {
		const entries = await Promise.all(
			Object.entries(import.meta.glob('/src/log/*.md')).map(async ([path, module]) => {
				const { metadata } = await module();
				const { day } = metadata;

				return {
					day,
					path
				};
			})
		);

		const [entry] = entries.sort((a, b) => parseInt(b.day, 10) - parseInt(a.day, 10));
		const log = import.meta.glob('/src/log/*.md');

		const { default: Module, metadata } = await log[entry.path]();
		const { day, title } = metadata;

		return {
			props: {
				day,
				title,
				Module
			}
		};
	}
</script>

<script>
	import Meta from '$lib/components/routes/Meta.svelte';

	export let title;
	export let day;
	export let Module;
</script>

<Meta title="Log {day} | borntofrappe" description="Log {day}: {title}" />

<main>
	<h1>{title}</h1>
	<Module />
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

	main > :global(ol > * + *),
	main > :global(ul > * + *) {
		margin-top: 0.5em;
	}
</style>
