<script>
	import AnimatedText from './_helpers/_AnimatedText.svelte';
	import Text from './_helpers/_Text.svelte';

	const width = 80;
	const height = 50;

	const sizes = {
		cloud: [10, 12],
		target: 12,
		shoot: 20,
		spaceship: 16
	};

	const durations = {
		target: 10
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

			return {
				x,
				y,
				values,
				keyTimes,
				duration
			};
		});

	const projectiles = [
		{ cx: -3, cy: -2, r: 1 },
		{ cx: 3, cy: -2, r: 1 },
		{ cx: 0, cy: -3, r: 1 }
	];
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

		<pattern id="time-the-shots-pattern-target" viewBox="-17.5 -19 35 26" width="1" height="1">
			<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
				<g fill="#fbf771">
					<ellipse transform="translate(-7 -1)" rx="6.5" ry="5.5" />
					<ellipse transform="translate(7 -1)" rx="6.5" ry="5.5" />
					<ellipse transform="translate(0 0.5)" rx="6.5" ry="5.5" />
				</g>
				<path fill="#ffffff" d="M -9 -9.5 a 17 6.25 0 1 0 18 0 30 30 0 0 1 -18 0" />
				<path fill="#ffffff" d="M -9 -9.5 a 9.1 9.1 0 0 1 18 0 30 30 0 0 1 -18 0" />
			</g>
		</pattern>

		<rect
			id="time-the-shots-target"
			width={sizes.target}
			height={sizes.target}
			fill="url(#time-the-shots-pattern-target)"
		/>

		<pattern id="time-the-shots-pattern-spaceship" viewBox="-20 -20 40 40" width="1" height="1">
			<g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round">
				<g fill="currentColor">
					<path d="M -18 9 a 25 25 0 0 1 16 -10 a 10 10 0 0 0 -16 10" />
					<path transform="scale(-1 1)" d="M -18 9 a 25 25 0 0 1 16 -10 a 10 10 0 0 0 -16 10" />
				</g>
				<g fill="#fbf771">
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
		{#each targets as { x, y, values, keyTimes }, i}
			<g transform="translate({x} 0)">
				<animateTransform
					attributeName="transform"
					type="translate"
					begin="timeTheShotsStart.begin"
					end="timeTheShotsMiss.begin; timeTheShotsTarget{i}Hit.begin"
					dur="{durations.target}s"
					{values}
					{keyTimes}
					repeatCount="indefinite"
					fill="freeze"
				/>
				<use {y} href="#time-the-shots-target" />
			</g>
		{/each}
	</g>

	<g transform="translate(40 42)">
		<g>
			<animateTransform
				begin="timeTheShotsSpaceship.begin"
				end="timeTheShotsEnd.begin"
				attributeName="transform"
				type="translate"
				to="0 -0.5"
				dur="0.3s"
				calcMode="discrete"
				repeatCount="indefinite"
			/>
			<g fill="#d44e4a" stroke="currentColor" stroke-width="0.3">
				{#each projectiles as { cx, cy, r }, i}
					<circle {cx} {cy} {r} />
				{/each}
			</g>
		</g>
	</g>

	<g>
		<g transform="translate(40 42)">
			<use href="#time-the-shots-spaceship">
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
			</use>
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
			<Text fill="url(#linear-gradient-text)">Work in progress</Text>
		</g>
		<rect width="80" height="50" opacity="0" />
	</g>
</svg>
