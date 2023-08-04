<script>
	import svg from './svg.js';
</script>

<section>
	<div>
		{@html svg['rainbow']}
	</div>

	<p>
		SVG has a few elements to draw shapes. <code>&lt;rect&gt;</code> to draw rectangles,
		<code>&lt;circle&gt;</code>
		and <code>&lt;ellipse&gt;</code> to realize the matching figures. The list is short, but is more
		than compensated by the <code>&lt;path&gt;</code> element, capable of drawing any and all shapes.
	</p>

	<p>
		It is in the <code>d</code> attribute and with specific commands that you compose a shape with a
		a sequence of characters.
	</p>

	<p>
		While elusive, most instructions are easy to grasp, but there is one directive which is far from
		intuitive. And as it often happens with vector graphics, the issue is best solved with practice,
		testing the values first-hand.
	</p>
</section>

<style>
	div {
		max-inline-size: 16rem;
	}

	section > p + p {
		margin-block-start: 1rem;
	}

	section > div {
		float: left;
		inline-size: 100%;
		margin: 0 1rem 0.5rem 0;
		shape-outside: polygon(0% 0%, 100% 0%, 100% 60%, 85% 60%, 70% 70%, 60% 85%, 60% 100%, 0% 100%);
	}

	@media screen and (max-width: 30rem) {
		section > div {
			margin: initial;
		}

		section {
			display: flex;
			flex-direction: column;
		}

		section > div {
			margin-block-end: 1rem;
			align-self: center;
			inline-size: 100%;
		}
	}
</style>
