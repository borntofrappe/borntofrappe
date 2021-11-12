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
	import { tweened } from 'svelte/motion';
	import { sineIn as easeIn, sineOut as easeOut, linear } from 'svelte/easing';

	export let title;
	export let entry;
	export let Component;

	const duration = (750 * Math.floor(entry / 10 + 1)) / entry;
	const counter = tweened(0);

	let animateTransform;

	async function animate() {
		let easing = linear;
		if ($counter === entry - 1) easing = easeOut;
		else if ($counter === 0) easing = easeIn;

		await counter.update((n) => n + 1, {
			easing,
			duration: $counter === entry - 1 ? duration * 3 : duration
		});

		if ($counter < entry) animate();
		else if (animateTransform) animateTransform.beginElement();
	}
</script>

<main
	on:animationend={() => {
		animate();
	}}
>
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

	<svg xmlns="http://www.w3.org/2000/svg" viewBox="-252.5 -27.5 505 230" width="505" height="230">
		<defs>
			<path
				id="a"
				d="M -25 -25 a 12.5 12.5 0 0 0 25 0 25 25 0 0 0 -50 0 c 0 37.5 50 37.5 50 75 v -75 a 12.5 12.5 0 0 1 -25 0"
			/>
			<g id="aa">
				<use href="#a" />
				<use href="#a" transform="scale(-1 1)" />
			</g>
			<path id="b" d="M 0 50 c 0 15 -15 30 -30 30 c 15 0 30 37.5 30 70z" />
			<g id="bb">
				<use href="#b" />
				<use href="#b" transform="scale(-1 1)" />
			</g>

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
		<g
			fill="currentColor"
			stroke="currentColor"
			stroke-width="5"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<g>
				<use href="#ccc" />
				<g>
					<animateTransform
						attributeType="XML"
						attributeName="transform"
						type="translate"
						values="100 0"
						fill="freeze"
					/>
					<use href="#d">
						<animateTransform
							bind:this={animateTransform}
							attributeType="XML"
							attributeName="transform"
							type="translate"
							values="0 0; -100 0"
							keyTimes="0; 1"
							keySplines="0.25, 1, 0.5, 1"
							calcMode="spline"
							dur="2"
							fill="freeze"
							begin="indefinite"
							id="x"
						/>
					</use>
				</g>
				<g transform="scale(-1 1)">
					<g>
						<animateTransform
							attributeType="XML"
							attributeName="transform"
							type="translate"
							values="100 0"
							fill="freeze"
						/>
						<use href="#d">
							<animateTransform
								attributeType="XML"
								attributeName="transform"
								type="translate"
								values="0 0; -100 0"
								keyTimes="0; 1"
								keySplines="0.25, 1, 0.5, 1"
								calcMode="spline"
								dur="2"
								fill="freeze"
								begin="x.begin"
							/>
						</use>
					</g>
				</g>
			</g>

			<g transform="translate(0 140)">
				<g>
					<animateTransform
						attributeType="XML"
						attributeName="transform"
						type="translate"
						values="0 -90"
						fill="freeze"
					/>
					<g>
						<animateTransform
							attributeType="XML"
							attributeName="transform"
							type="translate"
							values="0 0; 0 90"
							keyTimes="0; 1"
							keySplines="0.37 0 0.63 1"
							calcMode="spline"
							dur="2"
							fill="freeze"
							begin="x.end"
							id="y"
						/>
						<g transform="scale(0.18)">
							<g>
								<animateTransform
									attributeType="XML"
									attributeName="transform"
									type="scale"
									values="1, 1; 0, 1; 1, 1"
									keyTimes="0; 0.5; 1"
									keySplines="0.12 0 0.39 0; 0.61 1 0.88 1;"
									calcMode="spline"
									dur="0.5"
									repeatCount="4"
									fill="freeze"
									begin="x.end"
								/>
								<path
									d="M 4.898587196589413e-15 80 Q -117.5570504584946 161.80339887498948 -76.08452130361228 24.7213595499958 -190.21130325903073 -61.803398874989455 -47.02282018339786 -64.72135954999578 -3.6739403974420595e-14 -200 47.02282018339783 -64.72135954999581 190.2113032590307 -61.803398874989526 76.08452130361229 24.721359549995775 117.55705045849467 161.80339887498945 4.898587196589413e-15 80"
								/>
							</g>
						</g>
					</g>
				</g>
			</g>
		</g>

		<g transform="translate(0 67.5)">
			<g
				fill="currentColor"
				font-family="inherit"
				text-anchor="middle"
				dominant-baseline="middle"
				font-size="34"
				letter-spacing="2"
			>
				<g>
					<set attributeType="XML" attributeName="opacity" to="0" />
					<animate
						attributeType="XML"
						attributeName="opacity"
						values="0; 1"
						keyTimes="0; 1"
						keySplines="0.37 0 0.63 1"
						calcMode="spline"
						dur="1"
						fill="freeze"
						begin="y.end + 1s"
					/>
					<text>
						{title}
					</text>
				</g>
			</g>
		</g>
	</svg>
</main>

<Article {Component} />

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

	@keyframes show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
