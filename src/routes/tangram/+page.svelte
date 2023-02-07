<script>
	import site from '$lib/utils/site.js';
	const { title } = site;
</script>

<svelte:head>
	<title>Tangram | {title}</title>
	<meta name="description" content="" />
	<link rel="icon" href="/icons/tangram.svg" type="image/svg+xml" />
</svelte:head>

<main
	class="box centered"
	style:--color="hsl(216, 33%, 97%)"
	style:--background="hsl(210, 24%, 16%)"
>
	<svg viewBox="0 0 4 4">
		<path d="M 0 0 l 2 2 l 2 -2" fill="#71c49a" />
		<path d="M 0 0 l 2 2 l -2 2" fill="#f6e48e" />
		<path d="M 3 1 l 1 -1 l 0 2" fill="#ef847a" />
		<path d="M 1 3 l 1 -1 l 1 1" fill="#ef847a" />
		<path d="M 2 4 l 2 -2 l 0 2" fill="#abdcc7" />
		<path d="M 2 2 l 1 -1 l 1 1 l -1 1" fill="#71c49a" />
		<path d="M 0 4 l 1 -1 l 2 0 l -1 1" fill="#f6e48e" />
	</svg>
</main>

<style>
	svg {
		display: block;
		max-width: 42rem;
	}
</style>
