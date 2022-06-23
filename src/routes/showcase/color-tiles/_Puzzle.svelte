<script>
	import { tweened } from 'svelte/motion';
	import { circInOut as easing } from 'svelte/easing';

	export let size = 3;
	export let colors = ['#e47272', '#fef073', '#7dd3f6'];

	const h = 10;
	const w = h * 2;
	const d = 4;
	const strokeWidth = 0;

	const width = w * size * 2;
	const height = h * size * 2;

	const winningCondition = Math.min(4, size);
	let winningTiles;
	let grid = Array(size ** 2)
		.fill()
		.map((_, i) => {
			const c = i % size;
			const r = Math.floor(i / size);

			return {
				x: w * r * -1 + w * c,
				y: h * r + h * c
			};
		});

	const color0 = Math.random() > 0.5 ? colors[0] : colors[1];
	const decks = Array(2)
		.fill()
		.map((_, i) => {
			return Array(size % 2 === 0 ? size ** 2 : size ** 2 + 1)
				.fill()
				.map((_, j) => {
					const c = i % 2 === 0 ? color0 : color0 === colors[0] ? colors[1] : colors[0];
					return {
						x: (width / 2) * -1 + width * i,
						y: height + ((j * d) / 2 + h) * -1,
						color: j % 2 === 0 ? c : c === colors[0] ? colors[1] : colors[0]
					};
				});
		});

	let iDeck = Math.floor(Math.random() * decks.length);
	let deck = [...decks[iDeck]];

	const tile = deck[deck.length - 1];
	deck = deck.slice(0, -1);

	let color = tile.color;
	const { x, y } = tile;

	const duration = 275;
	const position = tweened(
		{
			x,
			y
		},
		{
			duration,
			easing
		}
	);

	const updateGrid = (i) => {
		grid[i].color = color;

		const wTiles = getWinningTiles(i);
		if (wTiles) {
			winningTiles = wTiles;
		} else {
			const tile = deck[deck.length - 1];
			if (tile) {
				color = color === colors[0] ? colors[1] : colors[0];
				deck = deck.slice(0, -1);
				const { x, y } = tile;
				position.set({ x, y }, { duration: 0 });
			}
		}
	};

	const getI = (r, c, size) => r * size + c;
	const getRC = (i, size) => [Math.floor(i / size), i % size];

	const getWinningTiles = (i) => {
		let winningTiles = [];

		const [r, c] = getRC(i, size);
		const c0 = Math.max(0, c - size);
		const c1 = Math.min(size - 1, c + size);
		const r0 = Math.max(0, r - size);
		const r1 = Math.min(size - 1, r + size);

		let winningTilesRow = [];

		for (let r = r0; r <= r1; r++) {
			const i = getI(r, c, size);
			const value = grid[i].color;
			if (value === color) {
				winningTilesRow.push(i);
			} else {
				if (winningTilesRow.length >= winningCondition)
					winningTiles = [...winningTiles, ...winningTilesRow];
				if (r > r1 - winningCondition) break;
				winningTilesRow = [];
			}

			if (winningTilesRow.length >= winningCondition)
				winningTiles = [...winningTiles, ...winningTilesRow];
		}

		let winningTilesColumn = [];

		for (let c = c0; c <= c1; c++) {
			const i = getI(r, c, size);
			const value = grid[i].color;
			if (value === color) {
				winningTilesColumn.push(i);
			} else {
				if (winningTilesColumn.length >= winningCondition)
					winningTiles = [...winningTiles, ...winningTilesColumn];
				if (c > c1 - winningCondition) break;
				winningTilesColumn = [];
			}

			if (winningTilesColumn.length >= winningCondition)
				winningTiles = [...winningTiles, ...winningTilesColumn];
		}

		let winningTilesDiagonal = [];
		const d0 = Math.min(size, c - c0, r - r0) * -1;
		const d1 = Math.min(size, c1 - c, r1 - r);
		for (let d = d0; d <= d1; d++) {
			const i = getI(r + d, c + d, size);
			if (grid[i] && grid[i].color === color) {
				winningTilesDiagonal.push(i);
			} else {
				if (winningTilesDiagonal.length >= winningCondition)
					winningTiles = [...winningTiles, ...winningTilesDiagonal];
				if (d > d1 - winningCondition) break;
				winningTilesDiagonal = [];
			}

			if (winningTilesDiagonal.length >= winningCondition)
				winningTiles = [...winningTiles, ...winningTilesDiagonal];
		}

		const d2 = Math.min(size, c1 - c, r - r0) * -1;
		const d3 = Math.min(size, c - c0, r1 - r);
		let winningTilesAntiDiagonal = [];
		for (let d = d2; d <= d3; d++) {
			const i = getI(r + d, c + d * -1, size);
			if (grid[i] && grid[i].color === color) {
				winningTilesAntiDiagonal.push(i);
			} else {
				if (winningTilesAntiDiagonal.length >= winningCondition)
					winningTiles = [...winningTiles, ...winningTilesAntiDiagonal];
				if (d > d3 - winningCondition) break;
				winningTilesAntiDiagonal = [];
			}

			if (winningTilesAntiDiagonal.length >= winningCondition)
				winningTiles = [...winningTiles, ...winningTilesAntiDiagonal];
		}

		if (winningTiles.length > 0)
			return winningTiles.reduce(
				(acc, curr) => (acc.includes(curr) ? [...acc] : [...acc, curr]),
				[]
			);

		return grid.every((d) => d.color) && [];
	};

	const durationReset = 100;

	const animateDeck = async (n) => {
		const tileDeck = decks[iDeck][n - 1];
		if (tileDeck) {
			const i = size % 2 === 0 ? size ** 2 - n : size ** 2 + 1 - n;
			const tile = deck[i];
			const { x, y } = tile;
			deck = [...deck.slice(0, i), ...deck.slice(i + 1)];

			await position.set({ x, y }, { duration: 0 });
			color = tile.color;

			const { x: xDeck, y: yDeck } = tileDeck;
			await position.set(
				{
					x: xDeck,
					y: yDeck
				},
				{ duration: durationReset }
			);

			deck = [
				...deck,
				{
					x: xDeck,
					y: yDeck,
					color: tile.color
				}
			];

			animateDeck(n + 1);
		} else {
			deck = deck.slice(0, -1);
			winningTiles = null;
		}
	};

	const animateGrid = async (n = 0) => {
		const tileDeck = decks[iDeck][n];
		const i = grid.findIndex((d) => d.color === tileDeck.color);
		if (i === -1) {
			animateDeck(n + 1);
		} else {
			const tile = grid[i];
			const { x, y } = tile;
			grid = [...grid.slice(0, i), { x, y }, ...grid.slice(i + 1)];

			await position.set({ x, y }, { duration: 0 });
			color = tile.color;

			const { x: xDeck, y: yDeck } = tileDeck;
			await position.set(
				{
					x: xDeck,
					y: yDeck
				},
				{ duration: durationReset }
			);

			deck = [
				...deck,
				{
					x: xDeck,
					y: yDeck,
					color: tile.color
				}
			];

			animateGrid(n + 1);
		}
	};

	const playOtherDeck = () => {
		iDeck = iDeck === 0 ? 1 : 0;
		animateGrid();
	};
