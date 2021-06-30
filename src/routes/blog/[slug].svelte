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

  main :global(p > code) {
    color: hsl(350, 100%, 8%);
    color: var(--primary-0);
    background: hsl(330, 100%, 92%);
    background: var(--primary-10);
  }

  main :global(.code > span),
  main :global(.code pre) {
    border-radius: 0.4rem;
    padding: 0.8rem 1rem;
  }

  main :global(.code > span) {
    font-family: 'Maven Pro', sans-serif;
    font-weight: 500;
    color: hsl(215, 10%, 98%);
    color: var(--frappe-grey-10);
    background: hsl(215, 22%, 5%);
    background: var(--frappe-grey-0);
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100"%3E%3Cg opacity="0.5"%3E%3Cg fill="currentColor" stroke="none"%3E%3Ccircle r="12" /%3E%3Ccircle r="12" transform="translate(50 -50)" /%3E%3Ccircle r="12" transform="translate(50 50)" /%3E%3Ccircle r="12" transform="translate(-50 50)" /%3E%3Ccircle r="12" transform="translate(-50 -50)" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    background-size: 20px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--transition-duration) var(--ease-in-out-sine);
    display: flex;
    align-items: center;
  }

  main :global(.code > span svg) {
    width: 1.25em;
    height: auto;
    margin-right: 0.5rem;
  }

  main :global(.code:hover > span) {
    color: hsl(340, 90%, 55%);
    color: var(--primary-6);
  }

  main :global(.code pre) {
    margin: 0;
    color: hsl(214, 15%, 88%);
    color: var(--frappe-grey-9);
    background: hsl(229, 20%, 20%);
    background: var(--frappe-grey-1);
    line-height: 2;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  main :global(.code pre) {
    overflow-x: auto;
  }

  main :global(.code pre::-webkit-scrollbar) {
    height: 0.4rem;
  }

  main :global(.code pre::-webkit-scrollbar-track) {
    background: hsl(215, 22%, 5%);
    background: var(--frappe-grey-0);
  }

  main :global(.code pre::-webkit-scrollbar-thumb) {
    background: hsl(340, 90%, 55%);
    background: var(--primary-6);
    border-radius: 0.2rem;
  }
</style>
