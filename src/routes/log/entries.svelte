<script context="module">
	export async function load() {
		const logs = await Promise.all(
			Object.entries(import.meta.glob('/src/log/*.md')).map(async ([path, fn]) => {
				const { metadata } = await fn();
				const entry = path.split('/').pop().slice(0, -3);
				const href = `/log/${entry}`;

				return {
					...metadata,
					href
				};
			})
		);

		return {
			props: {
				logs: logs.sort((a, b) => parseInt(b.entry, 10) - parseInt(a.entry, 10))
			}
		};
	}
</script>

<script>
	export let logs = [];
</script>

<svelte:head>
	<title>borntofrappe / log / entries</title>
</svelte:head>

<main>
	<h1>Entries</h1>

	<ol>
		{#each logs as { entry: value, title, href }}
			<li {value}>
				<a {href}>{title}</a>
			</li>
		{/each}
	</ol>
</main>

<style>
	main {
		width: 95vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 2em auto 4em;
	}
</style>
