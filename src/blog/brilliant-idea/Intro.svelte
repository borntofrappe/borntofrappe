<script>
	import Tree from './Tree.svelte';
</script>

<section>
	<div>
		<p>
			It would be slightly presumptuous of me to argue that <em>"it is the thought that counts"</em>
			before gifting you an impressive graphic, but not every day happens to be Monday. On top of that,
			not every Monday happens to be the first day of the last week of the year.
		</p>
		<p>
			And I might spoil you with something deep, but I will try to be frugal and keep the theme
			alive. And fittingly, ask for your input.
		</p>
	</div>
	<figure>
		<Tree />
	</figure>
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		justify-content: center;
	}

	section > * {
		flex-grow: 1;
		flex-basis: calc((var(--threshold, 30rem) - 100%) * 999);
	}

	figure {
		inline-size: 100%;
		max-inline-size: 20rem;
	}

	div > * + * {
		margin-block-start: 0.5rem;
	}
</style>
