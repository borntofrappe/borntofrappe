<script>
	export let title;
	export let description;
	export let url;
	export let image;

	const baseUrl = 'https://borntofrappe.netlify.app/';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={`${baseUrl}${url}`} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={`${baseUrl}${url}`} />

	<meta property="og:image" content="/images/{image}.png" />
	<meta property="og:image:alt" content="OpenGraph image for {title}" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:site" content="@borntofrappe" />
	<meta property="twitter:creator" content="@borntofrappe" />
	<meta property="twitter:image" content="/images/{image}.png" />
	<meta property="twitter:image:alt" content="OpenGraph image for {title}" />
</svelte:head>
