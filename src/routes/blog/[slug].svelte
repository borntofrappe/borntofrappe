<script context="module">
  export async function load({ page, session }) {
    const { slug } = page.params;
    const { posts } = session;

    const match = posts.find((post) => post.slug === slug);

    if (match) {
      const posts = import.meta.glob('/src/blog/*.{md,svx}');
      const post = await posts[match.path]();

      const { default: Md, metadata } = post;
      const { title } = metadata;

      return {
        props: {
          title,
          Md,
        },
      };
    }
    return {
      status: 404,
      error: `Not found: blog/${slug}`,
    };
  }
</script>

<script>
  export let title;
  export let Md;
</script>

<main class="max-width-container">
  <h1>{title}</h1>
  <svelte:component this={Md} />
</main>
