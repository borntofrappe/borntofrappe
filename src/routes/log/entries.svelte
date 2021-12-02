<script context="module">
	export const prerender = true;

	export async function load() {
		const log = await Promise.all(
			Object.entries(import.meta.glob('/src/log/*.md')).map(async ([path, module]) => {
				const { metadata } = await module();

				const slug = path.split('/').pop().replace('.md', '');

				return {
					...metadata,
					slug
				};
			})
		);

		return {
			props: {
				log: log.sort((a, b) => parseInt(b.entry, 10) - parseInt(a.entry, 10))
			}
		};
	}
</script>

<script>
	import Meta from '$lib/components/routes/Meta.svelte';

	export let log;
</script>

<Meta
	title="Log entries | borntofrappe"
	description="There are {log.length} entries in the archives."
/>

<main>
	<h1>Log entries</h1>

	<ol>
		{#each log as { title, entry, slug }}
			<li value={entry}>
				<a sveltekit:prefetch href="/log/{slug}">{title}</a>
			</li>
		{/each}
	</ol>
</main>

<style>
	main {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 2em auto;
	}

	main > * + * {
		margin-top: 0.5em;
	}
</style>
