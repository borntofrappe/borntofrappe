<script>
	import { onMount } from 'svelte';

	export let n = 7;

	const marks = Array(n)
		.fill()
		.map((_, i) => i)
		.reduce((acc, curr) => {
			if (curr % 5 === 0) acc.push([]);

			acc[acc.length - 1].push(curr);
			return acc;
		}, []);

	let svg;
	const duration = 480 / 1000;
	const initialDelay = 700;

	onMount(async () => {
		const { matches } = matchMedia('(prefers-reduced-motion: reduce)');
		if (matches) return;

		const ticks = [...svg.querySelectorAll('use')]
			.reduce((acc, curr, i) => {
				if (i % 5 === 0) acc.push([]);

				acc[acc.length - 1].push(curr);
				return acc;
			}, [])
			.pop();

		const { length } = ticks;
		for (const tick of ticks) {
			tick.setAttribute('stroke-dasharray', '1');
			tick.setAttribute('stroke-dashoffset', '1');
		}

		const timeout = setTimeout(() => {
			for (let i = 0; i < length; i++) {
				ticks[i].style.transition = `${duration}s ${
					duration * i
				}s stroke-dashoffset cubic-bezier(0.5, 1, 0.89, 1)`;

				ticks[i].setAttribute('stroke-dashoffset', '0');
			}

			clearTimeout(timeout);
		}, initialDelay);

		return () => clearTimeout(timeout);
	});
</script>

<svg bind:this={svg} viewBox="0 0 {5 * marks.length} 5">
	<defs>
		{#each Array(4) as _, i}
			<g id="mark-{i}">
				<path pathLength="1" d="M {i + 1} 1 v 3" />
			</g>
		{/each}
		<g id="mark-4">
			<path pathLength="1" d="M 0.5 3.4 l 4 -1.8" />
		</g>
	</defs>

	<g fill="none" stroke="currentColor" stroke-linecap="square" stroke-width="0.5">
		{#each marks as cluster, i}
			<g transform="translate({5 * i} 0)">
				{#each cluster as _, j}
					<use href="#mark-{j}" />
				{/each}
			</g>
		{/each}
	</g>
</svg>

<style>
	svg {
		display: block;
	}
</style>
