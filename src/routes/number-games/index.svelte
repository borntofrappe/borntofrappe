<script>
	import Sixteen from './_Sixteen/Puzzle.svelte';
	import AdditionSquare from './_AdditionSquare/Puzzle.svelte';
	import MoreOrLess from './_MoreOrLess/Puzzle.svelte';
	import ZerosAndOnes from './_ZerosAndOnes/Puzzle.svelte';
</script>

<svelte:head>
	<title>borntofrappe | Number Games</title>
	<meta name="description" content="Play with numbers and wickedly neat puzzles." />
	<link rel="icon" href="/icons/number-games.svg" type="image/svg+xml" />
</svelte:head>

<div>
	<Sixteen />
</div>

<div>
	<AdditionSquare />
</div>

<div>
	<MoreOrLess />
</div>

<div>
	<ZerosAndOnes />
</div>

<style>
	div {
		font-size: initial;
		color: #fafafa;
		background: #1a1a1a;
		min-height: 100vh;
		display: grid;
		place-items: center;
	}
</style>
