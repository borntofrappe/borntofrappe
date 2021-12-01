<script>
	import { observe } from '$lib/utils.js';
</script>

<section>
	<h2>Almost forgot</h2>
	<p>
		My name is <mark class:observed={false} use:observe>Gabriele Corti</mark>. I write to you from
		Europe a couple of hours after Greenwich time.
	</p>
	<p>
		Outside of VSCode, you'll find me running, watching the highlight of an F1 race or enjoying a
		dated video game. Depends on the season.
	</p>
</section>

<style>
	section {
		--elevation: 2.5em;
		--animation-duration: 6s;
		--animation-timing-function: var(--ease-in-out-sine);
	}

	h2 {
		text-align: center;
	}

	mark {
		padding-top: 2.5em;
		padding-top: var(--elevation);
		font-weight: 700;
		color: inherit;
		display: inline-block;
		background: none;
		position: relative;
	}

	mark::after {
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke="hsl(320, 100%25, 19%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cellipse fill="hsl(334, 86%25, 67%25)" rx="45" ry="20" /%3E%3Cpath fill="hsl(336, 100%25, 77%25)" d="M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0" /%3E%3Cpath transform="scale(0.85)" stroke-width="2.5" fill="none" d="M -28 -5 a 28 28 0 0 1 56 0" stroke-dasharray="20 80" stroke-dashoffset="48" /%3E%3C/g%3E%3C/svg%3E');
		position: absolute;
		bottom: 2.5em;
		bottom: var(--elevation);
		right: 0;
		width: 3em;
		height: 3em;
		transform: translate(50%, 50%);
		z-index: -5;
	}

	@media (prefers-color-scheme: dark) {
		:global(html[data-preference='dark']) mark::after {
			content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke="hsl(185, 91%25, 17%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cellipse fill="hsl(184, 65%25, 59%25)" rx="45" ry="20" /%3E%3Cpath fill="hsl(184, 80%25, 74%25)" d="M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0" /%3E%3Cpath transform="scale(0.85)" stroke-width="2.5" fill="none" d="M -28 -5 a 28 28 0 0 1 56 0" stroke-dasharray="20 80" stroke-dashoffset="48" /%3E%3C/g%3E%3C/svg%3E');
		}
	}

	:global(html[data-preference='dark']) mark::after {
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg stroke="hsl(185, 91%25, 17%25)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"%3E%3Cellipse fill="hsl(184, 65%25, 59%25)" rx="45" ry="20" /%3E%3Cpath fill="hsl(184, 80%25, 74%25)" d="M -28 -5 a 28 28 0 0 1 56 0 48 48 0 0 1 -56 0" /%3E%3Cpath transform="scale(0.85)" stroke-width="2.5" fill="none" d="M -28 -5 a 28 28 0 0 1 56 0" stroke-dasharray="20 80" stroke-dashoffset="48" /%3E%3C/g%3E%3C/svg%3E');
	}

	@supports (clip-path: polygon(100% 0%, 100% 100%, 100% 100%)) {
		mark::before {
			content: '';
			position: absolute;
			bottom: 0;
			right: 0;
			width: 2.5em;
			width: var(--elevation);
			height: 2.5em;
			height: var(--elevation);
			background: hsl(330, 79%, 56%);
			background: var(--accent-color);
			opacity: 0.25;
			z-index: -5;
		}

		mark::before {
			clip-path: polygon(100% 0%, 100% 100%, 100% 100%);
			animation: clip-path 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;
			animation: clip-path var(--animation-duration) var(--animation-timing-function) infinite
				alternate;
			animation-play-state: paused;
		}

		mark::after {
			transform: translate(50%, 50%) rotate(0deg);
			animation: rotate 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;
			animation: rotate var(--animation-duration) var(--animation-timing-function) infinite
				alternate;
			animation-play-state: paused;
		}

		@media (prefers-reduced-motion: no-preference) {
			mark.observed::before,
			mark.observed::after {
				animation-play-state: running;
			}
		}

		@keyframes clip-path {
			15% {
				clip-path: polygon(100% 0%, 70% 100%, 0% 100%);
			}
			30%,
			100% {
				clip-path: polygon(100% 0%, 90% 100%, 10% 100%);
			}
		}

		@keyframes rotate {
			15% {
				transform: translate(50%, 50%) rotate(30deg);
			}
			30%,
			100% {
				transform: translate(50%, 50%) rotate(20deg);
			}
		}
	}
</style>
