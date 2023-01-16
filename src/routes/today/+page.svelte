<script>
	import { format } from './utils';
	import Marks from './Marks.svelte';

	const date = new Date();
</script>

<svelte:head>
	<title>borntofrappe | Today</title>
	<meta
		name="description"
		content="What day is today? Here's a direct answer to an often puzzling question."
	/>
</svelte:head>

<svg style="position: absolute; width: 0; height: 0;" aria-hidden="true">
	<defs>
		<filter id="filter-chalk">
			<feTurbulence type="turbulence" baseFrequency="0.6" numOctaves="3" result="turbulence" />
			<feDisplacementMap in="SourceGraphic" in2="turbulence" scale="8" />
		</filter>
		<filter id="filter-noise">
			<feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="10" stichTile="stitch" />
		</filter>
	</defs>
</svg>

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
		width: 100vmin;
		height: auto;
		max-height: 16rem;
	}

	main > :global(*) {
		filter: url(#filter-chalk);
	}
</style>
