<script>
	import svg from './svg.js';
</script>

<div>
	<figure>
		{@html svg['eagle']}
	</figure>

	<p>
		This website shares an affection for scalable vector graphics, but also nonograms, intriguing
		puzzles where you fill a grid to conjure up interesting figures.
	</p>

	<p>
		With SVG you are able to visualize solved puzzles quite effectively <a href="/picross-2d"
			>in two dimensions</a
		>, and exploring a different projection you can even try and break the mold, so to explore
		<a href="/picross-projection">a third axis</a>.
	</p>

	<p>
		The effect is quite convincing — there are certainly <a href="/picross">plenty of levels</a> you
		can visualize in their complete, crisp state —, but with the benefit of a JavaScript library like
		Zdog you can go further, and really explore deeper shapes. Better yet, you are able to visualize
		more complex pieces. Not only squares, not only cubes.
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
			margin-block-end: 1rem;
			align-self: center;
			inline-size: 100%;
		}
	}
</style>
