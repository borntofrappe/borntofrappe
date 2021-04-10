<script>
  import icons from './_icons.js';
	import { page } from '$app/stores';
</script>

<nav>
  <a href="/">borntofrappe {@html icons.rocket}</a>
  {#if $page.path !== '/'}
    {#each $page.path
      .split('/')
      .slice(1)
      .reduce((acc, curr, index) => [...acc, {
        href: acc[index - 1] ? `${acc[index - 1].href}/${curr}` : `/${curr}`,
        path: curr
      }], [])
        as {href, path}}
        <a href="{href}">/ {path} {#if icons[path]}{@html icons[path]}{/if}</a>
    {/each}
  {/if}
</nav>

<style>
  nav {
		max-width: 40rem;
		width: 90vw;
		margin: 0 auto;
		padding: 0.5rem 0;
	}

  nav > * + * {
    margin-left: 0.3rem;
  }

  nav a {
    text-decoration: none;
    font-family: 'Maven Pro', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.25rem 0;
    display: inline-flex;
    align-items: center;
  }

  nav a :global(svg) {
    margin-left: 0.3rem;
    width: 1.5em;
    height: auto;
  }    
</style>