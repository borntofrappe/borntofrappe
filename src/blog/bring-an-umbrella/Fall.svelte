<script>
	export let patternId = 'drop';

	let animate;
</script>

<label>
	<input type="checkbox" bind:checked={animate} />
	<span>Toggle animation</span>
</label>

<svg class:animate viewBox="0 0 100 100">
	<rect fill="url(#{patternId})" y="-10" width="100" height="110" />
</svg>

<style>
	label {
		display: block;
	}

	input {
		inline-size: 1em;
		block-size: 1em;
	}

	svg {
		display: block;
	}

	rect {
		animation: fall 0.5s linear infinite;
		animation-play-state: paused;
	}

	svg.animate rect {
		animation-play-state: running;
	}

	@keyframes fall {
		to {
			transform: translateY(10px);
		}
	}
</style>
