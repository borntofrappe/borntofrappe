<script>
  import { page } from '$app/stores';
  import icons from '$lib/icons';

  const root = {
    href: '/',
    text: 'borntofrappe',
    icon: icons.rocket,
  };
</script>

<nav aria-label="Breadcrumb navigation" id="breadcrumb">
  <ol>
    <li>
      <a href={root.href}>{root.text} {@html root.icon}</a>
    </li>
    {#if $page.path !== '/'}
      {#each $page.path
        .split('/')
        .slice(1)
        .reduce((acc, curr, i) => [...acc, { href: i === 0 ? `/${curr}` : `${acc[i - 1].href}/${curr}`, text: `/ ${curr}`, icon: icons[curr] || '' }], []) as { href, text, icon }}
        <li>
          <a {href}>{text} {@html icon}</a>
        </li>
      {/each}
    {/if}
  </ol>
</nav>

<style>
  ol {
    list-style: none;
  }

  li {
    display: inline-block;
  }

  ol > li + li {
    margin-left: 0.3em;
  }

  a {
    text-decoration: none;
    font-family: 'Maven Pro', sans-serif;
    font-weight: 700;
    padding: 0.25rem 0;
    display: inline-flex;
    align-items: center;
  }

  a :global(svg) {
    margin-left: 0.3rem;
    width: 1.5em;
    height: auto;
  }

  @media (prefers-color-scheme: dark) {
    :global(html:not([data-preference]) #breadcrumb a) {
      font-weight: 600;
    }
  }

  :global(html[data-preference='dark'] #breadcrumb a) {
    font-weight: 600;
  }
</style>
