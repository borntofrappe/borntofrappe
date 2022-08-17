<script>
	import styles from './styles.js';

	export let padding = 2;

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

<svg viewBox="{padding * -1} {padding * -1} {4 + padding * 2} {4 + padding * 2}">
	{#each paths as { d, fill, style }}
		<path {d} {fill} {style} />
	{/each}
</svg>

<style>
	svg {
		display: block;
	}
</style>
