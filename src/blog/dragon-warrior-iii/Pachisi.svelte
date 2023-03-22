<script>
	import { tweened } from 'svelte/motion';
	import { linear as easing } from 'svelte/easing';

	import svg from './svg.js';

	const getBoard = ({ columns = 4, rows = 3, ltr = true } = {}) => {
		const actionPool = [1, 1, 1, 1, -1, -1, -1, -1, 2, 2, -2, -2, 3, -3];

		const board = Array(rows * columns)
			.fill()
			.map((_) => {
				const href = '#pachisi-grass';

				return {
					href,
					ltr,
					action: null
				};
			});

		board[0].action = 'start';
		board[board.length - 1].action = 'goal';
		board[board.length - 1].href = '#pachisi-action-goal';

		let pool = [...actionPool];
		const { length } = board;
		let step = 1;

		while (step < length - 1) {
			const i = Math.floor(Math.random() * pool.length);
			const action = pool[i];
			pool = [...pool.slice(0, i), ...pool.slice(i + 1)];

			const stepAction = step + action;

			if (
				stepAction > 0 &&
				stepAction < length &&
				board[step].action === null &&
				board[stepAction].action === null
			) {
				board[step].href = `#pachisi-action-${action}`;
				board[step].action = action;
				board[stepAction].action = 0;
			}
			step = Math.random() > 0.5 ? step + 2 : step + 3;
		}

		for (let i = 0; i < board.length; i++) {
			const row = Math.floor(i / columns);
			const even = row % 2 === 0;
			const alt = even ? ltr : !ltr;
			const column = alt ? i % columns : columns - 1 - (i % columns);
			board[i].row = row;
			board[i].column = column;
		}

		return board;
	};

	const columns = 4;
	const rows = 3;
	const ltr = true;

	const board = getBoard({ columns, rows, ltr });
	const { column, row } = board.find((d) => d.action === 'start');

	let dice = null;
	let player = null;
	let state = 'wait';

	const duration = 750;
	const position = tweened(
		{
			column,
			row
		},
		{
			duration,
			easing
		}
	);

	const handleMove = async (roll, direction = 1) => {
		const { column, row } = $position;
		const { ltr } = board.find((cell) => cell.column === column && cell.row === row);

		let dr = 0;
		const even = row % 2 === 0;
		const alt = even ? ltr : !ltr;
		let dc = alt ? direction : direction * -1;
		if ((column === 0 && dc === -1) || (column === columns - 1 && dc === 1)) {
			dr = direction;
			dc = 0;
		}

		const value = `#dice-face-${roll}`;
		dice.querySelector('use').setAttribute('href', value);

		player.querySelector('animate').setAttribute('repeatCount', 2);
		player.querySelector('animate').setAttribute('dur', `${duration / 1000 / 2}s`);
		player.querySelector('animate').beginElement();

		await position.set({
			column: column + dc,
			row: row + dr
		});

		console.log($position);

		if (roll === 1) {
			// evaluate tile
			state = 'wait';
		} else {
			const { column, row } = $position;
			const { action } = board.find((cell) => cell.column === column && cell.row === row);
			if (action === 'goal') {
				handleMove(roll - 1, -1);
			} else {
				handleMove(roll - 1, direction);
			}
		}
	};

	const handleRoll = async () => {
		if (state !== 'wait') return;

		state = 'roll';

		const duration = 1800;

		const roll = Math.floor(Math.random() * 6 + 1);

		const value = `#dice-face-${roll}`;
		const values = [
			...Array(28)
				.fill()
				.map((_, i) => `#dice-roll-${i + 1}`),
			value
		].join(';');

		const dur = `${duration / 1000}s`;
		dice.querySelector('use').setAttribute('href', value);

		const animateTransform = dice.querySelector('animateTransform');
		const animate = dice.querySelector('animate');

		animateTransform.setAttribute('dur', dur);
		animate.setAttribute('dur', dur);
		animate.setAttribute('values', values);

		animateTransform.beginElement();
		animate.beginElement();

		setTimeout(() => {
			handleMove(roll);
		}, duration);
	};
</script>

{@html svg['dice']}
{@html svg['board']}

