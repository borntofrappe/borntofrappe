<script>
	export let level = 'h1';
	export let text = 'Hello world';

	const lines = text.split(' ').map((d) => d.split(''));
	const columns = Math.max(...lines.map((d) => d.length));
	const rows = lines.length;

	const padding = 0.2;

	const width = columns + padding * 2;
	const height = rows + padding * 2;
	const overlay = (width ** 2 + height ** 2) ** 0.5;

	const duration = 1;
	const delays = 0.15;

	const characters = lines.reduce((acc, curr, y) => {
		return [
			...acc,
			...curr.reduce((a, c, x) => {
				return [
					...a,
					{
						text: c,
						x,
						y,
						duration,
						delay: delays * (x + y)
					}
				];
			}, [])
		];
	}, []);

	const id = text.toLowerCase().replace(/\s/g, '-');
</script>

<svelte:element this={level}>
	<svg viewBox="0 0 {width} {height}" aria-labelledby="title-{id}">
		<title id="title-{id}">{text}</title>
		<defs>
			<symbol
				id="squircle-{id}"
				viewBox="0 0 1 1"
				x="-0.5"
				y="-0.5"
				width="1"
				height="1"
				fill="currentColor"
			>
				<path d="M 0 0.5 C 0 0 0 0 0.5 0 S 1 0 1 0.5 1 1 0.5 1 0 1 0 0.5" />
			</symbol>

			<linearGradient id="gradient-{id}" spreadMethod="reflect" x1="0" x2="0.5">
				<stop stop-color="hsl(0, 75%, 67%)" offset="0" />
				<stop stop-color="hsl(51.42857142857143, 75%, 61.297093396292745%)" offset="0.166" />
				<stop stop-color="hsl(102.85714285714286, 75%, 65.8704694055762%)" offset="0.333" />
				<stop stop-color="hsl(154.28571428571428, 75%, 63.33243719813106%)" offset="0.5" />
				<stop stop-color="hsl(205.71428571428572, 75%, 63.33243719813106%)" offset="0.666" />
				<stop stop-color="hsl(257.14285714285717, 75%, 65.8704694055762%)" offset="0.833" />
				<stop stop-color="hsl(308.57142857142856, 75%, 61.297093396292745%)" offset="1" />
			</linearGradient>

			<rect
				id="overlay-{id}"
				width={overlay}
				height={overlay}
				fill="url(#gradient-{id})"
				stroke="url(#gradient-{id})"
			/>

			<mask id="mask-{id}">
				<rect {width} {height} fill="black" />
				<g transform="translate({padding + 0.5} {padding + 0.5})">
					<g
						fill="white"
						text-anchor="middle"
						dominant-baseline="middle"
						font-size="0.44"
						font-weight="700"
					>
						{#each characters as { x, y, text, duration, delay }}
							<g transform="translate({x} {y})">
								<g
									class="transform"
									style:animation-duration="{duration}s"
									style:animation-delay="{delay + 0.1}s"
								>
									<g
										class="fade"
										style:animation-duration="{duration}s"
										style:animation-delay="{delay}s"
									>
										<text y="0.01">{text}</text>
									</g>
								</g>
							</g>
						{/each}
					</g>
				</g>
			</mask>
		</defs>

		<g transform="translate({padding + 0.5} {padding + 0.5})">
			{#each characters as { x, y, text, duration, delay }}
				<g transform="translate({x} {y})">
					<g
						class="transform"
						style:animation-duration="{duration}s"
						style:animation-delay="{delay}s"
					>
						<use transform="rotate(45)" href="#squircle-{id}" />
					</g>
				</g>
			{/each}
		</g>

		<g opacity mask="url(#mask-{id})">
			<g transform="translate({width / 2} {height / 2}) rotate(30)">
				<g transform="translate({(overlay / 2) * -1} {(overlay / 2) * -1})">
					<g>
						<animateTransform
							attributeName="transform"
							type="translate"
							to={overlay}
							dur="30s"
							repeatCount="indefinite"
						/>
						<g>
							<use x={overlay * -1} href="#overlay-{id}" />
							<use href="#overlay-{id}" />
						</g>
					</g>
				</g>
			</g>
		</g>
	</svg>
</svelte:element>

<style>
	svg {
		display: block;
	}

	.fade {
		animation: fade cubic-bezier(0.37, 0, 0.63, 1) both;
	}

	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.transform {
			animation: transform cubic-bezier(0.34, 1.56, 0.64, 1) both;
		}

		@keyframes transform {
			from {
				transform: scale(0) rotate(0turn);
			}
			to {
				transform: scale(1) rotate(1turn);
			}
		}
	}
</style>
