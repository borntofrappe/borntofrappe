<script>
	import Rainbow from './_Rainbow.svelte';
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta name="description" content="" />
</svelte:head>

<Rainbow />

<style>
	:global(html),
	:global(body) {
		height: 100%;
	}
	:global(body) {
		margin: 0;
		background: hsl(41, 100%, 97%);
		color: hsl(44, 30%, 17%);
		display: grid;
		place-items: center;
	}

	:global(svg) {
		display: block;
		max-width: 30rem;
		width: 100vmin;
		height: auto;
	}
</style>
