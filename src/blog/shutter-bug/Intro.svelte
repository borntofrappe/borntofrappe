<script>
	import svg from './svg.js';
</script>

<section>
	<div>
		{@html svg['snapshot']}
	</div>

	<p>
		In HTML, <code>getBoundingClientRect()</code> gives the position and dimension of elements relative
		to the viewport.
	</p>

	<p>
		In SVG, <code>getBBox()</code> achieves a similar feat for elements relative to the parent
		<code>&lt;svg&gt;</code>.
	</p>
</section>

<style>
	div {
		max-inline-size: 20rem;
	}

	section > p + p {
		margin-block-start: 1rem;
	}

	section > div {
		float: left;
		inline-size: 100%;
		margin: 0 1rem 0.5rem;
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
