<script>
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	let svg = null;
	let canAnimate = true;
	let endCounter = 0;

	const n = 12;
	const colors = ['#5abe75', '#f8922d'];
	const laps = 3;
	const baseDur = 4.5;

	const getPath = (points = 12, offset = 35) =>
		Array(points)
			.fill()
			.map((_, i, { length }) => {
				const angle = (((360 / length) * i - 90) / 180) * Math.PI;
				const x = Math.floor(Math.cos(angle) * offset);
				const y = Math.floor(Math.sin(angle) * offset);
				return [x, y];
			})
			.reduce((acc, curr, i, arr) => {
				const [x, y] = curr;
				if (i === 0) {
					return `M ${x} ${y}`;
				} else if (i === 1) {
					const [x0, y0] = arr[0];
					const noise = Math.random() > 0.5 ? Math.random() : Math.random() * -1;
					const xm = (x0 + x) / 2;
					const ym = (y0 + y) / 2 + noise / 3;
					return `${acc} Q ${xm} ${ym} ${x} ${y} T`;
				} else if (i === arr.length - 1) {
					const [x0, y0] = arr[0];
					return `${acc} ${x} ${y} ${x0} ${y0}`;
				}
				return `${acc} ${x} ${y}`;
			}, '');

	const spaceships = colors.map((color, i) => {
		const offset = 32 + 15 * i;
		return {
			color,
			offset,
			laps: Array(laps)
				.fill()
				.map((_, j) => {
					const dur = baseDur + Math.random();
					const id = `spaceRaceSpaceship${i}Lap${j}`;
					const begin = j === 0 ? `indefinite` : `spaceRaceSpaceship${i}Lap${j - 1}.end`;

					const path = getPath(n, offset);

					return {
						id,
						begin,
						dur,
						path
					};
				})
		};
	});

	const handleEnd = () => {
		endCounter++;
		if (endCounter === colors.length) {
			for (let i = 0; i < spaceships.length; i++) {
				const { offset } = spaceships[i];
				for (let j = 0; j < spaceships[i].laps.length; j++) {
					spaceships[i].laps[j].dur = baseDur + Math.random();
					spaceships[i].laps[j].path = getPath(n, offset);
				}
			}

			endCounter = 0;
			canAnimate = true;
		}
	};

	const handleClick = async () => {
		if (!canAnimate) return;
		canAnimate = false;

		svg.querySelectorAll('.spaceship').forEach((spaceship) => {
			spaceship.querySelector('animateMotion').beginElement();
		});
	};

	onMount(() => {
		svg.querySelectorAll('.spaceship').forEach((spaceship) => {
			spaceship
				.querySelector('animateMotion:nth-last-of-type(2)')
				.addEventListener('endEvent', handleEnd);
		});

		return () => {
			svg.querySelectorAll('.spaceship').forEach((spaceship) => {
				spaceship
					.querySelector('animateMotion:nth-last-of-type(2)')
					.removeEventListener('endEvent', handleEnd);
			});
		};
	});
</script>

