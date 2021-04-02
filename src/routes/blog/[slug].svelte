<script context="module">
  export async function load({page}) {
    const { slug } = page.params;

    const posts = Object.fromEntries(await Promise.all(
        Object.entries(import.meta.glob('/src/blog/*.svx')).map(
            async ([path, page]) => {
                const filename = path.split('/').pop();
                const slug = filename.toLowerCase().replace(/ /g, '-').slice(0, -4);
                return [slug, page];
            }
      )));

    if(posts[slug]) {
      const {default : Module, metadata} = await posts[slug]()
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
