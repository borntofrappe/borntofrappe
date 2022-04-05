<script>
	import Chick from './_Chick.svelte';
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta name="description" content="" />
</svelte:head>

<section>
	<Chick />
</section>

<style>
	:global(body) {
		margin: 0;
		background: hsl(41, 100%, 97%);
		color: hsl(44, 30%, 17%);
	}

	section {
		display: grid;
		place-items: center;
		min-height: 100vh;
	}

	section > :global(svg) {
		display: block;
		max-width: 30rem;
		width: 100vmin;
		height: auto;
	}
</style>
