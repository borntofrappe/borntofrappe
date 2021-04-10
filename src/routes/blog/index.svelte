<script>
	import { session } from '$app/stores';
	const posts = $session;
</script>

<svelte:head>
	<title>borntofrappe/blog</title>
</svelte:head>

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
