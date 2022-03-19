<script>
	import Heading from '$lib/components/routes/Heading.svelte';
</script>

<svelte:head>
	<title>borntofrappe | Launching soon</title>
	<meta name="description" content="Personal website of one Gabriele Corti. Launching soon." />
</svelte:head>

<Heading title="borntofrappe" />

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		min-height: 100vh;
		font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue,
			helvetica, Ubuntu, roboto, noto, arial, sans-serif;
		display: grid;
		place-items: center;
		color: hsl(216, 33%, 97%);
		background: hsl(210, 24%, 16%);
	}

	:global(::selection) {
		background: hsla(216, 33%, 97%, 0.25);
	}
</style>
