<script>
	export let viewBox = '0 0 1 1';
	export let ds = ['M 0 0 0 1 1 1 1 0'];
</script>

<svg {viewBox}>
	<g fill="currentColor">
		{#each ds as d}
			<path {d} />
		{/each}
	</g>
</svg>

<style>
	svg {
		display: block;
	}

	path:hover {
		filter: brightness(2);
	}
</style>
