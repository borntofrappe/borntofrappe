<script context="module">
  export const prerender = true;

  export async function load({ page }) {
    const posts = Object.fromEntries(await Promise.all(Object.entries(import.meta.glob('/src/blog/*.svx')).map(async ([path, post]) => {
      const filename = path.split('/').pop()
      const slug = filename.slice(0, -4);

      return [slug, post]
    })))

    const post = posts[page.params.slug];
    if(post) {
      const { metadata, default: Module } = await post(); 

      return {
        props: {
          ...metadata,
          Module,
          slug: page.params.slug
        }
      }

    }
    return {
      status: 404,
      error: 'Post not found'
    }
  }
</script>

<script>
	import Meta from '$lib/Meta.svelte';

  export let Module;
  export let slug;
  export let description = '';

  const meta = {
		title: `borntofrappe / blog / ${slug}`,
		description: description,
		url: `/blog/${slug}`,
		image: 'blog-post'
	}
</script>

<Meta {...meta} />
<Module />