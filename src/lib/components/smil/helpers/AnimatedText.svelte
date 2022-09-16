<script>
	const id = 'smil' + Math.random().toString().slice(-5);

	export let text = 'Smile';
	export let fontSize = 6;
	export let fill = '#f7f7f7';
	export let stroke = '#192d10';

	export let durationPerLetter = 0.05;

	export let repeat = true;
	export let delay = 3;

	export let begin = '0s';
	if (repeat) begin += `; ${id}.end + ${delay}s`;

	export let end = '';

	const { length } = text;
	const dur = `${durationPerLetter * length}s`;

	export let offset = 1;

	const values = Array(length)
		.fill()
		.map((_, i) =>
			Array(length)
				.fill()
				.map((_, j) => {
					if (j === i) return offset * -1;
					if (j === i + 1) return offset;

					return 0;
				})
				.join(' ')
		)
		.join(';');
</script>

<g
	font-family="sans-serif"
	font-weight="700"
	font-size={fontSize}
	text-anchor="middle"
	dominant-baseline="central"
	{fill}
	{stroke}
	stroke-width={fontSize / 6}
	paint-order="stroke"
	letter-spacing={fontSize / 14}
	stroke-linejoin="round"
	stroke-linecap="round"
>
	<text>
		<animate attributeName="dy" {values} {dur} {id} {begin} {end} />
		{text}
	</text>
</g>
