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

	import Meta from '$lib/components/routes/Meta.svelte';
	import Header from '$lib/components/routes/Header.svelte';
	import RelativeLink from '$lib/components/routes/RelativeLink.svelte';

	export let error;
	export let status;
</script>

<Meta title="{status} | borntofrappe" description={error.message} />

<Header>
	<h1>Oopsie</h1>
	<p>Something quite unexpected has happened.</p>
</Header>

<main id="content">
	<h2 class="visually-hidden">Status code {status}</h2>

	<p>Here's the error message for context.</p>

	<div>
		<span>
			{status}
			{@html icons.bug}
		</span>
		<pre><code>{error.message}</code></pre>
	</div>

	<p>
		If you think this is a mistake and you are up to the task, I would be most grateful if you were
		to file an issue
		<a
			href="https://github.com/borntofrappe/borntofrappe/issues/new?title=Status%20code%20{status}&body={error.message}&labels=bug"
			>on GitHub</a
		>.
	</p>

	<p>
		If you need some guidance,
		<em>home is always a good place to start.</em>
	</p>

	<p>
		<RelativeLink href="/">Go to home, page</RelativeLink>
	</p>
</main>

<style>
	main {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 2.5em auto 6em;
	}

	main > * + * {
		margin-top: 0.75em;
	}

	div span,
	div pre {
		border-radius: 1rem;
		padding: 1rem;
	}

	:global(.webfonts) div span {
		font-family: JosefinsansBold, sans-serif;
	}

	div span {
		color: hsl(210, 24%, 16%);
		color: var(--heading-color);
		background: hsl(330, 79%, 56%);
		background: var(--accent-color);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(338, 100%25, 86%25)" stroke="hsl(338, 100%25, 86%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		background-size: 5em;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-end;
		align-items: flex-end;
		gap: 0 0.5em;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference])) div span {
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		}
	}

	:global(html[data-preference='dark']) div span {
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
	}

	div span > :global(svg) {
		width: 1.25em;
		height: auto;
	}

	div pre {
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
		:global(html:not([data-preference])) div pre {
			color: hsl(185, 94%, 87%);
			color: var(--cyan-100);
			background: hsl(185, 91%, 17%);
			background: var(--cyan-900);
		}
	}

	:global(html[data-preference='dark']) div pre {
		color: hsl(185, 94%, 87%);
		color: var(--cyan-100);
		background: hsl(185, 91%, 17%);
		background: var(--cyan-900);
	}

	div pre {
		overflow-x: auto;
	}

	div pre::-webkit-scrollbar {
		height: 0.4rem;
	}

	div pre::-webkit-scrollbar-thumb {
		background: hsl(330, 79%, 56%);
		background: var(--accent-color);
		border-radius: 0.2rem;
	}
</style>
