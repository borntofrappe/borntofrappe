<script context="module">
	export async function load() {
		const logs = await Promise.all(
			Object.entries(import.meta.glob('/src/log/*.md')).map(async ([_, fn]) => {
				const { default: Entry, metadata } = await fn();

				return {
					Entry,
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
	import { tweened } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { quadIn as easeIn, quadOut as easeOut, linear } from 'svelte/easing';

	export let title;
	export let entry;
	export let Entry;

	const duration = (750 * Math.floor(entry / 10 + 1)) / entry;
	const counter = tweened(0);

	let animateTransform;

	async function animate() {
		let easing = linear;
		let delay = $counter === 0 ? 250 : 0;

		if ($counter === entry - 1) easing = easeOut;
		else if ($counter === 0) easing = easeIn;

		await counter.update((n) => n + 1, {
			easing,
			delay,
			duration: $counter === entry - 1 ? duration * 3 : duration
		});

		if ($counter < entry) animate();
		else if (animateTransform) animateTransform.beginElement();
	}

	onMount(() => {
		animate();
	});
</script>

<svelte:head>
	<title>Log - Entry {entry} | borntofrappe</title>
</svelte:head>

<main>
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
				<use transform="translate(100 0)" href="#d">
					<animateTransform
						bind:this={animateTransform}
						attributeType="XML"
						attributeName="transform"
						type="translate"
						to="0 0"
						keyTimes="0; 1"
						keySplines="0.83, 0, 0.17, 1"
						calcMode="spline"
						dur="1.75"
						fill="freeze"
						begin="indefinite"
						id="x"
					/>
				</use>
				<g transform="scale(-1 1)">
					<use transform="translate(100 0)" href="#d">
						<animateTransform
							attributeType="XML"
							attributeName="transform"
							type="translate"
							to="0 0"
							keyTimes="0; 1"
							keySplines="0.83, 0, 0.17, 1"
							calcMode="spline"
							dur="1.75"
							fill="freeze"
							begin="x.begin"
						/>
					</use>
				</g>
			</g>

			<g transform="translate(0 140)">
				<g transform="translate(0 -90)">
					<animateTransform
						attributeType="XML"
						attributeName="transform"
						type="translate"
						to="0 0"
						keyTimes="0; 1"
						keySplines="0.65, 0, 0.35, 1"
						calcMode="spline"
						dur="2"
						fill="freeze"
						begin="x.begin + 1s"
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
								keySplines="0.12, 0, 0.39, 0; 0.61, 1, 0.88, 1;"
								calcMode="spline"
								dur="0.5"
								repeatCount="4"
								fill="freeze"
								begin="y.begin"
							/>
							<path
								d="M 4.898587196589413e-15 80 Q -117.5570504584946 161.80339887498948 -76.08452130361228 24.7213595499958 -190.21130325903073 -61.803398874989455 -47.02282018339786 -64.72135954999578 -3.6739403974420595e-14 -200 47.02282018339783 -64.72135954999581 190.2113032590307 -61.803398874989526 76.08452130361229 24.721359549995775 117.55705045849467 161.80339887498945 4.898587196589413e-15 80"
							/>
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
				<g opacity="0">
					<animate
						attributeType="XML"
						attributeName="opacity"
						to="1"
						keyTimes="0; 1"
						keySplines="0.37, 0, 0.63, 1"
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

<article>
	<Entry />
</article>

<footer>
	<p>
		For the time being, that's a wrap. If you really want to, however, you can check previous
		entries
		<a sveltekit:prefetch href="/log/entries">in the archives</a>.
	</p>
</footer>

<style>
	main {
		min-height: 101vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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

	article {
		width: 95vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 2em auto 4em;
	}

	article > :global(* + *) {
		margin-top: 1em;
		margin-top: var(--vertical-rhythm, 1em);
	}

	article:global(h2),
	article:global(h3) {
		--vertical-rhythm: var(--size-800);
	}

	article:global(h2 + *),
	article:global(h3 + *) {
		--vertical-rhythm: var(--size-300);
	}

	article:global(blockquote),
	article:global(blockquote + *) {
		--vertical-rhythm: var(--size-800);
	}

	article:global(table),
	article:global(table + *) {
		--vertical-rhythm: var(--size-700);
	}

	article:global(pre),
	article:global(pre + *) {
		--vertical-rhythm: var(--size-600);
	}

	footer {
		width: 95vw;
		width: var(--width);
		max-width: 42rem;
		max-width: var(--max-width);
		margin: 2em auto 1em;
		font-size: 1rem;
		font-size: var(--size-400);
	}
</style>
