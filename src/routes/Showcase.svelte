<script>
	import Heading from '$lib/components/Heading.svelte';

	import { observeState } from '$lib/utils/actions.js';

	import RainbowSixteen from './rainbow-sixteen/Puzzle.svelte';
	import ColorTiles from './color-tiles/Puzzle.svelte';
	import Minesweeper from './minesweeper/Puzzle.svelte';
</script>

<section
	class="box centered"
	style="
		--color: hsl(209, 61%, 16%); 
		--background: hsl(210, 36%, 96%); 
		--selection-color: hsl(211, 39%, 23%); 
		--selection-background: hsl(210, 31%, 80%);
		--highlight: hsl(212, 33%, 89%);
	"
>
	<article
		use:observeState={{ dataState: ['hidden', 'visible'] }}
		class="box floating"
		style="--padding: var(--step-space-700) var(--step-space-300);"
	>
		<Heading
			level="h2"
			style="display: inline-block;"
			stroke="var(--color)"
			fill="var(--highlight)"
			inlineSize="70"
		>
			Rainbow sixteen
		</Heading>

		<div class="float end" style="--float: left; --space: var(--space-500);">
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

		<p class="end">
			If you have patience and keen eyes you are in luck, there are bound to be
			<a href="/rainbow-sixteen">more colors</a> to discover.
		</p>
	</article>
</section>

<section
	class="box centered"
	style="
		--color: hsl(210, 16%, 82%); 
		--background: hsl(210, 24%, 16%); 
		--selection-color: hsl(210, 16%, 82%); 
		--selection-background: hsl(209, 18%, 30%);
		--highlight: hsl(209, 20%, 25%);
	"
>
	<article
		use:observeState={{ dataState: ['hidden', 'visible'] }}
		class="box floating"
		style="--padding: var(--step-space-700) var(--step-space-300);"
	>
		<Heading
			level="h2"
			style="display: inline-block;"
			stroke="var(--color)"
			fill="var(--highlight)"
		>
			Color tiles
		</Heading>

		<div
			class="float end"
			style="
				--measure: 30rem; 
				--shape-outside: polygon(0% 50%, 50% 0%, 100% 50%, 100% 100%, 0% 100%); 
				--space: var(--space-500);
			"
		>
			<ColorTiles />
		</div>

		<p>
			Tic Tac Toe logic asks to place a marker to create a link in a column, row, or again diagonal.
		</p>

		<p>The game might always end in a draw, but is always a source of entertainment.</p>

		<p>So grab a friend and play a round or two; you'll both get a chance to start first.</p>

		<p class="end">
			If you need more of a challenge, then, you can try to match four in
			<a href="/color-tiles">a larger board</a>.
		</p>
	</article>
</section>

<section
	class="box centered"
	style="
		--color: hsl(0, 0%, 13%); 
		--background: hsl(0, 0%, 75%); 
		--selection-color: hsl(0, 0%, 13%); 
		--selection-background: hsl(0, 0%, 63%);
		--highlight: hsl(0, 0%, 85%);
	"
>
	<article
		use:observeState={{ dataState: ['hidden', 'visible'] }}
		class="box floating"
		style="--padding: var(--step-space-700) var(--step-space-300);"
	>
		<Heading
			level="h2"
			style="display: inline-block;"
			stroke="var(--color)"
			fill="var(--highlight)"
		>
			Minesweeper
		</Heading>

		<div class="float end" style="--float: left; --space: var(--step-space-500);">
			<Minesweeper />
		</div>

		<p>
			There are mines you definitely want to avoid. There will certainly be hints to help you
			dispose of the perilous devices.
		</p>

		<p>There are only two questions left:</p>

		<ol class="flow" style="--space: 0.75em;">
			<li>how well do you deal with high-pressure situations?</li>
			<li>how much nostalgia can you tolerate?</li>
		</ol>

		<p>
			This particular pastime is designed to resemble the title from a very popular operating
			system, as closely as possible.
		</p>

		<p>It may not emit a sound, but the result almost speaks for itself.</p>

		<p class="end">
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
