<script context="module">
	export async function load() {
		const log = await Promise.all(
			Object.entries(import.meta.glob('/src/log/*.md')).map(async ([path, module]) => {
				const { default: Module, metadata } = await module();

				const slug = path.split('/').pop().replace('.md', '');

				return {
					Module,
					...metadata,
					slug
				};
			})
		);

		return {
			props: {
				...log.sort((a, b) => parseInt(b.day, 10) - parseInt(a.day, 10))[0]
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

<Meta title="Log | borntofrappe" description="Log day {day}." />

<main id="content">
	<h1>Log day {day}</h1>
	<h2>{title}</h2>

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

	main > * + * {
		margin-top: 0.5em;
	}
</style>
