<script>
	import icons from '$lib/icons';

	export let title;
	export let keywords;
	export let latest;
</script>

<header class:latest>
	<h1>{title}</h1>

	{#if keywords}
		<p class="visually-hidden">Keywords</p>
		<ul>
			{#each keywords as keyword}
				<li>
					<span class="visually-hidden">{keyword}</span>
					{@html icons[keyword] || icons.bug}
				</li>
			{/each}
		</ul>
	{/if}
</header>

<style>
	header {
		padding: 4.5em 1em 3.5em;
		background: hsl(330, 79%, 56%);
		background: var(--accent-color);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(338, 100%25, 86%25)" stroke="hsl(338, 100%25, 86%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		background-size: 100px;
		position: relative;
		z-index: 5;
		margin-bottom: 20px;
	}

	header.latest::before {
		line-height: 0;
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -35 120 80"%3E%3Cg transform="rotate(180)"%3E%3Cg fill="hsl(210, 24%25, 16%25)" stroke="hsl(210, 24%25, 16%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cpath transform="translate(0 -10)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3Cpath transform="rotate(90) translate(0 -35) scale(0.8)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3Cpath transform="rotate(-90) translate(0 -35) scale(0.8)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3C/g%3E%3Cg transform="translate(0 54)"%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(210, 24%25, 16%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		position: absolute;
		top: 0;
		width: 7em;
		left: 50%;
		transform: translateX(-50%);
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
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		}

		:global(html:not([data-preference])) header.latest::before {
			content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -35 120 80"%3E%3Cg transform="rotate(180)"%3E%3Cg fill="hsl(213, 33%25, 88%25)" stroke="hsl(213, 33%25, 88%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cpath transform="translate(0 -10)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3Cpath transform="rotate(90) translate(0 -35) scale(0.8)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3Cpath transform="rotate(-90) translate(0 -35) scale(0.8)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3C/g%3E%3Cg transform="translate(0 54)"%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(213, 33%25, 88%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		}
	}

	:global(html[data-preference='dark']) header {
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
	}

	:global(html[data-preference='dark']) header.latest::before {
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -35 120 80"%3E%3Cg transform="rotate(180)"%3E%3Cg fill="hsl(213, 33%25, 88%25)" stroke="hsl(213, 33%25, 88%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cpath transform="translate(0 -10)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3Cpath transform="rotate(90) translate(0 -35) scale(0.8)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3Cpath transform="rotate(-90) translate(0 -35) scale(0.8)" d="M -4 0 a 4 4 0 0 0 4 -4 4 4 0 0 0 4 4 4 4 0 0 0 -4 4 4 4 0 0 0 -4 -4" /%3E%3C/g%3E%3Cg transform="translate(0 54)"%3E%3Cg stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cg stroke="none"%3E%3Ccircle fill="none" r="25" cy="-24"/%3E%3Cg fill="hsl(213, 33%25, 88%25)"%3E%3Cpath d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath transform="scale(-1 1)" d="M 23 -30 a 7.5 7.5 0 0 1 0 14 18 18 0 0 0 0 -14"/%3E%3Cpath d="M -25 -24 a 25 25 0 0 1 50 0 26 26 0 0 0 -50 0" /%3E%3Cpath d="M -25 -24 a 25 25 0 0 0 50 0 25.2 25.2 0 0 1 -50 0" /%3E%3Cpath d="M -8 -35 a 12.5 12.5 0 0 0 5 27.5 27.5 27.5 0 0 1 -5 -27.5" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
	}

	h1 {
		text-align: center;
		max-width: 15ch;
		margin: 0 auto;
	}

	ul {
		padding: 0;
		margin-top: 10px;
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow-x: auto;
		display: flex;
		align-items: center;
		z-index: 5;
	}

	ul li {
		flex-shrink: 0;
		padding: 10px;
		border-radius: 50%;
		margin: 0px 22.5px;
		width: 55px;
		height: 55px;
		color: hsl(330, 79%, 56%);
		color: var(--accent-color);
		background: hsl(341, 100%, 95%);
		background: var(--background-color);
		border: 0.25em solid currentColor;
	}

	@supports (display: grid) {
		ul {
			align-items: initial;
			display: grid;
			grid-auto-columns: 100px;
			justify-items: center;
			grid-auto-flow: column;
		}

		ul li {
			flex-shrink: initial;
			margin: 0px;
			width: 3em;
			height: 3em;
		}
	}

	ul li::marker {
		content: '';
	}

	ul li > :global(svg) {
		width: 100%;
		height: auto;
	}

	ul::-webkit-scrollbar {
		height: 0.2rem;
	}

	ul::-webkit-scrollbar-track {
		background: hsl(341, 100%, 95%);
		background: var(--background-color);
	}

	ul::-webkit-scrollbar-thumb {
		border-radius: 0.5rem;
		background: hsl(330, 79%, 56%);
		background: var(--accent-color);
	}
</style>
