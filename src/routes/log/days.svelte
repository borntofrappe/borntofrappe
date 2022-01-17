<script context="module">
	export const prerender = true;
	export const hydrate = false;

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

<Meta
	title="Log Days | borntofrappe"
	description="There are {log.length} entries in the log archives. The hope is there is something of value in some of them."
/>

<main id="content">
	<h1>Days</h1>

	<ol>
		{#each log as { day: value, title, slug }}
			<li {value} data-value={value}>
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

	ol li::marker {
		content: attr(data-value) ' | ';
	}
</style>
