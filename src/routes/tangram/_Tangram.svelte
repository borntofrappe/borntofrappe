<script>
	import styles from './_styles';

	export let shape = 'cat';

	const pieces = [
		{ d: 'M 0 0 l 50 50 50 -50z', fill: '#2432ad' },
		{ d: 'M 0 0 l 25 25 -25 25z', fill: '#adecf3' },
		{ d: 'M 0 0 l 50 50 h-50z', fill: '#f4786c' },
		{ d: 'M 0 0 l 25 25 25 -25 -25 -25z', fill: '#f4786c' },
		{ d: 'M 0 0 l 50 -50 v 100z', fill: '#f0d759' },
		{ d: 'M 0 0 l 25 25 h-50z', fill: '#adecf3' },
		{ d: 'M 0 25 l 25 -25 h 50 l -25 25z', fill: '#f4786c' }
	];

	const paths = pieces.map((piece, i) => ({
		...piece,
		style: styles[shape][i]
	}));

	let tangram = true;
</script>

<svelte:head>
	<link rel="icon" href="/tangram.svg" type="image/svg+xml" />
</svelte:head>

<svg
	viewBox="-75 -75 250 250"
	on:click={() => {
		tangram = !tangram;
	}}
>
	<g class:tangram>
		{#each paths as { d, fill, style }}
			<path {d} {fill} {style} />
		{/each}
	</g>
</svg>

<style>
	svg {
		max-width: initial;
	}

	path {
		transition: transform 1s ease-in-out;
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
		transform: translate(50px, 50px) rotate(180deg) !important;
	}

	.tangram path:nth-of-type(6) {
		transform: translate(50px, 50px) rotate(0) !important;
	}

	.tangram path:nth-of-type(7) {
		transform: translate(0, 75px) rotate(0) !important;
	}
</style>
