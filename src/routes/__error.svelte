<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status,
				message: error.message
			}
		};
	}
</script>

<script>
	import { onMount } from 'svelte';

	export let status;
	export let message;

	const encodings = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];

	const segments = encodings.map((encoding) =>
		Array(7)
			.fill()
			.map((_, i, { length }) => (encoding >> (length - i - 1)) & 1)
	);

	const getDigits = (d) =>
		Array(d)
			.fill()
			.map((_) => Math.floor(Math.random() * 10));

	const breakNumber = (n) =>
		n
			.toString()
			.split('')
			.map((d) => parseInt(d, 10));

	let digits = breakNumber(status);
	const { length } = digits;

	let animationID, timeoutID;

	onMount(() => {
		const { matches } = matchMedia('(prefers-reduced-motion: reduce)');
		if (!matches) {
			animate();
			timeoutID = setTimeout(() => {
				digits = breakNumber(status);
				cancelAnimationFrame(animationID);
				clearTimeout(timeoutID);
			}, 2500);
		}
	});

	const animate = () => {
		digits = getDigits(length);
		animationID = requestAnimationFrame(animate);
	};

	const digit = {
		width: 115,
		height: 200
	};
	const gap = 10;

	const width = digit.width * digits.length + gap * (digits.length - 1);
	const height = digit.height;
</script>

<svelte:head>
	<title>borntofrappe | {status}</title>
	<meta name="description" content={message} />
	<link rel="icon" href="/icons/error.svg" type="image/svg+xml" />
</svelte:head>

<div>
	<article>
		<svg viewBox="0 0 {width} {height}" {width} {height}>
			<title>Status code {status}</title>
			<defs>
				<path id="segment" d="M 0 0 l 15 15 h 45 l 15 -15 -15 -15 h -45z" />

				<g id="segments">
					<g fill="hsl(0, 0%, 90%)">
						<use id="segment-0" transform="translate(20 15)" href="#segment" />
						<use id="segment-1" transform="translate(100 20) rotate(90)" href="#segment" />
						<use id="segment-2" transform="translate(100 105) rotate(90)" href="#segment" />
						<use id="segment-3" transform="translate(20 185)" href="#segment" />
						<use id="segment-4" transform="translate(15 105) rotate(90)" href="#segment" />
						<use id="segment-5" transform="translate(15 20) rotate(90)" href="#segment" />
						<use id="segment-6" transform="translate(20 100)" href="#segment" />
					</g>
				</g>
			</defs>

			<g fill="currentColor">
				{#each digits as d, i}
					<g transform="translate({(digit.width + gap) * i} 0)">
						<use href="#segments" />
						{#each segments[d] as d, i}
							{#if d}
								<use href="#segment-{i}" />
							{/if}
						{/each}
					</g>
				{/each}
			</g>
		</svg>
	</article>

	<main>
		<h1>Oopsie</h1>
		<p>Something quite unexpected has happened.<br /> Here the error message for context:</p>
		<pre><code>{message}</code></pre>
		<p>
			If you think this is a mistake and you feel up to it, please consider filing an issue <a
				href="https://github.com/borntofrappe/borntofrappe/issues/new?title=Status%20code%20{status}&body={message}&labels=bug"
				>on GitHub</a
			>.
		</p>
		<p>If you need some guidance, <em>home is always a good place to start.</em></p>
		<p><a href="/">Go to home, page</a></p>
	</main>
</div>

<style>
	div {
		color: hsl(0, 0%, 30%);
		background: hsl(0, 0%, 97%);
	}

	div *::selection {
		background: hsl(0, 0%, 30%, 0.17);
	}

	article {
		display: grid;
		place-items: center;
		min-height: 100vh;
	}

	svg {
		display: block;
		max-width: 30rem;
		width: 90vmin;
		width: calc(100vmin - 20px);
		height: auto;
	}

	main {
		max-width: 42rem;
		width: 90vmin;
		width: calc(100vmin - 20px);
		margin-left: auto;
		margin-right: auto;
		padding: 1rem;
	}

	main > * + * {
		margin-top: 0.75em;
	}

	pre {
		font-weight: bold;
		padding: 0.5rem 0.5rem;
		color: hsl(0, 0%, 97%);
		background: hsl(0, 0%, 30%);
	}

	code::selection {
		background: hsl(0, 0%, 97%, 0.15);
	}
</style>
