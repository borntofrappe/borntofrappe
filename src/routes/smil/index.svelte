<script>
	import Ladybug from './_Ladybug.svelte';
</script>

<svelte:head>
	<title>borntofrappe | SMIL</title>
	<meta name="description" content="A showcase of animated, scalable vector graphics." />
</svelte:head>

<div>
	<article style="--background-color: #f7717b; --outline-color: #b5d2c5;">
		<Ladybug />
	</article>
</div>

<style>
	div {
		color: hsl(44, 30%, 17%);
		background: hsl(41, 100%, 97%);
		--outline-color: hsl(6, 100%, 74%);
		--background-color: hsl(41, 100%, 97%);
	}

	article {
		min-height: 100vh;
		display: grid;
		place-items: center;
		background: inherit;
		background: var(--background-color, inherit);
	}

	article > :global(svg) {
		max-width: 32rem;
		border-radius: 0.25rem;
		box-shadow: 0 -1rem 1rem hsla(0, 0%, 0%, 0.1), 0 0 0 0.15rem currentColor,
			0 0 0 0.9rem hsl(6, 100%, 74%), 0 0 0 1rem currentColor;
		box-shadow: 0 -1rem 1rem hsla(0, 0%, 0%, 0.1), 0 0 0 0.15rem currentColor,
			0 0 0 0.9rem var(--outline-color), 0 0 0 1rem currentColor;
	}
</style>
