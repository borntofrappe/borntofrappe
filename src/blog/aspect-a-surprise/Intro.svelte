<script>
	import svg from './svg.js';
</script>

<section>
	<div>
		{@html svg['painting']}
	</div>

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
</section>

<style>
	div {
		max-inline-size: 20rem;
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
