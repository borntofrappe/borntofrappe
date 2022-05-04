<script>
	import styles from './_styles.js';

	const shapes = Object.keys(styles);
	export let shape = 'rocket';
	let tangram = true;

	const pieces = [
		{ d: 'M 0 0 l 50 50 50 -50z', fill: '#71c49a' },
		{ d: 'M 0 0 l 25 25 -25 25z', fill: '#ef847a' },
		{ d: 'M 0 0 l 50 50 h-50z', fill: '#abdcc7' },
		{ d: 'M 0 0 l 25 25 25 -25 -25 -25z', fill: '#71c49a' },
		{ d: 'M 0 0 l 50 50 50 -50z', fill: '#f6e48e' },
		{ d: 'M 0 0 l 25 25 -25 25z', fill: '#ef847a' },
		{ d: 'M 0 25 l 25 -25 h 50 l -25 25z', fill: '#f6e48e' }
	];

	$: paths = pieces.map((piece, i) => ({
		...piece,
		style: styles[shape][i]
	}));
</script>

<svelte:head>
	<title>borntofrappe | Tangram</title>
	<meta name="description" content="7 shapes make for 1 nice visual." />
	<link rel="icon" href="/icons/tangram.svg" type="image/svg+xml" />
</svelte:head>

<main>
	<svg
		viewBox="-95 -95 290 290"
		on:click={() => {
			tangram = !tangram;
			if (!tangram) shape = shapes[Math.floor(Math.random() * shapes.length)];
		}}
	>
		<g class:tangram>
			{#each paths as { d, fill, style }}
				<path {d} {fill} {style} />
			{/each}
		</g>
	</svg>
</main>

<style>
	main {
		color: hsl(44, 30%, 17%);
		background: hsl(41, 100%, 97%);
		min-height: 100vh;
		display: grid;
		place-items: center;
	}

	svg {
		display: block;
		width: 100vmin;
		height: auto;
	}

	path {
		transition: transform 1s cubic-bezier(0.49, 0.11, 0.1, 1.32);
	}

	.tangram path:nth-of-type(1) {
		transform: translate(0, 0) rotate(0) !important;
	}

	.tangram path:nth-of-type(2) {
		transform: translate(100px, 50px) rotate(180deg) !important;
	}

	.tangram path:nth-of-type(3) {
		transform: translate(50px, 100px) rotate(-90deg) !important;
	}

	.tangram path:nth-of-type(4) {
		transform: translate(50px, 50px) rotate(0) !important;
	}

	.tangram path:nth-of-type(5) {
		transform: translate(0px, 100px) rotate(270deg) !important;
	}

	.tangram path:nth-of-type(6) {
		transform: translate(25px, 75px) rotate(270deg) !important;
	}

	.tangram path:nth-of-type(7) {
		transform: translate(0, 75px) rotate(0) !important;
	}
</style>
