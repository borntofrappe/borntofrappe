<script>
	const n = 500;
	const m = 100;
	const t = { x: 10, y: 5 };
	const noise = 4;
	const d = new Date(2023, 4, 8);
	const p = 15;

	const points = Array(n)
		.fill()
		.reduce(
			(acc, _, i) => {
				const y0 = acc[acc.length - 1];
				const y1 = y0 + Math.random() * noise - noise / 2;
				const x = i + 1;
				const y = Math.max(0, Math.min(y1, m));
				return [...acc, x, y];
			},
			[0, Math.floor(Math.random() * (m / 2)) + m / 4]
		);

	const f = (d) => (d < 10 ? `0${d}` : d.toString());

	const format =
		'DateTimeFormat' in Intl
			? new Intl.DateTimeFormat('en-US', { month: 'short' }).format
			: (date) => `${f(date.getDate())}/${f(date.getMonth() + 1)}`;

	const ticks = {
		x: Array(t.x)
			.fill()
			.map((_, i, { length }) => {
				const x = n - Math.floor((n / (length - 1)) * i);
				const date = new Date(d.getTime() - (n - x) * 24 * 60 * 60 * 1000);
				const t = format(date);

				return {
					t,
					x
				};
			}),
		y: Array(t.y)
			.fill()
			.map((_, i, { length }) => {
				const y = m - Math.floor((m / (length - 1)) * i);
				return {
					y
				};
			})
	};
</script>

<svg viewBox="0 0 {n + p * 2} {m + p * 2}">
	<defs>
		<linearGradient id="line-chart-gradient-curve" x1="0" x2="0" y1="0" y2="1">
			<stop stop-opacity="0.25" stop-color="var(--accent, hsl(187, 50%, 29%))" offset="0" />
			<stop stop-opacity="0" stop-color="var(--accent, hsl(187, 50%, 29%))" offset="1" />
		</linearGradient>
	</defs>
	<g transform="translate({p} {p})">
		<g>
			<g
				transform="translate(0 {m})"
				font-size="8"
				font-family="sans-serif"
				fill="currentColor"
				text-anchor="middle"
			>
				{#each ticks.x as { t, x }}
					<text {x} y="10">{t}</text>
				{/each}
			</g>
			<g
				fill="none"
				stroke="currentColor"
				stroke-width="0.1"
				stroke-dasharray="1 3"
				stroke-linejoin="round"
				stroke-linecap="round"
			>
				{#each ticks.y as { y }}
					<path d="M 0 {y} h {n}" />
				{/each}
			</g>
		</g>

		<path fill="url(#line-chart-gradient-curve)" stroke="none" d="M {points} {n} {m} 0 {m}" />
		<path fill="none" stroke="var(--accent, hsl(187, 50%, 29%))" d="M {points}" />
	</g>
</svg>

<style>
	svg {
		display: block;
		color: hsl(200, 30%, 24%);
		--accent: hsl(187, 50%, 29%);
	}
</style>
