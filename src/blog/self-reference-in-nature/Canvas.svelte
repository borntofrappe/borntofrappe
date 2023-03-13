<script>
	export let animate = true;
	import Piece from './Piece.svelte';

	let svg = null;
	const handleAnimation = () => {
		const lines = svg.querySelectorAll('.line');
		lines.forEach((line) => {
			line.style.strokeDasharray = 1;
			const generation = parseInt(line.getAttribute('data-generation'), 10);
			line.animate(
				{
					strokeDashoffset: [1, 0]
				},
				{
					duration: 1000,
					delay: generation * 1000,
					fill: 'both',
					easing: 'linear'
				}
			);
		});
	};
</script>

{#if animate}
	<button on:click={handleAnimation}> Animate </button>
{/if}

<svg bind:this={svg} viewBox="0 0 80 50">
	<g transform="translate(40 49)">
		<g stroke="#8a6f68" stroke-width="1" stroke-linecap="square">
			<Piece />
		</g>
	</g>
</svg>

<style>
	button {
		display: block;
		margin-inline: auto;
		background: none;
		border: none;
		border-radius: 2rem;
		color: inherit;
		font-weight: 700;
		padding: 0.25rem 0.75rem;
		color: hsl(0, 0%, 92%);
		background: hsl(0, 0%, 10%);
		transition: transform 0.1s ease-in-out;
	}

	button:active {
		transform: scale(0.95);
	}

	svg {
		display: block;
	}
</style>
