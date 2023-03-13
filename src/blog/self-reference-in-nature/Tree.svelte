<script>
	import Branch from './Branch.svelte';

	let svg = null;
	const duration = 1000;
	const handleAnimation = () => {
		const lines = svg.querySelectorAll('.line');
		const blossoms = svg.querySelectorAll('.blossom');

		lines.forEach((line) => {
			line.style.strokeDasharray = 1;
			const generation = parseInt(line.getAttribute('data-generation'), 10);
			line.animate(
				{
					strokeDashoffset: [1, 0]
				},
				{
					duration,
					delay: generation * duration,
					fill: 'both',
					easing: 'linear'
				}
			);
		});

		blossoms.forEach((blossom) => {
			const generation = parseInt(blossom.getAttribute('data-generation'), 10);
			blossom.animate(
				{
					transform: ['rotate(0turn) scale(0)', 'rotate(0.2turn) scale(1)']
				},
				{
					duration: 700 + Math.random() * 1000,
					delay: (generation + 1) * duration,
					fill: 'both',
					easing: 'cubic-bezier(0.33, 1, 0.68, 1)'
				}
			);
		});
	};
</script>

<button on:click={handleAnimation}> Animate </button>

<svg bind:this={svg} viewBox="0 0 70 55">
	<title>Spring has sprung</title>
	<defs>
		<symbol id="blossom" viewBox="-25.44444465637207 -26 49.88888931274414 48.133331298828125">
			<path
				fill="#eb919b"
				d="M 0 20 Q -21 28 -20 6 Q -34 -11 -12 -17 Q -1 -35 11 -17 Q 33 -11 19 6 Q 20 28 0 20"
			/>
			<circle fill="#fdfafb" r="8" />
		</symbol>
		<use id="tree-blossom" href="#blossom" x="-1.5" y="-1.5" width="3" height="3" stroke="none" />
	</defs>
	<g transform="translate(35 54)">
		<g fill="none" stroke="#8a6f68" stroke-linecap="square">
			<Branch />
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
