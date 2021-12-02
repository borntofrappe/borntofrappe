<script context="module">
	export const prerender = true;

	export async function load() {
		const log = await Promise.all(
			Object.entries(import.meta.glob('/src/log/*.md')).map(async ([path, module]) => {
				const { default: Entry, metadata } = await module();

				return {
					Entry,
					...metadata
				};
			})
		);

		const lastLog = log.sort((a, b) => parseInt(b.entry, 10) - parseInt(a.entry, 10))[0];

		return {
			props: {
				...lastLog
			}
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { circIn, quadOut, backOut } from 'svelte/easing';

	import Meta from '$lib/components/routes/Meta.svelte';

	export let title;
	export let entry;
	export let Entry;

	const counter = tweened(0);
	let scrolled;

	async function animate() {
		let easing;
		let duration = 100;

		if ($counter === parseInt(entry, 10) - 1) {
			easing = backOut;
			duration = 550;
		} else if ($counter === 0) {
			easing = circIn;
			duration = 350;
		}

		await counter.update((n) => n + 1, { duration, easing });
		if ($counter < parseInt(entry, 10)) animate();
		else scrolled = true;
	}

	onMount(() => {
		animate();
	});
</script>

<Meta title="Log | borntofrappe" description="Log entry {entry}: {title}." />

<main class:scrolled>
	<h1>
		Entry
		<div>
			<strong>{entry}</strong>
			<span aria-hidden="true" style="transform: translate3d(0, {($counter % 1) * 100}%, 0)"
				>{Math.floor($counter)}</span
			>
			<span aria-hidden="true" style="transform: translate3d(0, {($counter % 1) * 100}%, 0)"
				>{Math.floor($counter + 1)}</span
			>
		</div>
	</h1>

	<svg xmlns="http://www.w3.org/2000/svg" viewBox="-252.5 -27.5 505 265">
		<title>{title}</title>
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
					<g class="nudge-y">
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
				font-family="sans-serif"
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
	<Entry />
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

	:global(.webfonts) h1 {
		font-family: JosefinsansBold, sans-serif;
		font-weight: 700;
	}

	h1 {
		display: flex;
		gap: 0 0.4em;
		line-height: 1;
	}

	div {
		position: relative;
		overflow: hidden;
	}

	div strong {
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
		max-width: 18rem;
		width: 100%;
		height: auto;
		display: block;
	}

	.offset-x {
		animation: offset-x 1s cubic-bezier(0.22, 1, 0.36, 1) both;
	}

	.offset-y {
		animation: offset-y 2s 2s cubic-bezier(0.45, 0, 0.55, 1) both;
	}

	.rotate-y {
		animation: rotate-y 2s 2s ease-in-out both;
	}

	.nudge-y {
		animation: nudge-y 0.8s 5s 12 cubic-bezier(0.45, 0, 0.55, 1) alternate both;
	}

	.show {
		animation: show 1s 5s ease-in-out both;
	}

	.offset-x,
	.offset-y,
	.rotate-y,
	.nudge-y,
	.show {
		animation-play-state: paused;
	}

	.scrolled .offset-x,
	.scrolled .offset-y,
	.scrolled .rotate-y,
	.scrolled .nudge-y,
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

	@keyframes nudge-y {
		to {
			transform: translateY(5px);
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
		margin-top: 0.5em;
	}
</style>
