<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import Header from '../../components/Header.svelte';

  export let posts;
</script>

<style>
  main {
  /* paired with the min-height to push the footer at the bottom */
  flex-grow: 1;
  max-width: 40em;
  width: 90vw;
  margin: 2rem auto 3rem;
}
/* vertical space between the articles */
main > * + * {
  margin-top: 2rem;
}
/* vertical space between the articles' content */
article > * + * {
  margin-top: 0.75rem;
}

article h2 {
  font-size: 1.8rem;
  font-family: "Catamaran", sans-serif;
  font-weight: 800;
}
article h2 a {
  color: inherit;
  text-decoration: none;
  transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: color var(--transition-duration) var(--ease-in-out-sine);
  display: flex;
  align-items: center;
}
article h2 a:hover,
article h2 a:focus {
  color: var(--primary-5);
}
article h2 a svg {
  width: 1.5em;
  height: auto;
}
article time {
  background: var(--primary-0);
  border-left: 0.2rem solid var(--primary-5);
  padding: 0.2rem 0.5rem;
  display: inline-block;
}
article p {
  line-height: 2;
}

/* for the first article update the colors with the accent scale */
article:first-of-type h2 {
  font-size: 2rem;
}
article:first-of-type a:hover,
article:first-of-type a:focus {
  color: var(--accent-5);
}
article:first-of-type time {
  border-color: var(--accent-5);
  background-color: var(--accent-0);
}

/* resize the headings and time element on smaller screens */
@media (max-width: 30em) {
  article h2 {
    font-size: 1.5rem;
  }
  article time {
    font-size: 0.9rem;
  }
  article:first-of-type h2 {
    font-size: 1.8rem;
  }
  article > * + * {
    margin-top: 0.75rem;
  }
}

/* 15em column guarantees at most 2 columns */
@supports (display: grid) {
  main {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    grid-gap: 2rem 1.75rem;
  }
  /* reset the vertical space, set with the grid-gap property */
  main > * + * {
    margin-top: initial;
  }
  /* stretch the first article across the viewport */
  article:first-of-type {
    grid-column: 1/-1;
  }
}
</style>
<svelte:head>
  <title>Blog</title>
</svelte:head>

<Header title="Writing" />

<main>
  {#each posts as post, i}
    <article>
      <h2>
        <a rel="prefetch" href="blog/{post.slug}">
          {post.title}

          {#if i === 0}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="32" height="32">
              <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" fill="currentColor">
                  <path id="sparkle" d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" />
                  <use href="#sparkle" transform="translate(-20 -20) scale(0.9)"/>
                  <use href="#sparkle" transform="translate(20 -25) scale(0.5)"/>
                  <use href="#sparkle" transform="translate(15 25) scale(0.8)"/>
                  <use href="#sparkle" transform="translate(-15 20) scale(0.4)"/>
              </g>
            </svg>
          {/if}

        </a>
      </h2>
      <time datetime="{post.dateTime}">{post.date}</time>
      <p>{post.brief}</p>
    </article>
  {/each}

</main>
