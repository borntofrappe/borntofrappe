<script>
	import AnimatedText from './_helpers/_AnimatedText.svelte';
	import Text from './_helpers/_Text.svelte';

	const width = 80;
	const height = 50;

	const sizes = {
		cloud: [10, 12],
		target: 12,
		shoot: 18,
		spaceship: 16
	};

	const durations = {
		target: 8
	};

	const getXCloud = (size = 10) => 1 + Math.floor(Math.random() * (width - size - 2));

	const clouds = [];
	let yCloud = 1;
	const parallax = height * 3;
	do {
		const size = sizes.cloud[clouds.length % 2 === 0 ? 0 : 1];

		clouds.push({
			x: getXCloud(size),
			y: yCloud,
			size,
			sprite: Math.floor(Math.random() * 2 + 1)
		});

		yCloud += size;
	} while (yCloud < parallax);

	const getXTarget = (i = 0) => {
		const x = Math.floor(Math.random() * (width / 2 - sizes.shoot / 2 - sizes.target));
		return i % 2 === 0 ? x : x + (width / 2 + sizes.shoot / 2);
	};

	const targets = Array(2)
		.fill()
		.map((_, i) => {
			const x = getXTarget(i);
			const y = i * sizes.target;
			const duration = durations.target;

			const movesRight = x + sizes.target < width / 2;
			const moves = movesRight ? [x, width - sizes.target, 0, x] : [x, 0, width - sizes.target, x];
			const values = moves.map((d) => `${d} 0`).join(';');

			const distances = moves.slice(0, -1).map((d, i) => Math.abs(moves[i + 1] - d));
			const distance = distances.reduce((acc, curr) => acc + curr, 0);
			const times = distances.reduce(
				(acc, curr) => [...acc, acc[acc.length - 1] + curr / distance],
				[0]
			);
			times[times.length - 1] = 1;
			const keyTimes = times.join(';');

			const overlayDuration = (sizes.shoot / distance) * durations.target;
			const recurrentGap = (width / 2 - sizes.shoot / 2) * 2 - sizes.target;
			const initialGap = movesRight
				? width / 2 - sizes.shoot / 2 - x - sizes.target
				: x - width / 2 - sizes.shoot / 2;
			const overlayDelays = [initialGap, recurrentGap].map(
				(d) => (d / distance) * durations.target
			);

			return {
				x,
				y,
				values,
				keyTimes,
				duration,
				overlay: {
					duration: overlayDuration,
					delays: overlayDelays
				}
			};
		});

	const projectiles = [
		{ cx: -3, cy: -2, r: 1 },
		{ cx: 3, cy: -2, r: 1 },
		{ cx: 0, cy: -3, r: 1 }
	];

	const debris = Array(3)
		.fill()
		.map((_, i) => ({
			r: Math.max(0, 5 - i),
			offset: Math.min(9, 3 + i * 2)
		}));
</script>

