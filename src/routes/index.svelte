<script>
	import Stars from './_Stars.svelte';
</script>

<svelte:head>
	<title>borntofrappe | Launching soon</title>
	<meta name="description" content="Personal website of one Gabriele Corti. Launching soon." />
</svelte:head>

<header class="visually-hidden">
	<h1>borntofrappe</h1>
	<p>Launching soon</p>
</header>

<Stars />

<style>
	:global(*) {
		padding: 0;
		margin: 0;
	}

	:global(html),
	:global(body) {
		height: 100%;
	}

	:global(body) {
		display: grid;
		place-items: center;
		background: hsl(210, 58%, 9%);
		color: hsl(185, 62%, 45%);
	}

	:global(::selection) {
		background: hsla(185, 62%, 45%, 0.2);
	}

	p {
		font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue,
			helvetica, Ubuntu, roboto, noto, arial, sans-serif;
		font-weight: 700;
		text-align: center;
		font-size: 2.75rem;
	}

	.visually-hidden:not(:focus):not(:active) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		width: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}
</style>
