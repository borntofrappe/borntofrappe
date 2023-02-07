<script>
	import site from '$lib/utils/site.js';
	import Tangram from './Tangram.svelte';
	// import styles from './styles.js';

	const { title } = site;

	// let [shape] = Object.keys(styles);
	// let padding = 5;

	// const pieces = [
	// 	{ d: 'M 0 0 l 2 2 l 2 -2', fill: '#71c49a' },
	// 	{ d: 'M 0 0 l 2 2 l -2 2', fill: '#f6e48e' },
	// 	{ d: 'M 0 0 l 1 -1 l 0 2', fill: '#ef847a' },
	// 	{ d: 'M 0 0 l 1 -1 l 1 1', fill: '#ef847a' },
	// 	{ d: 'M 0 0 l 2 -2 l 0 2', fill: '#abdcc7' },
	// 	{ d: 'M 0 0 l 1 -1 l 1 1 l -1 1', fill: '#71c49a' },
	// 	{ d: 'M 0 0 l 1 -1 l 2 0 l -1 1', fill: '#f6e48e' }
	// ];

	// $: paths = pieces.map((piece, i) => ({
	// 	...piece,
	// 	style: styles[shape][i]
	// }));

	// let tangram = true;
</script>

<svelte:head>
	<title>Tangram | {title}</title>
	<meta name="description" content="" />
	<link rel="icon" href="/icons/tangram.svg" type="image/svg+xml" />
</svelte:head>

<!-- <input bind:checked={tangram} type="checkbox" /> -->
<main
	class="box centered"
	style:--color="hsl(216, 33%, 97%)"
	style:--background="hsl(210, 24%, 16%)"
>
	<!--
	<svg class:tangram viewBox="{padding * -1} {padding * -1} {4 + padding * 2} {4 + padding * 2}">
		{#each paths as { d, fill, style }}
			<path {d} {fill} {style} />
		{/each}
	</svg>
-->
	<Tangram />
</main>

<style>
	svg {
		display: block;
		max-width: 42rem;
	}

	svg path {
		transition: transform 0.75s cubic-bezier(0.49, 0.11, 0.1, 1.32);
	}

	svg.tangram path:nth-of-type(1) {
		transform: translate(0px, 0px) rotate(0deg) !important;
	}
	svg.tangram path:nth-of-type(2) {
		transform: translate(0px, 0px) rotate(0deg) !important;
	}
	svg.tangram path:nth-of-type(3) {
		transform: translate(3px, 1px) rotate(0deg) !important;
	}
	svg.tangram path:nth-of-type(4) {
		transform: translate(1px, 3px) rotate(0deg) !important;
	}
	svg.tangram path:nth-of-type(5) {
		transform: translate(2px, 4px) rotate(0deg) !important;
	}
	svg.tangram path:nth-of-type(6) {
		transform: translate(2px, 2px) rotate(0deg) !important;
	}
	svg.tangram path:nth-of-type(7) {
		transform: translate(0px, 4px) rotate(0deg) !important;
	}
</style>
