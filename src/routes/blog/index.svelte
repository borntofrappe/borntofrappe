<script context="module">
	export async function load() {
		const posts = await Promise.all(
			Object.entries(import.meta.glob('/src/blog/*.svx')).map(async ([path, post]) => {
				const { metadata } = await post();
				const filename = path.split('/').pop();
				const slug = filename.toLowerCase().replace(' ', '-').slice(0, -4);

				return {
					...metadata,
					slug
				};
			})
		);

		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>borntofrappe/blog</title>
</svelte:head>

<main>
	<h1>This is the blog</h1>

	{#if posts.length > 0}
		<ul>
			{#each posts as post}
				<li><a href="/blog/{post.slug}">{post.title}</a></li>
			{/each}
		</ul>
	{/if}
</main>
