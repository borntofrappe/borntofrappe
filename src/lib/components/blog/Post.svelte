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
    font-size: 1rem;
    font-size: var(--size-400);
    letter-spacing: -0.5px;
    display: inline-block;
    padding: 0.25rem 0.4rem;
    color: hsl(215, 22%, 5%);
    color: var(--primary-0);
    background: hsl(335, 100%, 86%);
    background: var(--primary-9);
    border-left: 0.2rem solid hsl(340, 90%, 55%);
    border-left: 0.2rem solid var(--primary-6);
  }
</style>
