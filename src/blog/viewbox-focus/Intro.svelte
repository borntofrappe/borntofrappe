<script>
	import svg from './svg.js';
</script>

<section>
	<div>
		{@html svg['microscope']}
	</div>

	<p>
		In <a href="/viewbox-origin">a previous article</a> we considered the <code>viewBox</code> attribute
		and tinkered with a couple of values. We changed the width of the SVG canvas to focus on a section
		of a line chart and modified the origin to scan the chart horizontally.
	</p>

	<p>
		It is however possible to explore the string further and consider the entire set of numbers,
		again with practical use cases. And assuredly for silly experiments.
	</p>
</section>

<style>
	div {
		max-inline-size: 12rem;
	}

	section > p + p {
		margin-block-start: 1rem;
	}

	section > div {
		float: left;
		inline-size: 100%;
		margin: 0 1rem 0.5rem 0;
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
