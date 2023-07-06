<script>
	let animate = false;
</script>

<label>
	<input type="checkbox" bind:checked={animate} />
	<span>Lap around</span>
</label>

<svg class:animate style="display: block;" viewBox="-65 -65 130 130">
	<defs>
		<symbol id="roundabout-2d-car-symbol" viewBox="-7 -6 14 12">
			<g fill="hsl(0 0% 25%)">
				<rect x="-5.5" y="4.5" width="4" height="1.5" rx="0.3" />
				<rect x="-5.5" y="-6" width="4" height="1.5" rx="0.3" />
				<rect x="1.25" y="4.5" width="4" height="1.5" rx="0.3" />
				<rect x="1.25" y="-6" width="4" height="1.5" rx="0.3" />
			</g>
			<rect fill="currentColor" x="-7" y="-5" width="14" height="10" rx="1" />
			<rect fill="hsl(0 0% 100% / 0.3)" x="-3.75" y="-2.5" width="6.5" height="5" />
			<g stroke-width="0.5" stroke-linejoin="round" stroke-linecap="round">
				<g fill="hsl(0 0% 25%)" stroke="hsl(0 0% 25%)">
					<path d="M -3.75 -2.5 L -4.75 -3.75 L 4.25 -3.75 L 2.75 -2.5Z" />
					<path d="M -3.75 2.5 L -4.75 3.75 L 4.25 3.75 L 2.75 2.5Z" />
				</g>
				<path
					fill="hsl(0 0% 25%)"
					stroke="hsl(0 0% 25%)"
					d="M -3.75 -2.5 L -4.75 -3.75 L -4.75 3.75 L -3.75 2.5 Z"
				/>
				<path
					fill="hsl(0 0% 35%)"
					stroke="hsl(0 0% 35%)"
					d="M 2.75 -2.5 L 4.25 -3.75 L 4.25 3.75 L 2.75 2.5 Z"
				/>
			</g>
		</symbol>
		<use
			id="roundabout-2d-car"
			href="#roundabout-2d-car-symbol"
			x="-7"
			y="-6"
			width="14"
			height="12"
		/>
	</defs>
	<rect fill="hsl(0 0% 90%)" x="-65" y="-65" width="130" height="130" rx="12.5" />

	<circle fill="hsl(0 0% 97%)" r="50" />
	<circle
		fill="none"
		stroke="hsl(0 0% 65%)"
		stroke-width="1.25"
		stroke-linecap="round"
		stroke-dasharray="2 8"
		r="35"
	/>

	<circle fill="hsl(0 0% 65%)" r="20" />

	<g fill="hsl(0 0% 45%)">
		<circle transform="translate(-4 -4)" r="5" />
		<circle transform="translate(6 0)" r="4" />
		<circle transform="translate(-1 6)" r="3" />
	</g>

	<g class="rotate">
		<use transform="translate(0 -35)" style="color: hsl(200 85% 55%)" href="#roundabout-2d-car" />
		<use
			transform="rotate(180) translate(0 -35)"
			style="color: hsl(40 90% 55%)"
			href="#roundabout-2d-car"
		/>
	</g>
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

	.rotate {
		transform: rotate(0deg);
		animation: rotate 7s linear infinite paused;
	}

	.animate .rotate {
		animation-play-state: running;
	}

	@keyframes rotate {
		to {
			transform: rotate(1turn);
		}
	}
</style>
