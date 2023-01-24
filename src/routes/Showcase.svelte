<script>
	import RainbowSixteen from './rainbow-sixteen/Puzzle.svelte';
</script>

<section style:color="hsl(203, 23%, 18%)" style:background="hsl(218, 100%, 98%)">
	<article>
		<h2>Rainbow sixteen</h2>

		<div style:align-self="center">
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

		<img
			style:align-self="center"
			style:width="2em"
			style:height="2em"
			alt="The colors of the rainbow are arranged from the top left corner to the bottom right angle."
			src="/icons/rainbow-sixteen.svg"
		/>

		<p>
			If you have patience and keen eyes you are in luck, there are bound to be <a
				href="/rainbow-sixteen"
				>more colors
			</a> to discover.
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
		padding-inline: 1rem;
		max-width: 64rem;
	}

	article > * + * {
		margin-top: 0.75em;
	}

	p {
		line-height: 2;
	}

	article > div {
		float: right;
		max-width: 24rem;
		width: 100%;
		margin: 2rem;
	}

	@media screen and (max-width: 38rem) {
		article {
			display: flex;
			flex-direction: column;
		}

		article > div,
		article > p:last-of-type {
			order: 1;
		}
	}
</style>
