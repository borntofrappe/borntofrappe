<script>
	const eggShape = 'M 0 0 c 25 0 15 -32 0 -32 -15 2 -25 32 0 32';

	const eggSpots = [
		{ cx: -11, cy: -28, rx: 8, ry: 9, strokeWidth: 2 },
		{ cx: 14, cy: 1, rx: 12, ry: 10, strokeWidth: 2 },
		{ cx: 5, cy: -16, rx: 4, ry: 4, strokeWidth: 1 },
		{ cx: 5, cy: -24, rx: 2, ry: 2, strokeWidth: 1 },
		{ cx: -12, cy: -5, rx: 5, ry: 5, strokeWidth: 3 },
		{ cx: -7.5, cy: -8, rx: 3, ry: 3, strokeWidth: 3 },
		{ cx: -12, cy: -5, rx: 5, ry: 5, strokeWidth: 0 },
		{ cx: -7.5, cy: -8, rx: 3, ry: 3, strokeWidth: 0 }
	];

	const eggCrack =
		'M -16 -12.5 l 3 -2.5 4 2.5 l 3 -2.5 6 3 l 2.5 -2.5 2.5 2.5 2.5 -2.5 l 2.5 2.5 6 -3.5';

	let [eggCrackX, eggCrackY] = eggCrack
		.match(/(-?[\d\.]+) (-?[\d\.]+)/)
		.slice(1)
		.map((c) => parseFloat(c));

	const eggFragments = eggCrack
		.slice(eggCrack.indexOf('l') + 2)
		.split(/ ?l ?/)
		.reduce((acc, curr, i) => {
			const d = `M ${eggCrackX} ${eggCrackY} l ${curr}`;

			const x = eggCrackX;
			let width = 0;

			const offsets = curr.match(/-?[\d\.]+/g).map((c) => parseFloat(c));
			for (let i = 0; i < offsets.length; i++) {
				const offset = offsets[i];
				if (i % 2 === 0) {
					eggCrackX += offset;
					width += offset;
				} else {
					eggCrackY += offset;
				}
			}

			return [
				...acc,
				{
					d,
					x,
					y: -50,
					width,
					height: 100
				}
			];
		}, []);
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<pattern
			id="crack-the-egg-pattern-sky"
			viewBox="0 0 2 2"
			width="1"
			height="1"
			patternUnits="userSpaceOnUse"
		>
			<rect width="2" height="2" fill="#5bd2de" />
			<rect width="1" height="1" fill="#bdebe6" />
			<rect x="1" y="1" width="1" height="1" fill="#bdebe6" />
		</pattern>

		<pattern
			id="crack-the-egg-pattern-cloud"
			viewBox="0 0 2 2"
			width="1"
			height="1"
			patternUnits="userSpaceOnUse"
		>
			<rect width="2" height="2" fill="#e6e7e6" />
			<rect width="1" height="1" fill="#d6d2d6" />
			<rect x="1" y="1" width="1" height="1" fill="#d6d2d6" />
		</pattern>

		<pattern
			id="crack-the-egg-pattern-spot"
			viewBox="0 0 2 2"
			width="1"
			height="1"
			patternUnits="userSpaceOnUse"
		>
			<rect width="2" height="2" fill="#ce7931" />
			<rect width="1" height="1" fill="#f7c283" />
			<rect x="1" y="1" width="1" height="1" fill="#f7c283" />
		</pattern>

		<path id="crack-the-egg-egg-shape" d={eggShape} />

		<clipPath id="crack-the-egg-clip-egg-shape">
			<use href="#crack-the-egg-egg-shape" />
		</clipPath>

		<g id="crack-the-egg-egg">
			<use fill="#f7d794" href="#crack-the-egg-egg-shape" />

			<g clip-path="url(#crack-the-egg-clip-egg-shape)">
				<g fill="#c54900" stroke="url(#crack-the-egg-pattern-spot)">
					{#each eggSpots as { cx, cy, rx, ry, strokeWidth }}
						<ellipse {cx} {cy} {rx} {ry} stroke-width={strokeWidth} />
					{/each}
				</g>
			</g>

			<use fill="none" stroke="currentColor" href="#crack-the-egg-egg-shape" />
		</g>

		<clipPath id="crack-the-egg-clip-egg-top-half">
			<path d="{eggCrack} l 80 -50 h -160 z" />
		</clipPath>

		<clipPath id="crack-the-egg-clip-egg-bottom-half">
			<path d="{eggCrack} l 80 50 h -160 z" />
		</clipPath>
	</defs>

	<rect fill="url(#crack-the-egg-pattern-sky)" width="80" height="50" />

	<g fill="url(#crack-the-egg-pattern-cloud)">
		<g transform="translate(20 17.5)">
			<circle r="9" />
			<circle cx="-8" r="7" />
			<circle cx="8" r="7" />
		</g>

		<g
			stroke="url(#crack-the-egg-pattern-cloud)"
			stroke-width="3"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<g transform="translate(70 8)">
				<path d="M -8 0 c 2.5 -5 9.5 -5 12 0 -2.5 5 -9.5 5 -12 0" />
				<path transform="translate(-9 4)" d="M -8 0 c 2.5 -5 9.5 -5 12 0 -2.5 5 -9.5 5 -12 0" />
			</g>
			<g transform="translate(8 40)">
				<path transform="scale(1.2)" d="M -8 0 c 2.5 -5 9.5 -5 12 0 -2.5 5 -9.5 5 -12 0" />
				<path
					transform="translate(10 2) scale(0.8)"
					d="M -8 0 c 2 -5 10 -5 12 0 -2 5 -10 5 -12 0"
				/>
			</g>
		</g>

		<g transform="translate(67.5 32.5)">
			<circle r="9" />
			<circle cx="-9" cy="3" r="6" />
			<circle cx="9" cy="3" r="6" />
		</g>
	</g>

	<g transform="translate(40 49.5)">
		<g>
			<g transform="translate(0 -2)">
				<g stroke="currentColor">
					<g fill="#f7f75a" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
						<path d="M -0.5 -4 v 2 h -3 v 2 h 6 v -2 h -1.5 v -2" />
						<path d="M -4 -21.5 h -4 v 4" />
					</g>
					<path fill="#fefefe" d="M -9 -11 c 0 10 18 10 18 0 v -4 h -6 v -2 c 0 -8 -12 -8 -12 6" />
				</g>
				<circle fill="currentColor" cx="-3.5" cy="-19" r="0.75" />
			</g>
		</g>

		<g>
			<animateTransform
				attributeName="transform"
				type="rotate"
				values="0; 5; 0; -5; 0"
				dur="0.3s"
				begin={eggFragments.map((_, i) => `crackTheEggFragment${i}.begin`).join(';')}
			/>

			<g>
				<set begin="crackTheEggOpen.begin" attributeName="display" to="none" fill="freeze" />

				<use fill="#f7d794" href="#crack-the-egg-egg" />

				<g clip-path="url(#crack-the-egg-clip-egg-shape)">
					{#each eggFragments as { d, x, y, width, height }, i}
						<g opacity="0">
							<set
								begin="crackTheEggFragment{i}.begin"
								attributeName="opacity"
								to="1"
								fill="freeze"
							/>
							<path {d} fill="none" stroke="currentColor" opacity="1" stroke-linecap="square" />
						</g>

						<g style:cursor="pointer">
							<set
								id="crackTheEggFragment{i}"
								begin="click"
								attributeName="display"
								to="none"
								fill="freeze"
								restart="never"
							/>
							<rect {x} {y} {width} {height} opacity="0" />
						</g>
					{/each}
				</g>
			</g>

			<g>
				<g transform="translate(0 {100 * eggFragments.length * -1})">
					{#each eggFragments as _, i}
						<animateTransform
							attributeName="transform"
							type="translate"
							by="0 100"
							dur="0.1s"
							begin="crackTheEggFragment{i}.begin"
							fill="freeze"
							calcMode="discrete"
						/>
					{/each}
					<g>
						<animateTransform
							attributeName="transform"
							type="translate"
							to="0 -50"
							dur="0.35s"
							calcMode="spline"
							keySplines="0.8 0 0.25 1"
							begin="crackTheEggOpen.begin"
							fill="freeze"
						/>
						<g clip-path="url(#crack-the-egg-clip-egg-top-half)">
							<use href="#crack-the-egg-egg" />
							<path
								d={eggCrack}
								clip-path="url(#crack-the-egg-clip-egg-shape)"
								fill="none"
								stroke="currentColor"
							/>
						</g>
					</g>

					<g>
						<animateTransform
							attributeName="transform"
							type="translate"
							to="0 50"
							dur="0.35s"
							calcMode="spline"
							keySplines="0.8 0 0.25 1"
							begin="crackTheEggOpen.begin"
							fill="freeze"
						/>
						<g clip-path="url(#crack-the-egg-clip-egg-bottom-half)">
							<use href="#crack-the-egg-egg" />
							<path
								d={eggCrack}
								clip-path="url(#crack-the-egg-clip-egg-shape)"
								fill="none"
								stroke="currentColor"
							/>
						</g>
					</g>

					<g style:cursor="pointer">
						<set
							id="crackTheEggOpen"
							begin="click"
							attributeName="display"
							to="none"
							fill="freeze"
						/>
						<use opacity="0" href="#crack-the-egg-egg" />
					</g>
				</g>
			</g>
		</g>
	</g>
</svg>
