<script>
	import Tangram from '$lib/components/tangram/Tangram.svelte';

	export let tangram = true;
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
	<button
		on:click={() => {
			tangram = !tangram;
		}}
		class:tangram
	>
		<Tangram />
	</button>
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

	button {
		--size: 100vmin;
		--max-size: 52rem;
		display: block;
		background: none;
		border: none;
		width: var(--size, 100vmin);
		height: var(--size, 100vmin);
		max-width: var(--max-size, 52rem);
		max-height: var(--max-size, 52rem);
		aspect-ratio: 1/1;
	}

	button:focus:not(:focus-visible) {
		outline: none;
	}

	button > :global(svg) {
		width: 100%;
		height: auto;
	}

	button > :global(svg path) {
		transition: transform 0.75s cubic-bezier(0.49, 0.11, 0.1, 1.32);
	}

	.tangram :global(svg path:nth-of-type(1)) {
		transform: translate(0px, 0px) rotate(0deg) !important;
	}

	.tangram :global(svg path:nth-of-type(2)) {
		transform: translate(0px, 4px) rotate(270deg) !important;
	}

	.tangram :global(svg path:nth-of-type(3)) {
		transform: translate(4px, 2px) rotate(180deg) !important;
	}

	.tangram :global(svg path:nth-of-type(4)) {
		transform: translate(1px, 3px) rotate(270deg) !important;
	}

	.tangram :global(svg path:nth-of-type(5)) {
		transform: translate(2px, 4px) rotate(-90deg) !important;
	}

	.tangram :global(svg path:nth-of-type(6)) {
		transform: translate(2px, 2px) rotate(0deg) !important;
	}

	.tangram :global(svg path:nth-of-type(7)) {
		transform: translate(0px, 4px) rotate(0deg) !important;
	}
</style>
