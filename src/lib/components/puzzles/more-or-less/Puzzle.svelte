<script>
	import Tile from '../Tile.svelte';
	import { getPuzzle } from './utils.js';

	export let size = 4;
	export let reveal = size;
	export let relate = size * 2;

	const puzzle = getPuzzle({ size, reveal, relate });

	let focus = null;

	const handleFocus = ({ row, column }) => {
		focus = { row, column };
	};

	const handleBlur = () => {
		focus = null;
	};

	const handleKeydown = (e) => {
		if (!focus) return;

		const { key } = e;
		if (key === 'Backspace' || key === 'Delete') {
			e.preventDefault();
			handleClear();
		} else if (key === 'Escape') {
			e.preventDefault();
			handleBlur();
		} else {
			const number = parseInt(key, 10);
			if (number && puzzle.numbers.includes(number)) {
				e.preventDefault();
				handleNumber({ number });
			}
		}
	};

	const handleClear = () => {
		const { row, column } = focus;
		puzzle.grid[row][column].value = 0;
	};

	const handleNumber = ({ number }) => {
		const { row, column } = focus;
		puzzle.grid[row][column].value = number;
	};
</script>

<div>
	<svg
		viewBox="-0.5 -0.5 {size} {size}"
		on:click={() => {
			handleBlur();
		}}
		tabindex="0"
		aria-labelledby="title-more-or-less desc-more-or-less"
		style:outline="none"
		class="focusable"
		on:focus={() => {
			handleBlur();
		}}
		on:keydown={handleKeydown}
	>
		<title id="title-addition-square">Addition Square</title>
		<desc id="desc-addition-square"
			>Complete the grid to create a latin square and respect the comparison between cells. Focus on
			a cell and press a number key to include the corresponding value. Press delete to remove the
			existing number.</desc
		>

		<g class="focus" transform="translate(-0.5 -0.5)" opacity="0">
			<rect
				width={size}
				height={size}
				rx="0.2"
				fill="var(--color-focus, hsl(345, 13%, 94%))"
				opacity="0.4"
			/>
		</g>

		<g>
			{#if focus}
				<g transform="translate({focus.column} {focus.row})">
					<circle r="0.4" fill="var(--color-focus, hsl(345, 13%, 94%))" opacity="0.4" />
				</g>
			{/if}

			{#each puzzle.grid as section, row}
				{#each section as { value, isLocked, relations }, column}
					<g transform="translate({column} {row})">
						{#if isLocked}
							<g transform="translate(-0.3 -0.3)">
								<Tile
									tile="var(--color-tile, hsl(8, 92%, 90%))"
									shadow="var(--color-shadow, hsl(6, 98%, 80%))"
									text="var(--color-focus, hsl(345, 13%, 94%))"
									outline="var(--color-text, hsl(19, 56%, 12%))"
									width={0.6}
									height={0.6}
									char={value.toString()}
								/>
							</g>
						{:else}
							<g
								style:cursor="pointer"
								on:click|stopPropagation={() => {
									handleFocus({ column, row });
								}}
								role="button"
								tabindex="0"
								aria-label="Add a number on row {row + 1} and column {column + 1}.{value !== 0
									? ` Or, delete number ${value}.`
									: ''}"
								style:outline="none"
								on:focus={() => {
									handleFocus({ column, row });
								}}
							>
								<g transform="translate(-0.3 -0.3)">
									<Tile
										tile="var(--color-focus, hsl(345, 13%, 94%))"
										shadow="var(--color-shadow, hsl(6, 98%, 80%))"
										text="var(--color-focus, hsl(345, 13%, 94%))"
										outline="var(--color-text, hsl(19, 56%, 12%))"
										width={0.6}
										height={0.6}
										char={value === 0 ? '' : value.toString()}
									/>
								</g>
							</g>
						{/if}

						{#each relations as { direction, sign }}
							<g transform="rotate({direction * 90})">
								<g transform="translate(0 -0.5)">
									<g transform="scale(1 {sign * 1})">
										<path
											d="M -0.07 0.035 l 0.07 -0.07 0.07 0.07"
											fill="none"
											stroke="var(--color-focus, hsl(345, 13%, 94%))"
											stroke-width="0.07"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</g>
								</g>
							</g>
						{/each}
					</g>
				{/each}
			{/each}
		</g>
	</svg>

	<section>
		{#each puzzle.numbers as number}
			<button
				style:cursor="pointer"
				on:click={() => {
					if (!focus) return;

					handleNumber({ number });
				}}
			>
				<span class="visually-hidden">Add the number {number} on the focused cell.</span>
				<Tile
					tile="var(--color-tile, hsl(8, 92%, 90%))"
					shadow="var(--color-shadow, hsl(6, 98%, 80%))"
					text="var(--color-focus, hsl(345, 13%, 94%))"
					outline="var(--color-text, hsl(19, 56%, 12%))"
					char={number.toString()}
				/>
			</button>
		{/each}
		<button
			style:cursor="pointer"
			on:click={() => {
				handleClear();
			}}
		>
			<span class="visually-hidden">Remove the value from the focused cell.</span>
			<Tile
				tile="var(--color-focus, hsl(345, 13%, 94%))"
				shadow="var(--color-shadow, hsl(6, 98%, 80%))"
				text="var(--color-focus, hsl(345, 13%, 94%))"
				outline="var(--color-text, hsl(19, 56%, 12%))"
				char=""
			/>
		</button>
	</section>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	div > * + * {
		margin-top: 0.5em;
	}

	div > svg {
		display: block;
	}

	div > .focusable:focus > .focus {
		opacity: 1;
	}

	div > .focusable:focus:not(:focus-visible) > .focus {
		opacity: 0;
	}

	section {
		max-width: 100%;
		display: flex;
		gap: 0 1rem;
		overflow-x: auto;
		padding: 0.5rem 1rem;
	}

	section button {
		flex-shrink: 0;
	}

	section::-webkit-scrollbar {
		height: 0.25rem;
	}

	section::-webkit-scrollbar-track {
		background: var(--color-shadow, hsl(6, 98%, 80%));
		border-radius: 0.25rem;
	}

	section::-webkit-scrollbar-thumb {
		background: var(--color-tile, hsl(8, 92%, 90%));
		border-radius: 0.25rem;
	}

	button {
		width: 3rem;
		height: 3rem;
		display: block;
		border: none;
		background: none;
		padding: 0;
		margin: 0;
	}

	button > :global(svg) {
		width: 100%;
		height: auto;
		display: block;
	}

	button {
		position: relative;
		z-index: 0;
	}

	button::before {
		position: absolute;
		content: '';
		top: 50%;
		left: 50%;
		width: 100%;
		height: 100%;
		background: var(--color-focus, hsl(345, 13%, 94%));
		transform: translate(-50%, -50%) scale(1.25);
		border-radius: 50%;
		opacity: 0;
		z-index: -1;
	}

	button:focus {
		outline: none;
	}

	button:focus::before {
		opacity: 0.4;
	}

	button:focus:not(:focus-visible)::before {
		opacity: 0;
	}
</style>
