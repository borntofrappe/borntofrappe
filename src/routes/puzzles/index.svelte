<script>
	import Sixteen from './_Sixteen/Puzzle.svelte';
	import AdditionSquare from './_AdditionSquare/Puzzle.svelte';
	import MoreOrLess from './_MoreOrLess/Puzzle.svelte';
	import ZerosAndOnes from './_ZerosAndOnes/Puzzle.svelte';
	import FindThePattern from './_FindThePattern/Puzzle.svelte';
</script>

<svelte:head>
	<title>borntofrappe | Number Games</title>
	<meta name="description" content="Play with numbers in a series of wickedly neat puzzles." />
	<link rel="icon" href="/icons/puzzles.svg" type="image/svg+xml" />
</svelte:head>

<div>
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
		background-image: linear-gradient(to bottom left, #ea412c, #eb4328);
		font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
	}

	article {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
