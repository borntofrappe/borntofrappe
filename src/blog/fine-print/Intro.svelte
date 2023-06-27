<script>
	import svg from './svg.js';
</script>

<section>
	<div>
		{@html svg['fine-print']}
	</div>

	<p>
		In SVG, text is treated like a regular shape. A rectangle, a circle, or again a contorted path.
		This means there are a few quirks compared to the robust reality of HTML.
	</p>

	<p>
		You might add text in an editing software, or try your luck writing the syntax by hand. And in
		this last instance, you can lean on JavaScript to iron out the details. And on Svelte to shine.
	</p>
</section>

<style>
	div {
		max-inline-size: 18rem;
	}

	section > p + p {
		margin-block-start: 1rem;
	}

	section > div {
		float: right;
		inline-size: 100%;
		margin: 0 0 0.5rem 1rem;
	}

	@media screen and (max-width: 32rem) {
		section > div {
			margin: initial;
		}

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
