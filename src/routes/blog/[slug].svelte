<script context="module">
  export const prerender = true;

  export async function load({page, session}) {
    const { slug } = page.params;

    const post = session.posts.find(d => d.slug === slug);

    if(post) {
      const page = async() => import(`/src/blog/${post.filename}`);
      const { metadata, default: Module } = await page();
			const {title} = metadata;

      return {
        props: {
          title,
          Module
        }
      }
    } else {
      return {
        status: 404,
        error: new Error('Post not found')
      }
    }

  }
</script>

<script>
  export let title;
  export let Module;
</script>

<main>
  <h1>{title}</h1>
  <Module />
</main>
