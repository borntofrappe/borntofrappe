<script>
	import shapes from './shapes.js';
	const keys = Object.keys(shapes);

	export let key = keys[Math.floor(Math.random() * keys.length)];
	export let padding = shapes[key].padding;

	const pieces = [
		{ d: 'M 0 0 l 2 2 l 2 -2', fill: '#71c49a' },
		{ d: 'M 0 0 l 2 2 l -2 2', fill: '#f6e48e' },
		{ d: 'M 0 0 l 1 -1 l 0 2', fill: '#ef847a' },
		{ d: 'M 0 0 l 1 -1 l 1 1', fill: '#ef847a' },
		{ d: 'M 0 0 l 2 -2 l 0 2', fill: '#abdcc7' },
		{ d: 'M 0 0 l 1 -1 l 1 1 l -1 1', fill: '#71c49a' },
		{ d: 'M 0 0 l 1 -1 l 2 0 l -1 1', fill: '#f6e48e' }
	];

	$: paths = pieces.map((piece, i) => ({
		...piece,
		style: shapes[key].styles[i]
	}));
</script>

<svg
	style="display: block;"
	viewBox="{padding * -1} {padding * -1} {4 + padding * 2} {4 + padding * 2}"
>
	{#each paths as { d, fill, style }}
		<path {d} {fill} {style} />
	{/each}
</svg>
