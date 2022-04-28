<script>
	import Bee from './_Bee.svelte';
	import Cauldron from './_Cauldron.svelte';
	import Chick from './_Chick.svelte';
	import Ladybird from './_Ladybird.svelte';
	import Owl from './_Owl.svelte';
	import Rainbow from './_Rainbow.svelte';
	import Raincloud from './_Raincloud.svelte';
	import Sun from './_Sun.svelte';

	const components = [Bee, Cauldron, Chick, Ladybird, Owl, Rainbow, Raincloud, Sun];
	let index = 0;
</script>

<svelte:head>
	<title>borntofrappe | Playground</title>
	<meta name="description" content="A cheerful corner on the web." />
</svelte:head>
<svelte:body
	on:click|self={() => {
		index = (index + 1) % components.length;
	}} />

<svelte:component this={components[index]} />

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
