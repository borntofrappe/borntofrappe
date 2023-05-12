<script>
	import svg from './svg.js';
</script>

<div>
	{@html svg['microscope']}

	<p>
		In <a href="/viewbox-origin">a previous article</a> we considered the <code>viewBox</code> attribute
		and tinkered with a couple of values. We changed the width of the SVG canvas to focus on a section
		of a line chart and modified the origin to scan the visual horizontally.
	</p>

	<p>
		It is however possible to explore the string further and consider the entire set of numbers,
		again with practical use cases. And assuredly for silly experiments.
	</p>
</div>

<style>
	div > :global(svg) {
		float: left;
		max-inline-size: 12rem;
		margin: 0 1rem 1rem 0;
	}

	@supports (float: inline-start) {
		div > :global(svg) {
			float: inline-start;
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
