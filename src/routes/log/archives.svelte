<script context="module">
	export const prerender = true;
	export const hydrate = false;

	export async function load() {
		const entries = await Promise.all(
			Object.entries(import.meta.glob('/src/log/*.md')).map(async ([path, module]) => {
				const { metadata } = await module();

				const slug = path.split('/').pop().replace(/\.md$/, '');
				return {
					...metadata,
					slug
				};
			})
		);

		return {
			props: {
				entries: entries.sort((a, b) => parseInt(b.day, 10) - parseInt(a.day, 10))
			}
		};
	}
</script>

<script>
	import Meta from '$lib/components/routes/Meta.svelte';

	export let entries;
</script>

<Meta
	title="Log archives | borntofrappe"
	description="I've logged {entries.length} days in total."
/>

<main>
	<h1>Archives</h1>

	<ol>
		{#each entries as { day: value, title, slug }}
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

	ol {
		padding: 0;
		list-style-position: inside;
	}

	ol > * + * {
		margin-top: 0.75em;
	}

	ol li::marker {
		content: 'Log ' attr(data-value) ': ';
	}
</style>
