<script>
	import site from '$lib/utils/site.js';
	const { title } = site;

	import Ray from './Ray.svelte';
</script>

<svelte:head>
	<title>Mignon | {title}</title>
	<meta name="description" content="Cheer up with a mascot filled with whimsy and charm." />
	<link rel="icon" href="icons/mignon.svg" type="image/svg+xml" />
</svelte:head>

<div class="[ visually-hidden ]">
	<h1>Mignon</h1>
	<p>Cheer up with a mascot filled with whimsy and charm.</p>
</div>

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
