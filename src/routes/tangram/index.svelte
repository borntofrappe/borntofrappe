<script>
	import Tangram from '$lib/components/tangram/Tangram.svelte';
</script>

<svelte:head>
	<title>borntofrappe | Tangram</title>
	<meta
		name="description"
		content="There are 7 pieces in this puzzle. How many shapes is up to your patience, and a bit of chance."
	/>
	<link rel="icon" href="/icons/tangram.svg" type="image/svg+xml" />
</svelte:head>

<div>
	<Tangram />
</div>

<style>
	div {
		color: hsl(216, 33%, 97%);
		background: hsl(210, 24%, 16%);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	div > :global(svg) {
		max-width: 30rem;
		height: auto;
	}
</style>
