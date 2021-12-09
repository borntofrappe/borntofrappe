<script>
	import icons from '$lib/components/icons';

	const links = [
		{
			title: 'codepen',
			desc: 'On CodePen I flex my muscles as a web developer, starting with little past HTML, CSS and JavaScript. The foundations of the web!',
			href: 'https://codepen.io/borntofrappe',
			icon: 'codepen'
		},
		{
			title: 'freecodecamp',
			desc: 'On freeCodeCamp I started my journey with HTML and CSS. This is where I earned a few certifications and where I continue growing as an endless learner.',
			href: 'https://www.freecodecamp.org/borntofrappe',
			icon: 'freecodecamp'
		},
		{
			title: 'github',
			desc: "On Github I share the code for my projects, and even this very website. Feel free to review, fork, and improve; I'm positive you'll find plenty of room for growth.",
			href: 'https://github.com/borntofrappe',
			icon: 'github'
		},
		{
			title: 'twitter',
			desc: 'On Twitter I try to share something helpful, entertaining, and perhaps even both. There are people who seem to appreciate.',
			href: 'https://twitter.com/borntofrappe',
			icon: 'twitter'
		}
	];
</script>

<header>
	<div>
		<h1>Hello, World!</h1>
		<p>I enjoy writing code.</p>
		<p>Let me try and convince you I might be good at it as well.</p>
	</div>

	<nav aria-label="borntofrappe links">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="-225 -225 450 450" width="450" height="450">
			<defs>
				<path id="path" d="M 0 -32 a 32 32 0 0 1 0 64 32 32 0 0 1 0 -64" />
				<path id="path-c" d="M 0 39 a 39 39 0 0 1 0 -78 39 39 0 0 1 0 78" />
				<path id="path-cc" d="M 0 47 a 47 47 0 0 0 0 -94 47 47 0 0 0 0 94" />

				<mask id="mask-text">
					<rect x="-50" y="-50" width="100" height="100" fill="hsl(0, 0%, 100%)" />
					<use href="#path" fill="hsl(0, 0%, 0%)" />
				</mask>
			</defs>

			<g id="logo">
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

			{#each links as { title, desc, href, icon }, i}
				<g
					transform="rotate({(360 / links.length) * i}) translate(0 -150) rotate({(360 /
						links.length) *
						i *
						-1})"
				>
					<a {href} aria-labelledby="title-{title}" aria-describedby="desc-{title}">
						<title id="title-{title}">{title}</title>
						<desc id="desc-{title}">{desc}</desc>

						<g transform="translate(-75 -75)">
							<svg viewBox="-50 -50 100 100" width="150" height="150">
								<use href="#path" stroke="currentColor" stroke-width="6" fill="none" />
								<g transform="rotate({(360 / links.length) * i})">
									<g mask="url(#mask-text)">
										<g class="text">
											<text
												aria-hidden="true"
												fill="currentColor"
												font-weight="bold"
												letter-spacing="2"
												text-anchor="middle"
												font-size="12"
												font-family="monospace"
											>
												<textPath
													href={(360 / links.length) * i > 90 && (360 / links.length) * i < 270
														? '#path-cc'
														: '#path-c'}
													startOffset="50%"
												>
													{title}
												</textPath>
											</text>
										</g>
									</g>
								</g>
								<g transform="translate(-16 -16)">
									{@html icons[icon].replace(/1em/g, 32)}
								</g>

								<circle r="50" opacity="0" />
							</svg>
						</g></a
					>
				</g>
			{/each}
		</svg>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5em;
		padding: 2.5em 0;
		background: hsl(330, 79%, 56%);
		background: var(--accent-color);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(338, 100%25, 86%25)" stroke="hsl(338, 100%25, 86%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		background-size: 100px;
		position: relative;
		z-index: 0;
	}

	header::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		width: 100%;
		height: 20px;
		transform: translateX(-50%) scaleY(-1);
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
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		}
	}

	:global(html[data-preference='dark']) header {
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
	}

	header > * {
		width: 90vw;
		width: var(--width);
		max-width: 30rem;
	}

	header nav {
		order: -1;
	}

	nav {
		--transition-duration: 0.5s;
		padding: 0.5em;
	}

	nav > svg {
		width: 100%;
		height: auto;
	}

	nav > svg text {
		font-family: Inconsolata, Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
	}

	nav > svg #logo {
		transition: transform 0.5s cubic-bezier(0.68, -0.5, 0.265, 1.55),
			color 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
		transition: transform var(--transition-duration) var(--ease-in-out-back),
			color var(--transition-duration) var(--ease-in-out-sine);
	}

	nav > svg #logo:hover {
		color: hsl(210, 24%, 16%);
		color: var(--heading-color);
		transform: scale(1.4) rotate(-15deg);
	}

	nav > svg a {
		transition: transform 0.5s cubic-bezier(0.68, -0.5, 0.265, 1.55),
			color 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
		transition: transform var(--transition-duration) var(--ease-in-out-back),
			color var(--transition-duration) var(--ease-in-out-sine);
		transform: scale(0.8);
	}

	nav > svg a .text {
		transform: scale(0);
		transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
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

	:global(.webfonts) p {
		font-family: JosefinsansBold;
		font-weight: 700;
	}

	p {
		line-height: 1.75;
	}
</style>
