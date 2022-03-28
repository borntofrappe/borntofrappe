<script>
	import Sun from './_Sun.svelte';
	import Bee from './_Bee.svelte';
	import Ladybird from './_Ladybird.svelte';

	const options = [Sun, Bee, Ladybird];
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta name="description" content="" />
</svelte:head>

<section>
	<svelte:component this={options[new Date().getHours() % options.length]} />
</section>

<style>
	:global(body) {
		margin: 0;
		background: hsl(41, 100%, 96%);
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
