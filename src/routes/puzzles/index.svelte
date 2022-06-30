<script>
	import TextTile from './_TextTile.svelte';

	import Sixteen from './_Sixteen/Puzzle.svelte';
	import AdditionSquare from './_AdditionSquare/Puzzle.svelte';
	import MoreOrLess from './_MoreOrLess/Puzzle.svelte';
	import ZerosAndOnes from './_ZerosAndOnes/Puzzle.svelte';
	import FindThePattern from './_FindThePattern/Puzzle.svelte';
</script>

<svelte:head>
	<title>borntofrappe | Puzzles</title>
	<meta
		name="description"
		content="Enjoy a few interactive, infinitely replayable, inconsistently merciful puzzles."
	/>
	<link rel="icon" href="/icons/puzzles.svg" type="image/svg+xml" />
</svelte:head>

<div>
	<header>
		<TextTile element="h1" text="Puzzles" />
	</header>

	<article>
		<Sixteen />
	</article>

	<article>
		<AdditionSquare />
	</article>

	<article>
		<MoreOrLess />
	</article>

	<article>
		<ZerosAndOnes />
	</article>

	<article>
		<FindThePattern />
	</article>
</div>

<style>
	div {
		color: #07093a;
		background: #eb4328;
		font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
	}

	header {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}

	header > :global(h1) {
		max-width: 100%;
		font-family: inherit;
	}

	article {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem 0;
	}
</style>
