<script>
	import Defs from '$lib/components/smil/Defs.svelte';
	import Text from '$lib/components/smil/Text.svelte';
</script>

<svelte:head>
	<title>borntofrappe | SMIL</title>
	<meta name="description" content="A showcase of animated scalable vector graphics." />
	<link rel="icon" href="/icons/smil.svg" type="image/svg+xml" />
</svelte:head>

<Defs />

<div>
	<svg viewBox="-20 -10 40 20">
		<Text stroke="currentColor" fill="url(#linear-gradient-text)" />
	</svg>
</div>

<style>
	div {
		color: #192d10;
		background: #f7f7f7;
		min-height: 100vh;
		display: grid;
		place-items: center;
	}

	svg {
		max-width: 30rem;
		display: block;
	}
</style>
