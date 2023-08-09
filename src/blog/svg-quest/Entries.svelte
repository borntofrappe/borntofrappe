<script>
	import svg from './svg.js';
</script>

<div>
	<figure>
		{@html svg['entries-050-051']}
	</figure>
	<figure>
		{@html svg['entries-100-101']}
	</figure>
</div>

<style>
	div {
		max-inline-size: 36rem;
		margin-inline: auto;
	}

	div {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}

	div > figure {
		flex-basis: 8rem;
	}

	@media (min-width: 36rem) {
		div {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			gap: 1rem;
		}

		div > figure:first-of-type {
			grid-column: 1 / span 2;
		}

		div > figure:last-of-type {
			grid-column: 4 / span 2;
		}
	}
</style>
