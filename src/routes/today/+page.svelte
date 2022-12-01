<script>
	import { onMount } from 'svelte';

	const days = new Date().getDate();

	const markings = Array(days)
		.fill()
		.map((_, i) => i)
		.reduce((acc, curr) => {
			if (curr % 5 === 0) acc.push([]);

			acc[acc.length - 1].push(curr);
			return acc;
		}, []);

	const duration = 750 / 1000;
	const initialDelay = 250;

	let svg;
	onMount(() => {
		const { matches } = matchMedia('(prefers-reduced-motion: reduced)');
		if (matches) return;

		const marks = [...svg.querySelectorAll('use')]
			.reduce((acc, curr, i) => {
				if (i % 5 === 0) acc.push([]);

				acc[acc.length - 1].push(curr);
				return acc;
			}, [])
			.pop();

		const { length } = marks;
		for (let i = 0; i < length; i++) {
			marks[i].setAttribute('stroke-dasharray', '1');
			marks[i].setAttribute('stroke-dashoffset', '1');
		}

		const timeout = setTimeout(() => {
			for (let i = 0; i < length; i++) {
				marks[i].style.transition = `${duration}s ${
					duration * i
				}s stroke-dashoffset cubic-bezier(0.5, 1, 0.89, 1)`;

				marks[i].setAttribute('stroke-dashoffset', '0');
			}
			clearTimeout(timeout);
		}, initialDelay);
	});
</script>

<svelte:head>
	<title>borntofrappe | Today</title>
	<meta
		name="description"
		content="What day is today? Here's a short and chalky answer to the often puzzlng question."
	/>
</svelte:head>

<div>
	<svg bind:this={svg} viewBox="-0.25 -0.25 {5 * markings.length} 5">
		<title>Today is day number {days}</title>
		<defs>
			<filter id="filter" filterUnits="userSpaceOnUse">
				<feTurbulence type="turbulence" baseFrequency="0.2" numOctaves="2" result="turbulence" />
				<feDisplacementMap
					in2="turbulence"
					in="SourceGraphic"
					scale="1"
					xChannelSelector="R"
					yChannelSelector="G"
				/>
			</filter>

			{#each Array(4) as _, i}
				<g id="mark-{i}">
					<path pathLength="1" d="M {i} 0 v 3" />
				</g>
			{/each}
			<g id="mark-4">
				<path pathLength="1" d="M -0.5 2.4 3.5 0.6" />
			</g>
		</defs>

		<g filter="url(#filter)">
			{#each markings as marks, i}
				<g transform="translate({5 * i} 0)">
					<g transform="translate(0.5 0.5)">
						<g fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="0.5">
							{#each marks as _, i}
								<use href="#mark-{i}" />
							{/each}
						</g>
					</g>
				</g>
			{/each}
		</g>
	</svg>
</div>

<style>
	div {
		color: hsl(0, 0%, 92%);
		background: hsl(0, 0%, 17%);
		min-height: 100vh;
		display: flex;
	}

	div > svg {
		max-width: 36rem;
		width: 80vmin;
		display: block;
		margin: auto;
	}
</style>
