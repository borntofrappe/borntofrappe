<script>
	import Ray from '$lib/components/mignon/Ray.svelte';
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta
		name="description"
		content="Personal website for one Gabriele Corti, built by one Gabriele Corti, coding online as borntofrappe."
	/>
</svelte:head>

<header class="visually-hidden">
	<h1>Hello world</h1>
	<p>
		Welcome to my personal website. There's very little to it right now. The hope is something will
		change. Soon
	</p>
</header>

<main>
	<Ray />
</main>

<style>
	main {
		color: hsl(44, 30%, 17%);
		background: hsl(41, 100%, 97%);
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	main > :global(svg) {
		display: block;
		max-width: 30rem;
		width: 100vmin;
		height: auto;
	}
</style>
