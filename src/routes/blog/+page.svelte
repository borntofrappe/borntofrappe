<script>
	import site from '$lib/utils/site.js';
	import { format } from '$lib/utils/helper.js';
	export let data;

	const { title } = site;

	$: blog = data.blog;
	$: pages = +data.pages;
	$: page = +data.page;
</script>

<svelte:head>
	<title>Blog | {title}</title>
	<meta name="description" content="Writing in prose and often with sense." />
	<link rel="icon" href="/icons/blog.svg" type="image/svg+xml" />
</svelte:head>

<div class="[ center stack box ]" style="--padding: var(--step-space-300) 0;">
	<h1>Blog</h1>

	<div class="[ grid ] [ blog ]" data-layout="50-50" style="--gutter: var(--step-space-300)">
		{#each blog as { title, date, description, slug }}
			<article class="[ flow ] [ blog__post ]" style="--space: var(--space-100)">
				<h2><a href={slug}>{title}</a></h2>
				<time class="[ font-size:small ]" style="display: inline-block;" datetime={date}
					>{format(new Date(date))}</time
				>
				<p>{description}</p>
			</article>
		{/each}
	</div>

	<div class="[ cluster ]">
		{#if page > 0}
			<a style="margin-inline-end: auto;" href="/blog?page={page - 1}">Newer posts</a>
		{/if}
		{#if page < pages}
			<a style="margin-inline-start: auto;" href="/blog?page={page + 1}">Older posts</a>
		{/if}
	</div>
</div>

<style>
	.blog__post {
		padding: var(--step-space-300) var(--step-space-200);
		border-radius: 1rem;
		background: var(--grey-000);
		box-shadow: 0 0.1rem 1rem var(--grey-100);
	}

	.blog__post time {
		display: inline-block;
		background: var(--color-100);
	}
</style>
