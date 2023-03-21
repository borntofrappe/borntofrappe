<script>
	import AnimatedTitle from './AnimatedTitle.svelte';

	const dCircle = ({ radius = 20, points = 20, noise = 1 } = {}) => {
		const p = points % 2 === 0 ? points : points + 1;
		const coords = Array(p)
			.fill()
			.map((_, i, { length }) => {
				const n = Math.random() * noise;
				const distance = i % 2 !== 0 ? radius + n : radius - n;
				const angle = (((360 / length) * i) / 180) * Math.PI;
				const x = Math.cos(angle) * distance;
				const y = Math.sin(angle) * distance;
				return {
					x,
					y
				};
			});

		const { x, y } = coords[0];
		return [...coords, { x, y }].reduce(
			(acc, { x, y }, i) => (i % 2 === 0 ? `${acc} ${x} ${y}` : `${acc} Q ${x} ${y}`),
			'M'
		);
	};

	const dLine = ({ x1 = 0, y1 = 0, x2 = 10, y2 = 10, noise = 1, points } = {}) => {
		const p = points || Math.floor(((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5 / 2);

		const sx = (x2 - x1) / (p - 1);
		const sy = (y2 - y1) / (p - 1);

		const coords = Array(p)
			.fill()
			.map((_, i) => {
				const x = x1 + sx * i + (Math.random() * noise - noise / 2);
				const y = y1 + sy * i + (Math.random() * noise - noise / 2);
				return {
					x,
					y
				};
			});

		return coords.reduce((acc, { x, y }) => `${acc} ${x} ${y}`, 'M');
	};

	const sprites = 4;

	const ids = Array(sprites)
		.fill()
		.map((_, i) => `poke-the-ladybug-ladybug-${i}`);
	const hrefs = ids.map((id) => `#${id}`);
	const [href] = hrefs;
	const values = hrefs.join(';');
	const dur = `${ids.length * 0.14}s`;

	const objects = ids.map((id) => ({
		id,
		body: dCircle({ radius: 10, points: 22, noise: 0.6 }),
		head: dCircle({ radius: 6, points: 16, noise: 0.4 }),
		eyeLeft: dCircle({ radius: 1.2, points: 5, noise: 0.3 }),
		eyeRight: dCircle({ radius: 1.2, points: 5, noise: 0.3 }),
		dotLeft: dCircle({ radius: 3.5, points: 12, noise: 0.4 }),
		dotRight: dCircle({ radius: 3.5, points: 12, noise: 0.4 }),
		line: dLine({ x1: 0, y1: -10, x2: 0, y2: 9.5, noise: 0.7 })
	}));
</script>

<svg style="display: block;" viewBox="0 0 80 50">
	<title>Poke the ladybug!</title>

	<defs>
		<pattern
			id="poke-the-ladybug-pattern-grass"
			viewBox="0 0 10 10"
			patternUnits="userSpaceOnUse"
			width="5"
			height="5"
		>
			<rect fill="#73d23a" width="10" height="10" />
			<g fill="#eef7ee">
				<circle r="0.4" cx="1" cy="2" />
				<circle r="0.4" cx="1.5" cy="4" />
				<circle r="0.4" cx="1.5" cy="7.5" />
				<circle r="0.4" cx="2.5" cy="8.5" />
				<circle r="0.4" cx="4.5" cy="1" />
				<circle r="0.4" cx="7" cy="2" />
				<circle r="0.4" cx="5" cy="3.5" />
				<circle r="0.4" cx="8" cy="0" />
				<circle r="0.4" cx="8" cy="10" />
				<circle r="0.4" cx="0" cy="3" />
				<circle r="0.4" cx="10" cy="3" />
				<circle r="0.4" cx="4" cy="5" />
				<circle r="0.4" cx="6" cy="6" />
				<circle r="0.4" cx="5" cy="8.5" />
				<circle r="0.4" cx="8" cy="5" />
				<circle r="0.4" cx="7.5" cy="9" />
			</g>
		</pattern>

		<g id="poke-the-ladybug-rock">
			<g stroke="#7b7e7b" stroke-width="0.25" stroke-linecap="round" stroke-linejoin="round">
				<path fill="#bdbebd" d="M 0 0 2 -3 9 -5 12 -4 14 1 12 4 2 4z" />
				<path fill="#7b7e7b" d="M 0 0 2 4 12 4 14 1 11.5 2.5 2.5 3" />
			</g>
			<g fill="#7b7e7b">
				<circle r="0.2" cx="2" cy="-1" />
				<circle r="0.2" cx="7" cy="-2" />
				<circle r="0.2" cx="8" cy="-1.5" />
				<circle r="0.2" cx="9" cy="-3.5" />
				<circle r="0.2" cx="10.5" cy="-3.5" />
				<circle r="0.2" cx="12" cy="-1" />
				<circle r="0.2" cx="11" cy="0.5" />
				<circle r="0.2" cx="10" />
				<circle r="0.2" cx="6.5" />
				<circle r="0.2" cx="7.5" cy="2" />
				<circle r="0.2" cx="6" cy="1.5" />
				<circle r="0.2" cx="3.5" cy="1" />
			</g>
		</g>

		{#each objects as { id, body, head, eyeLeft, eyeRight, dotLeft, dotRight, line }}
			<g {id}>
				<g transform="translate(0 -8)">
					<path d={head} fill="#192d10" />
					<g transform="translate(0 -3.25)">
						<g fill="#f7f7f7">
							<path transform="translate(-2 0)" d={eyeLeft} />
							<path transform="translate(2 0)" d={eyeRight} />
						</g>
					</g>
				</g>

				<path d={body} fill="#f70000" stroke="none" stroke-width="0.5" />

				<g fill="#192d10">
					<path transform="translate(-5 -2)" d={dotLeft} />
					<path transform="translate(5 2)" d={dotRight} />
				</g>

				<path d={line} fill="none" stroke="#192d10" stroke-width="0.5" stroke-linecap="square" />
			</g>
		{/each}
	</defs>

	<rect fill="url(#poke-the-ladybug-pattern-grass)" width="80" height="50" />

	<g>
		<use href="#poke-the-ladybug-rock" transform="translate(12.5 12.5)" />
		<use href="#poke-the-ladybug-rock" transform="translate(5 17.5)" />
		<use href="#poke-the-ladybug-rock" transform="translate(60 15)" />
		<use href="#poke-the-ladybug-rock" transform="translate(25 35) scale(-1 1)" />
		<use href="#poke-the-ladybug-rock" transform="translate(70 35) scale(-1 1)" />
		<use href="#poke-the-ladybug-rock" transform="translate(65 40) scale(-1 1)" />
	</g>

	<g transform="translate(40 25)">
		<g style="cursor: pointer;">
			<animateTransform
				id="pokeTheLadybugPoked"
				begin="click"
				attributeName="transform"
				type="translate"
				to="0 -50"
				dur="2s"
				fill="freeze"
				restart="never"
			/>
			<use {href}>
				<animate
					begin="pokeTheLadybugStart.begin"
					attributeName="href"
					{values}
					{dur}
					calcMode="discrete"
					repeatCount="indefinite"
					fill="freeze"
				/>
			</use>

			<use {href} opacity="0" />
		</g>
	</g>

	<g style="cursor: pointer;">
		<set id="pokeTheLadybugStart" begin="click" attributeName="display" to="none" fill="freeze" />

		<AnimatedTitle text="Poke!" fill="url(#linear-gradient-text)" begin="0.5s" repeatCount="2" />

		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
