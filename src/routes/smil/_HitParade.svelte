<script>
	const holes = [
		{ cx: 15, cy: 40, rx: 10, ry: 4 },
		{ cx: 40, cy: 40, rx: 10, ry: 4 },
		{ cx: 65, cy: 40, rx: 10, ry: 4 },
		{ cx: 25, cy: 26, rx: 10, ry: 4 },
		{ cx: 55, cy: 26, rx: 10, ry: 4 }
	];

	const winCondition = 3;

	const delays = Array(winCondition + Math.floor(Math.random() * 3))
		.fill()
		.map((_) => Math.floor(Math.random() * 3) + 1)
		.reduce(
			(acc, curr, i) => (i === 0 ? [...acc, curr] : [...acc, curr + acc[acc.length - 1]]),
			[]
		);

	const rabbits = delays.map((delay) => {
		const indexHole = Math.floor(Math.random() * holes.length);
		const { cx: x, cy: y } = holes[indexHole];
		return {
			delay,
			hole: indexHole,
			x,
			y
		};
	});
</script>

<svg viewBox="0 0 80 50">
	<defs>
		{#each holes as { cx, cy, rx, ry }, i}
			<clipPath id="hitparade-clip-hole-{i}">
				<ellipse {cx} {cy} {rx} {ry} />
				<path d="M {cx - rx} {cy} v -50 h {rx * 2} v 50z" />
			</clipPath>
		{/each}

		<pattern
			id="hitparade-pattern-grass"
			viewBox="-1 -1 6 6"
			width="5"
			height="5"
			patternUnits="userSpaceOnUse"
		>
			<rect x="-1" y="-1" width="6" height="6" fill="#73d33e" />
			<g fill="none" stroke="#34992f" stroke-width="0.5">
				<path d="M 0.25 1 v 1.5" />
				<path stroke="#98f463" d="M 0.25 1 v 0.5" />
				<path d="M 4.75 3.5 v 1.5" />
				<path stroke="#98f463" d="M 4.75 3.5 v 0.5" />
				<path d="M 3.5 1 v 1.5" />
				<path stroke="#96c636" d="M 3.5 1 v 0.5" />
				<path d="M 4.5 0.5 v 0.5" />
				<path d="M 2 1.5 v 0.5" />
				<path d="M 0.5 3.5 v 0.5" />
				<path d="M 1.5 4.5 v 0.5" />
				<path d="M 2.5 2.75 v 0.5" />
			</g>
		</pattern>

		<g id="hitparade-rabbit">
			<path
				d="m2.78 0.15c-0.521 0.0121-0.627 0.943 0.217 2.35-0.664 1.56-0.445 3.11-0.316 3.72-0.575-2.14-2.29-1.62-0.525 1.14-0.564-0.688-1.8 0.726 0.0918 2.14 0.852 0.426 0.976-0.236 0.84-0.596 0.569 0.846 1.91 0.846 1.91 0.846s1.34 5.56e-5 1.91-0.846c-0.136 0.36-0.0125 1.02 0.84 0.596 1.89-1.42 0.656-2.83 0.0918-2.14 1.77-2.76 0.05-3.28-0.525-1.14 0.128-0.608 0.348-2.16-0.316-3.72 1.5-2.5 0-3.5-1.5-0.5h-0.5-0.5c-0.656-1.31-1.31-1.86-1.72-1.85z"
				fill="#ffffff"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width=".25"
			/>
			<g transform="translate(5,3.75)">
				<g fill="currentColor">
					<circle cx="1" r=".4" />
					<circle cx="-1" r=".4" />
					<circle cy="1.25" r=".4" />
				</g>
				<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width=".25">
					<path d="m0 1.25v0.75" />
					<path d="m0 2a0.3 0.3 0 0 0 0.6 0" />
					<path transform="scale(-1,1)" d="m0 2a0.3 0.3 0 0 0 0.6 0" />
				</g>
			</g>
		</g>

		<g id="hitparade-rabbit-hit">
			<path
				d="m2.7 1.1c-1.8-0.052-1.7 3.4 0.26 1.4-0.85 2-0.25 4-0.25 4-0.5 0-0.75 0.5-0.5 1-0.5-1-2 0.5 0 2 0.85 0.43 0.98-0.24 0.84-0.6 0.57 0.85 1.9 0.85 1.9 0.85s1.3 5.6e-5 1.9-0.85c-0.14 0.36-0.013 1 0.84 0.6 2-1.5 0.5-3 0-2 0.25-0.5 0-1-0.5-1 0 0 0.6-2-0.25-4 2.5 2.5 2-3.5-1.5-0.5h-0.5-0.5c-0.71-0.61-1.3-0.85-1.8-0.86z"
				fill="#ffffff"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width=".25"
			/>
			<g transform="translate(5 3.8)">
				<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width=".25">
					<path d="m0.75-0.25 0.5 0.5m0-0.5-0.5 0.5" />
					<path transform="scale(-1,1)" d="m0.75-0.25 0.5 0.5m0-0.5-0.5 0.5" />
					<path d="m1.5 3.2c-1.2 0.75-0.75 2.8 1.2 0.5" />
					<path transform="scale(-1,1)" d="m1.5 3.2c-1.2 0.75-0.75 2.8 1.2 0.5" />
				</g>
				<circle cy="1.2" r=".4" fill="currentColor" />
				<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width=".5">
					<path d="m0 2.2v0.25" />
				</g>
			</g>
		</g>
	</defs>

	<g>
		<rect fill="url(#hitparade-pattern-grass)" width="80" height="50" />

		<rect fill="#10c5ce" width="80" height="17" />
		<g
			transform="translate(0 17)"
			fill="#73d33e"
			stroke="#73d33e"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M 0 0 l 5 -5 3 5 3 -8 3 5 3 -2 3 5z" />
			<path transform="translate(40 0) scale(-1 1)" d="M 0 0 l 5 -5 3 5 3 -8 3 5 3 -2 3 5z" />
			<path transform="translate(40 0)" d="M 0 0 l 5 -5 3 5 3 -8 3 5 3 -2 3 5z" />
			<path transform="translate(80 0) scale(-1 1)" d="M 0 0 l 5 -5 3 5 3 -8 3 5 3 -2 3 5z" />
		</g>

		<g>
			{#each holes as { cx: x, cy: y, rx, ry }}
				<g transform="translate({x} {y + ry})">
					<ellipse transform="scale(1.08 1.25)" fill="#bc4701" cy={ry * -1} {rx} {ry} />
					<ellipse transform="scale(1.05 1.12)" fill="#f5ab26" cy={ry * -1} {rx} {ry} />
					<ellipse fill="currentColor" cy={ry * -1} {rx} {ry} />
				</g>
			{/each}
		</g>

		<g fill="#ffffff">
			{#each rabbits as { delay, hole, x, y }, i}
				<g clip-path="url(#hitparade-clip-hole-{hole})">
					<g transform="translate({x} {y})">
						<g transform="translate(0 15)">
							<animateTransform
								attributeName="transform"
								type="translate"
								values="0 15; 0 -2.5; 0 15"
								dur="{2.5 + Math.random()}s"
								begin="hitparadeGameStart.begin + {delay}s"
								id="hitparadeGameRabbit{i}"
								calcMode="spline"
								keyTimes="0; 0.5; 1"
								keySplines="0.5 0 0.5 1; 0.5 0 0.5 1;"
							/>

							<g>
								<g display="none">
									<animate
										attributeName="display"
										to="initial"
										fill="freeze"
										dur="0.1s"
										calcMode="discrete"
										begin="hitparadeGameRabbitHit{i}.begin"
									/>
									<use transform="scale(1.5)" href="#hitparade-rabbit-hit" x="-5" y="-5" />
								</g>
								<g style:cursor="pointer">
									<animate
										attributeName="display"
										to="none"
										fill="freeze"
										dur="0.1s"
										calcMode="discrete"
										begin="click"
										id="hitparadeGameRabbitHit{i}"
									/>
									<use transform="scale(1.5)" href="#hitparade-rabbit" x="-5" y="-5" />
								</g>
							</g>
						</g>
					</g>
				</g>
			{/each}
		</g>
	</g>

	<g transform="translate(40 7)">
		<g display="none">
			<animate
				attributeName="display"
				to="initial"
				dur="0.1s"
				calcMode="discrete"
				fill="freeze"
				begin="hitparadeGameStart.begin"
			/>
			<g
				fill="currentColor"
				font-size="4"
				font-weight="bold"
				font-family="sans-serif"
				text-anchor="middle"
			>
				<g transform="translate({80 * rabbits.length * -1} 0)">
					{#each Array(rabbits.length) as _, i}
						<animateTransform
							attributeName="transform"
							type="translate"
							fill="freeze"
							dur="0.1s"
							calcMode="discrete"
							by="80 0"
							begin="hitparadeGameRabbitHit{i}.begin"
						/>
					{/each}

					{#each Array(rabbits.length + 1) as _, i}
						<text transform="translate({80 * i} 0)">
							<tspan fill="#e60c0a">{Math.max(0, i - (rabbits.length - winCondition))}</tspan>
							more!
						</text>
					{/each}
				</g>
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
			<animate
				attributeName="opacity"
				to="0"
				fill="freeze"
				dur="0.1s"
				begin="hitparadeGameStart.begin"
			/>
			<text> Smash! </text>
		</g>
	</g>

	<rect style:cursor="pointer" width="80" height="50" opacity="0">
		<animate
			id="hitparadeGameStart"
			attributeName="display"
			to="none"
			fill="freeze"
			begin="click"
			dur="0.1s"
			restart="never"
		/>
	</rect>

	<g display="none">
		<animate
			attributeName="display"
			to="initial"
			fill="freeze"
			dur="0.1s"
			calcMode="discrete"
			begin="hitparadeGameRabbit{rabbits.length - 1}.end"
			id="hitparadeGameMessage"
		/>

		<g transform="translate(40 25)">
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
				<g transform="translate({80 * rabbits.length * -1} 0)">
					{#each Array(rabbits.length) as _, i}
						<animateTransform
							attributeName="transform"
							type="translate"
							fill="freeze"
							dur="0.1s"
							calcMode="discrete"
							by="80 0"
							begin="hitparadeGameRabbitHit{i}.begin"
						/>
					{/each}

					<g>
						<animateTransform
							attributeName="transform"
							type="translate"
							to="0 1"
							dur="0.25s"
							repeatCount="indefinite"
							begin="hitparadeGameMessage.begin"
							end="hitparadeGameEnd.end"
							fill="freeze"
							calcMode="discrete"
						/>
						{#each Array(rabbits.length + 1) as _, i}
							<text transform="translate({80 * i} 0)">
								{#each `${i < rabbits.length - winCondition + 1 ? 'You did it!' : 'Too bad...'}`.split('') as l, j}
									<tspan dx="0.5" dy={j % 2 === 0 ? 0.5 : -0.5}>{l}</tspan>
								{/each}
							</text>
						{/each}
					</g>
				</g>
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
				id="hitparadeGameEnd"
			/>
		</rect>
	</g>
</svg>
