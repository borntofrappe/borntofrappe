<script>
	export let strokeWidth = 1;
	export let generation = 0;
</script>

<g stroke-width={strokeWidth}>
	<path class="line" data-generation={generation} pathLength="1" d="M 0 0 v -10" />
	{#if strokeWidth > 0}
		<g transform="translate(0 -10)">
			<g transform="rotate(25)">
				<svelte:self generation={generation + 1} strokeWidth={strokeWidth - 0.3} />
			</g>

			<g transform="rotate(-25)">
				<svelte:self generation={generation + 1} strokeWidth={strokeWidth - 0.3} />
			</g>
		</g>
	{/if}
</g>
