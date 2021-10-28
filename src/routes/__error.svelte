<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				error,
				status
			}
		};
	}
</script>

<script>
	import icons from '$lib/icons';

	export let error;
	export let status;
</script>

<header>
	<h1>Oopsie</h1>
	<p>Something quite unexpected has happened.</p>
</header>

<main>
	<p>Here's the error message for context.</p>

	<div>
		<span>
			{@html icons.editor}

			{status}
		</span>

		<pre><code>{error.message}</code></pre>
	</div>

	<p>
		If you need some guidance,
		<em>home is always a good place to start.</em>
	</p>

	<p>
		<a href="/">Go to home page</a>
	</p>
</main>

<style>
	header,
	main {
		width: 95vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
	}

	:global(body) {
		overflow-x: hidden;
	}

	header {
		margin: 0 auto 20px;
		padding: 2.5em 0;
		color: hsl(216, 33%, 97%);
		color: var(--cool-grey-000);
		background: hsl(330, 79%, 56%);
		background: var(--accent-color);
		position: relative;
		z-index: 5;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference])) header {
			color: hsl(210, 58%, 9%);
			color: var(--blue-grey-900);
		}
	}

	:global(html[data-preference='dark']) header {
		color: hsl(210, 58%, 9%);
		color: var(--blue-grey-900);
	}

	header > * + * {
		margin-top: 0.75em;
	}

	header h1 {
		color: inherit;
	}

	header::before {
		content: '';
		position: absolute;
		top: 0%;
		left: 50%;
		width: 100vw;
		height: 100%;
		transform: translateX(-50%);
		background: inherit;
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(338, 100%25, 86%25)" stroke="hsl(338, 100%25, 86%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		background-size: 100px;
		background-position: 0 100%;
		z-index: -5;
	}

	header::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		width: 100vw;
		height: 20px;
		transform: translateX(-50%) scaleY(-1);
		background: inherit;
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(338, 100%25, 86%25)" stroke="hsl(338, 100%25, 86%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		background-size: 100px;
		-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
		mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40"%3E%3Cg fill="currentColor" stroke="none"%3E%3Cpath d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" /%3E%3C/g%3E%3C/svg%3E');
		-webkit-mask-size: 100px 40px;
		mask-size: 100px 40px;
		-webkit-mask-position: 50% 0;
		mask-position: 50% 0;
		z-index: -5;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference])) header::before,
		:global(html:not([data-preference])) header::after {
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		}
	}

	:global(html[data-preference='dark']) header::before,
	:global(html[data-preference='dark']) header::after {
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
	}

	@supports (display: grid) {
		:global(body) {
			overflow-x: initial;
		}

		header {
			width: 100%;
			max-width: initial;
			margin: 0 initial 20px;
			display: grid;
			grid-template-columns: 1fr minmax(auto, 42rem) 1fr;
			grid-template-columns: 1fr minmax(auto, var(--max-width)) 1fr;
			gap: 0 2.5vw;
			gap: 0 calc((100vw - var(--width)) / 2);
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(338, 100%25, 86%25)" stroke="hsl(338, 100%25, 86%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
			background-size: 100px;
			background-position: 0 100%;
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
			grid-column: 2;
		}

		header::before {
			display: none;
		}

		header::after {
			left: 0%;
			width: 100%;
			transform: scaleY(-1);
			background: inherit;
		}
	}

	main {
		margin: 2em auto 4em;
	}

	main > * + * {
		margin-top: 0.75em;
	}

	span,
	pre {
		border-radius: 0.4rem;
		padding: 0.8em;
	}

	:global(.webfonts) span {
		font-family: JosefinsansSemibold, sans-serif;
	}

	span {
		font-weight: 600;
		color: hsl(216, 33%, 97%);
		color: var(--cool-grey-000);
		background: hsl(330, 79%, 56%);
		background: var(--accent-color);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(338, 100%25, 86%25)" stroke="hsl(338, 100%25, 86%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		background-size: 100px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
		transition: color var(--transition-duration) var(--ease-in-out-sine);
		display: flex;
		align-items: flex-end;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference])) span {
			color: hsl(210, 58%, 9%);
			color: var(--blue-grey-900);
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		}
	}

	:global(html[data-preference='dark']) span {
		color: hsl(210, 58%, 9%);
		color: var(--blue-grey-900);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
	}

	span :global(svg) {
		width: 1.25em;
		height: auto;
		margin-right: 0.4em;
	}

	pre {
		margin-top: 0;
		line-height: 1.75;
		color: hsl(341, 100%, 95%);
		color: var(--pink-000);
		background: hsl(320, 100%, 19%);
		background: var(--pink-900);
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference])) pre {
			color: hsl(186, 100%, 94%);
			color: var(--cyan-000);
			background: hsl(185, 91%, 17%);
			background: var(--cyan-900);
		}
	}

	:global(html[data-preference='dark']) pre {
		color: hsl(186, 100%, 94%);
		color: var(--cyan-000);
		background: hsl(185, 91%, 17%);
		background: var(--cyan-900);
	}

	pre {
		overflow-x: auto;
	}

	pre::-webkit-scrollbar {
		height: 0.4rem;
	}

	pre::-webkit-scrollbar-track {
		background: hsl(320, 100%, 19%);
		background: var(--pink-900);
	}

	pre::-webkit-scrollbar-thumb {
		background: hsl(330, 79%, 56%);
		background: var(--accent-color);
		border-radius: 0.2rem;
	}
</style>
