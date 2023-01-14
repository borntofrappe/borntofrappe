<script>
	export let level = 'h1';
	export let text = 'Hello world';

	const lines = text.split(' ').map((d) => d.split(''));

	const squircle = 50;
	const padding = 35;

	const columns = Math.max(...lines.map((d) => d.length));
	const rows = lines.length;
	const width = squircle * (columns - 1) + padding * 2;
	const height = squircle * (rows - 1) + padding * 2;

	const overlay = (width ** 2 + height ** 2) ** 0.5;

	const id = text.toLowerCase().replace(/\s/g, '-');

	const duration = 1.2;
	const delays = 0.2;
</script>

<svelte:element this={level}>
	<svg viewBox="0 0 {width} {height}" aria-labelledby="title-{id}">
		<title id="title-{id}">{text}</title>
		<defs>
			<symbol id="squircle-{id}" viewBox="0 0 1 1">
				<path d="M 0 0.5 C 0 0 0 0 0.5 0 S 1 0 1 0.5 1 1 0.5 1 0 1 0 0.5" />
			</symbol>

			<linearGradient id="gradient-{id}" spreadMethod="reflect" x1="0" x2="0.5">
				<stop stop-color="hsl(0, 75.976%, 66.7%)" offset="0" />
				<stop stop-color="hsl(60, 75.976%, 66.7%)" offset="0.167" />
				<stop stop-color="hsl(120, 75.976%, 66.7%)" offset="0.334" />
				<stop stop-color="hsl(180, 75.976%, 66.7%)" offset="0.5" />
				<stop stop-color="hsl(240, 75.976%, 66.7%)" offset="0.667" />
				<stop stop-color="hsl(300, 75.976%, 66.7%)" offset="0.834" />
				<stop stop-color="hsl(360, 75.976%, 66.7%)" offset="1" />
			</linearGradient>

			<g id="squircles-{id}">
				<g transform="translate({padding} {padding})">
					<g fill="currentColor">
						{#each lines as line, i}
							<g transform="translate(0 {i * squircle})">
								{#each line as _, j}
									<g transform="translate( {j * squircle} 0)">
										<g
											class="transform"
											style:animation-delay="{0.1 + delays * (i + j)}s"
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
						{/each}
					</g>
				</g>
			</g>

			<g id="lines-{id}">
				<g transform="translate({padding} {padding})">
					{#each lines as line, i}
						<g transform="translate(0 {i * squircle})">
							{#each line as character, j}
								<g transform="translate( {j * squircle} 0)">
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
												y={-squircle / 4}
												font-weight="700">{character}</text
											>
										</g>
									</g>
								</g>
							{/each}
						</g>
					{/each}
				</g>
			</g>

			<mask id="mask-{id}">
				<rect {width} {height} fill="black" />
				<use href="#lines-{id}" fill="white" />
			</mask>
		</defs>

		<use href="#squircles-{id}" />
		<g mask="url(#mask-{id})" fill="url(#gradient-{id})">
			<g transform="translate({width / 2} {height / 2})">
				<g transform="rotate(40)">
					<g>
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
				transform: scale(0);
			}
			to {
				transform: scale(1) rotate(1turn);
			}
		}
	}
</style>
