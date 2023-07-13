<script>
	const level = `
---EA----
DAB-A-EAC
-EAAAAAB-
--EAAAB--
--IGAHF--
---IAF---
`;

	const grid = level
		.trim()
		.split('\n')
		.map((row) => row.split(''));

	const { length: rows } = grid;
	const { length: columns } = grid[0];

	const uses = grid.reduce((acc, curr, y) => {
		const row = curr.reduce((a, c, x) => {
			return c !== '-'
				? [
						...a,
						{
							x,
							y,
							href: `#${c}`
						}
				  ]
				: a;
		}, []);
		return [...acc, ...row];
	}, []);
</script>

<svg style="display: block;" viewBox="0 0 {columns} {rows}">
	<defs>
		<rect id="A" width="1" height="1" />
		<path id="B" d="M 0 0 L 0 1 1 1 A 1 1 0 0 0 0 0 Z" />
		<path id="C" d="M 0 0 L 1 0 A 1 1 0 0 1 0 1 Z" />
		<path id="D" d="M 0 0 L 1 0 1 1 A 1 1 0 0 1 0 0 Z" />
		<path id="E" d="M 1 0 L 1 1 0 1 A 1 1 0 0 1 1 0 Z" />
		<path id="F" d="M 0 0 L 0 1 1 1 Z" />
		<path id="G" d="M 0 0 L 1 0 0 1 Z" />
		<path id="H" d="M 0 0 L 1 0 1 1 Z" />
		<path id="I" d="M 1 0 L 1 1 0 1 Z" />
	</defs>
	<g fill="currentColor">
		{#each uses as { x, y, href }}
			<use {x} {y} {href} />
		{/each}
	</g>
</svg>
