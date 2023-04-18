<script>
	import { format } from '$lib/utils/helper.js';
	export let data;

	$: blog = data.blog;
	$: pages = +data.pages;
	$: page = +data.page;
</script>

<div class="[ center stack ] [ blog ]">
	<h1>Blog</h1>

	<div class="[ grid ]" data-layout="50-50" style="--gutter: var(--step-space-300)">
		{#each blog as { title, date, description, slug }}
			<article class="[ flow ] [ blog__post ]" style="--space: var(--space-100)">
				<h2><a href={slug}>{title}</a></h2>
				<time style="display: inline-block;" datetime={date}>{format(new Date(date))}</time>
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
	.cluster {
		display: flex;
		flex-wrap: wrap;
		flex-direction: var(--direction, row);
		gap: var(--gap, 1rem);
		justify-content: var(--justify, flex-start);
		align-items: var(--align, stretch);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(
			var(--grid-placement, auto-fill),
			minmax(var(--grid-min-item-size, 16rem), 1fr)
		);
		gap: var(--gutter, 1rem);
		justify-content: var(--justify, flex-start);
		align-content: var(--align, stretch);
	}

	.grid[data-layout='50-50'] {
		--grid-placement: auto-fit;
		--grid-min-item-size: clamp(16rem, 40%, 26rem);
	}

	.blog {
		padding-block: var(--step-space-300);
	}

	.blog__post {
		/*  */
		padding: var(--step-space-300) var(--step-space-200);
		border-radius: 1rem;
		background: var(--grey-000);
		box-shadow: 0 0.1rem 1rem var(--grey-100);
	}

	.blog__post time {
		display: inline-block;
		background: var(--color-000);
		font-size: var(--step-size-100);
	}
</style>
