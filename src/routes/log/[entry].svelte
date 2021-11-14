<script context="module">
	export const prerender = true;

	export async function load({ page }) {
		const { entry } = page.params;

		const logs = import.meta.glob('/src/log/*.md');
		const path = `/src/log/${entry}.md`;
		if (logs[path]) {
			const log = await logs[path]();

			const { default: Entry, metadata } = log;

			return {
				props: {
					...metadata,
					Entry
				}
			};
		}

		return {
			status: 404,
			error: new Error('Entry not found')
		};
	}
</script>

<script>
	export let title;
	export let entry;
	export let Entry;
</script>

<svelte:head>
	<title>Entry {entry} - {title} | borntofrappe</title>
</svelte:head>

<main>
	<h1>{title}</h1>
	<Entry />
</main>

<style>
	main {
		width: 95vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 2em auto 4em;
	}

	main > :global(* + *) {
		margin-top: 1em;
		margin-top: var(--vertical-rhythm, 1em);
	}

	main:global(h2),
	main:global(h3) {
		--vertical-rhythm: var(--size-800);
	}

	main:global(h2 + *),
	main:global(h3 + *) {
		--vertical-rhythm: var(--size-300);
	}

	main:global(blockquote),
	main:global(blockquote + *) {
		--vertical-rhythm: var(--size-800);
	}

	main:global(table),
	main:global(table + *) {
		--vertical-rhythm: var(--size-700);
	}

	main:global(pre),
	main:global(pre + *) {
		--vertical-rhythm: var(--size-600);
	}
</style>
