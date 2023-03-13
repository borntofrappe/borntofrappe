<script>
	export let strokeWidth = 1.2;
	export let length = 10;
	export let generation = 0;
</script>

<g stroke-width={strokeWidth}>
	<path class="line" pathLength="1" data-generation={generation} d="M 0 0 v -{length}" />
	{#if strokeWidth > 0}
		<g transform="translate(0 -{length})">
			<g transform="rotate({Math.random() * 5})">
				<svelte:self
					strokeWidth={strokeWidth - 0.3}
					length={length - 2}
					generation={generation + 1}
				/>
			</g>
			<g transform="rotate(25)">
				<svelte:self strokeWidth={strokeWidth - 0.3} generation={generation + 1} />
			</g>

			<g transform="rotate(-25)">
				<svelte:self strokeWidth={strokeWidth - 0.3} generation={generation + 1} />
			</g>
		</g>
	{:else}
		<g transform="translate(0 -{length})">
			<use class="blossom" data-generation={generation} href="#tree-blossom" />
		</g>
	{/if}
</g>
