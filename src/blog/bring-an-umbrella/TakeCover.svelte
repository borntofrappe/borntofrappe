<script>
	let animate;
</script>

<label>
	<input type="checkbox" bind:checked={animate} />
	<span>Toggle animation</span>
</label>

<svg class:animate viewBox="0 0 100 100">
	<defs>
		<mask id="mask-umbrella">
			<rect fill="white" width="100" height="100" />
			<path fill="black" d="M 50 45 a 20 20 0 0 1 20 20 v 35 h -40 v -35 a 20 20 0 0 1 20 -20" />
		</mask>
	</defs>

	<g mask="url(#mask-umbrella)">
		<rect class="rain" fill="url(#drop-5)" y="-10" width="100" height="110" />
	</g>

	<g stroke-linecap="round" stroke-linejoin="round">
		<g fill="none">
			<g stroke="#52606D" stroke-width="2">
				<path d="M 50 45 v -1" />
				<path d="M 50 65 v 20 a 3 3 0 0 1 -6 0" />
			</g>
			<path
				stroke="#fe5f5c"
				stroke-width="3"
				stroke-linecap="square"
				d="M 50 81 v 4 a 3 3 0 0 1 -6 0"
			/>
		</g>
		<g stroke="#52606D" stroke-width="1.5">
			<path
				fill="url(#polka-dot)"
				d="M 50 45 a 20 20 0 0 1 20 20 10 10 0 0 0 -10 2 20 20 0 0 0 -20 0 10 10 0 0 0 -10 -2 20 20 0 0 1 20 -20"
			/>
			<path
				fill="url(#polka-dot-light)"
				d="M 50 45 a 20 20 0 0 1 10 22 20 20 0 0 0 -20 0 20 20 0 0 1 10 -22"
			/>
		</g>
		<ellipse fill="#52606D" cx="50" cy="45" rx="2.6" ry="1.2" />
	</g>
</svg>

<style>
	svg {
		display: block;
	}

	.rain {
		animation: fall 0.5s linear infinite;
		animation-play-state: paused;
	}

	svg.animate .rain {
		animation-play-state: running;
	}

	@keyframes fall {
		to {
			transform: translateY(10px);
		}
	}
</style>
