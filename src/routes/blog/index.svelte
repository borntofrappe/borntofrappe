<script>
	import Meta from '$lib/Meta.svelte';
	import { session } from '$app/stores';

	const meta = {
		title: 'borntofrappe / blog',
		description: 'Blog of borntofrappe, chronicling the journey of an aspiring developer.',
		url: '/blog',
		image: 'blog'
	}
	const posts = $session;
</script>

<Meta {...meta} />

<main>
	<h1>Blog</h1>
	<p>There is very little to show...I know</p>
	<p>But here's some filler content to show I'm actually able to generate pages for individual blog posts.</p>
	
	{#if posts.length > 0}
		<ul>
			{#each posts as post}
				<li><a href="/blog/{post.slug}">{post.title}</a></li>
			{/each}
		</ul>
	{/if}
</main>
