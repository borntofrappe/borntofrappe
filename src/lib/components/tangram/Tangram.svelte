<script>
	import styles from './styles.js';

	const pieces = [
		{ d: 'M 0 0 l 2 2 2 -2z', fill: '#71c49a' },
		{ d: 'M 0 0 l 2 2 2 -2z', fill: '#f6e48e' },
		{ d: 'M 0 0 l 1 1 -1 1z', fill: '#ef847a' },
		{ d: 'M 0 0 l 1 1 -1 1z', fill: '#ef847a' },
		{ d: 'M 0 0 l 2 2 h-2z', fill: '#abdcc7' },
		{ d: 'M 0 0 l 1 1 1 -1 -1 -1z', fill: '#71c49a' },
		{ d: 'M 0 0 l 1 -1 h 2 l -1 1z', fill: '#f6e48e' }
	];

	$: paths = pieces.map((piece, i) => ({
		...piece,
		style: styles['butterfly'][i]
	}));
</script>

<svg viewBox="-2 -2 {8} {8}">
	{#each paths as { d, fill, style }}
		<path {d} {fill} {style} />
	{/each}
</svg>

<style>
	svg {
		display: block;
	}

	svg path:nth-of-type(1) {
		transform: translate(0px, 0px) rotate(0deg);
	}

	svg path:nth-of-type(2) {
		transform: translate(0px, 4px) rotate(270deg);
	}

	svg path:nth-of-type(3) {
		transform: translate(4px, 2px) rotate(180deg);
	}

	svg path:nth-of-type(4) {
		transform: translate(1px, 3px) rotate(270deg);
	}

	svg path:nth-of-type(5) {
		transform: translate(2px, 4px) rotate(-90deg);
	}

	svg path:nth-of-type(6) {
		transform: translate(2px, 2px) rotate(0deg);
	}

	svg path:nth-of-type(7) {
		transform: translate(0px, 4px) rotate(0deg);
	}
</style>
