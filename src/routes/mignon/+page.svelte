<script>
	import site from '$lib/utils/site.js';
	const { title } = site;

	import Ray from './Ray.svelte';
</script>

<svelte:head>
	<title>Mignon | {title}</title>
	<meta
		name="description"
		content="This website has a mascot. It comes from the small village of Mignon, highly reputed for its whimsy and charm. Name's Ray."
	/>
	<link rel="icon" href="icons/mignon.svg" type="image/svg+xml" />
</svelte:head>

<main
	class="box centered"
	style:--color="hsl(44, 30%, 17%)"
	style:--background="hsl(41, 100%, 97%)"
	style:--selection-color="hsl(44, 30%, 17%)"
	style:--selection-background="hsl(43, 90%, 76%)"
>
	<div style:inline-size="100vmin" style:max-inline-size="32rem">
		<Ray />
	</div>
</main>
