<script context="module">
  export async function load({ page, session }) {
    const { slug } = page.params;
    const { posts } = session;

    const match = posts.find((post) => post.slug === slug);

    if (match) {
      const posts = import.meta.glob('/src/blog/*.{md,svx}');
      const post = await posts[match.path]();

      const { default: Md, metadata } = post;
      const { title, keywords } = metadata;

      return {
        props: {
          title,
          keywords,
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
  import Header from '$lib/components/blog/post/Header.svelte';

  export let title;
  export let keywords;
  export let Md;
</script>

<Header {title} {keywords} />

<main class="max-width-container">
  <svelte:component this={Md} />
</main>

<style>
  main {
    margin-top: 3.5rem;
    margin-bottom: 5rem;
  }
</style>
