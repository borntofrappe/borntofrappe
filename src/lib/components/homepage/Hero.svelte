<script>
	import icons from '$lib/icons';

	const links = [
		{
			name: 'codepen',
			href: 'https://codepen.io/borntofrappe',
			desc: 'Marvel at the numerous demos I created on CodePen.'
		},
		{
			name: 'freecodecamp',
			href: 'https://www.freecodecamp.org/borntofrappe',
			desc: 'Double-check the certifications I earned on freeCodeCamp.'
		},
		{
			name: 'github',
			href: 'https://github.com/borntofrappe',
			desc: 'Review, fork, and improve the code I publish on Github.'
		},
		{
			name: 'twitter',
			href: 'https://twitter.com/borntofrappe',
			desc: 'Follow me @borntofrappe.'
		}
	];
</script>

<header>
	<div>
		<h1>Hello, world!</h1>
		<p>I enjoy writing code.</p>
		<p>With this website I try to convince you I might be good at it as well.</p>
	</div>

	<nav aria-label="Links to learn about me">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="-225 -225 450 450" width="500" height="500">
			<defs>
				<path id="path" d="M 0 -32 a 32 32 0 0 1 0 64 32 32 0 0 1 0 -64" />
				<path id="path-c" d="M 0 39 a 39 39 0 0 1 0 -78 39 39 0 0 1 0 78" />
				<path id="path-cc" d="M 0 47 a 47 47 0 0 0 0 -94 47 47 0 0 0 0 94" />

				<mask id="mask-text">
					<rect x="-50" y="-50" width="100" height="100" fill="hsl(0, 0%, 100%)" />
					<use href="#path" fill="hsl(0, 0%, 0%)" />
				</mask>
			</defs>

			<g id="borntofrappe">
				<g
					fill="none"
					stroke="currentColor"
					stroke-width="8"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<circle r="46" />
					<path
						d="M -10 -13 q 0 -8 -8 -10"
						stroke-dasharray="14.01 18.5"
						stroke-dashoffset="-4.5"
					/>
					<path
						d="M -10 -13 h 15 a 8 8 0 0 1 0 16 h -4 h 4 a 10 10 0 0 1 0 20 h -15 v -36"
						stroke-dasharray="114.2 146.28"
						stroke-dashoffset="-9.145"
					/>
				</g>
				<circle r="46" opacity="0" />
			</g>

			{#each links as { name, desc, href }, i}
				<g
					transform="rotate({(360 / links.length) * i}) translate(0 -150) rotate({(360 /
						links.length) *
						i *
						-1})"
				>
					<a {href} aria-labelledby="title-{name}" aria-describedby="desc-{name}">
						<title id="title-{name}">{name}</title>
						<desc id="desc-{name}">{desc}</desc>
						<g transform="translate(-75 -75)">
							<svg viewBox="-50 -50 100 100" width="150" height="150">
								<use href="#path" stroke="currentColor" stroke-width="6" fill="none" />
								<g transform="rotate({(360 / links.length) * i})">
									<g mask="url(#mask-text)">
										<g class="text">
											<text
												fill="currentColor"
												text-anchor="middle"
												font-family="inherit"
												font-size="12"
												font-weight="600"
												letter-spacing="3"
											>
												<textPath
													href={(360 / links.length) * i <= 90 || (360 / links.length) * i >= 270
														? '#path-c'
														: '#path-cc'}
													startOffset="50%"
												>
													{name}
												</textPath>
											</text>
										</g>
									</g>
								</g>
								<g transform="translate(-16 -16)">
									{@html icons[name]
										? icons[name].replace(/width="[^"]+"\sheight="[^"]+"/, 'width="32" height="32"')
										: icons.bug.replace(/width="[^"]+"\sheight="[^"]+"/, 'width="32" height="32"')}
								</g>

								<circle r="50" opacity="0" />
							</svg>
						</g>
					</a>
				</g>
			{/each}
		</svg>
	</nav>
</header>

<style>
	:global(.webfonts) header {
		font-family: JosefinsansSemibold, sans-serif;
	}

	header {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		padding: 2.5em 0;
		background: hsl(330, 79%, 56%);
		background: var(--accent-color);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(338, 100%25, 86%25)" stroke="hsl(338, 100%25, 86%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		background-size: 100px;
		background-position: 0 100%;
		position: relative;
		z-index: 0;
		font-weight: 600;
	}

	header::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 0%;
		width: 100%;
		height: 20px;
		transform: scaleY(-1);
		background: inherit;
		-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
		mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
		-webkit-mask-size: 100px 40px;
		mask-size: 100px 40px;
		-webkit-mask-position: 50% 0;
		mask-position: 50% 0;
		z-index: -5;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference])) header {
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		}
	}

	:global(html[data-preference='dark']) header {
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
	}

	header > * {
		width: 95vw;
		width: var(--width);
		max-width: 30rem;
	}

	header nav {
		order: -1;
	}

	nav {
		--transition-duration: 0.4s;
		padding: 0.5rem;
	}

	nav > svg {
		width: 100%;
		height: auto;
	}

	nav > svg #borntofrappe {
		transition: transform 0.4s cubic-bezier(0.68, -0.5, 0.265, 1.55),
			color 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
		transition: transform var(--transition-duration) var(--ease-in-out-back),
			color var(--transition-duration) var(--ease-in-out-sine);
	}

	nav > svg #borntofrappe:hover {
		color: hsl(210, 24%, 16%);
		color: var(--heading-color);
		transform: scale(1.25) rotate(-10deg);
	}

	nav > svg a {
		transition: transform 0.4s cubic-bezier(0.68, -0.5, 0.265, 1.55),
			color 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
		transition: transform var(--transition-duration) var(--ease-in-out-back),
			color var(--transition-duration) var(--ease-in-out-sine);
		transform: scale(0.85);
	}

	nav > svg a .text {
		transform: scale(0);
		transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
		transition: transform var(--transition-duration) var(--ease-out-cubic);
	}

	nav > svg a:hover,
	nav > svg a:focus {
		color: hsl(210, 24%, 16%);
		color: var(--heading-color);
	}
	nav > svg a:hover,
	nav > svg a:focus,
	nav > svg a:hover .text,
	nav > svg a:focus .text {
		transform: scale(1);
	}

	nav > svg a:focus {
		outline: none;
	}

	div > * + * {
		margin-top: 0.5em;
	}

	div p {
		line-height: 1.75;
	}
</style>
