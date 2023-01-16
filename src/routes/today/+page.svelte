<script>
	import { format } from './utils';

	const date = new Date();
</script>

<svelte:head>
	<title>borntofrappe | Today</title>
	<meta
		name="description"
		content="What day is today? Here's a direct answer to an often puzzling question."
	/>
</svelte:head>

<main>
	<h1>{format(date)}</h1>
</main>

<style>
	main {
		padding: 1rem;
		display: flex;
		gap: 0.5rem 0;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		color: hsl(0, 0%, 92%);
		background: hsl(0, 0%, 17%);
		position: relative;
	}

	h1 {
		text-align: center;
		font-size: 4rem;
	}
</style>
