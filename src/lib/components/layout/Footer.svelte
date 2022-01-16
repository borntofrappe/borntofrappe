<script>
	import icons from '$lib/icons';

	const datetime = '2022-01-16';
	const date = new Date(
		...datetime.split('-').map((d, i) => (i === 1 ? parseInt(d, 10) - 1 : parseInt(d, 10)))
	);
</script>

<footer>
	With <span class="visually-hidden">love</span>
	{@html icons.heart} and <span class="visually-hidden">svelte</span>
	{@html icons.svelte}
</footer>

<style>
	footer {
		text-align: center;
		padding: 0.25rem 0;
	}

	footer > :global(svg) {
		display: inline-block;
	}
</style>
