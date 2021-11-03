<script>
	import Meta from '$lib/components/routes/Meta.svelte';
	import Hero from '$lib/components/homepage/Hero.svelte';
	import GettingStarted from '$lib/components/homepage/GettingStarted.svelte';
	import About from '$lib/components/homepage/About.svelte';
</script>

<Meta
	description="Welcome to my personal website, a small corner on the web where I try to convince you I'm a solid programmer."
/>

<Hero />

<main id="content">
	<GettingStarted />
	<About />
</main>

<style>
	main {
		--section-whitespace: 6em;
		overflow-x: hidden;
	}

	main :global(p) {
		line-height: 1.75;
	}

	main > :global(*) {
		width: 95vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 5em auto;
		margin: var(--section-whitespace) auto;
	}

	main > :global(*:last-of-type) {
		margin-bottom: 0;
	}

	main > :global(* + *) {
		position: relative;
		padding-top: 5em;
		padding-top: var(--section-whitespace);
	}

	main > :global(* + *::before) {
		content: '';
		position: absolute;
		bottom: 100%;
		left: 50%;
		width: 100vw;
		height: 0.5em;
		transform: translate(-50%, 50%);
		background: hsl(330, 79%, 56%);
		background: var(--accent-color);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(338, 100%25, 86%25)" stroke="hsl(338, 100%25, 86%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		background-size: 100px;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference])) main > :global(* + *::before) {
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		}
	}

	:global(html[data-preference='dark']) main > :global(* + *::before) {
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		main > :global(* + *::before) {
			height: 2em;
			height: calc(var(--section-whitespace) / 3);
			-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
			mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
			-webkit-mask-size: auto 100%;
			mask-size: auto 100%;
			-webkit-mask-position: 50% 50%;
			mask-position: 50% 50%;
			-webkit-mask-repeat: repeat-x;
			mask-repeat: repeat-x;
		}
	}
</style>
