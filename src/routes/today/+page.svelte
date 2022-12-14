<script>
	import { format } from './utils.js';
	import Defs from './Defs.svelte';
	import Marks from './Marks.svelte';

	const date = new Date();
</script>

<svelte:head>
	<title>borntofrappe | Today</title>
	<meta
		name="description"
		content="What day is today? Here's a direct answer to the often puzzling question."
	/>
	<link rel="icon" href="/icons/today.svg" type="image/svg+xml" />
</svelte:head>

<Defs />

<main>
	<h1>{format(date)}</h1>
	<Marks n={date.getDate()} />
</main>

<style>
	main {
		padding: 1rem;
		display: flex;
		gap: 0.5rem 0;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		color: hsl(0, 0%, 92%);
		background: hsl(0, 0%, 17%);
		position: relative;
	}

	main::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: hsl(0, 0%, 100%);
		opacity: 0.35;
		filter: url(#filter-noise);
	}

	main ::selection {
		background: hsl(0, 0%, 17%);
	}

	h1 {
		text-align: center;
		font-size: 4rem;
	}

	main > :global(svg) {
		display: block;
		max-height: 16rem;
		width: auto;
		max-width: 100%;
	}

	main > :global(*) {
		filter: url(#filter-chalkboard);
	}
</style>
