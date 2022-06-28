<script>
	import RainbowSixteen from './rainbow-sixteen/_Puzzle.svelte';
	import ColorTiles from './color-tiles/_Puzzle.svelte';
	import Minesweeper from './minesweeper/_Puzzle.svelte';
	import Tangram from './tangram/_Tangram.svelte';
</script>

<div style:color="#243139" style:background="#f7faff">
	<article>
		<h2>Rainbow sixteen</h2>

		<RainbowSixteen />

		<p>
			In a classic 15 puzzle you are tasked to slide tiles in a specific arrangement. It is often a
			frustrating experience as you try to position that very last number.
		</p>
		<p>If you share in the affliction you might enjoy this merciful, colorful version.</p>

		<p style:position="relative">
			You find red, green, blue, interspersed with bright shades of yellow, aquamarine and purple.
			Can you arrange them in the correct order?
		</p>

		<img
			style:width="3em"
			style:height="3em"
			alt="This specific rainbow follows a color wheel from red to green to blue. In between you find bright shades yellow, aquamarine and purple."
			src="./icons/rainbow-sixteen.svg"
		/>

		<p>
			If you have patience and keen eyes you are in luck, there are bound to be <a
				href="/rainbow-sixteen"
				>more colors
			</a> to discover.
		</p>
	</article>
</div>

<div
	style:color="#f1f7fa"
	style:background="#233038"
	style:--shape-outside="polygon(50% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%)"
	style:--margin="3rem"
	style:--max-width="32rem"
>
	<article>
		<h2>Color tiles</h2>

		<ColorTiles />

		<p>
			Tic Tac Toe logic asks to place a marker to create a link in a column, row, or again diagonal. <br
			/>The game might always end in a draw, but is always a source of entertainment.
		</p>
		<p>So grab a friend and play a round or two.</p>
		<p>
			You'll both get a chance to start first, and if you need more of a challenge, you can try to
			match four in <a href="/color-tiles">a larger board</a>.
		</p>
	</article>
</div>

<div style:color="#040404" style:background="#c0c0c0">
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
			as closely as possible.<br /> It may not emit a sound, but the result almost speaks for itself.
		</p>

		<p>
			If you answered positively to both questions, by happenstance, there's always <a
				href="/minesweeper">room for growth</a
			>.
		</p>
	</article>
</div>

<style>
	div {
		color: var(--color, #243139);
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
		margin-top: var(--size-500, 1em);
	}

	p {
		line-height: 2;
	}

	ol > li + li {
		margin-top: 0.5em;
	}

	li {
		line-height: 1.5;
	}

	article > :global(svg) {
		float: right;
		display: block;
		width: 100%;
		height: auto;
		margin: var(--margin, 2rem);
		max-width: var(--max-width, 24rem);
		shape-outside: var(--shape-outside, initial);
	}

	div:nth-of-type(odd) article > :global(svg) {
		float: left;
	}

	@media screen and (max-width: 38rem) {
		article {
			display: flex;
			flex-direction: column;
		}

		article > * + * {
			margin-top: 0.75em;
		}

		article > :global(svg) {
			order: 1;
			align-self: center;
		}

		article > p:last-of-type {
			order: 1;
		}

		img {
			align-self: center;
		}
	}
</style>