<div>
	{#if canAnimate}
		<button
			in:scale={{ duration: 400, easing: backOut }}
			out:scale={{ duration: 350 }}
			on:click={handleClick}>Race</button
		>
	{/if}
	<svg bind:this={svg} viewBox="-80 -60 160 120">
		<defs>
			<radialGradient
				id="space-race-gradient-light"
				cx="80"
				cy="-60"
				r="200"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#ffffff" offset="0" />
				<stop stop-color="transparent" offset="1" />
			</radialGradient>
			<radialGradient
				id="space-race-gradient-body"
				cx="0.5"
				cy="-0.8"
				r="0.3"
				spreadMethod="repeat"
			>
				<stop stop-color="#2aa3ce" offset="0" />
				<stop stop-color="#2aa3ce" offset="0.6" />
				<stop stop-color="#2187c7" offset="0.6" />
			</radialGradient>
			<radialGradient id="space-race-gradient-bodies" cx="0.5" cy="0.2">
				<stop stop-color="#29bfda" offset="0" />
				<stop stop-color="#2aa3ce" offset="0.5" />
				<stop stop-color="#2187c7" offset="1" />
			</radialGradient>

			<circle id="space-race-body" r="20" />

			<g id="space-race-bodies">
				<circle transform="translate(35 -8) scale(1)" r="2" />
				<circle transform="translate(41 -12) scale(0.5)" r="2" />
				<circle transform="translate(37 5) scale(0.6)" r="2" />
				<circle transform="translate(32 -14) scale(0.4)" r="2" />
				<circle transform="translate(42 8) scale(0.8)" r="2" />
				<circle transform="translate(38 0) scale(0.5)" r="2" />
				<circle transform="translate(-41 10) scale(0.6)" r="2" />
				<circle transform="translate(-48 16) scale(1)" r="2" />
				<circle transform="translate(-36 18) scale(0.8)" r="2" />
				<circle transform="translate(-32 12) scale(0.6)" r="2" />
				<circle transform="translate(-36 6) scale(0.5)" r="2" />
				<circle transform="translate(-28 -30) scale(1.8)" r="2" />
				<circle transform="translate(-35 -32) scale(0.4)" r="2" />
			</g>

			<symbol id="space-race-spaceship" viewBox="-50 -50 100 100">
				<g transform="rotate(90)">
					<g stroke-linecap="round" stroke-linejoin="round">
						<path
							fill="#f46231"
							stroke="#f46231"
							stroke-width="8"
							d="M -5 25 c -4 2 -3 8 0 10 q 2 0 2 -3 0 5 3 8 3 -3 3 -8 0 0 2 3 c 3 -2 4 -8 0 -10"
						/>
						<path
							fill="#f6e034"
							stroke="#f6e034"
							stroke-width="1"
							d="M -5 25 c -4 2 -3 8 0 10 q 2 0 2 -3 0 5 3 8 3 -3 3 -8 0 0 2 3 c 3 -2 4 -8 0 -10"
						/>
						<g stroke-width="3">
							<g fill="var(--c, #6ca4d5)" stroke="var(--c, #6ca4d5)">
								<path d="M 12 -10 q 20 10 20 30 -10 -5 -20 -5z" />
								<path transform="scale(-1 1)" d="M 12 -10 q 20 10 20 30 -10 -5 -20 -5z" />
							</g>
							<g fill="#f3f4f8" stroke="#f3f4f8">
								<path d="M 0 -40 v 10" />
								<path d="M 0 -30 c 18 0 35 50 0 50 -35 0 -18 -50 0 -50" />
								<path d="M 0 15 q -6 2 -10 7.5 a 18 18 0 0 0 20 0 q -4 -5.5 -10 -7.5" />
							</g>
						</g>
					</g>
					<circle fill="var(--c, #6ca4d5)" r="5" cy="-40" />
					<circle fill="#c9eafb" stroke="var(--c, #6ca4d5)" stroke-width="4" r="10" cy="-8" />
					<g fill="#ebebe9">
						<circle r="1.5" cy="17" />
						<circle r="1.42" cx="7" cy="15.5" />
						<circle r="1.42" cx="-7" cy="15.5" />
						<circle r="1.35" cx="13" cy="12" />
						<circle r="1.35" cx="-13" cy="12" />
					</g>
				</g>
			</symbol>
		</defs>
		<rect fill="#22274f" rx="5" x="-80" y="-60" width="160" height="120" />
		<g transform="rotate(-20)">
			<g>
				<use fill="url(#space-race-gradient-body)" href="#space-race-body" />
				<use opacity="0.7" fill="url(#space-race-gradient-light)" href="#space-race-body" />

				<use fill="url(#space-race-gradient-bodies)" href="#space-race-bodies" />
				<use fill="url(#space-race-gradient-light)" href="#space-race-bodies" />
			</g>

			{#each spaceships as { color, laps }}
				<use
					class="spaceship"
					style:--c={color}
					href="#space-race-spaceship"
					x="-8"
					y="-8"
					width="16"
					height="16"
				>
					{#each laps as { dur, path, id, begin }}
						<animateMotion
							{id}
							{begin}
							{dur}
							{path}
							fill="freeze"
							rotate="auto"
							restart="whenNotActive"
						/>
					{/each}
					<animateMotion path={laps[0].path} fill="freeze" rotate="auto" restart="never" />
				</use>
			{/each}
		</g>
	</svg>
</div>

<style>
	svg {
		display: block;
	}

	div {
		position: relative;
	}

	div > button {
		position: absolute;
		inset-inline-start: 50%;
		inset-block-start: 50%;
		transform: translate(-50%, -50%);
	}

	button {
		cursor: pointer;
		border: none;
		font-weight: 700;
		padding: 0.2rem 0.5rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		color: #f3f4f8;
		background: #22274f;
		border-radius: 0.25rem;
		display: flex;
		gap: 0.2rem;
		align-items: center;
	}
</style>
