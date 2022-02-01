<script>
	import { page } from '$app/stores';

	export let title = 'borntofrappe';
	export let description = '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<link rel="canonical" href="{$page.url.origin}{$page.url.pathname}" />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="{$page.url.origin}{$page.url.pathname}" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="borntofrappe" />
	<meta property="og:image" content="{$page.url.origin}/images/borntofrappe.png" />
	<meta property="og:image:alt" content="On pink days, on cyan nights, I code @borntofrappe" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:site" content="@borntofrappe" />
	<meta property="twitter:creator" content="@borntofrappe" />
	<meta property="twitter:image" content="{$page.url.origin}/images/borntofrappe.png" />
	<meta property="twitter:image:alt" content="On pink days, on cyan nights, I code @borntofrappe" />
</svelte:head>
