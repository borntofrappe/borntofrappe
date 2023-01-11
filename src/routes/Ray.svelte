<script>
	const rays = Array(24)
		.fill()
		.map((_, i, { length }) => {
			const angle = (360 / length) * i;
			const x = i % 2 === 0 ? 7 : 6;

			return {
				angle,
				x
			};
		});
</script>

<svg viewBox="-55 -55 110 110">
	<g fill="none" stroke="#ffdb47" stroke-width="3" stroke-linecap="round">
		{#each rays as { angle, x }}
			<path transform="rotate({angle})" d="M 35 0 h {x}" />
		{/each}
	</g>

	<circle r="28" fill="#ffdb47" />

	<g fill="#ff877a">
		<g transform="translate(0 5)">
			<circle r="4" cx="-9" />
			<circle r="4" cx="9" />
		</g>
		<g transform="translate(0 6)">
			<g stroke="#ff877a" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
				<path d="M -1.5 0 v 1.5 a 1.5 1.5 0 0 0 3 0 v -1.5z" />
			</g>
		</g>
	</g>
	<g fill="#38311e" stroke="#ffdb47" stroke-width="1">
		<circle r="2" cx="-5" />
		<circle r="2" cx="5" />
	</g>
</svg>
