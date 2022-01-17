<header>
	<slot />
</header>

<style>
	:global(body) {
		overflow-x: hidden;
	}

	header {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 0 auto;
		padding: 2.5em 0;
		position: relative;
		z-index: 5;
		margin-bottom: 20px;
	}

	header > :global(* + *) {
		margin-top: 0.75em;
	}

	header::before {
		content: '';
		position: absolute;
		top: 0%;
		left: 50%;
		width: 100vw;
		height: 100%;
		transform: translateX(-50%);
		background: hsl(330, 79%, 56%);
		background: var(--accent-color);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(338, 100%25, 86%25)" stroke="hsl(338, 100%25, 86%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		background-size: 100px;
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
		background: hsl(330, 79%, 56%);
		background: var(--accent-color);
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(338, 100%25, 86%25)" stroke="hsl(338, 100%25, 86%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
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
		:global(html:not([data-preference])) header::after,
		:global(html:not([data-preference])) header::before {
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		}
	}

	:global(html[data-preference='dark']) header::after,
	:global(html[data-preference='dark']) header::before {
		background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
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
			gap: 0 5vw;
			gap: 0 calc((100vw - var(--width)) / 2);
			background: hsl(330, 79%, 56%);
			background: var(--accent-color);
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(338, 100%25, 86%25)" stroke="hsl(338, 100%25, 86%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
			background-size: 100px;
		}

		header::after {
			background: inherit;
		}

		@media (prefers-color-scheme: dark) {
			:global(html:not([data-preference])) header {
				background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
			}
		}

		:global(html[data-preference='dark']) header {
			background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 240 240"%3E%3Cdefs%3E%3Ccircle id="dot" r="2"%3E%3C/circle%3E%3Cpath id="star" d="M 0 -5 a 5 5 0 0 0 5 5 5 5 0 0 0 -5 5 5 5 0 0 0 -5 -5 5 5 0 0 0 5 -5"%3E%3C/path%3E%3C/defs%3E%3Cg fill="hsl(185, 91%25, 17%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cuse href="%23dot" transform="translate(27.96 4.62) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(116.2 -9.49) scale(0.31) rotate(-4)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.57 15.18) scale(0.57)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(8.87 40.07) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.77 43.19) scale(0.28)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(78.77 44.35) scale(0.67)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(142.49 38.37) scale(0.3)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(189.24 46.54) scale(0.66)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(81.94 64.58) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(97.16 55.31) scale(0.35)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(182.15 65.83) scale(0.65)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(-1.64 70.38) scale(0.51) rotate(1)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(47.43 82.49) scale(0.59)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(73.87 83.41) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(135.75 82.16) scale(0.24)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(171.02 74.39) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(142.99 94.87) scale(0.45) rotate(-15)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(58.43 113.62) scale(0.23)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(153.46 125.55) scale(0.63)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(64.74 144.16) scale(0.55)"%3E%3C/use%3E%3Cuse href="%23star" transform="translate(143.3 140.55) scale(0.8) rotate(14)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(35.58 154.96) scale(0.2)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(57.06 186.47) scale(0.8)"%3E%3C/use%3E%3Cuse href="%23dot" transform="translate(166.37 182.71) scale(0.73)"%3E%3C/use%3E%3C/g%3E%3C/svg%3E');
		}

		header > :global(*) {
			grid-column: 2;
		}

		header::before {
			display: none;
		}

		header::after {
			left: 0%;
			width: 100%;
			transform: scaleY(-1);
		}
	}

	header :global(p) {
		font-family: JosefinsansBold, sans-serif;
		font-weight: 700;
	}
</style>
