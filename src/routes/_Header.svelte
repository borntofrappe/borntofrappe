<script>
	import Sun from './playground/_Sun.svelte';
</script>

<header>
	<Sun />
</header>

<style>
	header {
		min-height: 100vh;
		display: grid;
		place-items: center;
	}

	header > :global(svg) {
		display: block;
		max-width: 30rem;
		width: 100vmin;
		height: auto;
	}
</style>
