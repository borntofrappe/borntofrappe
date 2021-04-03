<script context="module">
	export async function load({session}) {
		const {posts} = session;
		
		return {
			props: {
				posts
			}
		}
	}
</script>

<script>
	export let posts;
</script>

<main>
	<h1>Blog!</h1>
	<p>As a proof of concept, here's a series of articles with some filler text.</p>

	<ul>
    {#each posts as post}
    <li><a href="/blog/{post.slug}">{post.title}</a></li>
    {/each}
  </ul>
</main>
