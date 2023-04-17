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

<main class="[ centered ]">
	<div style="inline-size: 100vmin; max-inline-size: 32rem;">
		<Ray />
	</div>
</main>

<style>
	main :global(.blink) {
		animation: blink 7s infinite cubic-bezier(0.65, 0, 0.35, 1);
	}

	@keyframes blink {
		8%,
		12% {
			transform: scaleY(0);
		}
		6%,
		10%,
		14% {
			transform: scaleY(1);
		}
	}
</style>
