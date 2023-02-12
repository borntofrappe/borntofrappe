<script>
	import site from '$lib/utils/site.js';
	const { title, description } = site;

	import Header from './Header.svelte';
	import Showcase from './Showcase.svelte';
	import Footer from './Footer.svelte';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<div
	style:background="var(--background, hsl(40, 23%, 97%))"
	style:min-height="100vh"
	style:z-index="1"
	style:position="relative"
>
	<Header />
	<Showcase />
</div>

<div style:position="sticky" style:bottom="0">
	<Footer />
</div>
