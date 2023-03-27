<script>
	import { tweened } from 'svelte/motion';
	import { sineInOut as easing } from 'svelte/easing';

	import svg from './svg.js';

	const getBoard = ({ columns = 4, rows = 3, leftToRight = true } = {}) => {
		const actionPool = [1, 1, 1, 1, -1, -1, -1, -1, 2, 2, -2, -2, 3, -3];

		const board = Array(rows * columns)
			.fill()
			.map((_) => {
				const href = '#pachisi-grass';

				return {
					href,
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
				stepAction > 1 &&
				stepAction < length - 1 &&
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
			const ltr = row % 2 === 0 ? leftToRight : !leftToRight;
			const column = ltr ? i % columns : columns - 1 - (i % columns);

			board[i].row = row;
			board[i].column = column;
			board[i].ltr = ltr;
		}

		return board;
	};

	const columns = 5;
	const rows = 3;
	const leftToRight = true;
	const fireworks = Array(15)
		.fill()
		.map((_, i) => `#firework-${i}`)
		.join(';');

	let board = getBoard({ columns, rows, leftToRight });
	const { column, row } = board.find((d) => d.action === 'start');

	let dice = null;
	let player = null;
	let state = 'wait';

	const duration = 700;
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

	const offset = tweened(0);
	let newBoard = [];

	const handleWin = async () => {
		const duration = 1000;
		const delay = 2000;

		const totalDuration = duration + delay;
		const stepDuration = 350;
		const repeatCount = Math.ceil(totalDuration / stepDuration);

		player.querySelectorAll('animate').forEach((animate) => animate.beginElement());
		const animate = player.querySelector('animate');
		animate.setAttribute('repeatCount', repeatCount);
		animate.setAttribute('dur', `${stepDuration / 1000}s`);
		animate.beginElement();

		const { column } = $position;

		const { ltr } = board.find(({ action }) => action === 'goal');
		newBoard = getBoard({ columns, rows, leftToRight: !ltr });

		position.set(
			{
				column,
				row: rows
			},
			{
				duration,
				delay,
				easing
			}
		);
		await offset.set(rows * -1, {
			duration,
			delay,
			easing
		});

		board = newBoard;
		newBoard = [];
		offset.set(0, { duration: 0 });
		position.set({ column, row: 0 }, { duration: 0 });

		state = 'wait';
	};

	const handleMove = async (roll, direction = 1) => {
		const { column, row } = $position;
		const { ltr } = board.find((cell) => cell.column === column && cell.row === row);

		let dc = ltr ? direction : direction * -1;
		let dr = 0;
		if ((column === 0 && dc === -1) || (column === columns - 1 && dc === 1)) {
			dc = 0;
			dr = direction;
		}

		dice.querySelector('use').setAttribute('href', `#dice-face-${roll}`);

		player.querySelector('animate').setAttribute('repeatCount', 2);
		player.querySelector('animate').setAttribute('dur', `${duration / 1000 / 2}s`);
		player.querySelector('animate').beginElement();

		await position.set({
			column: column + dc,
			row: row + dr
		});

		dice.querySelector('use').setAttribute('href', `#dice-face-${Math.max(1, roll - 1)}`);

		const delay = roll === 1 ? 150 : 75;
		setTimeout(() => {
			if (roll === 1) {
				const { column, row } = $position;

				const { action } = board.find((cell) => cell.column === column && cell.row === row);
				switch (action) {
					case 'goal':
						state = 'win';
						handleWin();
						break;
					case 1:
					case 2:
					case 3:
						state = 'move';
						handleMove(action, 1);
						break;
					case -1:
					case -2:
					case -3:
						state = 'move';
						handleMove(Math.abs(action), -1);
						break;
					default:
						state = 'wait';
				}
			} else {
				const { column, row } = $position;
				const { action } = board.find((cell) => cell.column === column && cell.row === row);
				if (action === 'goal') {
					handleMove(roll - 1, -1);
				} else {
					handleMove(roll - 1, direction);
				}
			}
		}, delay);
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
			state = 'move';
			handleMove(roll);
		}, duration);
	};
</script>

{@html svg['dice']}
{@html svg['board']}

<article>
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

		<g transform="translate(0 {$offset})">
			<g transform="translate(0 {rows})">
				{#each newBoard as { column, row, href }}
					<g transform="translate({column} {row})">
						<use {href} />
					</g>
				{/each}
			</g>

			{#each board as { column, row, href }}
				<g transform="translate({column} {row})">
					<use {href} />
				</g>
			{/each}

			<g transform="translate({$position.column} {$position.row})">
				<g bind:this={player}>
					<g transform="translate(0.5 0.5)">
						<use
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
					<g style="--c2: #eef2d9;">
						<use href="#firework-0" x="-0.2" y="0.1" width="0.8" height="0.8">
							<animate begin="indefinite" attributeName="href" values={fireworks} dur="1s" />
						</use>
						<use href="#firework-0" x="0.2" y="-0.2" width="0.8" height="0.8">
							<animate
								begin="indefinite"
								attributeName="href"
								values="#;#;#;{fireworks}"
								dur="1.2s"
							/>
						</use>
						<use href="#firework-0" x="0.3" y="0.3" width="0.7" height="0.7">
							<animate
								begin="indefinite"
								attributeName="href"
								values="#;#;#;#;#;#;#;#;#;{fireworks}"
								dur="1.8s"
							/>
						</use>
					</g>
				</g>
			</g>
		</g>
	</svg>
</article>

<style>
	article {
		color: #030f00;
		display: flex;
		gap: 0.75rem;
	}

	article > svg {
		min-inline-size: 18rem;
		inline-size: 100%;
		display: block;
	}

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
		color: inherit;
		background: none;
		display: block;
		margin: 0;
		padding: 0.2rem 0.5rem;
		line-height: 1;
		letter-spacing: 0.5px;
		font-weight: 700;
		border: 0.2rem solid currentColor;
	}
</style>
