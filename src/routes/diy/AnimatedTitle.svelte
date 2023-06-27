<script>
	export let text = 'Hello world';
	export let fontSize = 7;
	export let fill = 'hsl(206, 33%, 96%)';
	export let stroke = 'hsl(209, 61%, 16%)';

	export let offset = 1;
	export let durationPerLetter = 0.07;

	export let begin = '0s';
	export let end = '';
	export let repeatCount = 'none';
	export let delay = 2;

	const strokeWidth = fontSize * 0.2;
	const letterSpacing = fontSize * 0.1;
	const dy = fontSize * 0.3;

	const { length } = text;

	const dur = `${durationPerLetter * length + delay}s`;

	const base = Array(length).fill(0);
	const extra = Array(1 + Math.floor(delay * (1 / durationPerLetter)))
		.fill()
		.map((_) => Array(length).fill(0));

	const values = [
		base,
		...Array(length)
			.fill()
			.map((_, i) =>
				Array(length)
					.fill()
					.map((_, j) => {
						if (j === i) return offset * -1;
						if (j === i + 1) return offset;

						return 0;
					})
			),
		...extra
	].join(';');
</script>

<g
	font-family="sans-serif"
	font-weight="700"
	font-size={fontSize}
	{fill}
	{stroke}
	stroke-width={strokeWidth}
	letter-spacing={letterSpacing}
	paint-order="stroke"
	stroke-linejoin="round"
	stroke-linecap="round"
	transform="translate(0 {dy})"
>
	<text x="50%" y="50%" text-anchor="middle">
		<animate attributeName="dy" {dur} {values} {begin} {end} {repeatCount} />
		{text}
	</text>
</g>
