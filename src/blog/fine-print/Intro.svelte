<script>
	import svg from './svg.js';
</script>

<div>
	{@html svg['fine-print']}

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
	div > :global(svg) {
		float: right;
		max-inline-size: 18rem;
		margin: 0 0 1rem 1rem;
	}

	@supports (float: inline-end) {
		div > :global(svg) {
			float: inline-end;
		}
	}

	@media screen and (max-width: 24rem) {
		div {
			display: flex;
			flex-direction: column;
			gap: 0.5rem 0;
		}

		div > :global(svg) {
			float: initial;
			margin: initial;
			align-self: center;
			order: 1;
		}
	}
</style>
