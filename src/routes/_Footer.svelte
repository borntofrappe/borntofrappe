<script>
	import icons from '$lib/icons';
</script>

<footer>
	Built with
	<span>
		<span class="visually-hidden">Svelte</span>
		{@html icons.svelte}
	</span>
	and
	<span>
		<span class="visually-hidden">much love.</span>
		{@html icons.heart}
	</span>
</footer>

<style>
	footer {
		padding: 1rem 0.5rem;
		background: inherit;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0 0.25rem;
		align-items: center;
	}

	footer > :global(svg) {
		width: 1.5em;
		height: auto;
	}
</style>
