<script>
	export let data;
</script>

<h1>Blog</h1>

<div>
	{#each data.blog as { title, date, description, slug }}
		<article>
			<h2><a href={slug}>{title}</a></h2>
			<time datetime={date}>{date}</time>
			<p>{description}</p>
		</article>
	{/each}
</div>
