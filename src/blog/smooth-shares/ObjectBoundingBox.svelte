<script>
	let fill = false;
</script>

<div>
	<label>
		<input bind:checked={fill} type="checkbox" />
		<span>Fill the <em>bounding box</em></span>
	</label>

	<svg class:fill style="display: block;" viewBox="-10 -10 120 90">
		<defs>
			<linearGradient id="object-bounding-box-gradient">
				<stop stop-color="hsl(58 100% 61%)" offset="0" />
				<stop stop-color="hsl(44 99% 59%)" offset="1" />
			</linearGradient>
		</defs>
		<rect x="-10" y="-10" width="120" height="90" fill="hsl(0 0% 90%)" />
		<g class="fade" opacity="0" fill="url(#object-bounding-box-gradient)">
			<rect x="5" y="5" width="34" height="34" />
			<rect
				transform="translate(-1 -1)"
				stroke="url(#object-bounding-box-gradient)"
				stroke-width="2"
				x="45"
				y="35"
				width="50"
				height="30"
			/>
		</g>
		<g fill="url(#object-bounding-box-gradient)">
			<circle cx="22" cy="22" r="17" />
			<path
				transform="translate(-1 -1)"
				stroke="url(#object-bounding-box-gradient)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M 45 65 65 35 85 65 Z M 65 65 80 45 95 65 Z"
			/>
		</g>
		<g
			fill="none"
			stroke="currentColor"
			stroke-width="0.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-dasharray="1 2"
		>
			<rect x="5" y="5" width="34" height="34" />
			<rect transform="translate(-1.75 -1.75)" x="45" y="35" width="51.5" height="31.5" />
		</g>
	</svg>
</div>

<style>
	div {
		max-inline-size: 30rem;
		margin-inline: auto;
	}

	div > * + * {
		margin-block-start: 0.5rem;
	}

	label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	input {
		inline-size: 1em;
		block-size: 1em;
		accent-color: hsl(320 90% 44%);
	}

	div > svg .fade {
		opacity: 0;
		transition: opacity 0.25s 0.1s cubic-bezier(0.37, 0, 0.63, 1);
	}

	div > svg.fill .fade {
		opacity: 1;
	}
</style>
