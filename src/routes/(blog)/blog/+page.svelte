<script>
  import site from "$lib/site.js";
  import Header from "../Header.svelte";
  import { formatDate } from "$lib/utils";

  /** @type {{ data: import('./$types').PageData }} */
  let { data } = $props();
</script>

<svelte:head>
  <title>Blog | {site.title}</title>
  <meta name="description" content={site.description} />
</svelte:head>

<main>
  <Header title="Blog" />

  <div>
    {#each data.blog as { slug, title, date, description }}
      <article>
        <h2><a class="link-underline" href={slug}>{title}</a></h2>
        <time datetime={date}>{formatDate(date)}</time>
        <p>{description}</p>
      </article>
    {/each}
  
    <nav>
      {#if data.page > 1}
        <a class="link-underline" href="/blog?page={data.page - 1}">Newer articles</a>
      {/if}
  
      {#if data.page < data.pages}
        <a class="link-underline" href="/blog?page={data.page + 1}">Older articles</a>
      {/if}
    </nav>
  </div>
</main>

<style>
  div {
    padding: var(--space-m) var(--space-s);
    max-inline-size: var(--measure-l);
    margin-inline: auto;
  }

  div > * + * {
    margin-block-start: var(--space-m);
  }

  div > nav {
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
