<script>
	import svg from './svg.js';
</script>

<section>
	<div>
		{@html svg['eagle']}
	</div>

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
			margin-block-end: 1rem;
			align-self: center;
			inline-size: 100%;
		}
	}
</style>
