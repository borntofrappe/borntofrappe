<script>
	import Display from './Display.svelte';
	import { Puzzle } from './utils.js';

	export let rows = 10;
	export let columns = 10;

	let puzzle = new Puzzle({ columns, rows });
</script>

<svg viewBox="-0.1 -0.1 {columns + 0.2 + 1} {rows + 0.2 + 3}">
	<defs>
		<linearGradient id="minesweeper-linear-gradient-stroke-se" x1="0" x2="1" y1="0" y2="1">
			<stop stop-color="#ffffff" offset="0.5" />
			<stop stop-color="#767676" offset="0.5" />
		</linearGradient>

		<linearGradient id="minesweeper-linear-gradient-stroke-nw" x1="1" x2="0" y1="1" y2="0">
			<stop stop-color="#ffffff" offset="0.5" />
			<stop stop-color="#767676" offset="0.5" />
		</linearGradient>
	</defs>

	<rect
		fill="#bbbbbb"
		stroke="url(#minesweeper-linear-gradient-stroke-se)"
		stroke-width="0.2"
		width={columns + 1}
		height={rows + 3}
	/>

	<g
		fill="#bbbbbb"
		stroke="url(#minesweeper-linear-gradient-stroke-nw)"
		stroke-width="0.12"
		transform="translate(-0.06 -0.06)"
	>
		<g transform="translate(0.5 0.5)">
			<rect width={columns + 0.12} height={1.62} />
		</g>

		<g transform="translate(0.5 2.5)">
			<rect width={columns + 0.12} height={rows + 0.12} />
		</g>
	</g>

	<g transform="translate(0.5 0.5)">
		<g>
			<rect fill="#040404" width="3" height="1.5" />
			<g transform="translate(1.5 0.75)">
				<g transform="translate(-1.25 -0.6)">
					<Display value="000" color="#fa0202" width={2.5} height={1.2} gap={25} />
				</g>
			</g>
		</g>

		<g transform="translate({columns - 3} 0)">
			<rect fill="#040404" width="3" height="1.5" />

			<g transform="translate(1.5 0.75)">
				<g transform="translate(-1.25 -0.6)">
					<Display value="000" color="#fa0202" width={2.5} height={1.2} gap={25} />
				</g>
			</g>
		</g>

		<g transform="translate({columns / 2} 0)">
			<g transform="translate(0 0.06)">
				<rect
					fill="#bbbbbb"
					stroke="url(#minesweeper-linear-gradient-stroke-se)"
					stroke-width="0.12"
					x="-0.69"
					width="1.38"
					height="1.38"
				/>

				<g transform="translate(0 0.69)">
					<circle r="0.42" fill="#f7e700" stroke="#040404" stroke-width="0.05" />
					<g>
						<g fill="#040404" transform="translate(0 -0.11)">
							<circle r="0.06" cx="-0.13" />
							<circle r="0.06" cx="0.13" />
						</g>
						<g fill="none" stroke="#040404" stroke-width="0.05">
							<path d="M -0.19 0.1 a 0.21 0.21 0 0 0 0.38 0" />
						</g>
					</g>
				</g>
			</g>
		</g>
	</g>

	<g transform="translate(0.5 2.5)">
		{#each puzzle.grid.reduce((acc, curr) => [...acc, ...curr], []) as { column, row }}
			<g transform="translate({column} {row})">
				<rect
					fill="#c3c3c3"
					stroke="url(#minesweeper-linear-gradient-stroke-se)"
					stroke-width="0.1"
					x="0.05"
					y="0.05"
					width="0.9"
					height="0.9"
				/>
			</g>
		{/each}
	</g>
</svg>

<style>
	svg {
		display: block;
	}
</style>
