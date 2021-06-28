<script>
  import { page } from '$app/stores';
  import icons from '$lib/icons';

  const root = {
    href: '/',
    text: 'borntofrappe',
    icon: icons.rocket,
  };
</script>

<svelte:head>
  <title
    >{`${root.text}${$page.path === '/' ? '' : $page.path}`
      .split('/')
      .join(' / ')}</title
  >
</svelte:head>

<nav aria-label="Breadcrumb navigation" id="breadcrumb">
  <a href={root.href}>{root.text} {@html root.icon}</a>
  {#if $page.path !== '/'}
    {#each $page.path
      .split('/')
      .slice(1)
      .reduce((acc, curr, i) => [...acc, { href: i === 0 ? `/${curr}` : `${acc[i - 1].href}/${curr}`, text: `/ ${curr}`, icon: icons[curr] || '' }], []) as { href, text, icon }}
      <a {href}>{text} {@html icon}</a>
    {/each}
  {/if}
</nav>

<style>
  nav > * + * {
    margin-left: 0.3em;
  }

  nav a {
    text-decoration: none;
    font-family: 'Maven Pro', sans-serif;
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

  @media (prefers-color-scheme: dark) {
    :global(html:not([data-preference]) nav#breadcrumb a) {
      font-weight: 600;
    }
  }

  :global(html[data-preference='dark'] nav#breadcrumb a) {
    font-weight: 600;
  }
</style>
