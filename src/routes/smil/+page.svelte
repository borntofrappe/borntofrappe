<script>
	import Defs from '$lib/components/smil/Defs.svelte';
</script>

<svelte:head>
	<title>borntofrappe | SMIL</title>
	<meta name="description" content="A showcase of animated scalable vector graphics." />
	<link rel="icon" href="/icons/smil.svg" type="image/svg+xml" />
</svelte:head>

<Defs />

<div>
	<svg viewBox="-30 -30 60 60">
		<g
			font-family="sans-serif"
			font-weight="700"
			font-size="10"
			text-anchor="middle"
			dominant-baseline="central"
			fill="url(#linear-gradient-text)"
			stroke="#192d10"
			stroke-width="2"
			letter-spacing="1"
			paint-order="stroke"
			stroke-linejoin="round"
			stroke-linecap="round"
		>
			<text>SMIL</text>
		</g>
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
