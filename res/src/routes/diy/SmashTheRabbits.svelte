<script>
	import Title from './Title.svelte';
	import AnimatedTitle from './AnimatedTitle.svelte';

	const holes = [
		{ cx: 25, cy: 26, rx: 9, ry: 3.5 },
		{ cx: 55, cy: 26, rx: 9, ry: 3.5 },
		{ cx: 15, cy: 40, rx: 9, ry: 3.5 },
		{ cx: 40, cy: 40, rx: 9, ry: 3.5 },
		{ cx: 65, cy: 40, rx: 9, ry: 3.5 }
	].map((hole, i) => ({
		...hole,
		id: `smash-the-rabbits-clip-hole-${i}`
	}));

	const start = `smashTheRabbitsRabbitStart`;
	const winCondition = 3;
	const targets = winCondition + 1 + Math.floor(Math.random() * 3);

	const delays = Array(targets)
		.fill()
		.map((_) => Math.floor(Math.random() * 3) + 1)
		.reduce(
			(acc, curr, i) => (i === 0 ? [...acc, curr] : [...acc, curr + acc[acc.length - 1]]),
			[]
		);

	const rabbits = delays.map((delay, i) => {
		const { cx, cy, ry, id } = holes[Math.floor(Math.random() * holes.length)];
		const clipPath = `url(#${id})`;

		const width = 14;
		const height = width;
		const x = cx - width / 2;
		const y = cy + ry;
		const begin = `${start}.begin + ${delay}s`;
		const dy = (height + 1) * -1;
		const dur = 1.5 + Math.random() * 1.5;
		const ids = {
			move: `smashTheRabbitsRabbitMove${i}`,
			hit: `smashTheRabbitsRabbitHit${i}`
		};

		return {
			x,
			y,
			width,
			height,
			begin,
			dy,
			dur,
			clipPath,
			ids
		};
	});

	const feedback = Array(rabbits.length + 1)
		.fill()
		.map((_, i) => {
			const counter = Math.max(0, i - (rabbits.length - winCondition));
			const message = i < rabbits.length - winCondition + 1 ? 'And then some!' : 'Missed some...';

			return {
				counter,
				message
			};
		});
</script>

