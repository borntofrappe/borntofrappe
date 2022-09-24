<script>
	const width = 80;
	const height = 50;

	const sizes = {
		cloud: [10, 12],
		target: 12,
		spaceship: 16
	};

	const durations = {
		target: 8
	};

	const getXCloud = (size = 10) => 1 + Math.floor(Math.random() * (width - size - 2));

	const clouds = [];

	let yCloud = 1;
	const parallax = height * 4;
	const sizeCloud = Math.max(...sizes.cloud);
	do {
		const size = sizes.cloud[clouds.length % 2 === 0 ? 0 : 1];

		clouds.push({
			x: getXCloud(size),
			y: yCloud,
			size,
			sprite: Math.floor(Math.random() * 2)
		});

		yCloud += size;
	} while (yCloud < parallax - sizeCloud);

	const getXTarget = (size = 10, i = 0) => {
		const x = Math.floor(Math.random() * (width / 2 - size));
		return i % 2 === 0 ? x : x + width / 2;
	};

	const targets = Array(2)
		.fill()
		.map((_, i) => {
			const size = sizes.target;

			const x = getXTarget(size, i);
			const y = i * sizes.target;

			const duration = durations.target;

			const movesRight = x + size < width / 2;
			const moves = movesRight ? [x, width - size, 0, x] : [x, 0, width - size, x];
			const values = moves.map((d) => `${d} 0`).join(';');

			const distances = moves.slice(0, -1).map((d, i) => Math.abs(moves[i + 1] - d));
			const distance = distances.reduce((acc, curr) => acc + curr, 0);
			const times = distances.reduce(
				(acc, curr) => [...acc, acc[acc.length - 1] + curr / distance],
				[0]
			);
			times[times.length - 1] = 1;
			const keyTimes = times.join(';');

			return {
				x,
				y,
				size,
				values,
				duration,
				keyTimes
			};
		});

	const debris = Array(3)
		.fill()
		.map((_, i) => ({
			r: Math.max(0, 5 - i),
			offset: Math.min(9, 3 + i * 2)
		}));

	const { spaceship: size } = sizes;
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<pattern id="time-the-shots-pattern-sea" viewBox="0 0 8 5" width="0.1" height="0.1">
			<rect width="8" height="5" fill="#286bc6" />
			<g fill="none" stroke="#43b5f1" stroke-width="0.5">
				<path d="M 1 2.5 h 0.5 m 0 -0.5 h0.5 m 0 0.5 h1" />
				<path d="M 4.5 1 h 0.5 m 0 -0.5 h0.5 m 0 0.5 h1" />
				<path d="M 3.5 4 h 0.5 m 0 -0.5 h0.5 m 0 0.5 h1" />
			</g>
		</pattern>

		<pattern
			id="time-the-shots-pattern-overlay"
			viewBox="0 0 2 2"
			width="3"
			height="3"
			patternUnits="userSpaceOnUse"
		>
			<g opacity="0.4">
				<rect width="1" height="1" />
				<rect x="1" y="1" width="1" height="1" />
			</g>
		</pattern>

		<g id="time-the-shots-cloud">
			<path
				d="M -6 -9.5 a 7.5 7.5 0 0 1 12 0 7.5 7.5 0 0 1 12 5 7 7 0 0 1 5 12 6.5 6.5 0 0 1 -11 6 7 7 0 0 1 -12 0 7 7 0 0 1 -12 0 6.5 6.5 0 0 1 -11 -6 7 7 0 0 1 5 -12 7.5 7.5 0 0 1 12 -5"
			/>
		</g>

		<symbol id="time-the-shots-cloud-0" viewBox="-27 -14.5 54 33.5">
			<g stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
				<path
					d="M -6 -9.5 a 7.5 7.5 0 0 1 12 0 7.5 7.5 0 0 1 12 5 7 7 0 0 1 5 12 6.5 6.5 0 0 1 -11 6 7 7 0 0 1 -12 0 7 7 0 0 1 -12 0 6.5 6.5 0 0 1 -11 -6 7 7 0 0 1 5 -12 7.5 7.5 0 0 1 12 -5"
				/>
				<use href="#time-the-shots-cloud" fill="#f2f2f2" stroke="#c5c9cc" />
				<use
					href="#time-the-shots-cloud"
					fill="url(#time-the-shots-pattern-overlay)"
					stroke="url(#time-the-shots-pattern-overlay)"
				/>
			</g>
		</symbol>

		<symbol id="time-the-shots-cloud-1" viewBox="-27 -14.5 54 33.5">
			<g stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
				<path
					d="M -6 -9.5 a 7.5 7.5 0 0 1 12 0 7.5 7.5 0 0 1 12 5 7 7 0 0 1 5 12 6.5 6.5 0 0 1 -11 6 7 7 0 0 1 -12 0 7 7 0 0 1 -12 0 6.5 6.5 0 0 1 -11 -6 7 7 0 0 1 5 -12 7.5 7.5 0 0 1 12 -5"
				/>
				<use href="#time-the-shots-cloud" fill="#c2c2c2" stroke="#808281" />
				<use
					href="#time-the-shots-cloud"
					fill="url(#time-the-shots-pattern-overlay)"
					stroke="url(#time-the-shots-pattern-overlay)"
				/>
			</g>
		</symbol>

		<symbol id="time-the-shots-target" viewBox="-17.5 -19 35 26">
			<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
				<g fill="#fec749">
					<ellipse transform="translate(-7 -1)" rx="6.5" ry="5.5" />
					<ellipse transform="translate(7 -1)" rx="6.5" ry="5.5" />
					<ellipse transform="translate(0 0.5)" rx="6.5" ry="5.5" />
				</g>
				<path fill="#5589a3" d="M -9 -9.5 a 17 6.25 0 1 0 18 0 30 30 0 0 1 -18 0" />
				<path fill="#3dbfb3" d="M -9 -9.5 a 9.1 9.1 0 0 1 18 0 30 30 0 0 1 -18 0" />
			</g>
		</symbol>

		{#each debris as { r, offset }, i}
			<symbol id="time-the-shots-debris-{i}" viewBox="-17.5 -19 35 26">
				<g
					transform="translate(0 -6)"
					fill="#fc5157"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<circle {r} cx={offset} cy={offset} />
					<circle {r} cx={offset * -1} cy={offset} />
					<circle {r} cx={offset * -1} cy={offset * -1} />
					<circle {r} cx={offset} cy={offset * -1} />
					<circle {r} />
				</g>
			</symbol>
		{/each}

		<symbol id="time-the-shots-spaceship" viewBox="-20 -20 40 40">
			<g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round">
				<g fill="currentColor">
					<path d="M -18 9 a 25 25 0 0 1 16 -10 a 10 10 0 0 0 -16 10" />
					<path transform="scale(-1 1)" d="M -18 9 a 25 25 0 0 1 16 -10 a 10 10 0 0 0 -16 10" />
				</g>
				<g fill="#fec749">
					<ellipse cx="-6" cy="5.5" rx="4" ry="4" />
					<ellipse cx="6" cy="5.5" rx="4" ry="4" />
					<ellipse cy="7" rx="4.5" ry="4" />
				</g>
				<g fill="#cf6bef">
					<ellipse transform="translate(-7.5 1)" rx="7" ry="6" />
					<ellipse transform="translate(7.5 1)" rx="7" ry="6" />
					<ellipse rx="9" ry="8" stroke-dasharray="14.5 6 35" stroke-dashoffset="-6" />
				</g>
			</g>
		</symbol>
	</defs>

	<rect width="80" height="50" fill="url(#time-the-shots-pattern-sea)" />

	<g>
		<animateTransform
			begin="timeTheShotsStart.begin"
			end="timeTheShotsEnd.begin"
			attributeName="transform"
			type="translate"
			to="0 {parallax}"
			dur="10s"
			repeatCount="indefinite"
			fill="freeze"
		/>
		{#each clouds as { x, y, size, sprite }}
			<svg {x} {y} width={size} height={size}>
				<use href="#time-the-shots-cloud-{sprite}" />
			</svg>
			<svg {x} y={y - parallax} width={size} height={size}>
				<use href="#time-the-shots-cloud-{sprite}" />
			</svg>
		{/each}
	</g>

	<g>
		{#each targets as { x, y, size, duration, values, keyTimes }, i}
			<g transform="translate({x} 0)">
				<animateTransform
					begin="timeTheShotsStart.begin"
					end="timeTheShotsTarget{i}.begin"
					attributeName="transform"
					type="translate"
					{values}
					{keyTimes}
					dur="{duration}s"
					repeatCount="indefinite"
					fill="freeze"
				/>
				<svg {y} width={size} height={size}>
					<use href="#time-the-shots-debris">
						<animate
							begin="timeTheShotsTarget{i}.begin"
							attributeName="href"
							values={debris.map((_, i) => `#time-the-shots-debris-${i}`).join(';')}
							dur="0.12s"
							calcMode="discrete"
						/>
					</use>
					<!-- temp trigger -->
					<use style:cursor="pointer" href="#time-the-shots-target">
						<set
							id="timeTheShotsTarget{i}"
							begin="click"
							attributeName="display"
							to="none"
							fill="freeze"
							restart="never"
						/>
					</use>
				</svg>
			</g>
		{/each}
	</g>

	<g transform="translate(40 52)">
		<g>
			<animateTransform
				id="timeTheShotsSpaceship"
				begin="timeTheShotsStart.begin"
				end="timeTheShotsEnd.begin"
				attributeName="transform"
				type="translate"
				to="0 -0.5"
				dur="0.3s"
				calcMode="discrete"
				repeatCount="indefinite"
			/>
			<svg x={-size / 2} y={-size} width={size} height={size}>
				<use href="#time-the-shots-spaceship" />
			</svg>
		</g>
	</g>

	<g style:cursor="pointer">
		<set
			id="timeTheShotsStart"
			begin="click"
			attributeName="display"
			to="none"
			fill="freeze"
			restart="never"
		/>
		<!-- temp visual	 -->
		<g
			transform="translate(40 25)"
			text-anchor="middle"
			dominant-baseline="central"
			fill="hsl(0, 0%, 100%)"
			font-size="5"
		>
			<text>click to start</text>
		</g>
		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
