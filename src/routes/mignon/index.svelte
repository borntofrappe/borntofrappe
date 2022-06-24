<script>
	import Ray from './_Ray.svelte';
</script>

<svelte:head>
	<title>borntofrappe | Mignon</title>
	<meta
		name="description"
		content="This website has a mascot. It comes from the small village of Mignon, highly reputed for its whimsy and charm. Name's Ray."
	/>
	<link rel="icon" href="/icons/showcase/mignon.svg" type="image/svg+xml" />
</svelte:head>

<main>
	<Ray />
</main>

<style>
	main {
		color: hsl(44, 30%, 17%);
		background: hsl(41, 100%, 97%);
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	main > :global(svg) {
		display: block;
		max-width: 30rem;
		width: 100vmin;
		height: auto;
	}
</style>
