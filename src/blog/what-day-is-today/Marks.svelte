<script>
	export let n = 5;

	const marks = Array(n)
		.fill()
		.map((_, i) => i % 5)
		.reduce((acc, curr) => {
			if (curr === 0) return [...acc, [curr]];

			return [...acc.slice(0, -1), [...acc[acc.length - 1], curr]];
		}, []);
</script>

<svg viewBox="-0.5 -0.5 {5 * marks.length + 1} 6">
	<defs>
		<path id="marks-mark-0" d="M 1 1 v 4" />
		<path id="marks-mark-1" d="M 2 1 v 4" />
		<path id="marks-mark-2" d="M 3 1 v 4" />
		<path id="marks-mark-3" d="M 4 1 v 4" />
		<path id="marks-mark-4" d="M 0 3.5 l 5 -1" />
	</defs>
	<g stroke="currentColor" stroke-width="0.5">
		{#each marks as cluster, i}
			<g transform="translate({5 * i} 0)">
				{#each cluster as number}
					<use href="#marks-mark-{number}" />
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
