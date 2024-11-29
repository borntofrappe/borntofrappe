<div class="layout">
	<figure>
		<ul role="img" class="list-image">
			<li>orange</li>
			<li>apricot</li>
			<li>lemon</li>
		</ul>
		<figcaption>list-image</figcaption>
	</figure>

	<figure>
		<ul role="img" class="mask-image">
			<li>orange</li>
			<li>apricot</li>
			<li>lemon</li>
		</ul>
		<figcaption>mask-image</figcaption>
	</figure>
</div>

<style>
	.layout {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 2rem;
	}

	figure {
		padding: 0.5rem;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	figcaption {
		text-align: center;
	}

	ul {
		font-size: 3rem;
		padding: 0;
		margin: 0;
	}

	ul > li + li {
		margin-block-start: 0.5rem;
	}

	.list-image {
		list-style-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-23.204545974731445 -24.920761108398438 45.409088134765625 45.409088134765625"><path fill="hsl(48 94% 68%)" d="M 0 15 Q -21 28 -15 4 Q -34 -11 -9 -13 Q -1 -35 8 -13 Q 33 -11 14 4 Q 20 28 0 15" /></svg>');
	}

	.mask-image {
		list-style: none;
	}

	.mask-image li::before {
		content: '';
		display: inline-block;
		inline-size: 0.5em;
		block-size: 0.5em;
		margin-inline-end: 0.5rem;
		background: currentColor;
		-webkit-mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-23.204545974731445 -24.920761108398438 45.409088134765625 45.409088134765625"><path fill="hsl(48 94% 68%)" d="M 0 15 Q -21 28 -15 4 Q -34 -11 -9 -13 Q -1 -35 8 -13 Q 33 -11 14 4 Q 20 28 0 15" /></svg>');
		mask-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-23.204545974731445 -24.920761108398438 45.409088134765625 45.409088134765625"><path fill="hsl(48 94% 68%)" d="M 0 15 Q -21 28 -15 4 Q -34 -11 -9 -13 Q -1 -35 8 -13 Q 33 -11 14 4 Q 20 28 0 15" /></svg>');
	}
</style>
