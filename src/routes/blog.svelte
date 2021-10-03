<script context="module">
	export async function load() {
		const posts = await Promise.all(
			Object.entries(import.meta.glob('/src/routes/blog/*.{md,svx}')).map(async ([path, post]) => {
				const { metadata } = await post();
				const filename = path.split('/').pop();
				const extension = filename.split('.').pop();
				const slug = filename.slice(0, (extension.length + 1) * -1);
				const href = `/blog/${slug}`;

				return {
					href,
					...metadata
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
	export let posts = [];
</script>

<h1>Blog</h1>

<p>In the blog folder you can create pages in multiple formats</p>

{#if posts.length > 0}
	<ul>
		{#each posts as { title, href }}
			<li><a {href}>{title}</a></li>
		{/each}
	</ul>
{/if}
