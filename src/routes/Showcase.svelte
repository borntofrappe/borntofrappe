<script>
	import RainbowSixteen from './rainbow-sixteen/Puzzle.svelte';
	import ColorTiles from './color-tiles/Puzzle.svelte';
	import Minesweeper from './minesweeper/Puzzle.svelte';
</script>

<section
	class="box centered"
	style:--color="hsl(203, 23%, 18%)"
	style:--background="hsl(218, 100%, 98%)"
	style:--selection-color="hsl(203, 23%, 18%)"
	style:--selection-background="hsl(200, 71%, 80%)"
>
	<article class="box floating" style:--padding="var(--step-space-700) var(--step-space-300)">
		<h2 style:display="inline-block">Rainbow sixteen</h2>

		<div class="bottom float" style:--float="left" style:--space="var(--space-500)">
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

		<p class="bottom">
			If you have patience and keen eyes you are in luck, there are bound to be
			<a href="/rainbow-sixteen">more colors</a> to discover.
		</p>
	</article>
</section>

<section
	class="box centered"
	style:--color="hsl(200, 47%, 96%)"
	style:--background="hsl(203, 23%, 18%)"
	style:--selection-color="hsl(200, 47%, 96%)"
	style:--selection-background="hsl(209, 34%, 30%)"
>
	<article class="box floating" style:--padding="var(--step-space-700) var(--step-space-300)">
		<h2>Color tiles</h2>

		<div
			class="bottom float"
			style:--measure="30rem"
			style:--shape-outside="polygon(0% 50%, 50% 0%, 100% 50%, 100% 100%, 0% 100%)"
			style:--space="var(--space-500)"
		>
			<ColorTiles />
		</div>

		<p>
			Tic Tac Toe logic asks to place a marker to create a link in a column, row, or again diagonal.
		</p>

		<p>The game might always end in a draw, but is always a source of entertainment.</p>

		<p>So grab a friend and play a round or two; you'll both get a chance to start first.</p>

		<p class="bottom">
			If you need more of a challenge, then, you can try to match four in
			<a href="/color-tiles">a larger board</a>.
		</p>
	</article>
</section>

<section
	class="box centered"
	style:--color="hsl(0, 0%, 2%)"
	style:--background="hsl(0, 0%, 75%)"
	style:--selection-color="hsl(0, 0%, 2%)"
	style:--selection-background="hsl(0, 0%, 81%)"
>
	<article class="box floating" style:--padding="var(--step-space-700) var(--step-space-300)">
		<h2 style:display="inline-block">Minesweeper</h2>

		<div class="bottom float" style:--float="left" style:--space="var(--step-space-500)">
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

		<p class="bottom">
			If you answered positively to both questions, by happenstance, there's always
			<a href="/minesweeper">room for growth</a>.
		</p>
	</article>
</section>

<style>
	ol {
		padding: 0;
		list-style-position: inside;
	}
</style>
