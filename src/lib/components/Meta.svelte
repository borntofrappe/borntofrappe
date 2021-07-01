<script>
  import { page } from '$app/stores';

  export let description;
  export let image;

  const baseUrl = 'https://borntofrappe.netlify.app';
  $: prettyPath = $page.path === '/' ? '' : $page.path.split('/').join(' / ');
</script>

<svelte:head>
  <title>borntofrappe{prettyPath}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href="{baseUrl}{$page.path}" />

  <link rel="icon" href="/icons/favicon.ico" />
  <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
  <link rel="manifest" href="/manifest.json" />

  <meta property="og:url" content="{baseUrl}{$page.path}" />
  <meta property="og:title" content={prettyPath} />
  <meta property="og:description" content={description} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="borntofrappe" />
  <meta property="og:image" content="{baseUrl}/images/{image}.png" />
  <meta property="og:image:alt" content={description} />

  <meta property="twitter:title" content={prettyPath} />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:site" content="@borntofrappe" />
  <meta property="twitter:creator" content="@borntofrappe" />
  <meta property="twitter:image" content="{baseUrl}/images/{image}.png" />
  <meta property="twitter:image:alt" content={description} />
</svelte:head>
