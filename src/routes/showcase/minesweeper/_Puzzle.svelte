<script>
	import Display from './_Display.svelte';
	import { Puzzle } from './_utils';
	import { createTimer } from './_stores.js';

	export let columns = 10;
	export let rows = 10;
	export let mines = 10;

	const timer = createTimer();

	let puzzle = new Puzzle({ columns, rows, mines });

	let gameon;
	let gamewon;
	let gameover;
	let flags;

	$: if (puzzle) {
		const cells = puzzle.grid.reduce((acc, curr) => [...acc, ...curr], []);

		gamewon = cells.every((d) => (d.hasMine && !d.revealed) || (!d.hasMine && d.revealed));

		gameover = cells.some((d) => d.hasMine && d.revealed);

		flags = puzzle.mines - cells.filter((d) => d.flagged).length;

		if (gamewon || gameover) {
			gameon = false;
			timer.stop();
		}
	}

	$: if ($timer >= 999) {
		timer.stop();
	}

	const handleLock = ({ r, c }) => {
		if (gamewon || gameover) return;

		if (puzzle.grid[r][c].revealed) return;

		if (flags === 0 && !puzzle.grid[r][c].flagged) return;

		if (!gameon) {
			gameon = true;
			timer.start();
		}

		puzzle.grid[r][c].flagged = !puzzle.grid[r][c].flagged;
	};

	const handleReveal = ({ r, c, trigger = true }) => {
		if (gamewon || gameover) return;

		if (puzzle.grid[r][c].flagged) return;

		if (!gameon) {
			gameon = true;
			timer.start();
		}

		if (!puzzle.init) {
			if (puzzle.grid[r][c].hasMine || puzzle.grid[r][c].mines !== 0) {
				const flags = puzzle.grid
					.reduce((acc, curr) => [...acc, ...curr], [])
					.filter((d) => d.flagged);

				puzzle = new Puzzle({ columns, rows, mines, safe: { r, c }, flags });
			}
			puzzle.init = true;
		}

		puzzle.grid[r][c].revealed = true;

		if (puzzle.grid[r][c].hasMine && trigger) {
			puzzle.grid[r][c].triggered = true;
			for (let r = 0; r < puzzle.grid.length; r++) {
				for (let c = 0; c < puzzle.grid[r].length; c++) {
					if (puzzle.grid[r][c].hasMine) {
						puzzle.grid[r][c].revealed = true;
					}
				}
			}
		} else {
			if (puzzle.grid[r][c].mines === 0) {
				for (const [nr, nc] of puzzle.neighbors) {
					const ar = nr + r;
					const ac = nc + c;
					if (puzzle.grid[ar] && puzzle.grid[ar][ac] && !puzzle.grid[ar][ac].revealed) {
						handleReveal({ r: ar, c: ac, trigger: false });
					}
				}
			}
		}
	};

	const handleReset = () => {
		timer.stop();
		timer.reset();
		gameon = false;

		puzzle = new Puzzle({ columns, rows, mines });
	};
</script>