<svg viewBox="0 0 {columns} {rows}">
	<defs>
		<use
			id="pachisi-grass"
			style="--c0: #030f00; --c2: #eef2d9;"
			href="#board-tile-grass"
			width="1"
			height="1"
		/>

		<g id="pachisi-action-goal">
			<use
				style="--c0: #030f00; --c1: #8c03ff; --c2: #eef2d9;"
				href="#board-tile-action"
				width="1"
				height="1"
			/>
			<g transform="translate(0 0)">
				<g transform="translate(0.5 0.5)">
					<use
						style="--c0: #030f00; --c1: #93ca27; --c2: #eef2d9;"
						href="#board-key"
						x="-0.25"
						y="-0.25"
						width="0.5"
						height="0.5"
					/>
				</g>
			</g>
		</g>

		{#each Array(3) as _, i}
			<g id="pachisi-action-{i + 1}">
				<use
					style="--c0: #030f00; --c1: #da3900; --c2: #eef2d9;"
					href="#board-tile-action"
					width="1"
					height="1"
				/>
				<g transform="translate(0.5 0.5)">
					<path
						d="M 0 -0.25 l 0.075 0 0 0.1 0.05 0 0 0.05 -0.1 0.1 -0.05 0 -0.1 -0.1 0 -0.05 0.05 0 0 -0.1"
						fill="#f3f6f5"
					/>
					<g
						transform="translate(0 0.2)"
						fill="#d39854"
						stroke="#030f00"
						paint-order="stroke"
						stroke-width="0.06"
						stroke-linejoin="bevel"
						text-anchor="middle"
						font-size="0.25"
						word-spacing="-0.12"
						font-family="monospace"
					>
						<text>+ {i + 1}</text>
					</g>
				</g>
				<g />
			</g>
			<g id="pachisi-action-{(i + 1) * -1}">
				<use
					style="--c0: #030f00; --c1: #1348ee; --c2: #eef2d9;"
					href="#board-tile-action"
					width="1"
					height="1"
				/>
				<g transform="translate(0.5 0.5)">
					<path
						transform="translate(0 -0.25) rotate(180)"
						d="M 0 -0.25 l 0.075 0 0 0.1 0.05 0 0 0.05 -0.1 0.1 -0.05 0 -0.1 -0.1 0 -0.05 0.05 0 0 -0.1"
						fill="#f3f6f5"
					/>
					<g
						transform="translate(0 0.2)"
						fill="#d39854"
						stroke="#030f00"
						paint-order="stroke"
						stroke-width="0.06"
						stroke-linejoin="bevel"
						text-anchor="middle"
						font-size="0.25"
						word-spacing="-0.12"
						font-family="monospace"
					>
						<text>- {i + 1}</text>
					</g>
				</g>
			</g>
		{/each}
	</defs>

	{#each board as { column, row, href }}
		<g transform="translate({column} {row})">
			<use {href} />
		</g>
	{/each}

	<g transform="translate({$position.column} {$position.row})">
		<g transform="translate(0.5 0.5)">
			<use
				bind:this={player}
				style="--c0: #030f00; --c1: #b15116; --c2: #eef2d9;"
				href="#board-player-0"
				x="-0.25"
				y="-0.25"
				width="0.5"
				height="0.5"
			>
				<animate
					begin="indefinite"
					attributeName="href"
					values="#board-player-0; #board-player-1"
					dur="0.25s"
					repeatCount="2"
				/>
			</use>
		</g>
	</g>
</svg>

<div>
	<button on:click={handleRoll}> Roll </button>
	<svg
		bind:this={dice}
		style="display: block; --c0: #030f00; --c1: #ac3232; --c2: #eef2d9;"
		viewBox="0 0 1 3"
	>
		<g>
			<animateTransform
				begin="indefinite"
				attributeName="transform"
				type="translate"
				values="0 0; 0 -2; 0 0; 0 -1.4; 0 0; 0 -0.6; 0 0"
				dur="1.8s"
				calcMode="spline"
				keySplines="0.2 0 0.5 1; 0.75 0 0.75 1; 0.3 0 0.5 1; 0.75 0 0.75 1; 0.4 0 0.5 1; 0.75 0 0.75 1"
			/>
			<use href="#dice-roll-1" y="2" width="1" height="1">
				<animate begin="indefinite" attributeName="href" dur="1.8s" />
			</use>
		</g>
	</svg>
</div>

<style>
	div {
		display: inline-flex;
		flex-direction: column-reverse;
		align-items: center;
		gap: 0.5rem;
	}

	div > svg {
		display: block;
		inline-size: 3.5rem;
		block-size: auto;
	}

	div button {
		background: none;
		margin: 0;
		display: block;
		padding: 0.2rem 0.5rem;
		font: inherit;
		line-height: 1;
		letter-spacing: 0.5px;
		font-weight: 700;
		border: 0.2rem solid currentColor;
	}
</style>
