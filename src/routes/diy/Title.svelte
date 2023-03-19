<script>
	export let fontSize = 7;
	export let fill = 'hsl(206, 33%, 96%)';
	export let stroke = 'hsl(209, 61%, 16%)';

	const strokeWidth = fontSize * 0.2;
	const letterSpacing = fontSize * 0.1;
</script>

<g
	font-weight="700"
	font-size={fontSize}
	{fill}
	{stroke}
	stroke-width={strokeWidth}
	letter-spacing={letterSpacing}
	paint-order="stroke"
	stroke-linejoin="round"
	stroke-linecap="round"
>
	<text x="50%" y="50%" dy=".3em" text-anchor="middle">
		<slot>Hello world</slot>
	</text>
</g>
