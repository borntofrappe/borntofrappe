<script>
  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<h1>blog posts</h1>

<div class="articles">
  {#each data.blog as article}
    <article>
      <h2><a href={article.slug}>{article.title}</a></h2>
      <p>{article.description}</p>
    </article>
  {/each}
</div>

{#if data.page > 1}
  <a href="/blog?page={data.page - 1}">Newer articles</a>
{/if}

{#if data.page < data.pages}
  <a href="/blog?page={data.page + 1}">Older articles</a>
{/if}

<style>
  .articles {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25ch, 1fr));
    gap: 1rem;
  }
</style>
