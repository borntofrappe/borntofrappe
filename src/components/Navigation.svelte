<script>
  export let segment;
  import Icons from "./Icons.svelte";
</script>

<style>
  nav {
    max-width: 40em;
    width: 90vw;
    margin: 0 auto;
    padding: 1rem 0;
  }
  a {
    font-family: "Catamaran", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: inherit;
    text-decoration: none;
    transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--link-transition-duration) var(--ease-in-out-sine);
    outline-color: var(--accent-5);
    display: inline-flex;
    align-items: center;
  }
  a + a {
    margin-left: 0.2rem;
  }
  a:hover,
  a:focus {
    color: var(--accent-5);
  }
  a :global(svg) {
    margin-left: 0.5rem;
  }
</style>

<nav aria-label="Breadcrumb navigation">
  <a href="/">
    borntofrappe
  </a>
  {#if segment}
  <a href="/{segment}">
    <span>/ {segment}</span>
    <Icons icon="{segment}" size="1.5em" />
  </a>
  {/if}
</nav>
