<script>
  import site from "$lib/site.js";
  import { formatDate } from "$lib/utils";

  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<svelte:head>
  <title>Blog | {site.title}</title>
  <meta name="description" content={site.description} />
</svelte:head>

<main>
  <h1 class="[ heading ]">Blog</h1>

  {#each data.blog as { slug, title, date, description }}
    <article>
      <h2><a class="[ link ]" href={slug}>{title}</a></h2>
      <time datetime={date}>{formatDate(date)}</time>
      <p>{description}</p>
    </article>
  {/each}

  <nav>
    {#if data.page > 1}
      <a class="[ link ]" href="/blog?page={data.page - 1}">Newer articles</a>
    {/if}

    {#if data.page < data.pages}
      <a class="[ link ]" href="/blog?page={data.page + 1}">Older articles</a>
    {/if}
  </nav>
</main>

<style>
  main > * + * {
    margin-block-start: var(--space-m);
  }

  main > article:first-of-type {
    margin-block-start: var(--space-l);
  }

  main > nav {
    margin-block-start: var(--space-xl);
  }

  article > * + * {
    margin-block-start: var(--space-2xs);
  }

  article > time {
    display: inline-block;
    font-size: var(--step--1);
    font-style: italic;
  }

  nav {
    display: flex;
    gap: var(--space-s);
    justify-content: space-between;

    & > :only-child {
      margin-inline-start: auto;
    }
  }
</style>
