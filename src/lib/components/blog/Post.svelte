<script>
  export let title;
  export let brief;
  export let date;
  export let slug;
  export let prettyDate;
</script>

<article>
  <h2><a sveltekit:prefetch href="/blog/{slug}">{title}</a></h2>
  <time datetime={date}>{prettyDate}</time>
  <p>{brief}</p>
</article>

<style>
  article h2 a {
    text-decoration: none;
  }

  article time {
    font-family: 'Maven Pro', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    font-size: var(--size-400);
    padding: 0.25rem 0.4rem;
    display: inline-block;
    color: hsl(350, 100%, 8%);
    color: var(--primary-0);
    background: hsl(330, 100%, 92%);
    background: var(--primary-10);
    border-left: 0.2rem solid hsl(340, 90%, 55%);
    border-left: 0.2rem solid var(--primary-6);
  }

  @media (prefers-color-scheme: dark) {
    :global(html:not([data-preference]) main article h2) {
      font-weight: 600;
    }
  }

  :global(html[data-preference='dark'] main article h2) {
    font-weight: 600;
  }
</style>
