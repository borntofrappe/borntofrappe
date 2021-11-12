<script context="module">
	export async function load() {
		const logs = await Promise.all(
			Object.entries(import.meta.glob('/src/log/*.md')).map(async ([_, fn]) => {
				const { default: Component, metadata } = await fn();

				return {
					Component,
					...metadata
				};
			})
		);

		const log = logs.sort((a, b) => parseInt(b.entry, 10) - parseInt(a.entry, 10))[0];

		return {
			props: {
				...log
			}
		};
	}
</script>

<script>
	import Article from '$lib/components/log/Article.svelte';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { sineIn as easeIn, sineOut as easeOut, linear } from 'svelte/easing';

	export let title;
	export let entry;
	export let Component;

	const duration = (750 * Math.floor(entry / 10 + 1)) / entry;
	const counter = tweened(entry);
	let easing = linear;

	let isAnimating;
	let isAnimated;

	async function animate() {
		if ($counter === entry - 1) easing = easeOut;
		else if ($counter === 0) easing = easeIn;

		await counter.update((n) => n + 1, {
			easing,
			duration
		});

		if ($counter < entry) animate();
		else isAnimated = true;
	}

	onMount(async () => {
		counter.set(0, { duration: 0 });
		isAnimating = true;
	});
</script>

<main class:isAnimating>
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

	<svg
		class:isAnimated
		xmlns="http://www.w3.org/2000/svg"
		viewBox="-252.5 -27.5 505 250"
		width="505"
		height="250"
	>
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
				d="M -150 0 a 25 25 0 0 0 -25 -25 11.25 11.25 0 0 1 0 22.5 7.5 7.5 0 0 1 -7.5 -7.5 c 0 10 -30 10 -67.5 10 37.5 0 67.5 0 67.5 10 a 7.5 7.5 0 0 1 7.5 -7.5 11.25 11.25 0 0 1 0 22.5 25 25 0 0 0 25 -25z"
			/>
		</defs>
		<g>
			<g
				on:animationend|once={() => {
					animate();
				}}
			>
				<g
					fill="currentColor"
					stroke="currentColor"
					stroke-width="5"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<use href="#ccc" />
					<use class="offset-x" href="#d" />
					<g transform="scale(-1 1)">
						<use class="offset-x" href="#d" />
					</g>
				</g>
			</g>

			<g fill="currentColor">
				<g transform="translate(0 145)">
					<g class="offset-y" transform="translate(0 0)">
						<g class="rotate-y">
							<g transform="scale(0.18)">
								<path
									d="M 4.898587196589413e-15 80 Q -117.5570504584946 161.80339887498948 -76.08452130361228 24.7213595499958 -190.21130325903073 -61.803398874989455 -47.02282018339786 -64.72135954999578 -3.6739403974420595e-14 -200 47.02282018339783 -64.72135954999581 190.2113032590307 -61.803398874989526 76.08452130361229 24.721359549995775 117.55705045849467 161.80339887498945 4.898587196589413e-15 80"
								/>
							</g>
						</g>
					</g>
				</g>

				<g transform="translate(0 72.5)">
					<g
						font-family="inherit"
						text-anchor="middle"
						dominant-baseline="middle"
						font-size="34"
						letter-spacing="2"
					>
						<g class="show" opacity="1">
							<text>{title}</text>
						</g>
					</g>
				</g>
			</g>
		</g>
	</svg>
</main>

{#if !isAnimating || isAnimated}
	<Article {Component} />
{/if}

<style>
	main {
		min-height: 101vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		animation: show 1s 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95) both;
	}

	main > * + * {
		margin-top: 1em;
	}

	h1 {
		color: inherit;
		display: flex;
		gap: 0 0.4em;
		line-height: 1;
	}

	div {
		padding: 0 0.25rem;
		position: relative;
		overflow: hidden;
	}

	div strong {
		opacity: 0;
	}

	div span {
		font-family: inherit;
		position: absolute;
		right: 0;
	}

	div span:nth-of-type(2) {
		bottom: 100%;
	}

	svg {
		display: block;
		max-width: 18rem;
		width: 100%;
		height: auto;
	}

	:global(.webfonts) svg text {
		font-family: JosefinsansSemibold, sans-serif;
		font-weight: 600;
	}

	.isAnimating .offset-x {
		animation: offset-x 1s 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) both;
	}

	.isAnimating .offset-y {
		animation: offset-y 2.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) both paused;
	}

	.isAnimating .rotate-y {
		animation: rotate-y 2.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) both paused;
	}

	.isAnimating .show {
		animation: show 1s 2.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) both paused;
	}

	.isAnimated .offset-y,
	.isAnimated .rotate-y,
	.isAnimated .show {
		animation-play-state: running;
	}

	@keyframes offset-x {
		from {
			transform: translate3d(100px, 0, 0);
		}
		to {
			transform: translate3d(0px, 0, 0);
		}
	}

	@keyframes offset-y {
		from {
			transform: translate3d(0, -90px, 0);
		}
		to {
			transform: translate3d(0, 0px, 0);
		}
	}

	@keyframes rotate-y {
		from {
			transform: rotate3d(0, 0, 0, 2turn);
		}
		to {
			transform: rotate3d(0, 1, 0, 2turn);
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
</style>
