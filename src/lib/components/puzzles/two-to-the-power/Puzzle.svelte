<script>
	import Tile from '../Tile.svelte';

	export let size = 5;
</script>

<svg viewBox="-0.5 -0.5 {size} {size}">
	{#each Array(size ** 2) as _, i}
		{@const column = i % size}
		{@const row = Math.floor(i / size)}
		<g transform="translate({column} {row})">
			<g transform="translate(-0.35 -0.35)">
				<Tile
					tile="var(--color-focus, hsl(345, 13%, 94%))"
					shadow="var(--color-shadow, hsl(6, 98%, 80%))"
					text="var(--color-focus, hsl(345, 13%, 94%))"
					outline="var(--color-text, hsl(19, 56%, 12%))"
					width={0.7}
					height={0.7}
					char=""
				/>
			</g>
		</g>
	{/each}
</svg>
