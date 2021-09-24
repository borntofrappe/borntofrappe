<script>
	import icons from '$lib/icons.js';

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

<header class:observed={false}>
	<div>
		<h1>Hello, World!</h1>
		<p>I enjoy writing code.</p>
		<p>With this website, I try to convince you I might be good at it as well.</p>
	</div>

	<nav aria-label="borntofrappe links">
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
												font-weight="bold"
												letter-spacing="1"
												text-anchor="middle"
												font-size="12"
												font-family="inherit"
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
									{@html icons[name].replace(
										/width="[^"]+"\sheight="[^"]+"/,
										'width="32" height="32"'
									)}
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
	header {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;
		padding: 2.5rem 0;
		color: hsl(215, 10%, 98%);
		color: var(--frappe-grey-10);
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
		background-position: 0 100%;
		position: relative;
		z-index: 0;
		--animation-duration: 12s;
	}

	header::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 0%;
		width: 100%;
		height: 20px;
		transform: scaleY(-1);
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
		-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
		mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
		-webkit-mask-size: 100px 40px;
		mask-size: 100px 40px;
		-webkit-mask-position: 50% 0;
		mask-position: 50% 0;
		z-index: -5;
	}

	header > * {
		width: 90vw;
		width: var(--width);
		max-width: 30rem;
	}

	header nav {
		--transition-duration: 0.4s;
		order: -1;
		padding: 0.5rem;
	}

	header nav > svg {
		width: 100%;
		height: auto;
	}

	header nav > svg #borntofrappe {
		transition: transform 0.4s cubic-bezier(0.68, -0.5, 0.265, 1.55),
			color 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
		transition: transform var(--transition-duration) var(--ease-in-out-back),
			color var(--transition-duration) var(--ease-in-out-sine);
	}

	header nav > svg #borntofrappe:hover {
		color: hsl(340, 90%, 55%);
		color: var(--primary-6);
		transform: scale(1.25) rotate(-10deg);
	}

	header nav > svg a {
		transition: transform 0.4s cubic-bezier(0.68, -0.5, 0.265, 1.55),
			color 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
		transition: transform var(--transition-duration) var(--ease-in-out-back),
			color var(--transition-duration) var(--ease-in-out-sine);
		transform: scale(0.85);
	}

	header nav > svg a .text {
		font-family: 'Inconsolata', Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
		transform: scale(0);
		transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
		transition: transform var(--transition-duration) var(--ease-out-cubic);
	}

	header nav > svg a:hover,
	header nav > svg a:focus,
	header nav > svg a:hover .text,
	header nav > svg a:focus .text {
		transform: scale(1);
	}

	header nav > svg a:focus {
		outline: none;
	}

	header div > * + * {
		margin-top: 0.5em;
	}

	header > *:nth-last-child(2) {
		position: relative;
	}

	header > *:nth-last-child(2)::after {
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="none"%3E%3Cpath d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath transform="scale(-1 1)" d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3Cpath transform="scale(-1 1)" d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3C/g%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		position: absolute;
		top: 100%;
		left: 50%;
		width: 8em;
		height: 8em;
		transform: translateX(-50%) rotate(45deg);
		animation: rotate-astronaut 12s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
		animation: rotate-astronaut var(--animation-duration) var(--ease-in-out-sine) infinite;
		animation-play-state: paused;
	}

	header.observed > *:nth-last-child(2)::after {
		animation-play-state: running;
	}

	@keyframes rotate-astronaut {
		20% {
			transform: translateX(-50%) rotate(15deg);
		}

		40%,
		100% {
			transform: translateX(-50%) rotate(45deg);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		header.observed > *:nth-last-child(2)::after {
			animation-play-state: paused;
		}
	}

	header h1 {
		color: inherit;
	}
</style>
