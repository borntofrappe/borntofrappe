<script context="module">
  export const prerender = true;

  export async function load({ page }) {
    const posts = Object.fromEntries(await Promise.all(Object.entries(import.meta.glob('/src/blog/*.svx')).map(async ([path, post]) => {
      const filename = path.split('/').pop()
      const slug = filename.toLowerCase().replace(' ', '-').slice(0, -4);

      return [slug, post]
    })))

    const post = posts[page.params.slug];
    if(post) {
      const { default: Module } = await post(); 

      return {
        props: {
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
  export let Module;
  export let slug;
</script>

<svelte:head>
	<title>borntofrappe/blog/{slug}</title>
</svelte:head>

<Module />