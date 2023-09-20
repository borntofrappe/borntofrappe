<script>
	import svg from './svg.js';

	const patterns = Object.entries(svg)
		.filter(([key]) => key !== 'fe-tile')
		.map(([, value]) => value);
</script>

<div>
	{#each patterns as pattern}
		<figure>
			{@html pattern}
		</figure>
	{/each}
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-flow: dense;
		--gap: 0.5rem;
		gap: var(--gap, 1rem);
		padding: var(--gap, 1rem);
	}

	div > figure:nth-child(3n) {
		grid-column: span 2;
	}

	div > figure:nth-child(2n-1) {
		grid-row: span 2;
	}

	figure {
		display: block;
		margin: 0;
		overflow: hidden;
		outline: var(--gap, 1rem) solid hsl(0 0% 70%);
	}

	figure > :global(svg) {
		transition: scale 0.5s cubic-bezier(0.65, 0, 0.35, 1);
	}

	figure:hover > :global(svg) {
		scale: 1.4;
	}

	figure > :global(svg) {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>
