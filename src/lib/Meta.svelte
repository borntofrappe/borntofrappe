<script>
	import { page } from '$app/stores';

	export let title = `borntofrappe${
		$page.url.pathname === '/' ? '' : $page.url.pathname.replace(/\//g, ' / ')
	}`;
	export let description;

	const baseUrl = 'https://borntofrappe.netlify.app';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<link rel="canonical" href="{baseUrl}{$page.url.pathname}" />
</svelte:head>
