<script>
	import Canvas from './_Canvas.svelte';
	import Palette from './_Palette.svelte';

	const colors = ['#d58141', '#d7c44c', '#4fa9cc', '#3f8d27'];
	const background = '#fff';

	let color = colors[0];
	const paletteColor = color;
</script>

<svelte:head>
	<title>borntofrappe | Canvas</title>
	<meta name="description" content="A blank canvas waiting for a splash of color." />
	<link rel="icon" href="/icons/paint.svg" type="image/svg+xml" />
</svelte:head>

<main>
	<Canvas {color} {background} />
	<Palette
		{paletteColor}
		{colors}
		{background}
		on:color={({ detail }) => {
			color = detail.color;
		}}
	/>
</main>

<style>
	main {
		background: #e5e5e5;
		min-height: 100vh;
		display: grid;
		justify-content: center;
		align-content: center;
		gap: 0.75rem 0;
	}
</style>
