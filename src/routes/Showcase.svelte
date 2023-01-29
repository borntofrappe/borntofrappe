<script>
	import RainbowSixteen from './rainbow-sixteen/Puzzle.svelte';
	import ColorTiles from './color-tiles/Puzzle.svelte';
	import Minesweeper from './minesweeper/Puzzle.svelte';
</script>

<section style:color="hsl(203, 23%, 18%)" style:background="hsl(218, 100%, 98%)">
	<article>
		<h2>Rainbow sixteen</h2>

		<div>
			<RainbowSixteen />
		</div>

		<p>
			In a classic 15 puzzle you are tasked to slide tiles in a specific arrangement. It is often a
			frustrating experience as you try to position that very last number.
		</p>

		<p>
			If you share in the affliction you might enjoy this slightly more merciful, colorful version.
		</p>

		<p>
			You find red, green, blue, interspersed with bright shades of yellow, aquamarine and purple.
			Can you arrange them in the correct order?
		</p>

		<p>
			If you have patience and keen eyes you are in luck, there are bound to be <a
				href="/rainbow-sixteen"
				>more colors
			</a> to discover.
		</p>
	</article>
</section>

<section
	style:color="hsl(200, 47%, 96%)"
	style:background="hsl(203, 23%, 18%)"
	style:--max-width="32rem"
>
	<article>
		<h2>Color tiles</h2>

		<div>
			<ColorTiles />
		</div>

		<p>
			Tic Tac Toe logic asks to place a marker to create a link in a column, row, or again diagonal. <br
			/>The game might always end in a draw, but is always a source of entertainment.
		</p>

		<p>So grab a friend and play a round or two; you'll both get a chance to start first.</p>

		<p>
			If you need more of a challenge, then, you can try to match four in <a href="/color-tiles"
				>a larger board</a
			>.
		</p>
	</article>
</section>

<section style:color="hsl(0, 0%, 2%)" style:background="hsl(0, 0%, 75%)">
	<article>
		<h2>Minesweeper</h2>

		<div>
			<Minesweeper />
		</div>

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
			This particular pastime is designed to resemble the title from a very popular operating
			system, as closely as possible.<br /> It may not emit a sound, but the result almost speaks for
			itself.
		</p>

		<p>
			If you answered positively to both questions, by happenstance, there's always <a
				href="/minesweeper">room for growth</a
			>.
		</p>
	</article>
</section>

<style>
	section {
		min-height: 100vh;
		display: flex;
	}

	section > article {
		margin: auto;
	}

	article {
		width: 100%;
		max-width: 68rem;
		padding: var(--step-space-700) var(--step-space-300);
	}

	article {
		display: flex;
		flex-direction: column;
	}

	article > div,
	article > p:last-of-type {
		order: 1;
	}

	article > * + * {
		margin-block-start: 1em;
	}

	div {
		width: 100%;
		max-width: var(--max-width, 24rem);
		margin-inline: auto;
	}

	ol {
		font-size: var(--step-size-200);
		list-style-position: inside;
		padding: 0;
	}

	ol > li + li {
		margin-block-start: 0.75em;
	}

	@media (min-width: 40rem) {
		article {
			display: initial;
		}

		article > div {
			margin-inline: initial;
			margin-block-start: initial;
		}

		article h2 {
			display: inline-block;
		}

		article > div {
			float: left;
			shape-outside: var(--shape-outside, initial);
			margin: var(--step-space-400);
		}

		section:nth-of-type(even) article > div {
			float: right;
		}
	}
</style>
