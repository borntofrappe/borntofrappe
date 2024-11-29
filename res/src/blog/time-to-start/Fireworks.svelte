<script>
	import { tick } from 'svelte';

	let svg = null;
	let fireworks = [];
	let circleCounter = 0;

	const handleClick = async () => {
		const currentTime = svg.getCurrentTime();

		const x = Math.floor(Math.random() * 80 - 40);
		const dy = Math.floor(Math.random() * 30 + 21) * -1;
		const dur = `${0.75 + Math.random()}s`;
		const id = `firework${circleCounter++}`;
		const begin = currentTime;
		const follow = `${id}.end`;
		const fill = `hsl(${Math.floor(Math.random() * 360)}, 80%, 70%)`;
		const particles =
			Math.random() > 0.2
				? Array(12)
						.fill()
						.map((_, i, { length }) => {
							const angle = (((360 / length) * i) / 180) * Math.PI;
							const x = Math.cos(angle) * 5;
							const y = Math.sin(angle) * 5;
							return {
								x,
								y
							};
						})
				: Array(10)
						.fill()
						.map((_, i, { length }) => {
							const angle = (((360 / length) * i + 90) / 180) * Math.PI;
							const offset = i % 2 === 0 ? 4 : 6;
							const x = Math.cos(angle) * offset;
							const y = Math.sin(angle) * offset;
							return {
								x,
								y
							};
						});

		fireworks = [
			...fireworks,
			{
				x,
				dy,
				dur,
				id,
				begin,
				follow,
				fill,
				particles
			}
		];

		await tick();

		const animate = svg.querySelector('.firework:last-of-type animate');

		animate.addEventListener('endEvent', () => {
			const i = fireworks.findIndex((d) => d.id === id);
			fireworks = [...fireworks.slice(0, i), ...fireworks.slice(i + 1)];
		});
	};
</script>

<div>
	<svg bind:this={svg} viewBox="0 0 100 60">
		<set />
		<rect fill="hsl(210, 20%, 16%)" rx="5" width="100" height="60" />

		<g transform="translate(50 61.1)">
			{#each fireworks as { x, dy, dur, id, begin, follow, fill, particles } (id)}
				<g class="firework">
					<g transform="translate({x} 0)">
						<g>
							<animateTransform
								{id}
								{begin}
								attributeName="transform"
								type="translate"
								to="0 {dy}"
								{dur}
								fill="freeze"
							/>
							<g {fill}>
								{#each particles as { x, y }}
									<g>
										<animateTransform
											attributeName="transform"
											type="translate"
											to="{x} {y}"
											begin={follow}
											dur="1s"
											fill="freeze"
										/>
										<circle r="1">
											<animate
												attributeName="r"
												to="0"
												begin="{follow} + 0.3s"
												dur="0.7s"
												fill="freeze"
											/>
										</circle>
									</g>
									<g>
										<animateTransform
											attributeName="transform"
											type="translate"
											to="{x * 2} {y * 2}"
											begin={follow}
											dur="1s"
											fill="freeze"
										/>
										<circle r="1">
											<animate
												attributeName="r"
												to="0"
												begin="{follow} + 0.3s"
												dur="0.7s"
												fill="freeze"
											/>
										</circle>
									</g>
								{/each}
							</g>
							<circle fill="hsl(210, 15%, 90%)" r="1.1">
								<set attributeName="display" to="none" {begin} />
							</circle>
						</g>
					</g>
				</g>
			{/each}
		</g>
	</svg>

	<button on:click={handleClick}>Fire away</button>
</div>

<style>
	div > * + * {
		margin-block-start: 0.5rem;
	}

	svg {
		display: block;
	}

	button {
		display: block;
		margin-inline: auto;
		cursor: pointer;
		border: none;
		font-weight: 700;
		padding: 0.2rem 0.5rem;
		letter-spacing: 0.5px;
		color: hsl(210, 15%, 90%);
		background: hsl(210, 20%, 16%);
		border-radius: 0.25rem;
		transition: transform 0.15s cubic-bezier(0.37, 0, 0.63, 1);
	}

	button:active {
		transform: scale(0.95);
	}
</style>
