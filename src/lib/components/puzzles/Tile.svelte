<script>
	export let char = 't';
	export let n = '';

	export let width = '100%';
	export let height = '100%';

	export let tile = 'hsl(8, 92%, 90%)';
	export let shadow = 'hsl(6, 98%, 80%)';

	export let text = 'hsl(345, 13%, 94%)';
	export let outline = 'hsl(19, 56%, 12%)';
</script>

<svg viewBox="0 0 1 1" {width} {height}>
	<rect width="1" height="1" rx="0.1" fill={shadow} />
	<rect width="1" height="0.9" rx="0.1" fill={tile} />

	<text
		fill={text}
		stroke={outline}
		stroke-linecap="round"
		stroke-linejoin="round"
		paint-order="stroke"
		stroke-width="0.1"
		x="0.5"
		y="0.45"
		text-anchor="middle"
		dominant-baseline="central"
		font-weight="700"
		font-size="0.45"
	>
		{char}
	</text>

	<text
		style:user-select="none"
		fill={outline}
		x="0.925"
		y="0.775"
		text-anchor="end"
		dominant-baseline="central"
		font-weight="400"
		font-size="0.12"
	>
		{n}
	</text>
</svg>
