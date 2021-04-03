<script context="module">
  export const prerender = true;

  export async function load({page, session}) {
    const { slug } = page.params;

    const post = session.posts.find(d => d.slug === slug);

    if(post) {
      const posts = Object.fromEntries(await Promise.all(
      Object.entries(import.meta.glob('/src/blog/*.svx')).map(
        async ([path, page]) => {
          const filename = path.split('/').pop();
          const slug = filename.toLowerCase().replace(/ /g, '-').slice(0, -4);
          return [slug, page];
        }
      )
    ));

      const { metadata, default: Module } = await posts[slug]();
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
