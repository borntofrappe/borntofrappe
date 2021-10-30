<script>
	import { page } from '$app/stores';

	const baseUrl = 'https://borntofrappe.netlify.app';

	export let title = `borntofrappe${$page.path === '/' ? '' : $page.path.replace(/\//g, ' / ')}`;
	export let description;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<link rel="canonical" href="{baseUrl}{$page.path}" />
</svelte:head>
