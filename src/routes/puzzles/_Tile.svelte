<script>
	export let char = 't';
	export let n = '';

	export let width = 100;
	export let height = 100;

	export let fill = '#fdd4ce';
	export let stroke = '#07093a';
</script>

<svg viewBox="0 0 1 1" {width} {height}>
	<rect width="1" height="1" rx="0.1" fill="#fea69c" />
	<rect width="1" height="0.9" rx="0.1" {fill} />

	<text
		fill="#f2eeef"
		{stroke}
		stroke-linecap="round"
		stroke-linejoin="round"
		paint-order="stroke"
		stroke-width="0.07"
		x="0.5"
		y="0.45"
		text-anchor="middle"
		dominant-baseline="central"
		font-weight="700"
		font-size="0.42"
	>
		{char}
	</text>

	<text
		style:user-select="none"
		fill="#07093a"
		x="0.925"
		y="0.775"
		text-anchor="end"
		dominant-baseline="central"
		font-weight="400"
		font-size="0.1"
	>
		{n}
	</text>
</svg>
