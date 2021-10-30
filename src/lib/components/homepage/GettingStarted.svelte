<section>
	<p>
		I'm building this website with <a href="https://kit.svelte.dev/">SvelteKit</a> and
		<a href="https://www.netlify.com/">Netlify</a>, one tentative step at a time. While I try
		setting up a blog and writing a good honest article, you can check how it's going over
		<a href="https://github.com/borntofrappe/borntofrappe">on GitHub</a>.
	</p>
</section>

<style>
	section {
		position: relative;
		--telescope-size: 6.5em;
		--animation-duration: 8s;
	}

	section::before,
	section::after {
		width: 6.5em;
		width: var(--telescope-size);
		height: 6.5em;
		height: var(--telescope-size);
	}

	section::before {
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg fill="hsl(334, 86%25, 67%25)" stroke="hsl(320, 100%25, 19%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-dasharray="84 20 84" d="M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36" /%3E%3Cpath d="M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24" /%3E%3Cpath d="M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16" /%3E%3C/g%3E%3C/svg%3E');
		float: left;
		shape-outside: circle();
	}

	section::after {
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg transform="translate(26 -17)"%3E%3Cg fill="hsl(336, 100%25, 77%25)" stroke="hsl(320, 100%25, 19%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="5" transform="translate(-63 0) scale(0.4)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3.6" transform="translate(-51 0) scale(0.55)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3" transform="translate(-37 0) scale(0.65)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="2.5" transform="translate(-20 0) scale(0.8)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cg stroke-width="2"%3E%3Cpath d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath d="M 12 -14 a 15 15 0 0 1 0 28" /%3E%3Cpath fill="none" stroke-width="3" stroke-dasharray="0 8 12 20" transform="translate(12 0) scale(0.65)" d="M 0 -14 a 15 15 0 0 1 0 28" /%3E%3Crect fill="hsl(334, 86%25, 67%25)" y="-17" width="12" height="34" rx="6" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		position: absolute;
		top: 0;
		left: 0;
		transform: rotate(-20deg);
		transform-origin: 50% 36%;
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference])) section::before {
			content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg fill="hsl(184, 65%25, 59%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-dasharray="84 20 84" d="M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36" /%3E%3Cpath d="M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24" /%3E%3Cpath d="M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16" /%3E%3C/g%3E%3C/svg%3E');
		}
		:global(html:not([data-preference])) section::after {
			content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg transform="translate(26 -17)"%3E%3Cg fill="hsl(184, 80%25, 74%25)" stroke="hsl(185, 91%25, 17%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="5" transform="translate(-63 0) scale(0.4)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3.6" transform="translate(-51 0) scale(0.55)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3" transform="translate(-37 0) scale(0.65)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="2.5" transform="translate(-20 0) scale(0.8)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cg stroke-width="2"%3E%3Cpath d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath d="M 12 -14 a 15 15 0 0 1 0 28" /%3E%3Cpath fill="none" stroke-width="3" stroke-dasharray="0 8 12 20" transform="translate(12 0) scale(0.65)" d="M 0 -14 a 15 15 0 0 1 0 28" /%3E%3Crect fill="hsl(184, 65%25, 59%25)" y="-17" width="12" height="34" rx="6" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
		}
	}

	:global(html[data-preference='dark']) section::before {
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg fill="hsl(184, 65%25, 59%25)" stroke="hsl(185, 91%25, 17%25)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-dasharray="84 20 84" d="M 0 -2 v 4 l 24 36 a 4 4 0 0 1 -8 8 l -16 -24 -16 24 a 4 4 0 0 1 -8 -8 l 24 -36" /%3E%3Cpath d="M 5 19 v 24 a 5 5 0 0 1 -10 0 v -24" /%3E%3Cpath d="M 0 -2 a 8 8 0 0 1 0 -16 8 8 0 0 1 0 16" /%3E%3C/g%3E%3C/svg%3E');
	}

	:global(html[data-preference='dark']) section::after {
		content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -60 120 120"%3E%3Cg transform="translate(26 -17)"%3E%3Cg fill="hsl(184, 80%25, 74%25)" stroke="hsl(185, 91%25, 17%25)" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath stroke-width="5" transform="translate(-63 0) scale(0.4)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3.6" transform="translate(-51 0) scale(0.55)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="3" transform="translate(-37 0) scale(0.65)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath stroke-width="2.5" transform="translate(-20 0) scale(0.8)" d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cg stroke-width="2"%3E%3Cpath d="M 0 -13 l -20 1 v 24 l 20 1" /%3E%3Cpath d="M 12 -14 a 15 15 0 0 1 0 28" /%3E%3Cpath fill="none" stroke-width="3" stroke-dasharray="0 8 12 20" transform="translate(12 0) scale(0.65)" d="M 0 -14 a 15 15 0 0 1 0 28" /%3E%3Crect fill="hsl(184, 65%25, 59%25)" y="-17" width="12" height="34" rx="6" /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
	}

	section::after {
		animation: tilt-telescope 8s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;
		animation: tilt-telescope var(--animation-duration) var(--ease-in-out-sine) infinite alternate;
		animation-play-state: paused;
	}

	@keyframes tilt-telescope {
		20%,
		100% {
			transform: rotate(25deg);
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		section::after {
			animation-play-state: running;
		}
	}
</style>
