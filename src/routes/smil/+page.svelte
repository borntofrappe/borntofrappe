<script>
	import Defs from '$lib/components/smil/helpers/Defs.svelte';
	import PokeTheLadybug from '$lib/components/smil/PokeTheLadybug.svelte';
</script>

<svelte:head>
	<title>borntofrappe | SMIL</title>
	<meta name="description" content="A showcase of animated scalable vector graphics." />
	<link rel="icon" href="/icons/smil.svg" type="image/svg+xml" />
</svelte:head>

<Defs />

<div>
	<article>
		<PokeTheLadybug />
	</article>
</div>

<style>
	div {
		color: #192d10;
		background: #f7f7f7;
	}

	article {
		min-height: 100vh;
		display: grid;
		place-items: center;
	}

	article > :global(svg) {
		display: block;
		max-width: 34rem;
	}
</style>
