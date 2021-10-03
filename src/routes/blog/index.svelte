<script context="module">
	export async function load({ session }) {
		const { posts } = session;

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
		{#each posts as { title, slug }}
			<li><a href="/blog/{slug}">{title}</a></li>
		{/each}
	</ul>
{/if}
