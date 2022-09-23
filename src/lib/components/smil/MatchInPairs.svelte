<script>
	const size = 12;
	const padding = 3;

	const width = 80;
	const height = 50;

	const symbols = ['star', 'moon', 'sun'];

	const getX = () => padding + Math.floor(Math.random() * (width - size - padding * 2));
	const getY = () => padding + Math.floor(Math.random() * (height - size - padding * 2));

	const coords = [];
	let x = getX();
	let y = getY();

	while (coords.length < symbols.length * 2) {
		let overlaps = false;
		for (const { x: cx, y: cy } of coords) {
			if (x + size + 1 > cx && x - 1 < cx + size && y + size + 1 > cy && y - 1 < cy + size) {
				overlaps = true;
				break;
			}
		}
		if (overlaps) {
			x = getX();
			y = getY();
		} else {
			coords.push({
				x,
				y
			});
		}
	}

	const cards = symbols.reduce((acc, curr, i) => {
		const pair = Array(2)
			.fill()
			.map((_, j) => {
				const { x, y } = coords[i * 2 + j];

				const id = `matchInPairsCard${i}${j}`;
				const match = `matchInPairsCard${i}${j === 0 ? 1 : 0}`;

				const resets = symbols
					.map((_, k) => k)
					.filter((k) => k !== i)
					.reduce(
						(a, c) => [
							...a,
							...Array(2)
								.fill()
								.map((_, z) => `matchInPairsCard${c}${z}`)
						],
						[]
					);

				return {
					x,
					y,
					symbol: curr,
					id,
					match,
					resets
				};
			});
		return [...acc, ...pair];
	}, []);

	const points = Array(10)
		.fill()
		.map((_, i, { length }) => {
			const angle = (((360 / length) * i + 18) / 180) * Math.PI;
			const radius = i % 2 === 0 ? 10 : 25;
			const x = Math.cos(angle) * radius;
			const y = Math.sin(angle) * radius;
			return {
				x,
				y
			};
		});
	const d =
		`M ${points[0].x} ${points[0].y}` +
		points
			.slice(1)
			.reduce(
				(acc, curr, i) =>
					i % 2 === 0 ? `${acc} Q ${curr.x} ${curr.y}` : `${acc} ${curr.x} ${curr.y}`,
				''
			) +
		` ${points[0].x} ${points[0].y}`;
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<pattern
			id="match-in-pairs-pattern-background"
			viewBox="0 0 2 2"
			width="1"
			height="1"
			patternUnits="userSpaceOnUse"
		>
			<g fill="#009e3a">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>

		<rect id="match-in-pairs-background" width="80" height="50" />

		<symbol id="match-in-pairs-moon" viewBox="-25 -25 50 50">
			<g
				fill="#eeae31"
				stroke="#eeae31"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M 13 -7 a 14 14 0 1 0 0 14 9 9 0 1 1 0 -14" />
			</g>
		</symbol>

		<symbol id="match-in-pairs-sun" viewBox="-25 -25 50 50">
			<g>
				<circle fill="#eeae31" r="10" />
				<g fill="none" stroke="#eeae31" stroke-width="4" stroke-linecap="round">
					<path d="M 0 -14.5 v -4" />
					<path transform="rotate(45)" d="M 0 -14 v -3" />
					<path transform="rotate(90)" d="M 0 -14 v -3" />
					<path transform="rotate(135)" d="M 0 -14 v -3" />
					<path transform="rotate(180)" d="M 0 -14 v -3" />
					<path transform="rotate(225)" d="M 0 -14 v -3" />
					<path transform="rotate(270)" d="M 0 -14 v -3" />
					<path transform="rotate(315)" d="M 0 -14 v -3" />
				</g>
			</g>
		</symbol>

		<symbol id="match-in-pairs-star" viewBox="-25 -26 50 50">
			<path {d} fill="#eeae31" />
		</symbol>

		<symbol id="match-in-pairs-card" viewBox="-0.25 -0.25 10.5 10.5">
			<rect width="10" height="10" fill="#f7a629" stroke="#107c38" stroke-width="0.5" />
		</symbol>

		<symbol id="match-in-pairs-card-flipped" viewBox="-0.25 -0.25 10.5 10.5">
			<rect width="10" height="10" fill="#f7d794" stroke="#107c38" stroke-width="0.5" />
		</symbol>

		{#each symbols as symbol}
			<g id="match-in-pairs-card-{symbol}">
				<svg width={size} height={size}>
					<use href="#match-in-pairs-card" />
				</svg>
				<g transform="translate(-80 0)">
					<g transform="translate({size / 2} 0) scale(0.5 1) translate({(size / 2) * -1} 0)">
						<svg width={size} height={size}>
							<use href="#match-in-pairs-card" />
							<g fill="none" stroke="#f7f7f7" stroke-width="0.3" stroke-linecap="round">
								<path d="M {size / 12} {size / 2.5} {size / 2.5} {size / 9}" />
								<path
									transform="translate({size / 12} {size / 8})"
									d="M {size / 12} {size / 2.5} {size / 2.5} {size / 9}"
								/>
							</g>
						</svg>
					</g>
				</g>
				<g transform="translate(-160 0)">
					<g transform="translate({size / 2} 0) scale(0.5 1) translate({(size / 2) * -1} 0)">
						<svg width={size} height={size}>
							<use href="#match-in-pairs-card-flipped" />
							<g fill="none" stroke="#f7f7f7" stroke-width="0.3" stroke-linecap="round">
								<path d="M {size / 12} {size / 2.5} {size / 2.5} {size / 9}" />
								<path
									transform="translate({size / 12} {size / 8})"
									d="M {size / 12} {size / 2.5} {size / 2.5} {size / 9}"
								/>
							</g>
						</svg>
					</g>
				</g>
				<g transform="translate(-240 0)">
					<svg width={size} height={size}>
						<use href="#match-in-pairs-card-flipped" />
						<use href="#match-in-pairs-{symbol}" />
					</svg>
				</g>
			</g>
		{/each}
	</defs>

	<use
		href="#match-in-pairs-background"
		fill="#6bce31"
		stroke="url(#match-in-pairs-pattern-background)"
		stroke-width="6"
	/>

	<g fill="none">
		<use href="#match-in-pairs-background" stroke="#eeae31" stroke-width="2" />
		<use href="#match-in-pairs-background" stroke="#d66d19" stroke-width="1.5" />
		<use href="#match-in-pairs-background" stroke="#c55108" stroke-width="1" />
		<use href="#match-in-pairs-background" stroke="#bd4908" stroke-width="0.5" />
	</g>

	<g>
		{#each cards as { x, y, symbol }}
			<g transform="translate({x} {y})">
				<use href="#match-in-pairs-card-{symbol}">
					<animate
						begin="click"
						attributeName="x"
						values="0; 80; 160; 240"
						dur="0.2s"
						calcMode="discrete"
						fill="freeze"
						restart="never"
					/>
				</use>
			</g>
		{/each}
	</g>
</svg>
