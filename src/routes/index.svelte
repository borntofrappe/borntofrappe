<script>
	import Meta from '$lib/components/routes/Meta.svelte';
	import Header from '$lib/components/routes/Header.svelte';

	import GettingStarted from '$lib/components/index/GettingStarted.svelte';
	import About from '$lib/components/index/About.svelte';
</script>

<Meta
	title="borntofrappe"
	description="Hello, and welcome to my personal website. This is where I try to convince you I'm a solid programmer. Signed, Gabriele Corti, coding online @borntofrappe."
/>

<Header title="Hello world" body="You are welcomed." />

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

	main > :global(section) {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 6em auto;
		margin: var(--section-whitespace) auto;
	}

	main > :global(section > * + *) {
		margin-top: 0.75em;
	}

	main > :global(section + section) {
		position: relative;
		padding-top: 6em;
		padding-top: var(--section-whitespace);
	}

	main > :global(section + section::before) {
		content: '';
		position: absolute;
		left: 50%;
		top: 0%;
		width: 100vw;
		height: 0.5em;
		transform: translate(-50%, -50%);
		background: hsl(330, 79%, 56%);
		background: var(--accent-color);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(338, 100%25, 86%25)" stroke="hsl(338, 100%25, 86%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		background-size: 100px;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference])) main > :global(section + section::before) {
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		}
	}

	:global(html[data-preference='dark']) main > :global(section + section::before) {
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
	}

	@supports ((-webkit-mask-image: url()) or (mask-image: url())) {
		main > :global(section + section::before) {
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
