<script>
	const dCircle = (r, p = 18) =>
		Array(p)
			.fill()
			.map((_, i, { length }) => {
				const o = i % 2 !== 0 ? r + Math.random() / 2 : r - Math.random() / 2;
				const angle = (((360 / length) * i) / 180) * Math.PI;
				const x = Math.cos(angle) * o;
				const y = Math.sin(angle) * o;
				return {
					x,
					y
				};
			})
			.reduce((acc, { x, y }, i) => (i % 2 === 0 ? `${acc} ${x} ${y}` : `${acc} Q ${x} ${y}`), 'M');

	const dLine = (x1, y1, x2, y2, p = 8) => {
		const dx = (x2 - x1) / p;
		const dy = (y2 - y1) / p;

		return `M ${x1} ${y1}
		${Array(p)
			.fill()
			.map((_, i) => {
				const x = x1 + dx * i + Math.random() - 0.5;
				const y = y1 + dy * i + Math.random() - 0.5;
				return {
					x,
					y
				};
			})
			.reduce((acc, { x, y }) => `${acc} ${x} ${y}`, '')}
		${x2} ${y2}`;
	};

	const sprites = 3;
	const message = 'You did it!';
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<circle id="dot-grass" r="0.5" />
		<pattern
			id="patch-of-grass"
			viewBox="0 0 10 10"
			patternUnits="userSpaceOnUse"
			width="4"
			height="4"
		>
			<rect fill="#73d23a" width="10" height="10" />
			<g fill="#eef7ee">
				<use href="#dot-grass" x="1" y="2" />
				<use href="#dot-grass" x="1.5" y="4" />
				<use href="#dot-grass" x="1.5" y="7.5" />
				<use href="#dot-grass" x="2.5" y="8.5" />
				<use href="#dot-grass" x="4.5" y="1" />
				<use href="#dot-grass" x="7" y="2" />
				<use href="#dot-grass" x="5" y="3.5" />
				<use href="#dot-grass" x="8" y="0" />
				<use href="#dot-grass" x="8" y="10" />
				<use href="#dot-grass" x="0" y="3" />
				<use href="#dot-grass" x="10" y="3" />
				<use href="#dot-grass" x="4" y="5" />
				<use href="#dot-grass" x="6" y="6" />
				<use href="#dot-grass" x="5" y="8.5" />
				<use href="#dot-grass" x="8" y="5" />
				<use href="#dot-grass" x="7.5" y="9" />
			</g>
		</pattern>

		<circle id="dot-rock" r="0.2" />
		<g id="rock">
			<g stroke-linecap="round" stroke-linejoin="round">
				<g stroke="#7b7e7b" stroke-width="0.25">
					<path fill="#bdbebd" d="M 0 0 2 -3 9 -5 12 -4 14 1 12 4 2 4z" />
					<path fill="#7b7e7b" d="M 0 0 2 4 12 4 14 1 11.5 2.5 2.5 3" />
				</g>
				<g fill="#7b7e7b">
					<use href="#dot-rock" x="2" y="-1" />
					<use href="#dot-rock" x="7" y="-2" />
					<use href="#dot-rock" x="8" y="-1.5" />
					<use href="#dot-rock" x="9" y="-3.5" />
					<use href="#dot-rock" x="10.5" y="-3.5" />
					<use href="#dot-rock" x="12" y="-1" />
					<use href="#dot-rock" x="11" y="0.5" />
					<use href="#dot-rock" x="10" />
					<use href="#dot-rock" x="6.5" />
					<use href="#dot-rock" x="7.5" y="2" />
					<use href="#dot-rock" x="6" y="1.5" />
					<use href="#dot-rock" x="3.5" y="1" />
				</g>
			</g>
		</g>
	</defs>

	<rect fill="url(#patch-of-grass)" width="80" height="50" />
	<use transform="translate(12.5 12.5)" href="#rock" />
	<use transform="translate(5 17.5)" href="#rock" />
	<use transform="translate(25 35) scale(-1 1)" href="#rock" />
	<use transform="translate(70 35) scale(-1 1)" href="#rock" />
	<use transform="translate(65 40) scale(-1 1)" href="#rock" />
	<use transform="translate(60 15)" href="#rock" />

	<g transform="translate(40 25)">
		<g display="none" style:cursor="pointer">
			<animate attributeName="display" to="initial" fill="freeze" dur="0.1s" begin="poke.end" />
			<g
				font-size="7"
				font-weight="bold"
				font-family="sans-serif"
				text-anchor="middle"
				dominant-baseline="middle"
				fill="#ffffff"
				stroke="currentColor"
				stroke-width="0.4"
			>
				<g>
					<animateTransform
						id="message"
						attributeName="transform"
						type="translate"
						to="-80 0"
						dur="0.25s"
						begin="poke.end"
						end="click"
						repeatCount="indefinite"
						calcMode="discrete"
					/>
					<text y="-1">
						{#each message.split('') as l, i}
							<tspan dx="0.5" dy={i % 2 === 0 ? 0.5 : -0.5}>
								{l}
							</tspan>
						{/each}
					</text>
					<text x="80" y="-0.5">
						{#each message.split('') as l, i}
							<tspan dx="0.5" dy={i % 2 === 0 ? 0.5 : -0.5}>
								{l}
							</tspan>
						{/each}
					</text>
				</g>
			</g>
		</g>

		<g style:cursor="pointer" transform="translate(0 1)">
			<animateTransform
				id="poke"
				attributeName="transform"
				attributeType="XML"
				type="translate"
				to="0 -50"
				dur="2s"
				begin="click"
				fill="freeze"
			/>
			<g>
				<animateTransform
					attributeName="transform"
					type="translate"
					values={Array(sprites)
						.fill()
						.map((_, i) => `${80 * i * -1} 0`)
						.join(';')}
					dur="{0.2 * sprites}s"
					begin="tap.end"
					repeatCount="indefinite"
					calcMode="discrete"
				/>
				{#each Array(sprites).fill() as _, i}
					<g transform="translate({80 * i} 0)">
						<path fill="currentColor" transform="translate(0 -8.5)" d={dCircle(6)} />
						<g fill="#f7f7f7" transform="translate(0 -11.25)">
							<path transform="translate(-2 0)" d={dCircle(1.5, 8)} />
							<path transform="translate(2 0)" d={dCircle(1.5, 8)} />
						</g>
						<path fill="#f70000" d={dCircle(10)} />
						<g fill="currentColor">
							<path transform="translate(-5 -1.5)" d={dCircle(3.25, 14)} />
							<path transform="translate(5 1.5)" d={dCircle(3.25, 14)} />
						</g>
						<g fill="none" stroke="currentColor" stroke-width="0.4">
							<path d={dLine(0, -9.6, 0, 9.6)} />
						</g>
					</g>
				{/each}
			</g>
		</g>

		<g
			style="pointer-events: none;"
			font-size="7"
			font-weight="bold"
			font-family="sans-serif"
			text-anchor="middle"
			dominant-baseline="middle"
			fill="#ffffff"
			stroke="currentColor"
			stroke-width="0.4"
		>
			<animate attributeName="opacity" values="1; 0;" fill="freeze" dur="0.15s" begin="tap.begin" />
			<text> Poke! </text>
		</g>
	</g>

	<rect style:cursor="pointer" width="80" height="50" opacity="0">
		<animate id="tap" attributeName="display" to="none" fill="freeze" dur="0.15s" begin="click" />
	</rect>
</svg>
