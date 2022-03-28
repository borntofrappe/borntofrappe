<script>
	import Sun from './_Sun.svelte';
	import Bee from './_Bee.svelte';
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta name="description" content="" />
</svelte:head>

<article>
	<Bee />
</article>

<style>
	:global(body) {
		margin: 0;
		background: #fff8e9;
		color: #38311e;
	}

	article {
		display: grid;
		place-items: center;
		min-height: 100vh;
	}

	article > :global(svg) {
		display: block;
		max-width: 30rem;
		width: 100vmin;
		height: auto;
	}
</style>
