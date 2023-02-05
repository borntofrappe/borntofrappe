<script>
	import RainbowSixteen from './rainbow-sixteen/Puzzle.svelte';
	import ColorTiles from './color-tiles/Puzzle.svelte';
	import Minesweeper from './minesweeper/Puzzle.svelte';
</script>

<section
	class="box centered"
	style:--color="hsl(203, 23%, 18%)"
	style:--background="hsl(218, 100%, 98%)"
>
	<article class="box" style:--padding="var(--step-space-700) var(--step-space-300)">
		<h2>Rainbow sixteen</h2>

		<div class="float">
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
			If you have patience and keen eyes you are in luck, there are bound to be
			<a href="/rainbow-sixteen">more colors</a> to discover.
		</p>
	</article>
</section>

<section
	class="box centered"
	style:--color="hsl(200, 47%, 96%)"
	style:--background="hsl(203, 23%, 18%)"
>
	<article class="box" style:--padding="var(--step-space-700) var(--step-space-300)">
		<h2>Color tiles</h2>

		<div
			class="float"
			style:--measure="30rem"
			style:--shape-outside="polygon(0% 50%, 50% 0%, 100% 50%, 100% 100%, 0% 100%)"
		>
			<ColorTiles />
		</div>

		<p>
			Tic Tac Toe logic asks to place a marker to create a link in a column, row, or again diagonal.
		</p>

		<p>The game might always end in a draw, but is always a source of entertainment.</p>

		<p>So grab a friend and play a round or two; you'll both get a chance to start first.</p>

		<p>
			If you need more of a challenge, then, you can try to match four in
			<a href="/color-tiles">a larger board</a>.
		</p>
	</article>
</section>

<section class="box centered" style:--color="hsl(0, 0%, 2%)" style:--background="hsl(0, 0%, 75%)">
	<article class="box" style:--padding="var(--step-space-700) var(--step-space-300)">
		<h2>Minesweeper</h2>

		<div class="float">
			<Minesweeper />
		</div>

		<p>
			There are mines you definitely want to avoid. There will certainly be hints to help you
			dispose of the perilous devices.
		</p>

		<p>There are only two questions left:</p>

		<ol class="flow" style:--space="0.75em">
			<li>how well do you deal with high-pressure situations?</li>
			<li>how much nostalgia can you tolerate?</li>
		</ol>

		<p>
			This particular pastime is designed to resemble the title from a very popular operating
			system, as closely as possible.
		</p>

		<p>It may not emit a sound, but the result almost speaks for itself.</p>

		<p>
			If you answered positively to both questions, by happenstance, there's always
			<a href="/minesweeper">room for growth</a>.
		</p>
	</article>
</section>

<style>
	article {
		display: flex;
		flex-direction: column;
		inline-size: 100%;
		max-inline-size: 68rem;
	}

	article > * + * {
		margin-block-start: var(--space, 1em);
	}

	article > .float {
		width: 100%;
		max-inline-size: var(--measure, 24rem);
		align-self: center;
	}

	article > .float,
	article > :last-child {
		--space: var(--step-space-500);
		order: 1;
	}

	ol {
		padding: 0;
		list-style-position: inside;
	}

	@media (min-width: 42rem) {
		article {
			display: initial;
		}

		article > :first-child {
			display: inline-block;
		}

		article > :last-child {
			--space: inherit;
		}

		article > .float {
			float: left;
			shape-outside: var(--shape-outside, initial);
			margin: var(--step-space-400);
		}

		section:nth-of-type(even) article > .float {
			float: right;
		}
	}

	/* @media (min-width: 42rem) {
		article {
			display: block;
		}

		article > .float {
			--space: 0;
		}

		article > .float + * {
			--space: inherit;
		}

		article > .float {
			float: right;
			width: 100%;
			max-width: 24rem;
		}
	} */

	/* @media (min-width: 40rem) {
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
	} */
</style>
