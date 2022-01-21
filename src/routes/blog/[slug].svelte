<script context="module">
	export async function load({ session, params }) {
		const { articles } = session;

		const article = articles.get(params.slug);

		if (article) {
			const articles = import.meta.glob('/src/blog/*.{md,svx}');
			const { default: Module } = await articles[article.path]();

			const { title, brief, keywords, latest } = article;

			return {
				props: {
					Module,
					title,
					brief,
					keywords: keywords.replace(/ /g, '').split(','),
					latest
				}
			};
		}

		return {
			status: 404,
			error: new Error(`No article found in 'blog/${params.slug}'`)
		};
	}
</script>

<script>
	import Meta from '$lib/components/routes/Meta.svelte';
	import Header from '$lib/components/blog/article/Header.svelte';

	export let title;
	export let keywords;
	export let brief;
	export let latest;

	export let Module;
</script>

<Meta title="{title} | borntofrappe" description={brief} />

<Header {title} {keywords} {latest} />

<main id="content">
	<svelte:component this={Module} />
</main>

<style>
	main {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 3em auto 6em;
	}

	main > :global(* + *) {
		margin-top: 1em;
		margin-top: var(--vertical-rhythm, 1em);
	}

	main > :global(h2),
	main > :global(h3) {
		--vertical-rhythm: var(--size-800);
	}

	main > :global(h2 + *),
	main > :global(h3 + *) {
		--vertical-rhythm: var(--size-300);
	}

	main > :global(blockquote),
	main > :global(blockquote + *) {
		--vertical-rhythm: var(--size-800);
	}

	main > :global(table),
	main > :global(table + *) {
		--vertical-rhythm: var(--size-700);
	}

	main > :global(pre),
	main > :global(pre + *),
	main > :global(.code),
	main > :global(.code + *) {
		--vertical-rhythm: var(--size-600);
	}

	main > :global(h2),
	main > :global(h3),
	main > :global(h4) {
		display: flex;
		align-items: center;
		gap: 0 0.5rem;
	}

	main > :global(h2 a),
	main > :global(h3 a),
	main > :global(h4 a) {
		opacity: 0.3;
		width: 0.5em;
		height: 0.5em;
		transition-property: opacity, color;
		transition-duration: 0.25s;
		transition-duration: var(--transition-duration);
		transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
		transition-timing-function: var(--ease-in-out-sine);
		background: currentColor;
		border-radius: 50%;
	}

	main > :global(h2 a:focus),
	main > :global(h3 a:focus),
	main > :global(h4 a:focus) {
		opacity: 1;
	}

	main > :global(h2 a:hover),
	main > :global(h3 a:hover),
	main > :global(h4 a:hover) {
		opacity: 1;
		color: hsl(330, 79%, 56%);
		color: var(--accent-color);
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		main > :global(h2 a),
		main > :global(h3 a),
		main > :global(h4 a) {
			border-radius: initial;
			background: initial;
			position: relative;
			width: 1em;
			height: 1em;
			z-index: 0;
		}

		main > :global(h2 a::before),
		main > :global(h3 a::before),
		main > :global(h4 a::before) {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: currentColor;
			-webkit-mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg transform="rotate(-45)"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"%3E%3Cpath stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /%3E%3Cpath transform="scale(-1 -1)" stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
			mask-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg transform="rotate(-45)"%3E%3Cg fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"%3E%3Cpath stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /%3E%3Cpath transform="scale(-1 -1)" stroke-dasharray="140 26" stroke-dashoffset="-20" d="M -21 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
			z-index: -5;
		}
	}

	main > :global(.code > span),
	main > :global(.code pre) {
		border-radius: 1rem;
		padding: 0.8em;
	}

	:global(.webfonts) main > :global(.code > span) {
		font-family: JosefinsansBold, sans-serif;
		font-weight: 700;
	}

	main > :global(.code > span) {
		color: hsl(210, 24%, 16%);
		color: var(--heading-color);
		background: hsl(330, 79%, 56%);
		background: var(--accent-color);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(338, 100%25, 86%25)" stroke="hsl(338, 100%25, 86%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		background-size: 100px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-end;
		align-items: flex-end;
		gap: 0 0.5em;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference])) main > :global(.code > span) {
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		}
	}

	:global(html[data-preference='dark']) main > :global(.code > span) {
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(-6.9531515736461635 -1.283205144154147) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(27.449342987155234 -8.584339853018864) scale(0.8) rotate(6)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(93.93448563020237 -7.705527414693059) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(188.60206276401613 -7.377184122537539) scale(0.69) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(129.8022849028258 20.883501856760752) scale(0.46) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(135.46492785158605 42.00608006573182) scale(0.8) rotate(10)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(12.485344194504528 64.95984030608706) scale(0.59) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(55.837337959063106 61.74613185317838) scale(0.64) rotate(-11)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(130.2985687237271 61.35026847753005) scale(0.2) rotate(-9)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(183.55942247075717 58.71016275918308) scale(0.58) rotate(13)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(75.63676062384502 85.47393174669497) scale(0.49) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(137.20478055446023 71.744116791926) scale(0.76) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(13.993704435835138 96.4516781060633) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(185.2776918516841 104.01617680345214) scale(0.67) rotate(0)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(48.42471934466445 113.11671232223124) scale(0.79) rotate(-7)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(100.76743405472973 124.09061330045566) scale(0.38) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(160.70100126851162 112.99900349460486) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(-3.7815933197626483 130.06136374129) scale(0.54) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(31.315248223609927 176.9606892813661) scale(0.79) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(63.38822376845302 174.28757654182186) scale(0.2) rotate(0)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(134.3634840765932 183.83342604242358) scale(0.64) rotate(0)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
	}

	main > :global(.code > span svg) {
		width: 1.25em;
		height: auto;
	}

	main > :global(.code pre) {
		tab-size: 4;
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
		:global(html:not([data-preference])) main > :global(.code > pre) {
			color: hsl(185, 94%, 87%);
			color: var(--cyan-100);
			background: hsl(185, 91%, 17%);
			background: var(--cyan-900);
		}
	}

	:global(html[data-preference='dark']) main > :global(.code > pre) {
		color: hsl(185, 94%, 87%);
		color: var(--cyan-100);
		background: hsl(185, 91%, 17%);
		background: var(--cyan-900);
	}

	main > :global(.code pre) {
		overflow-x: auto;
	}

	main > :global(.code pre::-webkit-scrollbar) {
		height: 0.4rem;
	}

	main > :global(.code pre::-webkit-scrollbar-thumb) {
		border-radius: 0.25rem;
		background: hsl(330, 79%, 56%);
		background: var(--accent-color);
	}
</style>
