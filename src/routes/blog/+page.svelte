<script>
  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<h1>blog posts</h1>

{#each data.blog as article}
  <article>
    <h2>{article.title}</h2>
    <p>{article.description}</p>
    <p><a href={article.slug}>Read more</a></p>
  </article>
{/each}
