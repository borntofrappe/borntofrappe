<script>
	export let fontSize = 6;
	export let fill = '#f7f7f7';
	export let stroke = '#192d10';
</script>

<g
	font-family="sans-serif"
	font-weight="700"
	font-size={fontSize}
	text-anchor="middle"
	dominant-baseline="middle"
	{fill}
	{stroke}
	stroke-width={fontSize / 6}
	paint-order="stroke"
	letter-spacing={fontSize / 14}
	stroke-linejoin="round"
	stroke-linecap="round"
>
	<text>
		<slot>Hello world</slot>
	</text>
</g>
