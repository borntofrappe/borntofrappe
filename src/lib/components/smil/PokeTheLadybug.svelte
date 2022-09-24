<script>
	import AnimatedText from './helpers/AnimatedText.svelte';

	const sprites = 4;

	const dCircle = ({ radius, points }) => {
		let p = points || radius * 2;
		if (p % 2 !== 0) p++;

		const pts = Array(p)
			.fill()
			.map((_, i, { length }) => {
				const distance = i % 2 !== 0 ? radius + Math.random() / 2 : radius - Math.random() / 2;
				const angle = (((360 / length) * i) / 180) * Math.PI;
				const x = Math.cos(angle) * distance;
				const y = Math.sin(angle) * distance;
				return {
					x,
					y
				};
			});

		return [...pts, { x: pts[0].x, y: pts[0].y }].reduce(
			(acc, { x, y }, i) => (i % 2 === 0 ? `${acc} ${x} ${y}` : `${acc} Q ${x} ${y}`),
			'M'
		);
	};

	const dLine = ({ x1, y1, x2, y2, points }) => {
		const p = points || Math.floor(((x1 - x2) ** 2 + (y1 - y2) ** 2) ** 0.5 / 2);

		const dx = (x2 - x1) / p;
		const dy = (y2 - y1) / p;

		return `M ${x1} ${y1} ${Array(p)
			.fill()
			.map((_, i) => {
				const x = x1 + dx * i + Math.random() - 0.5;
				const y = y1 + dy * i + Math.random() - 0.5;
				return {
					x,
					y
				};
			})
			.reduce((acc, { x, y }) => `${acc} ${x} ${y}`, '')} ${x2} ${y2}`;
	};
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<pattern
			id="poke-the-ladybug-pattern-grass"
			viewBox="0 0 10 10"
			patternUnits="userSpaceOnUse"
			width="4"
			height="4"
		>
			<rect fill="#73d23a" width="10" height="10" />

			<g fill="#eef7ee">
				<circle r="0.5" cx="1" cy="2" />
				<circle r="0.5" cx="1.5" cy="4" />
				<circle r="0.5" cx="1.5" cy="7.5" />
				<circle r="0.5" cx="2.5" cy="8.5" />
				<circle r="0.5" cx="4.5" cy="1" />
				<circle r="0.5" cx="7" cy="2" />
				<circle r="0.5" cx="5" cy="3.5" />
				<circle r="0.5" cx="8" cy="0" />
				<circle r="0.5" cx="8" cy="10" />
				<circle r="0.5" cx="0" cy="3" />
				<circle r="0.5" cx="10" cy="3" />
				<circle r="0.5" cx="4" cy="5" />
				<circle r="0.5" cx="6" cy="6" />
				<circle r="0.5" cx="5" cy="8.5" />
				<circle r="0.5" cx="8" cy="5" />
				<circle r="0.5" cx="7.5" cy="9" />
			</g>
		</pattern>
	</defs>
	<rect fill="url(#poke-the-ladybug-pattern-grass)" width="80" height="50" />

	<g>
		<g transform="translate(12.5 12.5)">
			<g id="poke-the-ladybug-rock">
				<path
					fill="#bdbebd"
					stroke="#7b7e7b"
					stroke-width="0.25"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M 0 0 2 -3 9 -5 12 -4 14 1 12 4 2 4z"
				/>
				<path fill="#7b7e7b" d="M 0 0 2 4 12 4 14 1 11.5 2.5 2.5 3" />

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
		</g>
		<use href="#poke-the-ladybug-rock" transform="translate(5 17.5)" />
		<use href="#poke-the-ladybug-rock" transform="translate(60 15)" />
		<use href="#poke-the-ladybug-rock" transform="translate(25 35) scale(-1 1)" />
		<use href="#poke-the-ladybug-rock" transform="translate(70 35) scale(-1 1)" />
		<use href="#poke-the-ladybug-rock" transform="translate(65 40) scale(-1 1)" />
	</g>

	<g transform="translate(40 25)">
		<g style:cursor="pointer">
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
			<g>
				<animateTransform
					begin="pokeTheLadybugStart.begin"
					end="pokeTheLadybugPoked.end"
					attributeName="transform"
					type="translate"
					dur="{sprites * 0.15}s"
					values={Array(sprites)
						.fill()
						.map((_, i) => `${80 * i} 0`)
						.join(';')}
					calcMode="discrete"
					repeatCount="indefinite"
					fill="freeze"
				/>
				{#each Array(sprites) as _, i}
					<g transform="translate({80 * i * -1} 0)">
						<g transform="translate(0 -8)">
							<path fill="#192d10" d={dCircle({ radius: 6 })} />

							<g transform="translate(0 -3.5)">
								<g fill="#f7f7f7">
									<path transform="translate(-2 0)" d={dCircle({ radius: 1.25, points: 5 })} />
									<path transform="translate(2 0)" d={dCircle({ radius: 1.25, points: 5 })} />
								</g>
							</g>
						</g>

						<path fill="#f70000" stroke="none" stroke-width="0.5" d={dCircle({ radius: 10 })} />

						<g fill="#192d10">
							<path transform="translate(-5 -1)" d={dCircle({ radius: 3.6, points: 10 })} />
							<path transform="translate(5 1)" d={dCircle({ radius: 3.6, points: 10 })} />
						</g>

						<path
							fill="none"
							stroke="#192d10"
							stroke-width="0.5"
							stroke-linecap="square"
							stroke-linejoin="round"
							d={dLine({ x1: 0, y1: -9.5, x2: -0, y2: 9.5, points: 7 })}
						/>
					</g>
				{/each}
			</g>
		</g>
	</g>

	<g display="none">
		<set
			id="pokeTheLadybugMessage"
			begin="pokeTheLadybugPoked.end"
			attributeName="display"
			to="initial"
			fill="freeze"
		/>
		<g transform="translate(40 25)">
			<AnimatedText
				text="You did it!"
				begin="pokeTheLadybugMessage.begin"
				end="pokeTheLadybugEnd.begin"
				fill="url(#linear-gradient-text)"
			/>
		</g>
		<g style:cursor="pointer">
			<set id="pokeTheLadybugEnd" begin="click" attributeName="display" to="none" fill="freeze" />
			<rect width="80" height="50" opacity="0" />
		</g>
	</g>

	<g style:cursor="pointer">
		<set id="pokeTheLadybugStart" begin="click" attributeName="display" to="none" fill="freeze" />
		<g transform="translate(40 25)">
			<AnimatedText text="Poke!" repeat={false} begin="2s" fill="url(#linear-gradient-text)" />
		</g>
		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
