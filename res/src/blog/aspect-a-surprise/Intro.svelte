<script>
	import svg from './svg.js';
</script>

<div>
	<figure>
		{@html svg['painting']}
	</figure>

	<p>
		When you size an <code>&lt;svg&gt;</code> element with an existing <code>viewBox</code> you must
		be wary of aspect ratio. The issue is more intuitive than
		<a href="/meet-aspect-ratio">a certain article</a> would have you believe, but there are indeed a
		few hiccups.
	</p>

	<p>
		And starting with the default behavior, you will soon discover you often get more than you
		expect.
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
