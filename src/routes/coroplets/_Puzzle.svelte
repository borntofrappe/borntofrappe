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
			return Array(size ** 2 + 1)
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

		const wTiles = getWinningTiles();
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

	const getWinningTiles = () => {
		let winningColor;

		for (let r = 0; r < size; r++) {
			winningColor = grid[r * size].color;
			for (let c = 1; c < size; c++) {
				const value = grid[r * size + c].color;
				if (value !== winningColor) {
					winningColor = null;
					break;
				}
			}
			if (winningColor) {
				return Array(size)
					.fill()
					.map((_, i) => r * size + i);
			}
		}

		for (let c = 0; c < size; c++) {
			winningColor = grid[c].color;
			for (let r = 1; r < size; r++) {
				const value = grid[r * size + c].color;
				if (value !== winningColor) {
					winningColor = null;
					break;
				}
			}
			if (winningColor) {
				return Array(size)
					.fill()
					.map((_, i) => i * size + c);
			}
		}

		winningColor = grid[0].color;
		for (let d = 1; d < size; d++) {
			const value = grid[d * size + d].color;
			if (value !== winningColor) {
				winningColor = null;
				break;
			}
		}

		if (winningColor) {
			return Array(size)
				.fill()
				.map((_, i) => i * size + i);
		}

		winningColor = grid[size - 1].color;
		for (let d = 1; d < size; d++) {
			const value = grid[d * size + size - 1 - d].color;
			if (value !== winningColor) {
				winningColor = null;
				break;
			}
		}

		if (winningColor) {
			return Array(size)
				.fill()
				.map((_, i) => i * size + (size - 1 - i));
		}

		return grid.every((d) => d.color) && [];
	};

	const durationReset = 125;

	const animateDeck = async (n) => {
		const tileDeck = decks[iDeck][n - 1];
		if (tileDeck) {
			const i = size ** 2 + 1 - n;
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
						class:tile={!winningTiles}
						fill={colors[2]}
						href="#tile"
					/>
				{/if}
			</g>
		{/each}
	</g>

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

	{#if winningTiles}
		<g style:cursor="pointer" on:click|once={playOtherDeck}>
			<rect
				x={(width / 2 + w / 2) * -1}
				y={h * -1}
				width={width + w}
				height={height + h}
				opacity="0"
			/>
		</g>
	{/if}
</svg>

<style>
	svg {
		display: block;
	}

	.tile {
		cursor: pointer;
	}

	.tile:hover {
		filter: brightness(1.25);
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
