<script>
	let value = 0;
	$: length = Math.floor(value * 4);
</script>

<label>
	<span>Drag the handle to show the leaves.</span>
	<input type="range" min="0" max="1" step="0.01" bind:value />
</label>

<svg style="display: block;" viewBox="0 0 82 89">
	<rect fill="#f5f7fa" width="82" height="89" />
	<svg style="color: #3e4c59;" viewBox="-11 -52 22 69" x="30" y="10" width="22" height="69">
		<g
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<path
				pathLength="1"
				stroke-dasharray="1"
				stroke-dashoffset={1 - value}
				d="M 0 0 v -6 v -12 v -12 v -12"
			/>
			<g transform="translate(0 -6)">
				{#each { length } as _, i}
					<g transform="translate(0 {12 * i * -1})">
						<path
							d="M 0 0 c 0 -7.5 2.5 -9 9 -9 c 0 6 -1 9 -9 9 c 0 -7.5 -2.5 -9 -9 -9 c 0 6 1 9 9 9"
						/>
					</g>
				{/each}
			</g>
			<g transform="translate(-10 0)">
				<rect width="20" height="6" rx="2" />
				<path d="M 2 6 c 0.5 8 3 10 5 10 l 6 0 c 2 0 4.5 -2 5 -10" />
			</g>
		</g>
	</svg>
</svg>

<style>
	label {
		display: block;
	}

	label input {
		margin-block-start: 0.5rem;
		display: block;
		inline-size: 100%;
	}

	svg {
		display: block;
	}
</style>
