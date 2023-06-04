<script>
	import Ray from './Ray.svelte';
</script>

<section>
	<div>
		<Ray x={-5} y={-5} />
	</div>

	<p>
		I am pleased to introduce <em>Ray</em>, the first and most delightful mascot for this very
		website. Charming in its simplicity, it hides a whimsical interaction and, what's more, it works
		to showcase the fitting union of SVG and Svelte.
	</p>
</section>

<style>
	div {
		max-inline-size: 20rem;
	}

	section > div {
		float: right;
		inline-size: 100%;
		shape-outside: circle();
	}

	@media screen and (max-width: 32rem) {
		section {
			display: flex;
			flex-direction: column;
		}

		section > div {
			margin-block-start: 1rem;
			order: 1;
			align-self: center;
			inline-size: 100%;
		}
	}
</style>
