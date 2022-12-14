<script>
	import { format } from './utils.js';
	import Defs from './Defs.svelte';

	const date = new Date();
</script>

<Defs />

<main>
	<h1>{format(date)}</h1>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		color: hsl(0, 0%, 92%);
		background: hsl(0, 0%, 17%);
	}

	main ::selection {
		background: hsl(0, 0%, 10%);
	}

	h1 {
		text-align: center;
		font-size: 4rem;
		filter: url(#filter-chalkboard);
	}
</style>
