<script>
	import svg from './svg.js';
</script>

<div>
	<figure>
		{@html svg['fine-print']}
	</figure>

	<p>
		In SVG, text is treated like a regular shape. A rectangle, a circle, or again a contorted path.
		This means there are a few quirks compared to the robust reality of HTML.
	</p>

	<p>
		You might add text in an editing software, or try your luck writing the syntax by hand. And in
		this last instance, you can lean on JavaScript to iron out the details. And on Svelte to shine.
	</p>
</div>

<style>
	figure {
		max-inline-size: 18rem;
	}

	div > p + p {
		margin-block-start: 1rem;
	}

	div > figure {
		float: right;
		inline-size: 100%;
		margin: 0 0 0.5rem 1rem;
	}

	@media screen and (max-width: 32rem) {
		div > figure {
			margin: initial;
		}

		div {
			display: flex;
			flex-direction: column;
		}

		div > figure {
			margin-block-start: 1rem;
			order: 1;
			align-self: center;
			inline-size: 100%;
		}
	}
</style>
