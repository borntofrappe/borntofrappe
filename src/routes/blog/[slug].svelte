<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Header from '../../components/Header.svelte';
  export let post;
</script>

<style>
  /*
  style for the post
  be sure to add :global() selector inside .content

  .content :global() {
    property-value
  }
  */
  /* single column layout */
  main {
    width: 90vw;
    max-width: 32em;
    line-height: 2;
    margin: 0 auto 7rem;
  }
  main :global(p + p) {
    margin-top: 1rem;
  }
  main :global(h2) {
    margin: 2.25rem 0 1.25rem;
    font-weight: 700;
    font-size: 30px;
    display: flex;
    align-items: center;
  }
  main :global(h2:before),
  main :global(h2:after) {
    content: "";
    height: 0.1rem;
    background: currentColor;
  }
  main :global(h2:before) {
    margin-right: 0.75rem;
  }
  main :global(h2:after) {
    margin-left: 0.75rem;
  }
  main :global(h2:before) {
    flex: 0 0 2rem;
    transition: flex 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: flex var(--transition-duration) var(--ease-in-out-sine);
  }
  main :global(h2:after) {
    flex: 1;
  }

  @media screen and (max-width: 600px) {
    main :global(h2:before),
    main :global(h2:before) {
      flex: 1 0 0;
    }
  }

  /* style the code outside of pre elements with a solid background */
  main :global(code) {
    font-family: "Fira Code", monospace;
    font-size: 0.9rem;
  }
  main :global(p > code) {
    background: var(--accent-5);
    color: var(--grey-0);
    border-radius: 0.2rem;
    padding: 0.1rem 0.2rem;
  }
  main :global(pre) {
    overflow-x: auto;
    padding: 1rem;
    margin: 0.2rem -0.5rem;
  }
  main :global(pre code) {
    font-size: 0.8rem;
  }
  main :global(pre::-webkit-scrollbar) {
    height: 0.4rem;
  }
  main :global(pre::-webkit-scrollbar-track) {
    background: var(--primary-8);
  }
  main :global(pre::-webkit-scrollbar-thumb) {
    background: var(--accent-5);
    border-radius: 0.2rem;
  }
  main :global(ul) {
    list-style-position: inside;
    margin: 1rem 0;
  }
  main :global(a) {
    color: inherit;
    text-decoration: none;
    border-bottom: 0.2rem solid var(--accent-5);
    transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--transition-duration) var(--ease-in-out-sine);
  }
  main :global(a:hover) {
    color: var(--accent-5);
  }
  main :global(a:focus) {
    outline-color: var(--accent-5);
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<Header title="{post.title}" tags="{post.tags}"/>

<main>
  {@html post.html}
</main>
