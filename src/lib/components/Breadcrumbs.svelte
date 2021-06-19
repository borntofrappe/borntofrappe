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

<nav aria-label="Breadcrumb navigation">
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
