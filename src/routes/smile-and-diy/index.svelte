<script context="module">
	export const hydrate = false;
</script>

<script>
	import Defs from './_helpers/Defs.svelte';

	import PokeTheLadybug from './_PokeTheLadybug.svelte';
</script>

<Defs />

<div>
	<article>
		<PokeTheLadybug />
	</article>
</div>

<style>
	div {
		--outline-color: hsl(153, 24%, 77%);
		--background-color: hsl(356, 89%, 71%);
	}

	article {
		height: 100vh;
		display: grid;
		place-items: center;
		background: var(--background-color, inherit);
	}

	article > :global(svg) {
		display: block;
		width: 90vmin;
		width: calc(100vmin - 3rem);
		height: auto;
		max-width: 32rem;
		border-radius: 0.25rem;
		box-shadow: 0 -1rem 1rem hsla(0, 0%, 0%, 0.1), 0 0 0 0.05rem currentColor,
			0 0 0 0.95rem var(--outline-color), 0 0 0 1rem currentColor;
	}
</style>
