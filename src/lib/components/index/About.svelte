<script>
	import { observe } from '$lib/utils.js';

	const icons = [
		`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em">
            <path fill="currentColor" stroke="none" d="M-40.5-33v16h.5v.5h80v-16h-.5v-.5h-80zm8.5.5a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0a4.5 4.5 0 014.5 4.5 4.5 4.5 0 01-4.5 4.5 4.5 4.5 0 01-4.5-4.5 4.5 4.5 0 014.5-4.5zm13 0A4.5 4.5 0 01-1.5-28 4.5 4.5 0 01-6-23.5a4.5 4.5 0 01-4.5-4.5A4.5 4.5 0 01-6-32.5z"/>
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <path d="M-45-37.5h90v75h-90z" stroke-width="10"/>
              <g stroke-width="8">
                <path d="M5-4L-5 21M-18 0l-8 8 8 8M18 0l8 8-8 8"/>
              </g>
            </g>
          </svg>
        `,
		`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em">
            <g fill="none" stroke="currentColor" stroke-width="12" stroke-linejoin="round" stroke-linecap="round">
              <circle r="44" />
            </g>
            <g fill="currentColor" stroke="none">
              <path d="M -2 4 h 9 a 8 8 0 0 1 8 8 v 6 a 4 4 0 0 1 4 4 8 8 0 0 1 -8 8 v 6 a 9 9 0 0 1 -18 0 v -6 a 8 8 0 0 0 -4 -4 11 11 0 0 1 0 -22" />
              <path d="M -18 -26 a 3 3 0 0 1 3 3 v 4 a 3 3 0 0 1 -3 3 h -2 a 3 3 0 0 1 -3 -3 3 3 0 0 1 3 -3 v -1 a 3 3 0 0 1 3 -3" />
              <path d="M 1 -28 a 4 4 0 0 1 -4 4 a 8 8 0 0 0 -8 8 v 3 a 4 4 0 0 0 -4 4 a 6 6 0 0 0 12 0 a 2 2 0 0 1 4 0 v 5 a 5 5 0 0 0 10 0 v -5 a 2 2 0 0 1 4 0 a 4 4 0 0 0 4 4 v 4 a 10 10 0 0 0 20 0 c 0 -38 -38 -38 -38 -38 a 4 4 0 0 0 -4 4 4 4 0 0 0 -4 4 4 4 0 0 0 4 4 h 4" />
            </g>
          </svg>
        `,
		`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em">
          <g fill="none" stroke="currentColor" stroke-width="8" stroke-linejoin="round" stroke-linecap="round">
            <g transform="scale(-1 1) translate(-7 0) rotate(-35)">
              <path d="M 46 13.5 a 8 8 0 0 1 -8 8 h -76 a 8 8 0 0 1 -8 -8 v -4 q 0 -8 16 -16 l 34 -15 a 20 20 0 0 0 34 0 8 8 0 0 1 8 8 v 27" />
              <g stroke-width="6">
                <path d="M 46 12.5 h -92" />
                <path d="M -20.5 -5.5 l 10 10" />
                <path d="M -10.5 -11.5 l 10 10" />
              </g>
            </g>
          </g>
        </svg>
        `,
		`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-8 -90 100 100" width="1em" height="1em">
          <g transform="rotate(10)">
            <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <g>
                <path d="M 0 0 v -80" stroke-width="8"/>
                <path d="M 0 -80.5 h 70 v 52 h -70" stroke-width="7"/>
              </g>
            </g>
            <g fill="currentColor" stroke="none">
              <rect x="19" y="-77.5" width="16" height="16" rx="1" />
              <rect x="51" y="-77.5" width="16" height="16" rx="1" />
              <rect x="3" y="-61.5" width="16" height="16" rx="1" />
              <rect x="35" y="-61.5" width="16" height="16" rx="1" />
              <rect x="19" y="-45.5" width="16" height="16" rx="1" />
              <rect x="51" y="-45.5" width="16" height="16" rx="1" />
            </g>
          </g>
        </svg>
        `,
		`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em">
          <g fill="currentColor" stroke="none">
            <path d="M-27.916-32.012a5 5 0 00-.526.028 5 5 0 00-2.05.614c-5.334 1.568-9.465 6.062-11.282 11.877a5 5 0 00-.111.427l-6.998 32.001c-1.464 5.929-1.671 11.25 1.223 15.593 2.876 4.315 8.265 5.798 13.774 5.46 5.703-.052 9.108-3.662 12.086-6.143 3-2.5 5.576-3.84 5.8-3.84h32c.223 0 2.8 1.34 5.801 3.84 2.979 2.48 6.383 6.09 12.086 6.143 5.51.34 10.898-1.146 13.774-5.46 2.895-4.343 2.688-9.664 1.223-15.593l-.032-.144-6.967-31.858a5 5 0 00-.065-.27c-.983-3.538-2.434-6.595-4.786-8.947-2.351-2.352-5.714-3.717-9.036-3.717h-55.692a5 5 0 00-.213-.014zm7.914 15.013h5c.554 0 1 .445 1 1v8.5h8.5c.554 0 1 .445 1 1v5c0 .554-.446 1-1 1h-8.5V8c0 .554-.446 1-1 1h-5c-.554 0-1-.446-1-1V-.5h-8.5c-.554 0-1-.446-1-1v-5c0-.555.446-1 1-1h8.5V-16c0-.555.446-1 1-1zM17-17a5 5 0 015 5.005 5 5 0 01-5 5 5 5 0 01-5.005-5A5 5 0 0117-17zM24.997-.997a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5z"/>
          </g>
        </svg>
        `
	];

	const colors = [
		'hsl(341, 100%, 95%)',
		'hsl(338, 100%, 86%)',
		'hsl(336, 100%, 77%)',
		'hsl(334, 86%, 67%)',
		'hsl(330, 79%, 56%)',
		'hsl(328, 85%, 46%)',
		'hsl(326, 90%, 39%)',
		'hsl(324, 93%, 33%)',
		'hsl(322, 93%, 27%)',
		'hsl(320, 100%, 19%)'
	];
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

	<svg
		class:observed={false}
		use:observe
		xmlns="http://www.w3.org/2000/svg"
		viewBox="-50 -50 100 50"
		width="400"
		height="200"
	>
		<defs>
			<clipPath id="clip-planet">
				<circle r="30" />
			</clipPath>

			<mask id="mask-satellites">
				<rect x="-50" y="-50" width="100" height="100" fill="hsl(0, 0%, 100%)" />
				<g fill="hsl(0, 0%, 0%)">
					<g class="rotate">
						{#each icons as _, i}
							<g transform="rotate({(360 / icons.length) * i}) translate(0 -42)">
								<circle r="7.5" />
							</g>
						{/each}
					</g>
				</g>
			</mask>
		</defs>

		<g clip-path="url(#clip-planet)">
			<g stroke="none">
				<g transform="translate(0 -70)">
					{#each [...colors].reverse() as color, i}
						<ellipse
							style="color: {color}; color: var(--primary-{colors.length - i - 1}00);"
							fill="currentColor"
							cy="70"
							rx={35 + (15 / colors.length) * i}
							ry="33"
							transform="scale({1 - (0.65 / colors.length) * i})"
						/>
					{/each}
				</g>
			</g>
		</g>

		<circle
			r="30"
			fill="none"
			style="color: {colors[4]}; color: var(--primary-400);"
			stroke="currentColor"
			stroke-width="0.2"
		/>

		<g mask="url(#mask-satellites)">
			<circle
				r="42"
				stroke-dasharray="1 2"
				stroke-linecap="round"
				fill="none"
				stroke="currentColor"
				stroke-width="0.5"
			/>
		</g>

		<g>
			<g class="rotate">
				{#each icons as icon, i}
					<g
						transform="rotate({(360 / icons.length) * i * -1}) translate(0 -42) rotate({(360 /
							icons.length) *
							i})"
					>
						<g transform="scale(-1 1)">
							<g class="rotate">
								<g transform="scale(-1 1)">
									<circle fill="none" stroke="currentColor" stroke-width="1" r="7.5" />
									<g transform="translate(-4 -4)">
										{@html icon.replace(/1em/g, 8)}
									</g>
								</g>
							</g>
						</g>
					</g>
				{/each}
			</g>
		</g>
	</svg>
