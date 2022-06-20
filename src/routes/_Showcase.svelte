<script>
	import RainbowSixteen from './games/rainbow-sixteen/_Puzzle.svelte';
	import ColorTiles from './games/color-tiles/_Puzzle.svelte';
	import Minesweeper from './games/minesweeper/_Puzzle.svelte';
</script>

<div>
	<article>
		<h2>Rainbow sixteen</h2>
		<RainbowSixteen />
		<p>
			In a classic <a href="https://en.wikipedia.org/wiki/15_puzzle">15 Puzzle</a> you are tasked to
			slide tiles in a specific arrangement. I find the game exceedingly frustrating, to the point where
			I decided to create a colorful version which is a tad more merciful.
		</p>
		<p>Your goal is to recreate the colors of the rainbow.</p>
		<img
			alt="This specific rainbow follows a color wheel from red to green to blue. In between you find nice bright shades yellow, aquamarine and purple."
			src="./icons/games/rainbow-sixteen.svg"
		/>
		<p>
			You find red, green, blue, interspersed with bright shades of yellow, aquamarine and purple.
			Can you arrange them in the correct order?
		</p>
	</article>
</div>

<!-- <div style="--color: #f1f7fa; --background: #233038">
		<article>
			<h2>Color tiles</h2>
			<p>Line up tiles of the same color.</p>
		</article>
		<ColorTiles />
	</div>

	<div style="--color: #040404; --background: #c0c0c0">
		<article>
			<h2>Minesweeper</h2>
			<p>Avoid mines and uncover the grid.</p>
		</article>
		<Minesweeper />
	</div> -->
<style>
	div {
		--color: #243139;
		--background: #f7faff;
		color: #243139;
		color: var(--color, #243139);
		background: #f7faff;
		background: var(--background, #f7faff);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	article {
		max-width: 64rem;
		padding: 4rem 1rem;
		margin-left: auto;
		margin-right: auto;
	}

	article > * + * {
		margin-top: 0.75em;
	}

	p:first-of-type {
		margin-top: var(--size-500);
	}

	p {
		line-height: 2;
	}

	img {
		width: 3em;
		height: 3em;
	}

	article > :global(svg) {
		margin: 2rem;
		float: right;
		display: block;
		max-width: 24rem;
		width: 100%;
		height: auto;
	}

	@media screen and (max-width: 38rem) {
		article {
			display: flex;
			flex-direction: column;
		}

		article > :global(* + *) {
			margin-top: 0.75em;
		}

		article > :global(svg) {
			order: 1;
			align-self: center;
		}
	}
</style>
