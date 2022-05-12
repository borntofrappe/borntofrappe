<script>
	const size = 16;
	const width = 80;
	const height = 50;

	const getX = () => Math.floor(Math.random() * (width - size));
	const getY = () => Math.floor(Math.random() * (height - size));

	const getPath = ({ translateX, translateY, thresholdLength = 200 }) => {
		let d = `M 0 0`;
		let length = 0;

		while (length < thresholdLength) {
			const [px, py] = d
				.match(/(-?\d+) (-?\d+)/)
				.slice(1)
				.map((c) => parseInt(c, 10));

			const x = getX() - translateX;
			const y = getY() - translateY;
			const distance = ((x - px) ** 2 + (y - py) ** 2) ** 0.5;

			d += ` ${x} ${y}`;
			length += distance;
		}
		return `${d} 0 0`;
	};

	const x = getX();
	const y = getY();

	const coords = [{ x, y }];

	const ribbon = {
		x,
		y
	};

	const butterflies = Array(3)
		.fill()
		.map(() => {
			let x = getX();
			let y = getY();
			while (true) {
				let overlaps = false;
				for (const { x: cx, y: cy } of coords) {
					if (x + size > cx && x < cx + size && y + size > cy && y < cy + size) {
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
					break;
				}
			}

			return {
				x,
				y,
				path: getPath({ translateX: x, translateY: y })
			};
		});
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<pattern id="find-the-butterflies-pattern-bricks" viewBox="0 0 8 5" width="0.12" height="0.12">
			<rect fill="#bd4900" width="8" height="5" />
			<g fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="square">
				<path d="M 7.75 0 v 2.375 h -7.75 m 3.875 0 v 2.375 m -3.875 0h 7.75" />
			</g>
		</pattern>
	</defs>

	<rect fill="url(#find-the-butterflies-pattern-bricks)" width="80" height="50" />
	<g transform="translate({ribbon.x} {ribbon.y})">
		<g transform="translate(8 6) scale(0.7)">
			<g stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
				<g fill="#2969bd">
					<path d="M 0 1 c 0 2 1 8 2 8 1 -2 3 -1 3 -2z" />
					<path transform="scale(-1 1)" d="M 0 1 c 0 2 1 8 2 8 1 -2 3 -1 3 -2z" />
					<path d="M 0 0 c 0 -4 10 -8 6 1 3 6 -6 6 -6 -1" />
					<path transform="scale(-1 1)" d="M 0 0 c 0 -4 10 -8 6 1 3 6 -6 6 -6 -1" />
				</g>
				<g fill="none">
					<path d="M 0 0.25 c 1 -2 5 -2 3.8 0" />
					<path transform="scale(-1 1)" d="M 0 0.25 c 1 -2 5 -2 3.8 0" />
				</g>
				<rect fill="#2969bd" x="-1.4" y="-0.6" width="2.8" height="3.2" rx="1" />
			</g>
		</g>
	</g>

	{#each butterflies as { x, y, path }, i}
		<g transform="translate({x} {y})">
			<g transform="translate(8 6) scale(0.7)">
				<g style:cursor="pointer">
					<animateTransform
						attributeName="transform"
						type="scale"
						values="1; 1.02"
						dur="0.2s"
						fill="freeze"
						begin="click"
						id="findTheButterfliesButterfly{i}"
						restart="never"
					/>
					<g>
						<animateMotion
							{path}
							dur="12s"
							repeatCount="indefinite"
							fill="freeze"
							begin="findTheButterfliesButterfly{i}.begin"
							end="findTheButterfliesEnd.end"
						/>

						<g
							stroke="currentColor"
							stroke-width="0.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<g fill="#2969bd">
								<g>
									<animateTransform
										attributeName="transform"
										type="scale"
										values="0.6 1; 1 1"
										dur="0.2s"
										calcMode="discrete"
										repeatCount="indefinite"
										fill="freeze"
										begin="findTheButterfliesButterfly{i}.begin"
										end="findTheButterfliesEnd.end"
									/>
									<path
										fill="currentColor"
										transform="translate(0.5 3) scale(1.05 1.08)"
										d="M 0 0 c 0 -5 11.5 -9 5 1 3 6 -4 8 -5 -1"
									/>
									<path d="M 0 3 c 0 -5 11.5 -9 5 1 3 6 -4 8 -5 -1" />

									<g transform="scale(-1 1)">
										<path
											fill="currentColor"
											transform="translate(0.5 3) scale(1.05 1.08)"
											d="M 0 0 c 0 -5 11.5 -9 5 1 3 6 -4 8 -5 -1"
										/>
										<path d="M 0 3 c 0 -5 11.5 -9 5 1 3 6 -4 8 -5 -1" />
									</g>
								</g>
							</g>

							<path fill="#2969bd" d="M 0 0 c 2.5 3 3.5 7 0 9 -3.5 -2 -2.5 -6 0 -9" />

							<g fill="none">
								<path
									transform="translate(0.5 -1.5) rotate(-40)"
									d="M 0 0.25 c 1 -2 5 -2 3.8 0 t -0.25 -1"
								/>
								<path
									transform="scale(-1 1) translate(0.5 -1.5) rotate(-40)"
									d="M 0 0.25 c 1 -2 5 -2 3.8 0 t -0.25 -1"
								/>
							</g>
							<path fill="#2969bd" d="M 0 -1.5 c -1 0 -3 3 0 3 3 0 1 -3 0 -3" />
							<g fill="#10bec5" stroke="none">
								<path transform="translate(1 -0.5) rotate(-30)" d="M 0 -0.8 q 2 0.8 0 1.6z" />
								<path
									transform="scale(-1 1) translate(1 -0.5) rotate(-30)"
									d="M 0 -0.8 q 2 0.8 0 1.6z"
								/>
							</g>
						</g>
					</g>
				</g>
			</g>
		</g>
	{/each}

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
				begin="findTheButterfliesStart.begin"
			/>
			<text> Butterflies? </text>
		</g>
	</g>

	<rect style:cursor="pointer" width="80" height="50" opacity="0">
		<animate
			id="findTheButterfliesStart"
			attributeName="display"
			to="none"
			fill="freeze"
			begin="click"
			dur="0.1s"
			restart="never"
		/>
	</rect>

	<g transform="translate({80 * butterflies.length * -1} 0)">
		{#each butterflies as _, i}
			<animateTransform
				attributeName="transform"
				type="translate"
				by="80 0"
				fill="freeze"
				dur="0.1s"
				calcMode="discrete"
				begin="findTheButterfliesButterfly{i}.begin"
			/>
		{/each}
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
				<animateTransform
					attributeName="transform"
					type="translate"
					to="0 1"
					dur="0.25s"
					repeatCount="indefinite"
					begin="findTheButterfliesButterfly0.begin"
					end="findTheButterfliesEnd.end"
					fill="freeze"
					calcMode="discrete"
				/>
				<text>
					{#each "That's all!".split('') as l, i}
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
				id="findTheButterfliesEnd"
			/>
		</rect>
	</g>
</svg>
