<script context="module">
  export async function load({ session }) {
    const { posts } = session;

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script>
  export let posts = [];
</script>

<main>
  <h1>Blog</h1>
  <p>
    This is a blog without substance. There are a few articles, but they work as
    a proof of concept to see how SvelteKit creates pages dynamically.
  </p>

  <p>The blog folder contains {posts.length} item(s)</p>

  <ul>
    {#each posts as { slug }}
      <li>{slug}</li>
    {/each}
  </ul>
</main>
