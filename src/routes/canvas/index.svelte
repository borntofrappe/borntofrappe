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
	:global(html),
	:global(body) {
		height: 100%;
	}

	:global(body) {
		margin: 0;
		background: #e5e5e5;
		display: grid;
		place-items: center;
	}

	:global(.visually-hidden:not(:focus):not(:active)) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		width: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}

	main {
		max-width: 300px;
		display: flex;
		flex-direction: column;
		gap: 0.5rem 0;
	}

	main :global(canvas) {
		align-self: center;
	}
</style>