<svg viewBox="0 0 80 50">
	<defs>
		<pattern id="time-the-shots-pattern-background" viewBox="0 0 8 5" width="0.1" height="0.1">
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
				<rect x="1" y="1" width="1" height="1" fill="#" />
			</g>
		</pattern>

		<path
			id="time-the-shots-cloud-shape"
			d="M -6 -9.5 a 7.5 7.5 0 0 1 12 0 7.5 7.5 0 0 1 12 5 7 7 0 0 1 5 12 6.5 6.5 0 0 1 -11 6 7 7 0 0 1 -12 0 7 7 0 0 1 -12 0 6.5 6.5 0 0 1 -11 -6 7 7 0 0 1 5 -12 7.5 7.5 0 0 1 12 -5"
		/>

		<pattern id="time-the-shots-pattern-cloud-1" viewBox="-27 -14.5 54 33.5" width="1" height="1">
			<g stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
				<use fill="#f2f2f2" stroke="#c5c9cc" href="#time-the-shots-cloud-shape" />
				<use
					fill="url(#time-the-shots-pattern-overlay)"
					stroke="url(#time-the-shots-pattern-overlay)"
					href="#time-the-shots-cloud-shape"
				/>
			</g>
		</pattern>

		<pattern id="time-the-shots-pattern-cloud-2" viewBox="-27 -14.5 54 33.5" width="1" height="1">
			<g stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
				<use fill="#c2c2c2" stroke="#808281" href="#time-the-shots-cloud-shape" />
				<use
					fill="url(#time-the-shots-pattern-overlay)"
					stroke="url(#time-the-shots-pattern-overlay)"
					href="#time-the-shots-cloud-shape"
				/>
			</g>
		</pattern>

		{#each debris as { r, offset }, i}
			<pattern
				id="time-the-shots-pattern-debris-{i}"
				viewBox="-17.5 -19 35 26"
				width="1"
				height="1"
			>
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
			</pattern>
		{/each}

		<pattern id="time-the-shots-pattern-target" viewBox="-17.5 -19 35 26" width="1" height="1">
			<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
				<g fill="#fec749">
					<ellipse transform="translate(-7 -1)" rx="6.5" ry="5.5" />
					<ellipse transform="translate(7 -1)" rx="6.5" ry="5.5" />
					<ellipse transform="translate(0 0.5)" rx="6.5" ry="5.5" />
				</g>
				<path fill="#5589a3" d="M -9 -9.5 a 17 6.25 0 1 0 18 0 30 30 0 0 1 -18 0" />
				<path fill="#3dbfb3" d="M -9 -9.5 a 9.1 9.1 0 0 1 18 0 30 30 0 0 1 -18 0" />
			</g>
		</pattern>

		<g id="time-the-shots-target">
			<rect width={sizes.target} height={sizes.target} fill="url(#time-the-shots-pattern-target)" />
			{#each debris as _, i}
				<g transform="translate({width * (i + 1) * -1} 0)">
					<rect
						width={sizes.target}
						height={sizes.target}
						fill="url(#time-the-shots-pattern-debris-{i})"
					/>
				</g>
			{/each}
		</g>

		<pattern id="time-the-shots-pattern-spaceship" viewBox="-20 -20 40 40" width="1" height="1">
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
		</pattern>

		<rect
			id="time-the-shots-spaceship"
			x={(sizes.spaceship / 2) * -1}
			y={(sizes.spaceship / 2) * -1}
			width={sizes.spaceship}
			height={sizes.spaceship}
			fill="url(#time-the-shots-pattern-spaceship)"
		/>
	</defs>

	<rect width="80" height="50" fill="url(#time-the-shots-pattern-background)" />

	<g transform="translate(0 -5)">
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
				<rect
					{x}
					{y}
					width={size}
					height={size}
					fill="url(#time-the-shots-pattern-cloud-{sprite})"
				/>
				<rect
					{x}
					y={y - parallax}
					width={size}
					height={size}
					fill="url(#time-the-shots-pattern-cloud-{sprite})"
				/>
			{/each}
		</g>
	</g>

	<g>
		<g>
			<animateTransform
				id="timeTheShotsEscape"
				begin="timeTheShotsTargetsMissed.end"
				attributeName="transform"
				type="translate"
				to="0 {height * -1}"
				dur="0.75s"
				fill="freeze"
			/>
			{#each targets as { x, y, values, keyTimes }, i}
				<g transform="translate({x} 0)">
					<animateTransform
						attributeName="transform"
						type="translate"
						begin="timeTheShotsStart.begin"
						end="timeTheShotsMiss.begin; timeTheShotsTarget{i}Shot.end; timeTheShotsEnd.begin"
						dur="{durations.target}s"
						{values}
						{keyTimes}
						repeatCount="indefinite"
						fill="freeze"
					/>
					<g>
						<animateTransform
							attributeName="transform"
							type="translate"
							values={Array(debris.length + 2)
								.fill()
								.map((_, i) => `${width * i} 0`)
								.join(';')}
							dur="0.2s"
							calcMode="discrete"
							begin="timeTheShotsTarget{i}Shot.end"
							fill="freeze"
						/>
						<use {y} href="#time-the-shots-target" />
					</g>
				</g>
			{/each}
		</g>
	</g>

	<g transform="translate(40 42)">
		<g>
			<g>
				<animateTransform
					id="timeTheShotsTargetsMissed"
					begin="timeTheShotsMiss.begin"
					attributeName="transform"
					type="translate"
					to="0 {height * -1}"
					dur="0.75s"
					fill="freeze"
				/>
				<animateTransform
					id="timeTheShotsTargetsMercied"
					begin="timeTheShotsMerci.begin"
					attributeName="transform"
					type="translate"
					to="0 {height * -1}"
					dur="0.75s"
				/>
				{#each targets as _, i}
					<animateTransform
						id="timeTheShotsTarget{i}Shot"
						begin="timeTheShotsTarget{i}.begin"
						attributeName="transform"
						type="translate"
						to="0 {height * -1 + 4 + sizes.target * (i + 1)}"
						dur="{Math.max(0.2, 0.4 - 0.1 * i)}s"
					/>
				{/each}
				<g fill="#d44e4a" stroke="currentColor" stroke-width="0.3">
					{#each projectiles as { cx, cy, r }}
						<circle {cx} {cy} {r} />
					{/each}
				</g>
			</g>
		</g>

		<g>
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
				<g>
					<set begin="timeTheShotsMiss.begin" attributeName="display" to="none" fill="freeze" />
					<set begin="timeTheShotsMerci.begin" attributeName="display" to="none" fill="freeze" />
					<set
						begin="timeTheShotsTargetsMercied.end"
						attributeName="display"
						to="initial"
						fill="freeze"
					/>
					{#each targets as _, i}
						<set
							begin="timeTheShotsTarget{i}.begin"
							attributeName="display"
							to="none"
							fill="freeze"
						/>
						<set
							begin="timeTheShotsTarget{i}Shot.end"
							attributeName="display"
							to="initial"
							fill="freeze"
						/>
					{/each}
					<g fill="#d44e4a" stroke="currentColor" stroke-width="0.3">
						{#each projectiles as { cx, cy, r }}
							<circle {cx} {cy} {r} />
						{/each}
					</g>
				</g>
				<use href="#time-the-shots-spaceship" />
			</g>
		</g>
	</g>

	<g>
		<rect style:cursor="pointer" width="80" height="50" opacity="0">
			<set id="timeTheShotsMiss" begin="click" attributeName="display" to="none" fill="freeze" />
		</rect>

		<rect style:cursor="pointer" width="80" height="50" opacity="0">
			<set id="timeTheShotsMerci" begin="click" attributeName="display" to="none" fill="freeze" />
		</rect>
	</g>

	<g>
		{#each targets as { overlay }, i}
			<g style:cursor="pointer" display="none">
				<set
					id="timeTheShotsTarget{i}"
					begin="click"
					attributeName="display"
					to="none"
					fill="freeze"
				/>
				<set
					id="timeTheShotsTarget{i}Engage"
					attributeName="display"
					to="initial"
					begin="timeTheShotsStart.begin + {overlay
						.delays[0]}s; timingPracticeTarget{i}Disengage.begin + {overlay.delays[1]}s"
					end="timeTheShotsTarget{i}.begin; timeTheShotsMiss.begin"
				/>
				<set
					id="timingPracticeTarget{i}Disengage"
					attributeName="display"
					to="none"
					begin="timeTheShotsTarget{i}Engage.begin + {overlay.duration}s"
					end="timeTheShotsTarget{i}.begin; timeTheShotsMiss.begin"
				/>
				<rect width="80" height="50" opacity="0" />
			</g>
		{/each}
	</g>

	<g>
		<g transform="translate({targets.length * width * -1} 0)">
			<animateTransform
				attributeName="transform"
				type="translate"
				begin="timeTheShotsEscape.end"
				to="0 0"
				dur="0.1s"
				fill="freeze"
				calcMode="discrete"
			/>
			{#each targets as _, i}
				<animateTransform
					attributeName="transform"
					type="translate"
					begin="timeTheShotsTarget{i}Shot.end"
					by="{width} 0"
					dur="0.1s"
					calcMode="discrete"
					fill="freeze"
				/>
			{/each}
			<g>
				<rect width="80" height="50" opacity="0" />

				<g display="none">
					<set begin="timeTheShotsEscape.end" attributeName="display" to="initial" fill="freeze" />
					<g transform="translate(40 25)">
						<AnimatedText
							text="Out of luck..."
							begin="timeTheShotsEscape.end"
							end="timeTheShotsEnd.begin"
						/>
					</g>
				</g>

				<g>
					<set begin="timeTheShotsEscape.begin" attributeName="display" to="none" fill="freeze" />
					<g transform="translate(40 25)">
						<AnimatedText
							text="Nice timing!"
							begin="timeTheShotsTarget0Shot.end"
							end="timeTheShotsEnd.begin; timeTheShotsEscape.begin"
						/>
					</g>
				</g>
			</g>

			<rect style:cursor="pointer" width="80" height="50" opacity="0">
				<set id="timeTheShotsEnd" begin="click" attributeName="display" to="none" fill="freeze" />
			</rect>
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
		<g transform="translate(40 25)">
			<Text fill="url(#linear-gradient-text)">Shoot down!</Text>
		</g>
		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