</section>

<style>
	section {
		--elevation: 2.5em;
		--animation-duration: 6s;
		--animation-timing-function: var(--ease-in-out-sine);

		--primary-000: var(--pink-000);
		--primary-100: var(--pink-100);
		--primary-200: var(--pink-200);
		--primary-300: var(--pink-300);
		--primary-400: var(--pink-400);
		--primary-500: var(--pink-500);
		--primary-600: var(--pink-600);
		--primary-700: var(--pink-700);
		--primary-800: var(--pink-800);
		--primary-900: var(--pink-900);
	}

	@media (prefers-color-scheme: dark) {
		:global(html:not([data-preference])) section {
			--primary-000: var(--cyan-000);
			--primary-100: var(--cyan-100);
			--primary-200: var(--cyan-200);
			--primary-300: var(--cyan-300);
			--primary-400: var(--cyan-400);
			--primary-500: var(--cyan-500);
			--primary-600: var(--cyan-600);
			--primary-700: var(--cyan-700);
			--primary-800: var(--cyan-800);
			--primary-900: var(--cyan-900);
		}
	}

	:global(html[data-preference='dark']) section {
		--primary-000: var(--cyan-000);
		--primary-100: var(--cyan-100);
		--primary-200: var(--cyan-200);
		--primary-300: var(--cyan-300);
		--primary-400: var(--cyan-400);
		--primary-500: var(--cyan-500);
		--primary-600: var(--cyan-600);
		--primary-700: var(--cyan-700);
		--primary-800: var(--cyan-800);
		--primary-900: var(--cyan-900);
	}

	section {
		margin-bottom: 0;
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
			animation: clip-beam 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;
			animation: clip-beam var(--animation-duration) var(--animation-timing-function) infinite
				alternate;
			animation-play-state: paused;
		}

		mark::after {
			transform: translate(50%, 50%) rotate(0deg);
			animation: rotate-pan 6s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;
			animation: rotate-pan var(--animation-duration) var(--animation-timing-function) infinite
				alternate;
			animation-play-state: paused;
		}

		@media (prefers-reduced-motion: no-preference) {
			mark.observed::before,
			mark.observed::after {
				animation-play-state: running;
			}
		}

		@keyframes clip-beam {
			15% {
				clip-path: polygon(100% 0%, 70% 100%, 0% 100%);
			}
			30%,
			100% {
				clip-path: polygon(100% 0%, 90% 100%, 10% 100%);
			}
		}

		@keyframes rotate-pan {
			15% {
				transform: translate(50%, 50%) rotate(30deg);
			}
			30%,
			100% {
				transform: translate(50%, 50%) rotate(20deg);
			}
		}
	}

	section > svg {
		margin-top: 1.5em;
		margin-left: auto;
		margin-right: auto;
		color: hsl(330, 79%, 56%);
		color: var(--accent-color);
		max-width: 27rem;
		width: 90%;
		height: auto;
	}

	section > svg .rotate {
		animation: rotate-orbit 200s linear infinite;
		animation-play-state: paused;
	}

	section > svg.observed .rotate {
		animation-play-state: running;
	}

	@keyframes rotate-orbit {
		to {
			transform: rotate(1turn);
		}
	}
</style>
