<script context="module">
	export const prerender = true;
	export const hydrate = false;
</script>

<script>
	import Banner from '$lib/components/Banner.svelte';
</script>

<svelte:head>
	<title>borntofrappe</title>
	<meta name="description" content="Personal website of one Gabriele Corti." />
</svelte:head>

<div>
	<Banner title="borntofrappe" />
</div>

<style>
	div {
		min-height: 100vh;
		display: grid;
		place-items: center;
	}
</style>
