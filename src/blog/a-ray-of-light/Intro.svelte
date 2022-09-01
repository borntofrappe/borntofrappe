<script>
	import icons from '$lib/utils/icons.js';

	import Ray from './Ray.svelte';
</script>

<div>
	<Ray x={-5} y={-5} />

	<p>
		I am pleased to introduce <em>Ray</em>, the first and most delightful mascot for this very
		website. It is charming in its simplicity, it hides a whimsical interaction and, what's more, it
		works to showcase the fitting union of SVG {@html icons.svg} and Svelte {@html icons.svelte}.
	</p>
</div>

<style>
	div > :global(svg) {
		shape-outside: circle();
		float: right;
		max-width: 20rem;
		height: auto;
	}

	@media screen and (max-width: 28rem) {
		div {
			display: flex;
			flex-direction: column;
			gap: 0.5rem 0;
		}

		div > :global(svg) {
			float: initial;
			align-self: center;
			order: 1;
		}
	}
</style>
