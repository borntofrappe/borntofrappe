<script>
	import svg from './svg.js';
</script>

<figure style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem;">
	{@html svg['linear-increments']}
	{@html svg['easing-increments']}
</figure>

<style>
	figure {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
	}

	figure :global(> svg) {
		max-inline-size: 18rem;
	}
</style>
