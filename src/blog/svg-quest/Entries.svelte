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
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
	}

	div > figure {
		inline-size: 100%;
		max-inline-size: 20rem;
	}
</style>
