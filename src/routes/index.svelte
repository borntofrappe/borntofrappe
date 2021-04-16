<script>
	import Meta from '$lib/Meta.svelte';
	import icons from '$lib/_icons.js';
	import { onMount } from 'svelte';

	const meta = {
		title: 'borntofrappe',
		description: 'Personal website of one Gabriele Corti.',
		url: '',
		image: 'borntofrappe'
	};

	const resizeIcon = (icon, size = 42) => icon.replace(/1em/g, size)

	const links = [
		// {
		//   name: 'blog',
		//   href: '/blog',
		//   desc:
		//     'Explore the articless I published in the blog.',
		// },
		{
			name: 'codepen',
			href: 'https://codepen.io/borntofrappe',
			desc:
				'Marvel at the innumerable demos I created to master HTML, CSS, JS, SVG, React and much more.',
		},
		{
			name: 'freecodecamp',
			href: 'https://www.freecodecamp.org/borntofrappe',
			desc: 'Admire the certifications I earned in the freeCodeCamp curriculum.',
		},
		{
			name: 'github',
			href: 'https://github.com/borntofrappe',
			desc: 'Review, fork, and improve the code I publish on Github.',
		},
		{
			name: 'twitter',
			href: 'https://twitter.com/borntofrappe',
			desc: 'Remember to follow me @borntofrappe.',
		},
	];

	const satellites = ['world', 'editor', 'running', 'flag', 'gaming'];

	const colors = [
		'hsl(350, 100%, 8%)',
		'hsl(347, 100%, 19%)',
		'hsl(345, 95%, 27%)',
		'hsl(345, 96%, 33%)',
		'hsl(342, 92%, 39%)',
		'hsl(340, 85%, 46%)',
		'hsl(340, 90%, 55%)',
		'hsl(339, 90%, 67%)',
		'hsl(336, 93%, 77%)',
		'hsl(335, 100%, 86%)',
		'hsl(330, 100%, 92%)',
	];

	let hero;
	let gettingStarted;
	let about;

	onMount(() => {
		const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('observed');
				} else {
					entry.target.classList.remove('observed');
				}
			});
		});

		if (!prefersReducedMotion.matches) {
			[hero, gettingStarted, about].forEach(observable => {
				observer.observe(observable)
			})
		}

		prefersReducedMotion.addEventListener('change', ({ matches }) => {
			if (matches) {
				[hero, gettingStarted, about].forEach(observable => {
					observer.unobserve(observable)
				})
			} else {
				[hero, gettingStarted, about].forEach(observable => {
					observer.observe(observable)
				})
			}
		});
	})
</script>

<Meta {...meta} />

