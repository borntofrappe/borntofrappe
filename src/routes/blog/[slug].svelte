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

<main id="content" class="max-width-container">
  <svelte:component this={Md} />
</main>

<style>
  #content {
    z-index: 0;
    padding-top: 3rem;
    padding-bottom: 5rem;
  }

  main > :global(* + *) {
    margin-top: 0.75em;
  }

  main > :global(*:first-child) {
    margin-top: 0;
  }

  main :global(h2),
  main :global(h3) {
    margin-top: 1em;
  }
</style>
