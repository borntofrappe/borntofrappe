<script>
	import html from './html.js';
</script>

<div>
	<figure>
		{@html html['computer']}
	</figure>
	<p>
		Among the primitives available in the <code>&lt;filter&gt;</code> element,
		<code>feColorMatrix</code> looks refreshingly simple, both in purpose and function.
	</p>
	<p>
		You benefit from knowing about matrix algebra, but the syntax is clear and intuitive. And at the
		end of the day, you need only to trust your better judgment to appreciate the result.
	</p>
</div>

<style>
	div > * + * {
		margin-block-start: 0.5rem;
	}

	figure {
		display: block;
		max-inline-size: 26rem;
		margin-left: auto;
	}

	@media (min-width: 36rem) {
		div > figure {
			float: right;
			margin-left: 0.5rem;
			inline-size: 100%;
			shape-outside: polygon(
				35% 0%,
				35% 45%,
				25% 55%,
				15% 55%,
				0% 70%,
				0% 100%,
				100% 100%,
				100% 0%
			);
		}
	}
</style>