<header bind:this={hero} class:observed={false}>
	<div>
    <h1>
      Hello, World
    </h1>
    <p>I enjoy writing code.</p>
  </div>

	<svg xmlns="http://www.w3.org/2000/svg" viewBox="-225 -225 450 450" width="400" height="400">
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
      <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
        <circle r="46" />
        <path d="M -10 -13 q 0 -8 -8 -10" stroke-dasharray="14.01 18.5" stroke-dashoffset="-4.5" />
        <path d="M -10 -13 h 15 a 8 8 0 0 1 0 16 h -4 h 4 a 10 10 0 0 1 0 20 h -15 v -36" stroke-dasharray="114.2 146.28" stroke-dashoffset="-9.145" />
      </g>
      <circle r="50" opacity="0" />
    </g>

		{#each links as {name, desc, href}, index}
			<g transform="rotate({(360 / links.length) * index}) translate(0 -150) rotate({(360 / links.length) * index * -1})">
				<a {href} aria-labelledby="title-{name}" aria-describedby="desc-{name}">
					<title id="title-{name}">{name}</title>
					<desc id="desc-{name}">{desc}</desc>
					<g transform="translate(-75 -75)">
						<svg viewBox="-50 -50 100 100" width="150" height="150">
								<use href="#path" stroke="currentColor" stroke-width="6" fill="none" />
								<g transform="rotate({(360 / links.length) * index})" mask="url(#mask-text)">
									<g class="text">
										<text fill="currentColor" font-weight="bold" letter-spacing="1" text-anchor="middle" font-size="12" font-family="monospace">
											<textPath href="{(360 / links.length) * index > 90 && (360 / links.length) * index < 270 ? '#path-cc' : '#path-c'}" startOffset="50%">
												{name}
											</textPath>
										</text>
									</g>
								</g>
	
								<g transform="translate(-16 -16)">
									{@html resizeIcon(icons[name], 32)}
								</g>
								<circle r="50" opacity="0" />
						</svg>
					</g>
				</a>
			</g>
		{/each}
  </svg>
</header>

<main id="content">
	<section bind:this={gettingStarted} class:observed={false} id="getting-started">
		<h2 class="visually-hidden">Getting started</h2>
		<p>
			This website is in its infancy, but I hope you'll find something of
			value still. If you haven't checked it out already, might I suggest a
			visit to my CodePen profile?
		</p>
		<a href="https://codepen.io/borntofrappe" class="relative">Explore pens</a>
	</section>


	<section bind:this={about} class:observed={false} id="about">
		<h2>Almost forgot</h2>
		<p>I'm <mark>Gabriele Corti</mark>, coming to you from Europe, and a couple of hours after Greenwich time.</p>
		<p>Outside of VS Code, you'll find me running, watching the highlight of a Formula 1 race, or enjoying a dated video game. Depends on the season.</p>

		<svg viewBox="-50 -50 100 50" width="400" height="200">
			<defs>
				<clipPath id="clip-planet">
					<circle r="30" />
				</clipPath>
		
				<mask id="mask-satellites">
					<rect x="-50" y="-50" width="100" height="100" fill="hsl(0, 0%, 100%)" />
					<g fill="hsl(0, 0%, 0%)">
						<g class="rotate">
							{#each satellites as satellite, index}
								<g transform="rotate({(360 / satellites.length) * index * -1}) translate(0 -42)">
									<circle r="7.5" />
								</g>
							{/each}
						</g>
					</g>
				</mask>
			</defs>
		
			<g clip-path="url(#clip-planet)">
				<g transform="translate(0 -70)">
					{#each colors as color, index}
						<ellipse style="color: {color}; color: var(--primary-{index});" fill="currentColor" stroke="none" cx="0" cy="70" rx="{35 + (15 / colors.length) * index}" ry="33" transform="scale({1 -	(0.65 / colors.length) * index})" />
					{/each}
				</g>
			</g>
			<circle r="30" style="color: {colors[colors.length - 1]}; color: var(--grey-10);" fill="none" stroke="currentColor" stroke-width="0.2" />
		
			<g mask="url(#mask-satellites)">
				<circle r="42" stroke-dasharray="1 2" stroke-linecap="round" fill="none" stroke="currentColor" stroke-width="0.5" />
			</g>
		
			<g class="rotate">
				{#each satellites as satellite, index}
				<g transform="rotate({(360 / satellites.length) * index * -1}) translate(0 -42) rotate({(360 / satellites.length) * index})">
					<g transform="scale(-1 1)">
						<g class="rotate">
							<g transform="scale(-1 1)">
								<circle fill="none" stroke="currentColor" stroke-width="1" r="7.5" />
								<g transform="translate(-4 -4)">
									{@html resizeIcon(icons[satellite], 8)}
								</g>
							</g>
						</g>
					</g>
				</g>
				{/each}
			</g>
		</svg>
	</section>
</main>

<style>
	header {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		padding: 2rem 1rem;
		color: hsl(215, 10%, 97%);
		color: var(--frappe-grey-10);
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
		background-position: 0 100%;
		position: relative;
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
	}
	
	header > svg {
		order: -1;
		max-width: 24rem;
		height: auto;
		margin: 1rem;
		--transition-duration: 0.4s;
	}
	
	@media (min-width: 50rem) {
		header > svg {
			max-width: 28rem;
		}
	}
	
	header > svg #borntofrappe {
		transition: transform 0.4s cubic-bezier(0.68, -0.5, 0.265, 1.55),
			color 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
		transition: transform var(--transition-duration) var(--ease-in-out-back),
			color var(--transition-duration) var(--ease-in-out-sine);
	}
	
	header > svg #borntofrappe:hover {
		color: hsl(340, 90%, 55%);
		color: var(--primary-6);
		transform: scale(1.25) rotate(-10deg);
	}
	
	header > svg a {
		transition: transform 0.4s cubic-bezier(0.68, -0.5, 0.265, 1.55),
			color 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
		transition: transform var(--transition-duration) var(--ease-in-out-back),
			color var(--transition-duration) var(--ease-in-out-sine);
		transform: scale(0.85);
	}
	
	header > svg a .text {
		z-index: -5;
		transform: scale(0);
		transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
		transition: transform var(--transition-duration) var(--ease-out-cubic);
	}
	
	header > svg a:hover,
	header > svg a:focus,
	header > svg a:hover .text,
	header > svg a:focus .text {
		transform: scale(1);
	}
	
	header > svg a:focus {
		outline: none;
	}
	
	header div > * + * {
		margin-top: 1.25em;
	}
	
	header div {
		margin: 0 1rem;
		position: relative;
		padding-bottom: 50px;
	}
	
	header div::after {
		z-index: 20;
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="150" height="150"%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg fill="hsl(215, 10%25, 97%25)" stroke="none"%3E%3Cpath d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath transform="scale(-1 1)" d="M 20 -2.5 c 10 -5 15 5 5 10 a 8 8 0 0 0 -5 -10" /%3E%3Cpath d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3Cpath transform="scale(-1 1)" d="M 20 41.5 c 2.5 10 -10 10 -16 -5 a 16 16 0 0 0 16 5" /%3E%3C/g%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(215, 10%25, 97%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		position: absolute;
		top: 100%;
		right: 0%;
		margin-top: -50px;
		transform: rotate(30deg);
		animation: rotate-astronaut 100s var(--ease-in-out-sine) alternate infinite;
		animation: rotate-astronaut 100s cubic-bezier(0.445, 0.05, 0.55, 0.95)
			alternate infinite;
		animation-play-state: paused;
	}
	
	header div h1 {
		color: inherit;
	}
	
	header.observed div::after {
		animation-play-state: running;
	}
	
	@keyframes rotate-astronaut {
		to {
			transform: rotate(-30deg);
		}
	}
	
	@media (prefers-reduced-motion: reduce) {
		header.observed div::after {
			animation-play-state: paused;
		}
	}
	
	main {
		overflow-x: hidden;
	}
	
	section {
		max-width: 40rem;
		margin: 5em auto;
		width: 90vw;
	}
	
	section + section {
		position: relative;
	}
	
	section + section::before {
		content: '';
		position: absolute;
		margin-bottom: 1.5em;
		bottom: 100%;
		left: 50%;
		width: 100vw;
		height: 0.5rem;
		transform: translate(-50%, -50%);
		background: hsl(215, 22%, 5%);
		background: var(--frappe-grey-0);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		background-size: 20px;
	}
	
	@supports ((mask-image: url()) or (-webkit-mask-image: url())) {
		section + section {
			margin-top: 7em;
		}
	
		section + section::before {
			margin-bottom: initial;
			height: 3.25em;
			-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
			mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
			-webkit-mask-size: auto 2.5em;
			mask-size: auto 2.5em;
			-webkit-mask-position: 50% 50%;
			mask-position: 50% 50%;
			-webkit-mask-repeat: repeat-x;
			mask-repeat: repeat-x;
		}
	}
	
	section > * + * {
		margin-top: 0.4em;
	}
	
	section#getting-started p:first-of-type {
		margin-top: 1em;
	}
	
	@media (min-width: 50rem) {
		section#getting-started a {
			font-size: 1.2rem;
			font-size: var(--size-500);
		}
	}
	
	section#getting-started {
		position: relative;
	}
	
	section#getting-started::before {
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="hsl(339, 90%25, 67%25)" stroke="hsl(350, 100%25, 8%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-dasharray="84 20 84" d="M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36" /%3E%3Cpath d="M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24" /%3E%3Cpath d="M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16" /%3E%3C/g%3E%3C/svg%3E');
		width: 6.5em;
		height: 6.5em;
		background: none;
		float: left;
		padding: 1.5rem;
		padding-left: 0;
		shape-outside: circle();
	}
	
	section#getting-started::after {
		position: absolute;
		left: -0.75rem;
		top: 0.75rem;
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-76 -33 100 100"%3E%3Cg fill="hsl(336, 93%25, 77%25)" stroke="hsl(350, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="5" transform="translate(-63 0) scale(0.4)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3.6" transform="translate(-51 0) scale(0.55)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3" transform="translate(-37 0) scale(0.65)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="2.5" transform="translate(-20 0) scale(0.8)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cg stroke-width="2"%3E%3Cpath d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath d="M 12 -14 a 15 15 0 0 1 0 28" /%3E%3Cpath fill="none" stroke-width="3" stroke-dasharray="0 8 12 20" transform="translate(12 0) scale(0.65)" d="M 0 -14 a 15 15 0 0 1 0 28" /%3E%3Crect fill="hsl(339, 90%25, 67%25)" y="-17" width="12" height="34" rx="6" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		width: 6.5em;
		height: 6.5em;
		transform: rotate(-20deg);
		transform-origin: 50% 33%;
	}
	
	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference]) section#getting-started::before) {
			content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="hsl(210, 90%25, 62%25)" stroke="hsl(220, 100%25, 8%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-dasharray="84 20 84" d="M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36" /%3E%3Cpath d="M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24" /%3E%3Cpath d="M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16" /%3E%3C/g%3E%3C/svg%3E');
		}
		:global(html:not([data-preference]) section#getting-started::after) {
			content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-76 -33 100 100"%3E%3Cg fill="hsl(208, 95%25, 75%25)" stroke="hsl(220, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="5" transform="translate(-63 0) scale(0.4)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3.6" transform="translate(-51 0) scale(0.55)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3" transform="translate(-37 0) scale(0.65)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="2.5" transform="translate(-20 0) scale(0.8)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cg stroke-width="2"%3E%3Cpath d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath d="M 12 -14 a 15 15 0 0 1 0 28" /%3E%3Cpath fill="none" stroke-width="3" stroke-dasharray="0 8 12 20" transform="translate(12 0) scale(0.65)" d="M 0 -14 a 15 15 0 0 1 0 28" /%3E%3Crect fill="hsl(210, 90%25, 62%25)" y="-17" width="12" height="34" rx="6" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E') !important;
		}
	}
	
	:global(html[data-preference='dark'] section#getting-started::before) {
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg fill="hsl(210, 90%25, 62%25)" stroke="hsl(220, 100%25, 8%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-dasharray="84 20 84" d="M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36" /%3E%3Cpath d="M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24" /%3E%3Cpath d="M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16" /%3E%3C/g%3E%3C/svg%3E') !important;
	}
	
	:global(html[data-preference='dark'] section#getting-started::after) {
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-76 -33 100 100"%3E%3Cg fill="hsl(208, 95%25, 75%25)" stroke="hsl(220, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="5" transform="translate(-63 0) scale(0.4)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3.6" transform="translate(-51 0) scale(0.55)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3" transform="translate(-37 0) scale(0.65)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="2.5" transform="translate(-20 0) scale(0.8)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cg stroke-width="2"%3E%3Cpath d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath d="M 12 -14 a 15 15 0 0 1 0 28" /%3E%3Cpath fill="none" stroke-width="3" stroke-dasharray="0 8 12 20" transform="translate(12 0) scale(0.65)" d="M 0 -14 a 15 15 0 0 1 0 28" /%3E%3Crect fill="hsl(210, 90%25, 62%25)" y="-17" width="12" height="34" rx="6" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E') !important;
	}
	
	section#getting-started::after {
		animation: tilt-telescope 10s ease-in-out infinite alternate;
		animation-play-state: paused;
	}
	
	section#getting-started.observed::after {
		animation-play-state: running;
	}
	
	@keyframes tilt-telescope {
		20%,
		100% {
			transform: rotate(25deg);
		}
	}
	
	@media (prefers-reduced-motion: reduce) {
		section#getting-started.observed::after {
			animation-play-state: paused;
		}
	}
	
	section#about {
		display: flex;
		flex-direction: column;
		--elevation: 2em;
		margin-bottom: 0;
	}
	
	section#about p:first-of-type {
		margin-top: 2em;
		margin-top: var(--elevation);
	}
	
	section#about h2 {
		text-align: center;
	}
	
	section#about p {
		align-self: flex-start;
	}
	
	section#about mark {
		color: inherit;
		background: none;
		font-weight: 700;
		position: relative;
		z-index: 5;
	}
	
	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference]) section#about mark) {
			font-weight: 600;
		}
	}
	
	:global(html[data-preference='dark'] section#about mark) {
		font-weight: 600;
	}
	
	section#about mark::after {
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke="hsl(350, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cellipse fill="hsl(339, 90%25, 67%25)" rx="45" ry="20" /%3E%3Cpath fill="hsl(336, 93%25, 77%25)" d="M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0" /%3E%3Cpath transform="scale(0.85)" stroke-width="2.5" fill="none" d="M -28 -5 a 28 28 0 0 1 56 0" stroke-dasharray="20 80" stroke-dashoffset="48" /%3E%3C/g%3E%3C/svg%3E');
		position: absolute;
		bottom: 2em;
		bottom: var(--elevation);
		right: 0;
		width: 3em;
		height: 3em;
		transform: translate(50%, 50%) rotate(30deg);
		z-index: -5;
	}
	
	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference]) section#about mark::after) {
			content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke="hsl(220, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cellipse fill="hsl(210, 90%25, 62%25)" rx="45" ry="20" /%3E%3Cpath fill="hsl(208, 95%25, 75%25)" d="M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0" /%3E%3Cpath transform="scale(0.85)" stroke-width="2.5" fill="none" d="M -28 -5 a 28 28 0 0 1 56 0" stroke-dasharray="20 80" stroke-dashoffset="48" /%3E%3C/g%3E%3C/svg%3E') !important;
		}
	}
	
	:global(html[data-preference='dark'] section#about mark::after) {
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke="hsl(220, 100%25, 8%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cellipse fill="hsl(210, 90%25, 62%25)" rx="45" ry="20" /%3E%3Cpath fill="hsl(208, 95%25, 75%25)" d="M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0" /%3E%3Cpath transform="scale(0.85)" stroke-width="2.5" fill="none" d="M -28 -5 a 28 28 0 0 1 56 0" stroke-dasharray="20 80" stroke-dashoffset="48" /%3E%3C/g%3E%3C/svg%3E') !important;
	}
	
	@supports (clip-path: polygon(100% 0%, 100% 100%, 100% 100%)) {
		section#about mark::before {
			content: '';
			position: absolute;
			bottom: 0;
			right: 0;
			width: 3em;
			height: 2em;
			height: var(--elevation);
			background: hsl(330, 100%, 92%);
			background: var(--primary-10);
			z-index: -5;
		}
	
		@media (prefers-color-scheme: dark) {
			:global(html:not([data-preference]) section#about mark::before) {
				opacity: 0.2;
			}
		}
	
		:global(html[data-preference='dark'] section#about mark::before) {
			opacity: 0.2;
		}
	
		section#about mark::before {
			clip-path: polygon(100% 0%, 100% 100%, 100% 100%);
			animation: clip-polygon 10s ease-in-out infinite alternate paused;
		}
	
		section#about mark::after {
			transform: translate(50%, 50%) rotate(0deg);
			animation: rotate-ufo 10s ease-in-out infinite alternate paused;
		}
	
		section#about.observed mark::before,
		section#about.observed mark::after {
			animation-play-state: running;
		}
	
		@keyframes clip-polygon {
			10% {
				clip-path: polygon(100% 0%, 70% 100%, 0% 100%);
			}
			20%,
			100% {
				clip-path: polygon(100% 0%, 90% 100%, 10% 100%);
			}
		}
	
		@keyframes rotate-ufo {
			10% {
				transform: translate(50%, 50%) rotate(40deg);
			}
			20%,
			100% {
				transform: translate(50%, 50%) rotate(25deg);
			}
		}
	
		@media (prefers-reduced-motion: reduce) {
			section#about.observed mark::before,
			section#about.observed mark::after {
				animation-play-state: paused;
			}
	
			section#about.observed mark::before {
				clip-path: polygon(100% 0%, 90% 100%, 10% 100%);
			}
	
			section#about.observed mark::after {
				transform: translate(50%, 50%) rotate(25deg);
			}
		}
	}
	
	section#about > svg {
		align-self: center;
		color: hsl(340, 90%, 55%);
		color: var(--primary-6);
		max-width: 30rem;
		width: 90%;
		height: auto;
	}
	
	section#about > svg .rotate {
		animation: rotate-orbit 200s linear infinite;
		animation-play-state: paused;
	}
	
	section#about.observed > svg .rotate {
		animation-play-state: running;
	}
	
	@keyframes rotate-orbit {
		to {
			transform: rotate(1turn);
		}
	}
	
	@media (prefers-reduced-motion: reduce) {
		section#about.observed > svg .rotate {
			animation-play-state: paused;
		}
	}
</style>