<script>
	let animate = false;
</script>

<div>
	<label>
		<input type="checkbox" bind:checked={animate} />
		Toggle animation
	</label>

	<svg class:animate viewBox="0 0 100 100">
		<defs>
			<linearGradient id="animate-gradient" x1="0" x2="0.5" y1="0" y2="0" spreadMethod="reflect">
				<stop offset="0" stop-color="hsl(0, 85%, 72%)" />
				<stop offset="0.2" stop-color="hsl(60, 85%, 72%)" />
				<stop offset="0.4" stop-color="hsl(120, 85%, 72%)" />
				<stop offset="0.6" stop-color="hsl(180, 85%, 72%)" />
				<stop offset="0.8" stop-color="hsl(240, 85%, 72%)" />
				<stop offset="1" stop-color="hsl(300, 85%, 72%)" />
			</linearGradient>
		</defs>
		<g class="translate" transform="translate(0 0)">
			<g fill="url(#animate-gradient)">
				<rect x="-100" width="100" height="100" />
				<rect width="100" height="100" />
			</g>
		</g>
	</svg>
</div>

<style>
	div > * + * {
		margin-block-start: 0.5rem;
	}

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

	.translate {
		animation: translate 5s linear infinite;
		animation-play-state: paused;
	}

	svg.animate .translate {
		animation-play-state: running;
	}

	@keyframes translate {
		to {
			transform: translate(100px, 0);
		}
	}
</style>