<svg style="display: block;" viewBox="0 0 80 50">
	<title>Smash the rabbits!</title>

	<defs>
		<pattern
			id="smash-the-rabbits-pattern-grass"
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

		<symbol id="smash-the-rabbits-rabbit" viewBox="-5 -2 10 10">
			<g stroke="currentColor" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round">
				<g fill="#f7f7f7">
					<path
						d="M -0.5 0 q 0.5 -0.2 1 0 c 0.5 -1 1.25 -1.75 1.75 -1.75 c 0.5 0 0.5 1.25 -0.25 2.25 c 0.5 1 0.5 2.5 0.25 3.75 c 1.5 -3 1.75 0.25 0.5 1 c 0.5 -0.25 1.75 0.25 0.5 1.75 c -1 1.25 -1.5 0.5 -1.25 -0.25 c -1 1.25 -3 1.25 -4 0 c 0.25 0.75 -0.25 1.5 -1.25 0.25 c -1.25 -1.5 0 -2 0.5 -1.75 c -1.25 -0.75 -1 -4 0.5 -1 c -0.25 -1.25 -0.25 -2.75 0.25 -3.75 c -0.75 -1 -0.75 -2.25 -0.25 -2.25 c 0.5 0 1.25 0.75 1.75 1.75"
					/>
				</g>
				<g fill="none">
					<path d="M 0 3 v 0.75" />
					<path d="M 0 3.75 a 0.3 0.3 0 0 0 0.6 0" />
					<path d="M 0 3.75 a 0.3 0.3 0 0 1 -0.6 0" />
				</g>
			</g>
			<g fill="currentColor">
				<circle r="0.4" cx="0" cy="3" />
				<circle r="0.4" cx="1" cy="1.75" />
				<circle r="0.4" cx="-1" cy="1.75" />
			</g>
		</symbol>

		<symbol id="smash-the-rabbits-rabbit-hit" viewBox="-5 -2 10 10">
			<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
				<g fill="#f7f7f7" stroke-width="0.25">
					<path
						d="M -0.5 0 q 0.5 -0.2 1 0 c 1 -1 2 -1 2 -1 c 1.75 0 1 4 -0.5 1.5 c 0.5 1 0.5 2.5 0.25 3.75 c 0.5 0.25 0.75 0.5 0.5 1 c 0.5 -0.25 1.75 0.25 0.5 1.75 c -1 1.25 -1.5 0.5 -1.25 -0.25 c -1 1.25 -3 1.25 -4 0 c 0.25 0.75 -0.25 1.5 -1.25 0.25 c -1.25 -1.5 0 -2 0.5 -1.75 c -0.25 -0.5  0 -0.75 0.5 -1 c -0.25 -1.25 -0.25 -2.75 0.25 -3.75 c -1.5 2.5 -2.25 -1.5 -0.5 -1.5 c 0 0 1 0 2 1"
					/>
				</g>

				<g fill="none">
					<g stroke-width="0.25">
						<path d="M 2.75 5.25 c -0.25 0.5 -1.25 1.25 -1.75 1 c -0.5 -0.25 -0 -1 0.5 -1.25" />
						<path
							transform="scale(-1 1)"
							d="M 2.75 5.25 c -0.25 0.5 -1.25 1.25 -1.75 1 c -0.5 -0.25 -0 -1 0.5 -1.25"
						/>
						<g transform="translate(1 1.75)">
							<path d="M -0.25 -0.25 l 0.5 0.5 M -0.25 0.25 l 0.5 -0.5" />
						</g>
						<g transform="translate(-1 1.75)">
							<path d="M -0.25 -0.25 l 0.5 0.5 M -0.25 0.25 l 0.5 -0.5" />
						</g>
					</g>
					<path stroke-width="0.5" d="M 0 4 v 0.25" />
				</g>
			</g>
			<circle fill="currentColor" r="0.4" cx="0" cy="3" />
		</symbol>

		{#each holes as { cx, cy, rx, ry, id }}
			<clipPath {id}>
				<ellipse {cx} {cy} {rx} {ry} />
				<path d="M {cx - rx} {cy} v -50 h {rx * 2} v 50z" />
			</clipPath>
		{/each}
	</defs>

	<rect fill="url(#smash-the-rabbits-pattern-grass)" width="80" height="50" />
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
				<ellipse transform="scale(1.08 1.25)" fill="#bc4701" cy="-{ry}" {rx} {ry} />
				<ellipse transform="scale(1.05 1.12)" fill="#f5ab26" cy="-{ry}" {rx} {ry} />
				<ellipse fill="currentColor" cy="-{ry}" {rx} {ry} />
			</g>
		{/each}
	</g>

	<g>
		{#each rabbits as { x, y, width, height, begin, dy, dur, clipPath, ids }}
			<g clip-path={clipPath}>
				<g transform="translate({x} {y})">
					<g>
						<animateTransform
							id={ids.move}
							attributeName="transform"
							type="translate"
							{begin}
							values="0 0; 0 {dy}; 0 0"
							{dur}
							calcMode="spline"
							keyTimes="0; 0.5; 1"
							keySplines="0.5 0 0.5 1; 0.5 0 0.5 1;"
						/>
						<g style="cursor: pointer">
							<set
								begin="{ids.hit}.begin"
								attributeType="CSS"
								attributeName="cursor"
								to="initial"
								fill="freeze"
							/>
							<use href="#smash-the-rabbits-rabbit" {width} {height}>
								<set
									id={ids.hit}
									begin="click"
									attributeName="href"
									to="#smash-the-rabbits-rabbit-hit"
									fill="freeze"
									restart="never"
								/>
							</use>
						</g>
					</g>
				</g>
			</g>
		{/each}
	</g>

	<g>
		<set attributeName="display" to="none" />
		<set attributeName="display" begin="{start}.begin" to="initial" fill="freeze" />
		<g transform="translate(40 6)">
			<g
				fill="currentColor"
				font-size="4"
				font-weight="bold"
				font-family="sans-serif"
				text-anchor="middle"
			>
				<g transform="translate({80 * rabbits.length * -1} 0)">
					{#each rabbits as { ids }}
						<animateTransform
							begin="{ids.hit}.begin"
							attributeName="transform"
							type="translate"
							by="80 0"
							dur="0.01s"
							calcMode="discrete"
							fill="freeze"
						/>
					{/each}

					{#each feedback as { counter }, i}
						<g transform="translate({80 * i} 0)">
							<text>
								<tspan fill="#bc4701">{counter}</tspan>
								more!
							</text>
						</g>
					{/each}
				</g>
			</g>
		</g>
	</g>

	<g display="none">
		<set
			id="smashTheRabbitsMessage"
			begin="{rabbits[rabbits.length - 1].ids.move}.end"
			attributeName="display"
			to="initial"
			fill="freeze"
		/>
		<g transform="translate({80 * rabbits.length * -1} 0)">
			{#each rabbits as { ids }}
				<animateTransform
					begin="{ids.hit}.begin"
					attributeName="transform"
					type="translate"
					by="80 0"
					fill="freeze"
					dur="0.1s"
					calcMode="discrete"
				/>
			{/each}

			{#each feedback as { message }, i}
				<g transform="translate({80 * i} 0)">
					<AnimatedTitle
						text={message}
						fill="url(#linear-gradient-text)"
						begin="smashTheRabbitsMessage.begin"
						end="smashTheRabbitsEnd.begin"
						repeatCount="indefinite"
					/>
				</g>
			{/each}
		</g>

		<rect style:cursor="pointer" width="80" height="50" opacity="0">
			<set id="smashTheRabbitsEnd" begin="click" attributeName="display" to="none" fill="freeze" />
		</rect>
	</g>

	<g style:cursor="pointer">
		<set id={start} begin="click" attributeName="display" to="none" fill="freeze" />

		<Title fill="url(#linear-gradient-text)">Smash!</Title>

		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
