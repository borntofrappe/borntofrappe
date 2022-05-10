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
				if (i % 2 === 0) {
					const offsetX = offsets[i];
					eggCrackX += offsetX;
					width += offsetX;
				} else eggCrackY += offsets[i];
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
			id="egg-pattern-sky"
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
			id="egg-pattern-cloud"
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
			id="egg-pattern-spot"
			viewBox="0 0 2 2"
			width="1"
			height="1"
			patternUnits="userSpaceOnUse"
		>
			<rect width="2" height="2" fill="#ce7931" />
			<rect width="1" height="1" fill="#f7c283" />
			<rect x="1" y="1" width="1" height="1" fill="#f7c283" />
		</pattern>

		<path id="egg-egg-shape" d={eggShape} />

		<clipPath id="egg-clip-egg-shape">
			<use href="#egg-egg-shape" />
		</clipPath>

		<g id="egg-egg">
			<use fill="#f7d794" href="#egg-egg-shape" />
			<g clip-path="url(#egg-clip-egg-shape)">
				<g fill="#c54900" stroke="url(#egg-pattern-spot)">
					{#each eggSpots as { cx, cy, rx, ry, strokeWidth }}
						<ellipse {cx} {cy} {rx} {ry} stroke-width={strokeWidth} />
					{/each}
				</g>
			</g>
			<use fill="none" stroke="currentColor" href="#egg-egg-shape" />
		</g>

		<clipPath id="egg-clip-egg-top-half">
			<path d="{eggCrack} l 80 -50 h -160 z" />
		</clipPath>

		<clipPath id="egg-clip-egg-bottom-half">
			<path d="{eggCrack} l 80 50 h -160 z" />
		</clipPath>
	</defs>

	<rect fill="url(#egg-pattern-sky)" width="80" height="50" />
	<g fill="url(#egg-pattern-cloud)">
		<g transform="translate(20 17.5)">
			<circle r="9" />
			<circle cx="-8" r="7" />
			<circle cx="8" r="7" />
		</g>

		<g
			stroke="url(#egg-pattern-cloud)"
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
		<animateTransform
			attributeName="transform"
			type="translate"
			values="0 0; 20 0; 0 0; -20 0; 0 0;"
			dur="8s"
			additive="sum"
			calcMode="spline"
			keyTimes="0; 0.25; 0.5; 0.75; 1"
			keySplines="0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1; 0.5 0 0.5 1;"
			repeatCount="indefinite"
			begin="eggGameStart.begin"
			end="eggGameEggOpen.begin"
			fill="freeze"
		/>
		<g transform="translate(0 -2)">
			<animateTransform
				attributeName="transform"
				type="translate"
				values="0 0; 0 -22.5; 0 -17.5"
				calcMode="spline"
				keyTimes="0; 0.7; 1"
				keySplines="0.8 0 0.25 1; 0.5 0 0.5 1;"
				dur="0.7s"
				begin="eggGameEggOpen.begin"
				id="eggGameEggOpened"
				fill="freeze"
			/>
			<g stroke="currentColor">
				<g fill="#fefefe" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
					<path d="M -0.5 -4 v 2 h -3 v 2 h 6 v -2 h -1.5 v -2" />
				</g>
				<path fill="#f7f75a" d="M -4 -21.5 h -4 v 4" />
				<path fill="#fefefe" d="M -9 -11 c 0 10 18 10 18 0 v -4 h -6 v -2 c 0 -8 -12 -8 -12 6" />
			</g>
			<circle fill="currentColor" cx="-3.5" cy="-19" r="0.75" />
		</g>

		<g>
			<animateTransform
				attributeName="transform"
				type="rotate"
				values="0; 5; 0; -5; 0"
				dur="0.3s"
				begin={eggFragments.map((_, i) => `eggGameEggFragment${i}.begin`).join(';')}
			/>
			<animate
				attributeName="display"
				to="none"
				dur="0.1s"
				calcMode="discrete"
				fill="freeze"
				begin="eggGameEggOpen.begin"
			/>
			<use href="#egg-egg" />
			<g clip-path="url(#egg-clip-egg-shape)">
				<g fill="none" stroke="currentColor" stroke-linecap="square">
					{#each eggFragments as { d }, i}
						<path {d} opacity="0">
							<animate
								attributeName="opacity"
								to="1"
								dur="0.1s"
								calcMode="discrete"
								fill="freeze"
								begin="eggGameEggFragment{i}.begin"
							/>
						</path>
					{/each}
				</g>
				<g opacity="0">
					{#each eggFragments as { x, y, width, height }, i}
						<rect style:cursor="pointer" {x} {y} {width} {height}>
							<animate
								attributeName="display"
								to="none"
								dur="0.1s"
								calcMode="discrete"
								fill="freeze"
								restart="never"
								begin="click"
								id="eggGameEggFragment{i}"
							/>
						</rect>
					{/each}
				</g>
			</g>
		</g>

		<g>
			<animateTransform
				attributeName="transform"
				type="rotate"
				values="0; 5; 0; -5; 0"
				dur="0.3s"
				begin={eggFragments.map((_, i) => `eggGameEggFragment${i}.begin`).join(';')}
			/>
			<g transform="translate(0 {50 * eggFragments.length * -1})">
				{#each eggFragments as _, i}
					<animateTransform
						attributeName="transform"
						type="translate"
						by="0 50"
						dur="0.1s"
						begin="eggGameEggFragment{i}.begin"
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
						begin="eggGameEggOpen.begin + 0.03s"
						fill="freeze"
					/>
					<g clip-path="url(#egg-clip-egg-top-half)">
						<use href="#egg-egg" />
						<path
							clip-path="url(#egg-clip-egg-shape)"
							fill="none"
							stroke="currentColor"
							d={eggCrack}
						/>
					</g>
				</g>
				<g>
					<animateTransform
						attributeName="transform"
						type="translate"
						to="0 50"
						dur="0.5s"
						calcMode="spline"
						keySplines="0.8 0 0.25 1"
						begin="eggGameEggOpen.begin + 0.03s"
						fill="freeze"
					/>
					<g clip-path="url(#egg-clip-egg-bottom-half)">
						<use href="#egg-egg" />
						<path
							clip-path="url(#egg-clip-egg-shape)"
							fill="none"
							stroke="currentColor"
							d={eggCrack}
						/>
					</g>
				</g>

				<use style:cursor="pointer" opacity="0" href="#egg-egg">
					<animate
						attributeName="display"
						to="none"
						dur="0.1s"
						calcMode="discrete"
						fill="freeze"
						restart="never"
						begin="click"
						id="eggGameEggOpen"
					/>
				</use>
			</g>
		</g>
	</g>

	<g transform="translate(40 25)">
		<g
			style="pointer-events: none;"
			font-size="7"
			font-weight="bold"
			font-family="sans-serif"
			text-anchor="middle"
			dominant-baseline="middle"
			fill="#f7f7f7"
			stroke="currentColor"
			stroke-width="0.3"
		>
			<animate attributeName="opacity" to="0" fill="freeze" dur="0.1s" begin="eggGameStart.begin" />
			<text> Break open! </text>
		</g>
	</g>

	<rect style:cursor="pointer" width="80" height="50" opacity="0">
		<animate
			id="eggGameStart"
			attributeName="display"
			to="none"
			fill="freeze"
			begin="click"
			dur="0.1s"
			restart="never"
		/>
	</rect>

	<g transform="translate(-80 0)">
		<animateTransform
			attributeName="transform"
			by="80 0"
			additive="sum"
			calcMode="discrete"
			fill="freeze"
			begin="eggGameEggOpened.end"
			id="eggGameMessage"
			dur="0.1s"
		/>

		<g transform="translate(40 37.5)">
			<g
				style="pointer-events: none;"
				font-size="6"
				font-weight="bold"
				font-family="sans-serif"
				text-anchor="middle"
				dominant-baseline="middle"
				fill="#f7f7f7"
				stroke="currentColor"
				stroke-width="0.3"
			>
				<animateTransform
					attributeName="transform"
					type="translate"
					to="0 1"
					dur="0.25s"
					repeatCount="indefinite"
					begin="eggGameMessage.begin"
					end="eggGameEnd.end"
					fill="freeze"
					calcMode="discrete"
				/>
				<text>
					{#each 'Open sesame!'.split('') as l, i}
						<tspan dx="0.5" dy={i % 2 === 0 ? 0.5 : -0.5}>{l}</tspan>
					{/each}
				</text>
			</g>
		</g>

		<rect style:cursor="pointer" width="80" height="50" opacity="0">
			<animate
				attributeName="display"
				to="none"
				fill="freeze"
				begin="click"
				restart="never"
				dur="0.1s"
				id="eggGameEnd"
			/>
		</rect>
	</g>
</svg>