<svg viewBox="-0.1 -0.1 {puzzle.columns + 1 + 0.2} {puzzle.rows + 3 + 0.2}">
	<defs>
		<linearGradient id="minesweeper-linear-gradient-stroke-se" x1="0" x2="1" y1="0" y2="1">
			<stop stop-color="#ffffff" offset="0.5" />
			<stop stop-color="#767676" offset="0.5" />
		</linearGradient>
		<linearGradient id="minesweeper-linear-gradient-stroke-nw" x1="1" x2="0" y1="1" y2="0">
			<stop stop-color="#ffffff" offset="0.5" />
			<stop stop-color="#767676" offset="0.5" />
		</linearGradient>

		<g id="minesweeper-flag">
			<g fill="#fa0202">
				<rect x="-1" width="2" height="1" />
				<rect x="-3" y="1" width="4" height="1" />
				<rect x="-4" y="2" width="5" height="1" />

				<rect x="-3" y="3" width="4" height="1" />
				<rect x="-1" y="4" width="2" height="1" />
			</g>

			<g fill="#040404">
				<rect y="5" width="1" height="1.5" />
				<rect x="-2" y="6.5" width="4" height="1" />
				<rect x="-3" y="7.5" width="6" height="1.5" />
			</g>
		</g>

		<g id="minesweeper-mine">
			<g fill="#040404">
				<rect x="-0.5" y="-1" width="1" height="11" />
				<rect x="-5.5" y="4" width="11" height="1" />
				<rect x="-2" y="0.5" width="4" height="1" />
				<rect x="-4" y="0.5" width="1" height="1" />
				<rect x="3" y="0.5" width="1" height="1" />
				<rect x="-3" y="1.5" width="6" height="1" />
				<rect x="-4" y="2.5" width="8" height="1.5" />
				<rect x="-4" y="5" width="8" height="1.5" />
				<rect x="-3" y="6.5" width="6" height="1" />
				<rect x="-2" y="7.5" width="4" height="1" />
				<rect x="-4" y="7.5" width="1" height="1" />
				<rect x="3" y="7.5" width="1" height="1" />
			</g>
			<g fill="#ffffff">
				<rect x="-2" y="2.5" width="1.5" height="1.5" />
			</g>
		</g>

		<g id="minesweeper-mines-1" fill="#0000f8">
			<rect x="-1" width="2" height="1" />
			<rect x="-2" y="1" width="3" height="1" />
			<rect x="-3" y="2" width="4" height="1" />
			<rect x="-1" y="3" width="2" height="4.5" />
			<rect x="-3" y="7.5" width="6" height="1.5" />
		</g>

		<g id="minesweeper-mines-2" fill="#017e00">
			<rect x="-3.5" width="7" height="1" />
			<rect x="-4.5" y="1" width="9" height="1" />
			<rect x="-4.5" y="2" width="3" height="1" />
			<rect x="1.5" y="2" width="3" height="1" />
			<rect x="0.25" y="3" width="3.25" height="1" />
			<rect x="-1" y="4" width="3.25" height="1" />
			<rect x="-2.25" y="5" width="3.25" height="1" />
			<rect x="-3.5" y="6" width="3.25" height="1" />
			<rect x="-4.5" y="7" width="9" height="1" />
			<rect x="-4.5" y="8" width="9" height="1" />
		</g>

		<g id="minesweeper-mines-3" fill="#fa0202">
			<rect x="-4.5" width="8" height="1" />
			<rect x="-4.5" y="1" width="9" height="1" />
			<rect x="1.5" y="2" width="3" height="1.5" />
			<rect x="-1.5" y="3.5" width="5" height="2" />
			<rect x="1.5" y="5.5" width="3" height="1.5" />
			<rect x="-4.5" y="7" width="9" height="1" />
			<rect x="-4.5" y="8" width="8" height="1" />
		</g>

		<g id="minesweeper-mines-4" fill="#01017d">
			<rect x="-2.5" width="3" height="1.85" />
			<rect x="-3.5" y="1.75" width="3" height="1.75" />
			<rect x="1.5" width="2" height="3.5" />
			<rect x="-4.5" y="3.5" width="9" height="2" />
			<rect x="1.5" y="5.5" width="2" height="3.5" />
		</g>

		<g id="minesweeper-mines-5" fill="#7d0002">
			<rect x="-4.5" width="9" height="1" />
			<rect x="-4.5" y="1" width="9" height="1" />
			<rect x="-4.5" y="2" width="3" height="1.5" />
			<rect x="-4.5" y="3.5" width="8" height="2" />
			<rect x="1.5" y="5.5" width="3" height="1.5" />
			<rect x="-4.5" y="7" width="9" height="1" />
			<rect x="-4.5" y="8" width="8" height="1" />
		</g>

		<g id="minesweeper-mines-6" fill="#037f7f">
			<rect x="-3.5" width="7" height="1" />
			<rect x="-4.5" y="1" width="8" height="1" />
			<rect x="-4.5" y="2" width="3" height="1.5" />
			<rect x="-4.5" y="3.5" width="8" height="2" />
			<rect x="1.5" y="5.5" width="3" height="1.5" />
			<rect x="-4.5" y="5.5" width="3" height="1.5" />
			<rect x="-4.5" y="7" width="9" height="1" />
			<rect x="-3.5" y="8" width="7" height="1" />
		</g>

		<g id="minesweeper-mines-7" fill="#000000">
			<rect x="-4.5" width="9" height="1" />
			<rect x="-4.5" y="1" width="9" height="1" />
			<rect x="1.5" y="2" width="3" height="1.75" />
			<rect x="0.5" y="3.75" width="3" height="1.75" />
			<rect x="-0.5" y="5.5" width="3" height="1.75" />
			<rect x="-1.5" y="7.25" width="3" height="1.75" />
		</g>

		<g id="minesweeper-mines-8" fill="#7f7f7f">
			<rect x="-3.5" width="7" height="1" />
			<rect x="-4.5" y="1" width="9" height="1" />
			<rect x="1.5" y="2" width="3" height="1.5" />
			<rect x="-4.5" y="2" width="3" height="1.5" />
			<rect x="-3.5" y="3.5" width="7" height="2" />
			<rect x="1.5" y="5.5" width="3" height="1.5" />
			<rect x="-4.5" y="5.5" width="3" height="1.5" />
			<rect x="-4.5" y="7" width="9" height="1" />
			<rect x="-3.5" y="8" width="7" height="1" />
		</g>
	</defs>

	<g fill="#bbbbbb">
		<rect
			stroke="url(#minesweeper-linear-gradient-stroke-se)"
			stroke-width="0.2"
			width={puzzle.columns + 1}
			height={puzzle.rows + 3}
		/>
		<g transform="translate(0.5 0)">
			<g stroke="url(#minesweeper-linear-gradient-stroke-nw)">
				<g transform="translate(0 0.5)">
					<rect
						stroke-width="0.12"
						fill="#bbbbbb"
						x="-0.06"
						y="-0.06"
						width={puzzle.columns + 0.12}
						height="1.62"
					/>
				</g>
				<g transform="translate(0 2.5)">
					<rect
						stroke-width="0.12"
						fill="#bbbbbb"
						x="-0.06"
						y="-0.06"
						width={puzzle.columns + 0.12}
						height={puzzle.rows + 0.12}
					/>
				</g>
			</g>

			<g fill="#040404">
				<g transform="translate(0 0.5)">
					<rect fill="#040404" width="3" height="1.5" />
					<g transform="translate(0.25 0.15)">
						<Display
							value={flags.toString().padStart(3, '0')}
							width={2.5}
							height={1.2}
							gap={20}
							color="#fa0202"
						/>
					</g>
				</g>
				<g transform="translate({puzzle.columns - 3} 0.5)">
					<rect fill="#040404" width="3" height="1.5" />
					<g transform="translate(0.25 0.15)">
						<Display
							value={$timer.toString().padStart(3, '0')}
							width={2.5}
							height={1.2}
							gap={20}
							color="#fa0202"
						/>
					</g>
				</g>
			</g>

			<g transform="translate({puzzle.columns / 2} 0.5)">
				<g transform="translate(0 0.75)">
					<g style:cursor="pointer" on:click={() => handleReset()}>
						<rect
							fill="#bbbbbb"
							stroke="url(#minesweeper-linear-gradient-stroke-se)"
							stroke-width="0.12"
							x="-0.6875"
							y="-0.6875"
							width={1.375}
							height={1.375}
						/>

						{#if gamewon}
							<g>
								<circle r="0.42" fill="#f7e700" stroke="#040404" stroke-width="0.05" />
								<g fill="#040404">
									<circle r="0.06" cx="-0.13" cy="-0.11" />
									<circle r="0.06" cx="0.13" cy="-0.11" />
									<g stroke="#040404" stroke-width="0.05">
										<path
											d="M -0.42 0 l 0.19 -0.15 v 0.05 a 0.1 0.1 0 0 0 0.2 0 v -0.05 h 0.06 v 0.05 a 0.1 0.1 0 0 0 0.2 0 v -0.05 l 0.19 0.15 -0.19 -0.15 h -0.46z"
											stroke-linejoin="round"
										/>
									</g>
								</g>
								<g fill="none" stroke="#040404" stroke-width="0.05">
									<path d="M -0.19 0.1 a 0.21 0.21 0 0 0 0.38 0" />
								</g>
							</g>
						{:else if gameover}
							<g>
								<circle r="0.42" fill="#f7e700" stroke="#040404" stroke-width="0.05" />
								<g fill="none" stroke="#040404" stroke-width="0.05">
									<g transform="translate(-0.13 -0.11)">
										<path transform="rotate(45)" d="M -0.11 0 h 0.22 m -0.11 -0.11 v 0.22" />
									</g>
									<g transform="translate(0.13 -0.11)">
										<path transform="rotate(45)" d="M -0.11 0 h 0.22 m -0.11 -0.11 v 0.22" />
									</g>
									<path d="M -0.19 0.2 a 0.24 0.24 0 0 1 0.38 0" />
								</g>
							</g>
						{:else}
							<g>
								<circle r="0.42" fill="#f7e700" stroke="#040404" stroke-width="0.05" />
								<g fill="#040404">
									<circle r="0.06" cx="-0.13" cy="-0.11" />
									<circle r="0.06" cx="0.13" cy="-0.11" />
								</g>
								<g fill="none" stroke="#040404" stroke-width="0.05">
									<path d="M -0.19 0.1 a 0.21 0.21 0 0 0 0.38 0" />
								</g>
							</g>
						{/if}

						<g
							style:cursor="pointer"
							on:click={() => {
								handleReset();
							}}
							opacity="0"
							class="focusable"
							aria-label="Reset grid to start a new game from scratch."
							tabindex="0"
							on:keydown={(e) => {
								const { key, target } = e;
								if (key === 'Enter') {
									e.preventDefault();
									handleReset();
									target.blur();
								}
							}}
						>
							<rect
								fill="transparent"
								stroke="url(#minesweeper-linear-gradient-stroke-nw)"
								stroke-width="0.12"
								x="-0.6875"
								y="-0.6875"
								width={1.375}
								height={1.375}
							/>
						</g>
					</g>
				</g>
			</g>
		</g>
	</g>

	<g on:contextmenu|preventDefault transform="translate(1 3)">
		{#each puzzle.grid as row}
			{#each row as { r, c, hasMine, mines, revealed, flagged, triggered }}
				<g transform="translate({c} {r})">
					<rect
						fill="#c3c3c3"
						stroke="url(#minesweeper-linear-gradient-stroke-se)"
						stroke-width="0.1"
						x="-0.45"
						y="-0.45"
						width="0.9"
						height="0.9"
					/>
					<g
						style:cursor={gameover || gamewon ? 'initial' : 'pointer'}
						on:touchstart={() => {
							handleReveal({ r, c });
						}}
						on:mousedown={({ button }) => {
							if (button === 0) {
								handleReveal({ r, c });
							} else if (button === 2) {
								handleLock({ r, c });
							}
						}}
						opacity="0"
						class="focusable"
						aria-label="Cell in row {r + 1} and column {c +
							1}. Reveal by pressing enter, flag by pressing 'f'"
						tabindex={revealed || gameover || gamewon ? '-1' : '0'}
						on:keydown={(e) => {
							const { key, target } = e;
							if (key === 'Enter') {
								if (flagged) return;

								e.preventDefault();
								handleReveal({ r, c });
								target.blur();
							} else if (key === 'f' || key === 'F') {
								e.preventDefault();
								handleLock({ r, c });
							}
						}}
					>
						<rect
							fill="transparent"
							stroke="url(#minesweeper-linear-gradient-stroke-nw)"
							stroke-width="0.1"
							x="-0.45"
							y="-0.45"
							width="0.9"
							height="0.9"
						/>
					</g>

					{#if revealed}
						<rect
							fill="#bcbcbc"
							stroke="#767676"
							stroke-width="0.05"
							x="-0.475"
							y="-0.475"
							width="0.95"
							height="0.95"
						/>
						{#if hasMine}
							{#if triggered}
								<rect fill="#fa0202" x="-0.475" y="-0.475" width="0.95" height="0.95" />
							{/if}
							<svg viewBox="-6 -1.5 12 12" x="-0.4" y="-0.4" width="0.8" height="0.8">
								<use href="#minesweeper-mine" />
							</svg>
						{:else if mines !== 0}
							<svg viewBox="-6 -1.5 12 12" x="-0.35" y="-0.35" width="0.7" height="0.7">
								<use href="#minesweeper-mines-{mines}" />
							</svg>
						{/if}
					{:else if flagged}
						<g pointer-events="none">
							<svg viewBox="-6 -1.5 12 12" x="-0.35" y="-0.35" width="0.7" height="0.7">
								<use href="#minesweeper-flag" />
							</svg>
						</g>
					{/if}
				</g>
			{/each}
		{/each}
	</g>
</svg>

<style>
	svg {
		display: block;
	}

	.focusable:focus {
		outline: none;
		opacity: 1;
	}

	.focusable:focus:not(:focus-visible) {
		opacity: 0;
	}
</style>
