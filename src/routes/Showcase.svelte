<script>
	import RainbowSixteen from '$lib/components/rainbow-sixteen/Puzzle.svelte';
	import ColorTiles from '$lib/components/color-tiles/Puzzle.svelte';
	import Minesweeper from '$lib/components/minesweeper/Puzzle.svelte';
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
		<p>If you share in the affliction you might enjoy this merciful, colorful version.</p>

		<p>
			You find red, green, blue, interspersed with bright shades of yellow, aquamarine and purple.
			Can you arrange them in the correct order?
		</p>

		<svg
			viewBox="0 0 1 1"
			width="3em"
			height="3em"
			aria-labelledby="rainbow-title"
			aria-describedby="rainbow-desc"
			role="img"
		>
			<title id="rainbow-title">Rainbow Gradient</title>
			<desc id="rainbow-desc"
				>This specific rainbow follows a color wheel from red to green to blue. In between you find
				bright shades yellow, aquamarine and purple.</desc
			>
			<defs
				><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"
					><stop stop-color="hsl(0, 75.97597597597598%, 66.7%)" offset="0" /><stop
						stop-color="hsl(51.42857142857143, 75.97597597597598%, 66.7%)"
						offset="0.142"
					/><stop
						stop-color="hsl(51.42857142857143, 75.97597597597598%, 66.7%)"
						offset="0.284"
					/><stop
						stop-color="hsl(102.85714285714286, 75.97597597597598%, 66.7%)"
						offset="0.426"
					/><stop
						stop-color="hsl(154.28571428571428, 75.97597597597598%, 66.7%)"
						offset="0.570"
					/><stop
						stop-color="hsl(205.71428571428572, 75.97597597597598%, 66.7%)"
						offset="0.714"
					/><stop
						stop-color="hsl(257.14285714285717, 75.97597597597598%, 66.7%)"
						offset="0.856"
					/></linearGradient
				></defs
			>
			<path d="M 0 0.5 C 0 0 0 0 0.5 0 S 1 0 1 0.5 1 1 0.5 1 0 1 0 0.5" fill="url(#g)" />
		</svg>

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
	style:--shape-outside="polygon(50% 0%, 100% 50%, 100% 100%, 0% 100%, 0% 50%)"
	style:--margin="3rem"
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
		<p>So grab a friend and play a round or two.</p>
		<p>
			You'll both get a chance to start first, and if you need more of a challenge, you can try to
			match four in <a href="/color-tiles">a larger board</a>.
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
			This particular pastime is designed after the title built-in a very popular operating system,
			as closely as possible.<br /> It may not emit a sound, but the result almost speaks for itself.
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

	article > p:first-of-type {
		margin-top: var(--size-500, 1em);
	}

	h2 {
		text-transform: capitalize;
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

	article > div {
		float: right;
		display: block;
		width: 100%;
		height: auto;
		margin: var(--margin, 2rem);
		max-width: var(--max-width, 24rem);
		shape-outside: var(--shape-outside, initial);
	}

	section:nth-of-type(even) article > div {
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

		article > div {
			order: 1;
			align-self: center;
		}

		article > svg {
			align-self: center;
		}

		article > p:last-of-type {
			order: 1;
		}
	}
</style>
