<script>
	import Ladybug from './_Ladybug.svelte';
</script>

<svelte:head>
	<title>borntofrappe | SMIL</title>
	<meta name="description" content="A showcase of animated, scalable vector graphics." />
</svelte:head>

<div>
	<article>
		<Ladybug />
	</article>
</div>

<style>
	div {
		color: hsl(44, 30%, 17%);
		background: hsl(41, 100%, 97%);
	}

	article {
		min-height: 100vh;
		display: grid;
		place-items: center;
	}

	article > :global(svg) {
		display: block;
		max-width: 42rem;
		height: auto;
	}
</style>
