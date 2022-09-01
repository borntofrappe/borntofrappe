<script>
	export let size = 3;

	import { getPuzzle } from './utils.js';

	const { grid } = getPuzzle({ size });
	console.log(grid);
</script>

<svg viewBox="0 0 {size + 1} {size + 1}">
	<g
		transform="translate(0.5 0.5)"
		text-anchor="middle"
		dominant-baseline="central"
		font-size="0.5"
	>
		{#each grid as section, row}
			{#each section as n, column}
				<g transform="translate({column} {row})">
					<text>{n}</text>
				</g>
			{/each}
		{/each}
		<!--  -->
	</g>
</svg>

<style>
	svg {
		display: block;
		max-width: 30rem;
	}
</style>
