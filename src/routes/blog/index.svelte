<script>
	const pages = [
		'apples',
		'oranges',
		'wild oats',
	]
</script>

<main>
	<h1>It's <em>the</em> blog!</h1>
	<p>There are no articles (yet), but it's already a step in the right direction</p>
	<p>There are dynamically generated pages though</p>

	<ul>
		{#each pages as page}
		<li><a href="/blog/{page}">{page}</a></li>
		{/each}
	</ul>
</main>