</script>

<svg
	viewBox="{(width / 2 + strokeWidth / 2 + w) * -1} {(h - d + strokeWidth / 2) * -1} {width +
		strokeWidth +
		w * 2} {height + d + strokeWidth + h}"
>
	<defs>
		<g id="tile" stroke-width={strokeWidth}>
			<path d="M 0 {(h - d) * -1} l {w} {h} 0 {d} {w * -1} {h} {w * -1} {h * -1} 0 {d * -1}z" />
			<path
				fill="black"
				opacity="0.3"
				d="M {w * -1} {d} l {w} {h} {w} {h * -1} 0 {d} {w * -1} {h} {w * -1} {h * -1} z"
			/>
			<path
				fill="none"
				stroke="black"
				d="M 0 {(h - d) * -1} l {w} {h} 0 {d} {w * -1} {h} {w * -1} {h * -1} 0 {d * -1}z m {w *
					-1} {h} l {w * 1} {h} {w} {h * -1} m {w * -1} {h} v {d}"
			/>
		</g>
	</defs>

	<g
		on:mouseleave={() => {
			if (winningTiles) return;

			const tile = deck[deck.length - 1];
			if (tile) {
				const { x, y } = tile;
				position.set({ x, y: y - d / 2 });
			}
		}}
	>
		{#each grid as { x, y, color }, i}
			<g transform="translate({x} {y})">
				{#if color}
					<use
						class:blink={winningTiles && winningTiles.includes(i)}
						style="animation-delay: {i % 2 === 0 ? 0 : 0.1}s"
						fill={colors[2]}
						href="#tile"
					/>
					<use fill={color} href="#tile" transform="scale(0.5)" />
				{:else}
					<use
						on:mouseenter={() => {
							if (winningTiles) return;

							position.set({
								x,
								y
							});
						}}
						on:click={() => {
							if (winningTiles) return;

							updateGrid(i);
						}}
						tabindex={winningTiles ? '-1' : '0'}
						aria-label="Place the tile on row {y + 1} and column {x + 1}."
						on:focus={() => {
							if (winningTiles) return;

							position.set({
								x,
								y
							});
						}}
						style:outline="none"
						on:keydown={(e) => {
							if (winningTiles) return;

							const { key, target } = e;
							if (key === 'Enter') {
								e.preventDefault();
								updateGrid(i);
								target.blur();
							}
						}}
						class:tile={!winningTiles}
						fill={colors[2]}
						href="#tile"
					/>
				{/if}
			</g>
		{/each}
	</g>

	{#if winningTiles}
		<g
			style:cursor="pointer"
			on:click|once={() => {
				playOtherDeck();
			}}
			fill="transparent"
			opacity="0.25"
			class="focusable"
			tabindex="0"
			aria-label="Clear the board and play a new round."
			on:keydown={(e) => {
				const { key, target } = e;
				if (key === 'Enter') {
					e.preventDefault();
					playOtherDeck();
					target.blur();
				}
			}}
		>
			<path
				d="M 0 {(h - d) * -1} l {width / 2} {height / 2} {(width / 2) * -1} {height / 2} {(width /
					2) *
					-1} {(height / 2) * -1}z"
			/>
		</g>
	{/if}

	<g>
		{#each deck as { color, x, y }}
			<g transform="translate({x} {y})">
				<use fill={color} href="#tile" transform="scale(0.5)" />
			</g>
		{/each}
	</g>

	<g style="pointer-events: none" transform="translate({$position.x} {$position.y})">
		<g transform="translate(0 0)">
			<use fill={color} href="#tile" transform="scale(0.5)" />
		</g>
	</g>
</svg>

<style>
	svg {
		display: block;
	}

	.tile {
		cursor: pointer;
	}

	.tile:hover,
	.tile:focus {
		filter: brightness(1.25);
	}

	.focusable:focus {
		outline: none;
		fill: currentColor;
	}

	.focusable:focus:not(:focus-visible) {
		fill: transparent;
	}

	.blink {
		animation: blink 0.2s 8 steps(2);
		filter: brightness(1.25);
	}

	@keyframes blink {
		100% {
			filter: brightness(1);
		}
	}
</style>
