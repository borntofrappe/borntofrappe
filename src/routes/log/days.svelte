<script context="module">
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
				log: log.sort((a, b) => parseInt(b.day, 10) - parseInt(a.day, 10))
			}
		};
	}
</script>

<script>
	import Meta from '$lib/components/routes/Meta.svelte';

	export let log;
</script>

<Meta title="Log archives | borntofrappe" description="There are {log.length} days in the log." />

<main id="content">
	<h1>Log</h1>

	<ol>
		{#each log as { day: value, title, slug }}
			<li {value}>
				<a href="/log/{slug}">{title}</a>
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
		margin: 1em auto;
	}

	main > * + * {
		margin-top: 1em;
	}

	ol > * + * {
		margin-top: 0.5em;
	}
</style>
