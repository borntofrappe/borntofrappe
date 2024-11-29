<script>
	let animate = false;
	let path = null;

	$: {
		if (path) {
			if (animate) {
				path.querySelector('animate').beginElement();
			} else {
				path.querySelector('animate').endElement();
			}
		}
	}
</script>

<div>
	<label>
		<input type="checkbox" bind:checked={animate} />
		Toggle animation
	</label>

	<svg class:animate viewBox="-20 -5 40 40">
		<g
			fill="currentColor"
			stroke="currentColor"
			stroke-width="5"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path
				bind:this={path}
				d="M 0 0 c -4 5 -3 12 0 15 c 5 5 10 15 -4 15 c 2 -5 5 -10 0 -15 c -4 -5 -4 -10 4 -15"
			>
				<animate
					attributeName="d"
					dur="2s"
					begin="indefinite"
					repeatCount="indefinite"
					fill="freeze"
					values="
                        M 0 0 c -4 5 -3 12 0 15 c 5 5 10 15 -4 15 c 2 -5 5 -10 0 -15 c -4 -5 -4 -10 4 -15;
                        M 0 0 c 4 5 3 12 0 15 c -5 5 -10 15 4 15 c -2 -5 -5 -10 0 -15 c 4 -5 4 -10 -4 -15;
                        M 0 0 c -4 5 -3 12 0 15 c 5 5 10 15 -4 15 c 2 -5 5 -10 0 -15 c -4 -5 -4 -10 4 -15;
                        "
				/>
			</path>
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
</style>
