<script>
	import RainbowSixteen from './showcase/rainbow-sixteen/_Puzzle.svelte';
	import ColorTiles from './showcase/color-tiles/_Puzzle.svelte';
	import Minesweeper from './showcase/minesweeper/_Puzzle.svelte';
</script>

<div>
	<article>
		<h2>Rainbow sixteen</h2>

		<RainbowSixteen />

		<p>
			In a classic 15 puzzle you are tasked to slide tiles in a specific arrangement. It is often a
			frustrating experience as you try to position that very last number.
		</p>
		<p>
			If you share in the affliction you might enjoy this merciful, colorful version. <br />Your
			goal is to recreate the colors of the rainbow.
		</p>
		<img
			alt="This specific rainbow follows a color wheel from red to green to blue. In between you find bright shades yellow, aquamarine and purple."
			src="./icons/showcase/rainbow-sixteen.svg"
		/>
		<p>
			You find red, green, blue, interspersed with bright shades of yellow, aquamarine and purple.
			Can you arrange them in the correct order?
		</p>
	</article>
</div>

<div style="--color: #f1f7fa; --background: #233038">
	<article>
		<h2>Color tiles</h2>

		<ColorTiles />

		<p>
			Tic Tac Toe logic asks to place a marker to create a contiguous column, row, or again
			diagonal. <br />The game might always end in a draw, but is always a source of entertainment,
			especially if you welcome a change in perspective.
		</p>
		<p>So grab a friend and play a round or two.</p>
		<p>And do not worry, you'll both get a chance to start first.</p>
	</article>
</div>

<div style="--color: #040404; --background: #c0c0c0">
	<article>
		<h2>Minesweeper</h2>

		<Minesweeper />

		<p>
			There are mines you definitely want to avoid. There will certainly be hints to help you
			dispose of the perilous devices.
		</p>

		<p>There are only two questions left:</p>
		<ol>
			<li>how well do you deal with high-pressure situations?</li>
			<li>how much nostalgia can you tolerate?</li>
		</ol>

		<p>
			This particular pastime is designed after the title built-in a very popular operating system,
			as closely as possible.<br /> It may not emit a sound, but result almost speaks for itself.
		</p>
	</article>
</div>

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

	h2 {
		text-transform: capitalize;
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

	ol > li + li {
		margin-top: 0.5em;
	}

	li {
		line-height: 1.5;
	}

	article > :global(svg) {
		margin: 2rem;
		float: right;
		display: block;
		max-width: 24rem;
		width: 100%;
		height: auto;
	}

	div:nth-of-type(odd) article > :global(svg) {
		float: left;
	}

	div:nth-of-type(3) article > :global(svg) {
		margin: 3rem;
		max-width: 32rem;
		shape-outside: polygon(50% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%);
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
