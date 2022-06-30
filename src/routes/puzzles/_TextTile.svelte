<script>
	import Tile from './_Tile.svelte';

	export let element = 'h1';
	export let text = 'Hi there';

	$: characters = text.split('').map((char) => ({
		char,
		n: char.charCodeAt(0)
	}));
</script>

<svelte:element
	this={element}
	class="tile"
	style:margin="0"
	style:line-height="1"
	style:display="flex"
	style:gap="0 0.5rem"
	aria-label={text}
>
	{#each characters as { char, n }}
		<span>
			<Tile {char} {n} />
		</span>
	{/each}
</svelte:element>

<style>
	span {
		display: contents;
	}

	span:hover > :global(svg) {
		transform: translateY(-5px) rotate(3deg);
	}

	span:nth-of-type(odd):hover > :global(svg) {
		transform: translateY(-4px) rotate(-3deg);
	}
</style>
