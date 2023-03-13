<script>
	export let strokeWidth = 1.2;
	export let length = 10;
	export let generation = 0;
	export let animationDuration = 1;
</script>

<g stroke-width={strokeWidth}>
	<path
		class="line"
		pathLength="1"
		style="animation-duration: {animationDuration}s; animation-delay: {generation *
			animationDuration}s"
		d="M 0 0 v -{length}"
	/>
	{#if strokeWidth > 0}
		<g transform="translate(0 -{length})">
			<g transform="rotate({Math.random() * 5})">
				<svelte:self
					strokeWidth={strokeWidth - 0.3}
					length={length - 2}
					generation={generation + 1}
					{animationDuration}
				/>
			</g>
			<g transform="rotate(25)">
				<svelte:self
					strokeWidth={strokeWidth - 0.3}
					generation={generation + 1}
					{animationDuration}
				/>
			</g>

			<g transform="rotate(-25)">
				<svelte:self
					strokeWidth={strokeWidth - 0.3}
					generation={generation + 1}
					{animationDuration}
				/>
			</g>
		</g>
	{:else}
		<g transform="translate(0 -{length})">
			<path
				class="marker"
				style="animation-duration: {animationDuration}s; animation-delay: {(generation + 1) *
					animationDuration +
					Math.random()}s"
				d="M 0 0 l 0 0"
				marker-end="url(#marker-branch)"
			/>
		</g>
	{/if}
</g>
