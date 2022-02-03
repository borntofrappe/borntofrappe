<script context="module">
	export const prerender = true;

	export async function load() {
		const entries = await Promise.all(
			Object.entries(import.meta.glob('/src/log/*.md')).map(async ([path, module]) => {
				const { metadata } = await module();
				const { day } = metadata;

				return {
					day,
					path
				};
			})
		);

		const [entry] = entries.sort((a, b) => parseInt(b.day, 10) - parseInt(a.day, 10));
		const log = import.meta.glob('/src/log/*.md');

		const { default: Module, metadata } = await log[entry.path]();
		const { day, title } = metadata;

		return {
			props: {
				day,
				title,
				Module
			}
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { circIn, backOut } from 'svelte/easing';

	import Meta from '$lib/components/routes/Meta.svelte';

	export let title;
	export let day;
	export let Module;

	const counter = tweened(0);
	const defaultDuration = 100;
	const increment = Math.floor(day / 20) + 1;

	let scrolled;

	async function animate() {
		let easing;
		let duration = defaultDuration;

		if ($counter >= day - increment) {
			easing = backOut;
			duration = 1000;
		} else if ($counter === 0) {
			easing = circIn;
			duration = 800;
		}

		await counter.update((n) => Math.min(day, n + 1), {
			duration,
			easing
		});
		if ($counter < parseInt(day, 10)) animate();
		else scrolled = true;
	}

	onMount(() => {
		// return;
		const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
		if (prefersReducedMotion.matches) {
			counter.set(day, { duration: 0 });
			scrolled = true;
		} else {
			animate();
		}
	});
</script>

<Meta title="Log {day} | borntofrappe" description="Log {day}: {title}" />

<main class:scrolled>
	<h1>
		Day
		<div>
			<strong>{day}</strong>
			<span aria-hidden="true" style="transform: translate3d(0, {($counter % 1) * 100}%, 0)"
				>{Math.floor($counter)}</span
			>
			<span aria-hidden="true" style="transform: translate3d(0, {($counter % 1) * 100}%, 0)"
				>{Math.floor($counter + 1)}</span
			>
		</div>
	</h1>

	<svg xmlns="http://www.w3.org/2000/svg" aria-labelledby="title" viewBox="-252.5 -27.5 505 265">
		<title id="title">{title}</title>
		<defs>
			<path id="c" d="M 0 0 v -10 c -5 10 -5 10 -150 10z" />
			<g id="cc">
				<use href="#c" />
				<use href="#c" transform="scale(-1 1)" />
			</g>
			<g id="ccc">
				<use href="#cc" />
				<use href="#cc" transform="scale(1 -1)" />
			</g>
			<path
				id="d"
				d="M -150 0 a 25 25 0 0 0 -25 -25 11.25 11.25 0 0 1 0 22.5 7.5 7.5 0 0 1 -7.5 -7.5 c 0 10 -30 10 -67.5 10 37.5 0 67.5 0 67.5 10 a 7.5 7.5 0 0 1 7.5 -7.5 11.25 11.25 0 0 1 0 22.5 25 25 0 0 0 25 -25"
			/>
		</defs>

		<g fill="currentColor" stroke="none">
			<g transform="translate(0 160)">
				<g class="offset-y">
					<g class="rotate-y">
						<g transform="scale(0.21)">
							<path
								d="M 4.898587196589413e-15 80 Q -117.5570504584946 161.80339887498948 -76.08452130361228 24.7213595499958 -190.21130325903073 -61.803398874989455 -47.02282018339786 -64.72135954999578 -3.6739403974420595e-14 -200 47.02282018339783 -64.72135954999581 190.2113032590307 -61.803398874989526 76.08452130361229 24.721359549995775 117.55705045849467 161.80339887498945 4.898587196589413e-15 80"
							/>
						</g>
					</g>
				</g>
			</g>
		</g>

		<g
			fill="currentColor"
			stroke="currentColor"
			stroke-width="5"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<use href="#ccc" />
			<g>
				<g class="offset-x">
					<use href="#d" />
				</g>
				<g transform="scale(-1 1)">
					<g class="offset-x">
						<use href="#d" />
					</g>
				</g>
			</g>
		</g>

		<g transform="translate(0 85)">
			<g
				fill="currentColor"
				font-size="32"
				font-family="inherit"
				text-anchor="middle"
				dominant-basline="middle"
			>
				<g class="show">
					<text>{title}</text>
				</g>
			</g>
		</g>
	</svg>
</main>

<article>
	<Module />
</article>

<style>
	main {
		min-height: 101vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem 0;
	}

	h1 {
		display: flex;
		gap: 0 0.5em;
		line-height: 1;
	}

	div {
		width: max-content;
		position: relative;
		overflow: hidden;
	}

	div strong {
		padding: 0 0.1em;
		opacity: 0;
	}

	div span {
		position: absolute;
		right: 0;
	}

	div span:last-of-type {
		bottom: 100%;
	}

	svg {
    --animation-duration: 2.5s;
    --animation-timing-function: var(--ease-in-out-sine)
		color: hsl(210, 24%, 16%);
		color: var(--heading-color);
		max-width: 18rem;
		width: 100%;
		height: auto;
		display: block;
	}

	.offset-x {
		animation: offset-x var(--animation-duration) var(--animation-timing-function) both;
		animation: offset-x 2.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) both;
	}

	.offset-y {
		animation: offset-y var(--animation-duration) var(--animation-timing-function) both;
		animation: offset-y 2.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) both;
	}

	.rotate-y {
		animation: rotate-y var(--animation-duration) var(--animation-timing-function) both;
		animation: rotate-y 2.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) both;
	}

	.show {
		animation: show 1.5s var(--animation-duration) var(--animation-timing-function) both;
		animation: show 1.5s 2.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) both;
	}

	.offset-x,
	.offset-y,
	.rotate-y,
	.show {
		animation-play-state: paused;
	}

	.scrolled .offset-x,
	.scrolled .offset-y,
	.scrolled .rotate-y,
	.scrolled .show {
		animation-play-state: running;
	}

	@keyframes offset-x {
		from {
			transform: translateX(100px);
		}
		to {
			transform: translateX(0px);
		}
	}

	@keyframes offset-y {
		from {
			transform: translateY(-100px);
		}
		to {
			transform: translateY(0px);
		}
	}

	@keyframes rotate-y {
		from {
			transform: rotateY(0);
		}
		to {
			transform: rotateY(2turn);
		}
	}

	@keyframes show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	article {
		max-width: 42rem;
		max-width: var(--max-width);
		width: 90vw;
		width: var(--width);
		margin: 2em auto;
	}

	article > :global(* + *) {
		margin-top: 1em;
		margin-top: var(--vertical-rhythm, 1em);
	}

	article > :global(h2),
	article > :global(h3) {
		--vertical-rhythm: var(--size-800);
	}

	article > :global(h2 + *),
	article > :global(h3 + *) {
		--vertical-rhythm: var(--size-300);
	}

	article > :global(blockquote),
	article > :global(blockquote + *) {
		--vertical-rhythm: var(--size-800);
	}

	article > :global(ol > * + *),
	article > :global(ul > * + *) {
		margin-top: 0.5em;
	}
</style>
