<script>
	import levels from './levels.js';
	import Level from './Level.svelte';

	const showcase = [
		{
			key: 'clover',
			color: 'hsl(123, 53%, 55%)',
			caption: 'A good luck charm'
		},
		{
			key: 'apple',
			color: 'hsl(0, 83%, 62%)',
			caption: 'A savory apple'
		},
		{
			key: 'sea-horse',
			color: 'hsl(160, 51%, 49%)"',
			caption: 'A hopping creature'
		},
		{
			key: 'butterfly',
			color: 'hotpink',
			caption: 'A fanciful critter'
		}
	];
</script>

<div>
	{#each showcase as { key, color, caption }}
		<figure>
			<Level {key} {color} />
			<figcaption>{caption}</figcaption>
		</figure>
	{/each}
</div>

<style>
	div,
	div > :global(*) {
		padding: 0;
	}
	div > :global(*) {
		margin: 0;
	}

	div {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
	}

	figure {
		inline-size: 100%;
		max-inline-size: 20rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	figure > :global(*:first-child) {
		aspect-ratio: 1/1;
	}

	figcaption {
		font-weight: 700;
		font-style: italic;
	}
</style>
