<script context="module">
	export async function load() {
		const posts = await Promise.all(
			Object.entries(import.meta.glob('/src/blog/*.svx')).map(
				async ([path, page]) => {
					const { metadata } = await page();
					const { title } = metadata;
					const filename = path.split('/').pop();
					const slug = filename.toLowerCase().replace(/ /g, '-').slice(0, -4);
					return { slug, title };
				}
			)
		);

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
