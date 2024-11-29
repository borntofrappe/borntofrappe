<script>
	import Level from './Level.svelte';

	const showcase = [
		{
			key: 'clover',
			color: 'hsl(120, 72%, 64%)',
			caption: 'A good luck charm'
		},
		{
			key: 'apple',
			color: 'hsl(0, 72%, 64%)',
			caption: 'A savory apple'
		},
		{
			key: 'sea-horse',
			color: 'hsl(180, 72%, 64%)',
			caption: 'A hopping creature'
		},
		{
			key: 'butterfly',
			color: 'hsl(300, 72%, 64%)',
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
	div {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		justify-content: center;
	}

	figure {
		inline-size: 100%;
		max-inline-size: 20rem;
		padding: 1rem;
		border: 0.25rem solid var(--accent, currentColor);
		border-radius: 0.5rem;
	}

	figure > :global(* + *) {
		margin-block-start: 0.5rem;
	}

	figure figcaption {
		text-align: center;
		font-weight: 700;
	}

	figure > :global(*:first-child) {
		aspect-ratio: 1/1;
	}
</style>
