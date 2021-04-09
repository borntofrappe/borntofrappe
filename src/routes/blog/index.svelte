<script>
	import { session } from '$app/stores';
	const posts = $session;
</script>

<svelte:head>
	<title>borntofrappe/blog</title>
</svelte:head>

<main>
	<h1>This is the blog</h1>
	<p>These are some links which hopefully don't raise an error 500</p>

	{#if posts.length > 0}
		<ul>
			{#each posts as post}
				<li><a href="/blog/{post.slug}">{post.title}</a></li>
			{/each}
		</ul>
	{/if}
</main>
