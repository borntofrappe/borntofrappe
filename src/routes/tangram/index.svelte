<script>
	const pieces = [
		{ d: 'M 0 0 l 2 2 2 -2z', fill: '#71c49a' },
		{ d: 'M 0 0 l 2 2 2 -2z', fill: '#f6e48e' },
		{ d: 'M 0 0 l 1 1 -1 1z', fill: '#ef847a' },
		{ d: 'M 0 0 l 1 1 -1 1z', fill: '#ef847a' },
		{ d: 'M 0 0 l 2 2 h-2z', fill: '#abdcc7' },
		{ d: 'M 0 0 l 1 1 1 -1 -1 -1z', fill: '#71c49a' },
		{ d: 'M 0 0 l 1 -1 h 2 l -1 1z', fill: '#f6e48e' }
	];
</script>

<svelte:head>
	<title>borntofrappe | Tangram</title>
	<meta
		name="description"
		content="There are 7 pieces in this puzzle. How many shapes is up to your patience, and a bit of chance."
	/>
	<link rel="icon" href="/icons/tangram.svg" type="image/svg+xml" />
</svelte:head>

<div>
	<svg viewBox="0 0 {4} {4}">
		{#each pieces as { d, fill }}
			<path {d} {fill} />
		{/each}
	</svg>
</div>

<style>
	div {
		color: hsl(216, 33%, 97%);
		background: hsl(210, 24%, 16%);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	svg {
		display: block;
		max-width: 30rem;
		width: 100%;
		height: auto;
	}

	svg path:nth-of-type(1) {
		transform: translate(0px, 0px) rotate(0deg);
	}

	svg path:nth-of-type(2) {
		transform: translate(0px, 4px) rotate(270deg);
	}

	svg path:nth-of-type(3) {
		transform: translate(4px, 2px) rotate(180deg);
	}

	svg path:nth-of-type(4) {
		transform: translate(1px, 3px) rotate(270deg);
	}

	svg path:nth-of-type(5) {
		transform: translate(2px, 4px) rotate(-90deg);
	}

	svg path:nth-of-type(6) {
		transform: translate(2px, 2px) rotate(0deg);
	}

	svg path:nth-of-type(7) {
		transform: translate(0px, 4px) rotate(0deg);
	}
</style>
