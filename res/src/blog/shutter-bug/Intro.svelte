<script>
	import svg from './svg.js';
</script>

<div>
	<figure>
		{@html svg['snapshot']}
	</figure>

	<p>
		In HTML, <code>getBoundingClientRect()</code> gives the position and dimension of elements relative
		to the viewport.
	</p>

	<p>
		In SVG, <code>getBBox()</code> achieves a similar feat for elements relative to the parent
		<code>&lt;svg&gt;</code>.
	</p>
</div>

<style>
	figure {
		max-inline-size: 20rem;
	}

	div > p + p {
		margin-block-start: 1rem;
	}

	div > figure {
		float: left;
		inline-size: 100%;
		margin-right: 1rem;
	}

	@media screen and (max-width: 40rem) {
		div > figure {
			margin-right: initial;
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
