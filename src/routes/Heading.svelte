<script>
	export let text = 'Hello world';

	const lines = text.split(' ').map((d) => d.split(''));

	const squircle = 50;
	const inset = 20;
	const width = squircle * Math.max(...lines.map((d) => d.length)) + inset;
	const height = squircle * lines.length + inset;
	const overlay = (width ** 2 + height ** 2) ** 0.5;
	const id = text.toLowerCase().replace(/\s/, '-');

	const duration = 1.2;
	const delays = 0.2;
</script>

<svg viewBox="0 0 {width} {height}">
	<title>{text}</title>
	<defs>
		<symbol id="squircle-{id}" viewBox="0 0 1 1">
			<path d="M 0 0.5 C 0 0 0 0 0.5 0 S 1 0 1 0.5 1 1 0.5 1 0 1 0 0.5" />
		</symbol>
		<linearGradient id="gradient-{id}" spreadMethod="reflect" x1="0" x2="0.5">
			<stop stop-color="hsl(0, 75.97597597597598%, 66.7%)" offset="0" />
			<stop stop-color="hsl(51.42857142857143, 75.97597597597598%, 66.7%)" offset="0.142" />
			<stop stop-color="hsl(51.42857142857143, 75.97597597597598%, 66.7%)" offset="0.284" />
			<stop stop-color="hsl(102.85714285714286, 75.97597597597598%, 66.7%)" offset="0.426" />
			<stop stop-color="hsl(154.28571428571428, 75.97597597597598%, 66.7%)" offset="0.570" />
			<stop stop-color="hsl(205.71428571428572, 75.97597597597598%, 66.7%)" offset="0.714" />
			<stop stop-color="hsl(257.14285714285717, 75.97597597597598%, 66.7%)" offset="0.856" />
		</linearGradient>

		{#each lines as line, i}
			<g
				id="line-{i}-{id}"
				transform="translate({squircle / 2 + inset / 2} {squircle / 2 + inset / 2 + squircle * i})"
			>
				{#each line as letter, j}
					<g transform="translate({squircle * j} 0)">
						<g
							class="transform"
							style:animation-delay="{0.1 + delays * (i + j)}s"
							style:animation-duration="{duration}s"
						>
							<g
								class="fade"
								style:animation-delay="{delays * (i + j)}s"
								style:animation-duration="{duration}s"
							>
								<text
									text-anchor="middle"
									dominant-baseline="hanging"
									font-size={squircle / 2}
									y={-squircle / 2 / 2}
									font-weight="700"
								>
									{letter}
								</text>
							</g>
						</g>
					</g>
				{/each}
			</g>
		{/each}

		{#each lines as line, i}
			<g id="squircles-{i}-{id}">
				<g
					transform="translate({squircle / 2 + inset / 2} {squircle / 2 +
						inset / 2 +
						squircle * i})"
				>
					{#each line as _, j}
						<g transform="translate({squircle * j} 0)">
							<g
								class="transform"
								style:animation-delay="{delays * (i + j)}s"
								style:animation-duration="{duration}s"
							>
								<use
									transform="rotate(45)"
									href="#squircle-{id}"
									x={-squircle / 2}
									y={-squircle / 2}
									width={squircle}
									height={squircle}
								/>
							</g>
						</g>
					{/each}
				</g>
			</g>
		{/each}

		<mask id="mask-{id}">
			<rect {width} {height} />
			<g fill="white">
				{#each lines as _, i}
					<use href="#line-{i}-{id}" />
				{/each}
			</g>
		</mask>
	</defs>

	<g>
		{#each lines as _, i}
			<use fill="currentColor" href="#squircles-{i}-{id}" />
			<use href="#line-{i}-{id}" />
		{/each}
	</g>

	<g mask="url(#mask-{id})" fill="url(#gradient-{id})" style:pointer-events="none">
		<g transform="translate({width / 2} {height / 2})">
			<g transform="rotate(40)">
				<g transform="translate(0 0)">
					<animateTransform
						attributeName="transform"
						type="translate"
						to={overlay}
						dur="30s"
						repeatCount="indefinite"
					/>
					<g transform="translate(-{overlay / 2} -{overlay / 2})">
						<rect x="-{overlay}" width={overlay} height={overlay} />
						<rect width={overlay} height={overlay} />
					</g>
				</g>
			</g>
		</g>
	</g>
</svg>

<style>
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
				transform: scale(0);
			}
			to {
				transform: scale(1) rotate(1turn);
			}
		}
	}
</style>
