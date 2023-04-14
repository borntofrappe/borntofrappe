<script>
	export let data;

	$: blog = data.blog;
	$: pages = +data.pages;
	$: page = +data.page;
</script>

<h1>Blog</h1>

<div>
	{#each blog as { title, date, description, slug }}
		<article>
			<h2><a href={slug}>{title}</a></h2>
			<time datetime={date}>{date}</time>
			<p>{description}</p>
		</article>
	{/each}
</div>

<div>
	{#if page > 0}
		<a href="/blog?page={page - 1}">Newer posts</a>
	{/if}
	{#if page < pages}
		<a href="/blog?page={page + 1}">Older posts</a>
	{/if}
</div>
