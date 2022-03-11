<script>
	import Heading from '$lib/components/Heading.svelte';
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
	}
	:global(html),
	:global(body) {
		height: 100%;
	}
	:global(body) {
		font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue,
			helvetica, Ubuntu, roboto, noto, arial, sans-serif;
		display: grid;
		place-items: center;
		color: hsl(186, 100%, 94%);
		background: hsl(210, 58%, 9%);
	}
	:global(::selection) {
		background: hsl(186, 100%, 94%, 0.25);
	}
</style>
