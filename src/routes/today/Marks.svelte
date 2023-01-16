<script>
	export let n = 7;

	const marks = Array(n)
		.fill()
		.map((_, i) => i)
		.reduce((acc, curr) => {
			if (curr % 5 === 0) acc.push([]);

			acc[acc.length - 1].push(curr);
			return acc;
		}, []);
</script>

<svg viewBox="0 0 {5 * marks.length} 5">
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
